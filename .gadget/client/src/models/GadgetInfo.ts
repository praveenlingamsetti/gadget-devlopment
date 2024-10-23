import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
  PromiseOrLiveIterator,
  GadgetInfo,
  AvailableGadgetInfoSelection,
  GadgetInfoSort,
  GadgetInfoFilter,
  CreateGadgetInfoInput,
  UpdateGadgetInfoInput,
  Scalars,
  UpsertGadgetInfoInput
} from "../types.js";

import { buildModelManager } from "../builder.js";

/**
* A type that holds only the selected fields (and nested fields) of gadgetInfo. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedGadgetInfoOrDefault<Options extends Selectable<AvailableGadgetInfoSelection>> = DeepFilterNever<
    Select<
      GadgetInfo,
      DefaultSelection<
        AvailableGadgetInfoSelection,
        Options,
        typeof DefaultGadgetInfoSelection
      >
    >
  >;

export const DefaultGadgetInfoSelection = {
     __typename: true,
     id: true,
     createdAt: true,
     syncStatus: true,
     updatedAt: true
   } as const;
const modelApiIdentifier = "gadgetInfo" as const;
const pluralModelApiIdentifier = "gadgetInfos" as const;
/** Options that can be passed to the `GadgetInfoManager#findOne` method */
 export interface FindOneGadgetInfoOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgetInfoSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `GadgetInfoManager#maybeFindOne` method */
 export interface MaybeFindOneGadgetInfoOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgetInfoSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `GadgetInfoManager#findMany` method */
 export interface FindManyGadgetInfosOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgetInfoSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: GadgetInfoSort | GadgetInfoSort[] | null;
  /** Only return records matching these filters. */
  filter?: GadgetInfoFilter | GadgetInfoFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};
/** Options that can be passed to the `GadgetInfoManager#findFirst` method */
 export interface FindFirstGadgetInfoOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgetInfoSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: GadgetInfoSort | GadgetInfoSort[] | null;
  /** Only return records matching these filters. */
  filter?: GadgetInfoFilter | GadgetInfoFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
/** Options that can be passed to the `GadgetInfoManager#maybeFindFirst` method */
 export interface MaybeFindFirstGadgetInfoOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgetInfoSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: GadgetInfoSort | GadgetInfoSort[] | null;
  /** Only return records matching these filters. */
  filter?: GadgetInfoFilter | GadgetInfoFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
export interface CreateGadgetInfoOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgetInfoSelection;
};
export interface UpdateGadgetInfoOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgetInfoSelection;
};
export interface DeleteGadgetInfoOptions {

};
export interface UpsertGadgetInfoOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgetInfoSelection;
};
/**
 * The fully-qualified, expanded form of the inputs for executing the create action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateGadgetInfoVariables = {
  gadgetInfo?: CreateGadgetInfoInput;
}
/**
 * The inputs for executing create on gadgetInfo.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateGadgetInfoVariables = CreateGadgetInfoInput;
/**
 * The return value from executing create on gadgetInfo
 * Is a GadgetRecord of the model's type.
 **/
export type CreateGadgetInfoResult<Options extends CreateGadgetInfoOptions> = SelectedGadgetInfoOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedGadgetInfoOrDefault<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing the update action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateGadgetInfoVariables = {
  gadgetInfo?: UpdateGadgetInfoInput;
}
/**
 * The inputs for executing update on gadgetInfo.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateGadgetInfoVariables = UpdateGadgetInfoInput;
/**
 * The return value from executing update on gadgetInfo
 * Is a GadgetRecord of the model's type.
 **/
export type UpdateGadgetInfoResult<Options extends UpdateGadgetInfoOptions> = SelectedGadgetInfoOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedGadgetInfoOrDefault<Options>>;
/**
 * The return value from executing delete on gadgetInfo
 * Is void because this action deletes the record
 **/
export type DeleteGadgetInfoResult<Options extends DeleteGadgetInfoOptions> = void;
/**
 * The fully-qualified, expanded form of the inputs for executing the upsert action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpsertGadgetInfoVariables = {
  on?: ((Scalars['String'] | null))[];
  gadgetInfo?: UpsertGadgetInfoInput;
}
/**
 * The inputs for executing upsert on gadgetInfo.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpsertGadgetInfoVariables = Omit<
     UpsertGadgetInfoInput,
     "on"
   > & {
     on?: ((Scalars['String'] | null))[];
   };
/**
 * The return value from executing upsert on gadgetInfo
 *
 **/
export type UpsertGadgetInfoResult<Options extends UpsertGadgetInfoOptions> = SelectedGadgetInfoOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedGadgetInfoOrDefault<Options>>;

/**
 * A manager for the gadgetInfo model with all the available operations for reading and writing to it.*/
export type GadgetInfoManager = {
  readonly connection: GadgetConnection;

  findOne: {
      /**
       * Finds one gadgetInfo by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
       **/
      <Options extends FindOneGadgetInfoOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneGadgetInfoOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedGadgetInfoOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultGadgetInfoSelection;
      namespace: null;
      optionsType: FindOneGadgetInfoOptions;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
    }
  maybeFindOne: {
      /**
       * Finds one gadgetInfo by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
       **/
      <Options extends MaybeFindOneGadgetInfoOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneGadgetInfoOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedGadgetInfoOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: MaybeFindOneGadgetInfoOptions;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultGadgetInfoSelection;
      namespace: null;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
    }
  findMany: {
      /**
       * Finds many gadgetInfo. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindManyGadgetInfosOptions>(options?: LimitToKnownKeys<Options, FindManyGadgetInfosOptions>): PromiseOrLiveIterator<Options,GadgetRecordList<SelectedGadgetInfoOrDefault<Options>>>;
      type: 'findMany';
      operationName: typeof pluralModelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: FindManyGadgetInfosOptions;
      defaultSelection: typeof DefaultGadgetInfoSelection;
      namespace: null;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
    }
  findFirst: {
      /**
       * Finds the first matching gadgetInfo. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindFirstGadgetInfoOptions>(options?: LimitToKnownKeys<Options, FindFirstGadgetInfoOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedGadgetInfoOrDefault<Options>>>;
      type: 'findFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: FindFirstGadgetInfoOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultGadgetInfoSelection;
      namespace: null;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
    }
  maybeFindFirst: {
      /**
       * Finds the first matching gadgetInfo. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
       **/
      <Options extends MaybeFindFirstGadgetInfoOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstGadgetInfoOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedGadgetInfoOrDefault<Options>> | null>;
      type: 'maybeFindFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: MaybeFindFirstGadgetInfoOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultGadgetInfoSelection;
      namespace: null;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
    }
  findById: {
      /**
      * Finds one gadgetInfo by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
      **/
      <Options extends FindOneGadgetInfoOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneGadgetInfoOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedGadgetInfoOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneGadgetInfoOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultGadgetInfoSelection;
      namespace: null;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
    }
  maybeFindById: {
      /**
      * Finds one gadgetInfo by its id. Returns a Promise that resolves to the record if found and returns null if the record isn't found.
      **/
      <Options extends FindOneGadgetInfoOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneGadgetInfoOptions>): Promise<GadgetRecord<SelectedGadgetInfoOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneGadgetInfoOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultGadgetInfoSelection;
      namespace: null;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
    }
  create: {
      /**
       * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the flat style, all-params-together overload that most use cases should use.
      *
      * @example
      * * const gadgetInfoRecord = await api.gadgetInfo.create({
        *   syncStatus: "example value for syncStatus",
        * });
      **/
      <Options extends CreateGadgetInfoOptions>(

        variables: CreateGadgetInfoVariables,
        options?: LimitToKnownKeys<Options, CreateGadgetInfoOptions>
      ): Promise<CreateGadgetInfoResult<Options>>;
      /**
       * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const gadgetInfoRecord = await api.gadgetInfo.create({
        *   gadgetInfo: {
        *     syncStatus: "example value for syncStatus",
        *   },
        * });
      **/
      <Options extends CreateGadgetInfoOptions>(

        variables: FullyQualifiedCreateGadgetInfoVariables,
        options?: LimitToKnownKeys<Options, CreateGadgetInfoOptions>
      ): Promise<CreateGadgetInfoResult<Options>>;
      type: 'action';
      operationName: 'createGadgetInfo';
      operationReturnType: 'CreateGadgetInfo';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: false;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: { gadgetInfo: { required: false, type: 'CreateGadgetInfoInput' } };
      variablesType: ((

               & (FullyQualifiedCreateGadgetInfoVariables | CreateGadgetInfoVariables)
             ) | undefined);
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'CreateGadgetInfoInput' ];
      optionsType: CreateGadgetInfoOptions;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
      defaultSelection: typeof DefaultGadgetInfoSelection;
    }
  bulkCreate: {
      /**
        * Executes the bulkCreate action with the given inputs.
        */
       <Options extends CreateGadgetInfoOptions>(
          inputs: (FullyQualifiedCreateGadgetInfoVariables | CreateGadgetInfoVariables)[],
          options?: LimitToKnownKeys<Options, CreateGadgetInfoOptions>
       ): Promise<CreateGadgetInfoResult<Options>[]>
      type: 'action';
      operationName: 'bulkCreateGadgetInfos';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: false;
      singleActionFunctionName: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: CreateGadgetInfoOptions;
      namespace: null;
      variables: { inputs: { required: true, type: '[BulkCreateGadgetInfosInput!]' } };
      variablesType: (FullyQualifiedCreateGadgetInfoVariables | CreateGadgetInfoVariables)[];
      paramOnlyVariables: [];
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
      defaultSelection: typeof DefaultGadgetInfoSelection;
    }
  update: {
      /**
       * Executes the update actionon one record specified by `id`.Runs the action and returns a Promise for the updated record.
      *
      * This is the flat style, all-params-together overload that most use cases should use.
      *
      * @example
      * * const gadgetInfoRecord = await api.gadgetInfo.update("123", {
        *   syncStatus: "example value for syncStatus",
        * });
      **/
      <Options extends UpdateGadgetInfoOptions>(
        id: string,
        variables: UpdateGadgetInfoVariables,
        options?: LimitToKnownKeys<Options, UpdateGadgetInfoOptions>
      ): Promise<UpdateGadgetInfoResult<Options>>;
      /**
       * Executes the update actionon one record specified by `id`.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const gadgetInfoRecord = await api.gadgetInfo.update("123", {
        *   gadgetInfo: {
        *     syncStatus: "example value for syncStatus",
        *   },
        * });
      **/
      <Options extends UpdateGadgetInfoOptions>(
        id: string,
        variables: FullyQualifiedUpdateGadgetInfoVariables,
        options?: LimitToKnownKeys<Options, UpdateGadgetInfoOptions>
      ): Promise<UpdateGadgetInfoResult<Options>>;
      type: 'action';
      operationName: 'updateGadgetInfo';
      operationReturnType: 'UpdateGadgetInfo';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: true;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: {
          id: { required: true, type: 'GadgetID' },
          gadgetInfo: { required: false, type: 'UpdateGadgetInfoInput' }
        };
      variablesType: (
              { id: string }
              & (FullyQualifiedUpdateGadgetInfoVariables | UpdateGadgetInfoVariables)
            );
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'UpdateGadgetInfoInput' ];
      optionsType: UpdateGadgetInfoOptions;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
      defaultSelection: typeof DefaultGadgetInfoSelection;
    }
  bulkUpdate: {
      /**
        * Executes the bulkUpdate action with the given inputs.
        */
       <Options extends UpdateGadgetInfoOptions>(
          inputs: (FullyQualifiedUpdateGadgetInfoVariables | UpdateGadgetInfoVariables & { id: string })[],
          options?: LimitToKnownKeys<Options, UpdateGadgetInfoOptions>
       ): Promise<UpdateGadgetInfoResult<Options>[]>
      type: 'action';
      operationName: 'bulkUpdateGadgetInfos';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: true;
      singleActionFunctionName: 'update';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: UpdateGadgetInfoOptions;
      namespace: null;
      variables: { inputs: { required: true, type: '[BulkUpdateGadgetInfosInput!]' } };
      variablesType: (FullyQualifiedUpdateGadgetInfoVariables | UpdateGadgetInfoVariables & { id: string })[];
      paramOnlyVariables: [];
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
      defaultSelection: typeof DefaultGadgetInfoSelection;
    }
  delete: {
      /**
       * Executes the delete actionon one record specified by `id`.Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * await api.gadgetInfo.delete("123");
      **/
      <Options extends DeleteGadgetInfoOptions>(
        id: string,

        options?: LimitToKnownKeys<Options, DeleteGadgetInfoOptions>
      ): Promise<DeleteGadgetInfoResult<Options>>;
      type: 'action';
      operationName: 'deleteGadgetInfo';
      operationReturnType: 'DeleteGadgetInfo';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: true;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: true;
      variables: { id: { required: true, type: 'GadgetID' } };
      variablesType: (
              { id: string }

            );
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: false;
      hasCreateOrUpdateEffect: false;
      imports: [];
      optionsType: DeleteGadgetInfoOptions;
      selectionType: Record<string, never>;
      schemaType: null;
      defaultSelection: null;
    }
  bulkDelete: {
      /**
        * Executes the bulkDelete action with the given inputs.Deletes the records on the server.
        */
       <Options extends DeleteGadgetInfoOptions>(
          ids: string[],
          options?: LimitToKnownKeys<Options, DeleteGadgetInfoOptions>
       ): Promise<DeleteGadgetInfoResult<Options>[]>
      type: 'action';
      operationName: 'bulkDeleteGadgetInfos';
      isBulk: true;
      isDeleter: true;
      hasReturnType: false;
      acceptsModelInput: false;
      operatesWithRecordIdentity: true;
      singleActionFunctionName: 'delete';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: DeleteGadgetInfoOptions;
      namespace: null;
      variables: { ids: { required: true, type: '[GadgetID!]' } };
      variablesType: IDsList | undefined;
      paramOnlyVariables: [];
      selectionType: Record<string, never>;
      schemaType: null;
      defaultSelection: null;
    }
  upsert: {
      /**
       * Executes the upsert action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the flat style, all-params-together overload that most use cases should use.
      *
      * @example
      * * const result = await api.gadgetInfo.upsert({
        *   id: "123",
        *   syncStatus: "example value for syncStatus",
        * });
      **/
      <Options extends UpsertGadgetInfoOptions>(

        variables: UpsertGadgetInfoVariables,
        options?: LimitToKnownKeys<Options, UpsertGadgetInfoOptions>
      ): Promise<UpsertGadgetInfoResult<Options>>;
      /**
       * Executes the upsert action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const result = await api.gadgetInfo.upsert({
        *   gadgetInfo: {
        *     id: "123",
        *     syncStatus: "example value for syncStatus",
        *   },
        * });
      **/
      <Options extends UpsertGadgetInfoOptions>(

        variables: FullyQualifiedUpsertGadgetInfoVariables,
        options?: LimitToKnownKeys<Options, UpsertGadgetInfoOptions>
      ): Promise<UpsertGadgetInfoResult<Options>>;
      type: 'action';
      operationName: 'upsertGadgetInfo';
      operationReturnType: 'UpsertGadgetInfo';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: false;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: {
          on: { required: false, type: '[String!]' },
          gadgetInfo: { required: false, type: 'UpsertGadgetInfoInput' }
        };
      variablesType: ((

               & (FullyQualifiedUpsertGadgetInfoVariables | UpsertGadgetInfoVariables)
             ) | undefined);
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [ 'on' ];
      hasReturnType: {
          '... on CreateGadgetInfoResult': { hasReturnType: false },
          '... on UpdateGadgetInfoResult': { hasReturnType: false }
        };
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'Scalars', 'UpsertGadgetInfoInput' ];
      optionsType: UpsertGadgetInfoOptions;
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
      defaultSelection: typeof DefaultGadgetInfoSelection;
    }
  bulkUpsert: {
      /**
        * Executes the bulkUpsert action with the given inputs.
        */
       <Options extends UpsertGadgetInfoOptions>(
          inputs: (FullyQualifiedUpsertGadgetInfoVariables | UpsertGadgetInfoVariables)[],
          options?: LimitToKnownKeys<Options, UpsertGadgetInfoOptions>
       ): Promise<any[]>
      type: 'action';
      operationName: 'bulkUpsertGadgetInfos';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: false;
      singleActionFunctionName: 'upsert';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: UpsertGadgetInfoOptions;
      namespace: null;
      variables: { inputs: { required: true, type: '[BulkUpsertGadgetInfosInput!]' } };
      variablesType: (FullyQualifiedUpsertGadgetInfoVariables | UpsertGadgetInfoVariables)[];
      paramOnlyVariables: [ 'on' ];
      selectionType: AvailableGadgetInfoSelection;
      schemaType: Query["gadgetInfo"];
      defaultSelection: typeof DefaultGadgetInfoSelection;
    }
};

/**
 * A manager for the gadgetInfo model with all the available operations for reading and writing to it.*/
export const GadgetInfoManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultGadgetInfoSelection,
  [
    {
      type: 'findOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: 'findMany',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: 'findFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: 'maybeFindFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: 'findOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'findById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'maybeFindById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: 'action',
      operationName: 'createGadgetInfo',
      operationReturnType: 'CreateGadgetInfo',
      functionName: 'create',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: { gadgetInfo: { required: false, type: 'CreateGadgetInfoInput' } },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: 'action',
      operationName: 'bulkCreateGadgetInfos',
      functionName: 'bulkCreate',
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: 'create',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: '[BulkCreateGadgetInfosInput!]' }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: 'action',
      operationName: 'updateGadgetInfo',
      operationReturnType: 'UpdateGadgetInfo',
      functionName: 'update',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        id: { required: true, type: 'GadgetID' },
        gadgetInfo: { required: false, type: 'UpdateGadgetInfoInput' }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: 'action',
      operationName: 'bulkUpdateGadgetInfos',
      functionName: 'bulkUpdate',
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: 'update',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: '[BulkUpdateGadgetInfosInput!]' }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: 'action',
      operationName: 'deleteGadgetInfo',
      operationReturnType: 'DeleteGadgetInfo',
      functionName: 'delete',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: true,
      variables: { id: { required: true, type: 'GadgetID' } },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: false,
      hasCreateOrUpdateEffect: false,
      defaultSelection: null
    },
    {
      type: 'action',
      operationName: 'bulkDeleteGadgetInfos',
      functionName: 'bulkDelete',
      isBulk: true,
      isDeleter: true,
      hasReturnType: false,
      acceptsModelInput: false,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: 'delete',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: { ids: { required: true, type: '[GadgetID!]' } },
      paramOnlyVariables: [],
      defaultSelection: null
    },
    {
      type: 'action',
      operationName: 'upsertGadgetInfo',
      operationReturnType: 'UpsertGadgetInfo',
      functionName: 'upsert',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        on: { required: false, type: '[String!]' },
        gadgetInfo: { required: false, type: 'UpsertGadgetInfoInput' }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [ 'on' ],
      hasReturnType: {
        '... on CreateGadgetInfoResult': { hasReturnType: false },
        '... on UpdateGadgetInfoResult': { hasReturnType: false }
      },
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: 'action',
      operationName: 'bulkUpsertGadgetInfos',
      functionName: 'bulkUpsert',
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: 'upsert',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: '[BulkUpsertGadgetInfosInput!]' }
      },
      paramOnlyVariables: [ 'on' ],
      defaultSelection: DefaultGadgetInfoSelection
    }
  ] as const
) as unknown as {
  // Gadget generates these model manager classes at runtime dynamically, which means there is no source code for the class. This is done to make the bundle size of the client as small as possible, avoiding a bunch of repeated source code in favour of one small builder function. The TypeScript types above document the exact interface of the constructed class.
  new(connection: GadgetConnection): GadgetInfoManager;
};