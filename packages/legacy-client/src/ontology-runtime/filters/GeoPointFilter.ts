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

import type { GeoPoint, Polygon } from "../baseTypes";
import type { WhereClause } from "./Filters";
export type BoundingBox = {
  topLeft: GeoPoint;
  bottomRight: GeoPoint;
};
export interface GeoPointFilter {
  /** The provided property is within the specified bounding box. */
  withinBoundingBox: (boundingBox: BoundingBox) => WhereClause;
  /** The provided property is within the specified number of millimeters of the given GeoPoint */
  withinMillimetersOf: (point: GeoPoint, millimeters: number) => WhereClause;
  /** The provided property is within the specified number of centimeters of the given GeoPoint */
  withinCentimetersOf: (point: GeoPoint, centimeters: number) => WhereClause;
  /** The provided property is within the specified number of meters of the given GeoPoint */
  withinMetersOf: (point: GeoPoint, meters: number) => WhereClause;
  /** The provided property is within the specified number of kilometers of the given GeoPoint */
  withinKilometersOf: (point: GeoPoint, kilometers: number) => WhereClause;
  /** The provided property is within the specified number of inches of the given GeoPoint */
  withinInchesOf: (point: GeoPoint, inches: number) => WhereClause;
  /** The provided property is within the specified number of feet of the given GeoPoint */
  withinFeetOf: (point: GeoPoint, feet: number) => WhereClause;
  /** The provided property is within the specified number of yards of the given GeoPoint */
  withinYardsOf: (point: GeoPoint, yards: number) => WhereClause;
  /** The provided property is within the specified number of miles of the given GeoPoint */
  withinMilesOf: (point: GeoPoint, miles: number) => WhereClause;
  /** The provided property is within the specified number of nautical miles of the given GeoPoint */
  withinNauticalMilesOf: (
    point: GeoPoint,
    nauticalMiles: number,
  ) => WhereClause;
  /** The provided property is within the specified Polygon */
  withinPolygon: (polygon: Polygon) => WhereClause;
}
export const GeoPointFilter: (property: string) => GeoPointFilter = (
  property,
) => {
  throw new Error("not implemented");
};
