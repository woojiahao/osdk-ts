/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionMetadata } from "@osdk/api";
import {
  wireActionTypeV2ToSdkActionMetadata,
} from "@osdk/generator-converters";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import type { MinimalClient } from "../MinimalClientContext.js";

export async function loadActionMetadata(
  client: MinimalClient,
  actionType: string,
): Promise<ActionMetadata> {
  const r = await OntologiesV2.ActionTypesV2.getActionTypeV2(
    client,
    await client.ontologyRid,
    actionType,
  );

  return wireActionTypeV2ToSdkActionMetadata(r);
}