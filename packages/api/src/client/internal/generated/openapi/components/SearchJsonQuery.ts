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

import type { LtQuery } from "./LtQuery";
import type { GtQuery } from "./GtQuery";
import type { LteQuery } from "./LteQuery";
import type { GteQuery } from "./GteQuery";
import type { EqualsQuery } from "./EqualsQuery";
import type { IsNullQuery } from "./IsNullQuery";
import type { ContainsQuery } from "./ContainsQuery";
import type { AndQuery } from "./AndQuery";
import type { OrQuery } from "./OrQuery";
import type { NotQuery } from "./NotQuery";
import type { PrefixQuery } from "./PrefixQuery";
import type { PhraseQuery } from "./PhraseQuery";
import type { AnyTermQuery } from "./AnyTermQuery";
import type { AllTermsQuery } from "./AllTermsQuery";

export interface SearchJsonQuery_Lt extends LtQuery {
    type: "lt";
}

export interface SearchJsonQuery_Gt extends GtQuery {
    type: "gt";
}

export interface SearchJsonQuery_Lte extends LteQuery {
    type: "lte";
}

export interface SearchJsonQuery_Gte extends GteQuery {
    type: "gte";
}

export interface SearchJsonQuery_Eq extends EqualsQuery {
    type: "eq";
}

export interface SearchJsonQuery_IsNull extends IsNullQuery {
    type: "isNull";
}

export interface SearchJsonQuery_Contains extends ContainsQuery {
    type: "contains";
}

export interface SearchJsonQuery_And extends AndQuery {
    type: "and";
}

export interface SearchJsonQuery_Or extends OrQuery {
    type: "or";
}

export interface SearchJsonQuery_Not extends NotQuery {
    type: "not";
}

export interface SearchJsonQuery_Prefix extends PrefixQuery {
    type: "prefix";
}

export interface SearchJsonQuery_Phrase extends PhraseQuery {
    type: "phrase";
}

export interface SearchJsonQuery_AnyTerm extends AnyTermQuery {
    type: "anyTerm";
}

export interface SearchJsonQuery_AllTerms extends AllTermsQuery {
    type: "allTerms";
}

export type SearchJsonQuery = SearchJsonQuery_Lt | SearchJsonQuery_Gt | SearchJsonQuery_Lte | SearchJsonQuery_Gte | SearchJsonQuery_Eq | SearchJsonQuery_IsNull | SearchJsonQuery_Contains | SearchJsonQuery_And | SearchJsonQuery_Or | SearchJsonQuery_Not | SearchJsonQuery_Prefix | SearchJsonQuery_Phrase | SearchJsonQuery_AnyTerm | SearchJsonQuery_AllTerms;
