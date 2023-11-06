/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { consola, LogLevels } from "consola";
import { ExitProcessError } from "../ExitProcessError.js";
import { createFetch } from "./createFetch.mjs";
import { fetchWebsiteRepositoryRid } from "./fetchWebsiteRepositoryRid.mjs";
import { getSiteAssetBaseUrl } from "./getSiteAssetBaseUrl.mjs";
import type { ThirdPartyAppRid } from "./ThirdPartyAppRid.js";

export interface SiteAssetVersions {
  versions: string[];
}

export async function uploadZippedSiteAsset(
  baseUrl: string,
  thirdPartyAppRid: ThirdPartyAppRid,
  version: string,
  zipFile: ReadableStream | Blob | BufferSource,
) {
  const repositoryRid = await fetchWebsiteRepositoryRid(
    baseUrl,
    thirdPartyAppRid,
  );

  const url = `${
    getSiteAssetBaseUrl(baseUrl, repositoryRid)
  }/versions/zip/${version}`;

  const fetch = createFetch(() => process.env.FOUNDRY_SDK_AUTH_TOKEN as string);

  const result = await fetch(
    url,
    {
      method: "PUT",
      body: zipFile,
      headers: {
        "Content-Type": "application/octet-stream",
      },
      duplex: "half", // Node hates me
    } satisfies RequestInit & { duplex: "half" } as any,
  );

  if (result.status >= 200 && result.status < 300) {
    consola.level = LogLevels.debug;
    consola.debug("Status Text: " + result.statusText);
    return true;
  } else if (result.status === 409) {
    throw new ExitProcessError(result.status, "Version already exists");
  } else {
    throw new ExitProcessError(
      result.status,
      `Unexpected response code ${result.status} (${result.statusText})`,
    );
  }
}