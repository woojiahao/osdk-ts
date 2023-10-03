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

import type { PropertyFilter } from "../components/PropertyFilter";
import type { PropertyApiName } from "../components/PropertyApiName";

/**
 * The search on the property types are not supported. See the `Search Objects` documentation for
 * a list of supported search queries on different property types.
 *
 */
export interface PropertyTypesSearchNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "PropertyTypesSearchNotSupported";
    errorInstanceId: string;
    parameters: {
        parameters: Record<PropertyFilter, Array<PropertyApiName>>;
    };
}
