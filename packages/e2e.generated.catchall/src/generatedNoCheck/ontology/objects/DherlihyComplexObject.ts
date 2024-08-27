import type {
  ObjectTypeDefinition as $ObjectTypeDefinition,
  PropertyDef as $PropertyDef,
  VersionBound as $VersionBound,
} from '@osdk/api';
import type {
  AggregateOpts as $AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults as $AggregationsResults,
  Augments as $Augments,
  ConvertProps as $ConvertProps,
  DefaultToFalse as $DefaultToFalse,
  FetchPageArgs as $FetchPageArgs,
  LinkedType as $LinkedType,
  LinkNames as $LinkNames,
  NullabilityAdherence as $NullabilityAdherence,
  NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  OsdkObjectPropertyType as $OsdkObjectPropertyType,
  PageResult as $PageResult,
  PropertyValueClientToWire as $PropertyValueClientToWire,
  PropertyValueWireToClient as $PropType,
  Result as $Result,
  SelectArg as $SelectArg,
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace DherlihyComplexObject {
  export type PropertyKeys = 'id' | 'secret' | 'seriesId';

  export type Links = never;

  export interface Props {
    readonly id: $PropType['string'] | undefined;
    readonly secret: $PropType['string'] | undefined;
    readonly seriesId: $PropType['numericTimeseries'] | undefined;
  }
  export interface StrictProps {
    readonly id: $PropType['string'];
    readonly secret: $PropType['string'] | undefined;
    readonly seriesId: $PropType['numericTimeseries'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<DherlihyComplexObject.Definition, DherlihyComplexObject.ObjectSet> {
    readonly aggregate: <AO extends $AggregateOpts<DherlihyComplexObject.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<DherlihyComplexObject.Definition, AO>,
    ) => Promise<$AggregationsResults<DherlihyComplexObject.Definition, AO>>;

    readonly pivotTo: <L extends $LinkNames<DherlihyComplexObject.Definition>>(
      type: L,
    ) => $LinkedType<DherlihyComplexObject.Definition, L>['objectSet'];

    readonly fetchOne: <
      L extends DherlihyComplexObject.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[DherlihyComplexObject.Definition['primaryKeyType']],
      options?: $SelectArg<DherlihyComplexObject.Definition, L, R, S>,
    ) => Promise<
      DherlihyComplexObject.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    readonly fetchOneWithErrors: <
      L extends DherlihyComplexObject.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[DherlihyComplexObject.Definition['primaryKeyType']],
      options?: $SelectArg<DherlihyComplexObject.Definition, L, R, S>,
    ) => Promise<
      $Result<
        DherlihyComplexObject.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPage: <
      L extends DherlihyComplexObject.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<DherlihyComplexObject.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        DherlihyComplexObject.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      L extends DherlihyComplexObject.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<DherlihyComplexObject.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          DherlihyComplexObject.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<DherlihyComplexObject.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'DherlihyComplexObject', DherlihyComplexObject.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: DherlihyComplexObject.ObjectSet;
    props: DherlihyComplexObject.Props;
    strictProps: DherlihyComplexObject.StrictProps;
    description: 'Dherlihy Complex Object';
    links: {};
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      secret: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      seriesId: $PropertyDef<'numericTimeseries', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof DherlihyComplexObject.Props = keyof DherlihyComplexObject.Props,
  > = $Osdk<DherlihyComplexObject.Definition, K | OPTIONS> &
    Pick<OPTIONS extends '$notStrict' ? DherlihyComplexObject.Props : DherlihyComplexObject.StrictProps, K> & {
      readonly $link: DherlihyComplexObject.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<DherlihyComplexObject.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<DherlihyComplexObject.Definition, NEW_Q, K>>;
    } & $OsdkObject<'DherlihyComplexObject'>;
}

/** @deprecated use DherlihyComplexObject.Definition **/
export type DherlihyComplexObject = DherlihyComplexObject.Definition;

export const DherlihyComplexObject: DherlihyComplexObject & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'DherlihyComplexObject',
  description: 'Dherlihy Complex Object',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    secret: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    seriesId: {
      multiplicity: false,
      type: 'numericTimeseries',
      nullable: true,
    },
  },
  type: 'object',
};
