import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryParam, QueryResult } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace getNamesOfCustomersFromCountry {
  export interface Signature {
    (query: getNamesOfCustomersFromCountry.Parameters): Promise<Array<QueryResult.PrimitiveType<'string'>>>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly country: QueryParam.PrimitiveType<'string'>;
  }
}

export interface getNamesOfCustomersFromCountry
  extends QueryDefinition<getNamesOfCustomersFromCountry.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'getNamesOfCustomersFromCountry';
    rid: 'ri.function-registry.main.function.c3e58d52-8430-44ee-9f0b-3785d9a9bdda';
    type: 'query';
    version: '0.1.1';
    parameters: {
      /**
       * (no ontology metadata)
       */
      country: {
        nullable: false;
        type: 'string';
      };
    };
    output: {
      multiplicity: true;
      nullable: false;
      type: 'string';
    };
    signature: getNamesOfCustomersFromCountry.Signature;
  };
  apiName: 'getNamesOfCustomersFromCountry';
  type: 'query';
  version: '0.1.1';
  osdkMetadata: typeof $osdkMetadata;
}

export const getNamesOfCustomersFromCountry: getNamesOfCustomersFromCountry = {
  apiName: 'getNamesOfCustomersFromCountry',
  type: 'query',
  version: '0.1.1',
  osdkMetadata: $osdkMetadata,
};