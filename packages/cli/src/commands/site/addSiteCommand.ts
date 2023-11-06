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

import type * as yargs from "yargs";
import type { ThirdPartyAppRid } from "../../net/ThirdPartyAppRid.js";
import upload from "./upload";
import versions from "./versions";

export interface CommonSiteArgs {
  appRid: ThirdPartyAppRid;
  baseUrl: string;
}

export default function addSiteCommand(yargs: yargs.Argv<{}>) {
  return yargs.command(
    "site",
    "Manage your site",
    (originalYargs) => {
      const yargs: yargs.Argv<CommonSiteArgs> = originalYargs
        .options({
          appRid: {
            type: "string",
            demandOption: true,
            coerce: (a) => a as ThirdPartyAppRid,
          },
          baseUrl: {
            type: "string",
            demandOption: true,
          },
        })
        .demandCommand();

      yargs.command(versions);
      yargs.command(upload);
      return yargs;
    },
    (args) => {
    },
  );
}