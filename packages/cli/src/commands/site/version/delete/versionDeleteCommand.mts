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

import { artifacts, createInternalClientContext } from "#net";
import { consola } from "consola";
import { loadToken } from "../../../../util/token.js";
import type { SiteVersionArgs } from "../SiteVersionArgs.js";
export default async function versionDeleteCommand(
  { version, application, foundryUrl, token, tokenFile }: SiteVersionArgs,
) {
  consola.start(`Deleting version ${version}`);
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  await artifacts.SiteAssetArtifactsService.deleteSiteVersion(
    clientCtx,
    { application, version },
  );
  consola.success(
    `Deleted version ${version}`,
  );
}