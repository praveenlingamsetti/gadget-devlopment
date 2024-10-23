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
  DraftedProduct,
  AvailableDraftedProductSelection,
  DraftedProductSort,
  DraftedProductFilter,
  CreateDraftedProductInput,
  UpdateDraftedProductInput,
  Scalars,
  UpsertDraftedProductInput
} from "../types.js";

import { buildModelManager } from "../builder.js";

/**
* A type that holds only the selected fields (and nested fields) of draftedProduct. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedDraftedProductOrDefault<Options extends Selectable<AvailableDraftedProductSelection>> = DeepFilterNever<
    Select<
      DraftedProduct,
      DefaultSelection<
        AvailableDraftedProductSelection,
        Options,
        typeof DefaultDraftedProductSelection
      >
    >
  >;

export const DefaultDraftedProductSelection = {
     __typename: true,
     id: true,
     createdAt: true,
     orderId: true,
     productId: true,
     productTitle: true,
     relatedProduct: true,
     shop: true,
     swatchId: true,
     type: true,
     updatedAt: true,
     variant: true
   } as const;
const modelApiIdentifier = "draftedProduct" as const;
const pluralModelApiIdentifier = "draftedProducts" as const;
/** Options that can be passed to the `DraftedProductManager#findOne` method */
 export interface FindOneDraftedProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDraftedProductSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `DraftedProductManager#maybeFindOne` method */
 export interface MaybeFindOneDraftedProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDraftedProductSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `DraftedProductManager#findMany` method */
 export interface FindManyDraftedProductsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDraftedProductSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: DraftedProductSort | DraftedProductSort[] | null;
  /** Only return records matching these filters. */
  filter?: DraftedProductFilter | DraftedProductFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};
/** Options that can be passed to the `DraftedProductManager#findFirst` method */
 export interface FindFirstDraftedProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDraftedProductSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: DraftedProductSort | DraftedProductSort[] | null;
  /** Only return records matching these filters. */
  filter?: DraftedProductFilter | DraftedProductFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
/** Options that can be passed to the `DraftedProductManager#maybeFindFirst` method */
 export interface MaybeFindFirstDraftedProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDraftedProductSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: DraftedProductSort | DraftedProductSort[] | null;
  /** Only return records matching these filters. */
  filter?: DraftedProductFilter | DraftedProductFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
export interface CreateDraftedProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDraftedProductSelection;
};
export interface UpdateDraftedProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDraftedProductSelection;
};
export interface DeleteDraftedProductOptions {

};
export interface UpsertDraftedProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDraftedProductSelection;
};
/**
 * The fully-qualified, expanded form of the inputs for executing the create action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateDraftedProductVariables = {
  draftedProduct?: CreateDraftedProductInput;
}
/**
 * The inputs for executing create on draftedProduct.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateDraftedProductVariables = CreateDraftedProductInput;
/**
 * The return value from executing create on draftedProduct
 * Is a GadgetRecord of the model's type.
 **/
export type CreateDraftedProductResult<Options extends CreateDraftedProductOptions> = SelectedDraftedProductOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedDraftedProductOrDefault<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing the update action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateDraftedProductVariables = {
  draftedProduct?: UpdateDraftedProductInput;
}
/**
 * The inputs for executing update on draftedProduct.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateDraftedProductVariables = UpdateDraftedProductInput;
/**
 * The return value from executing update on draftedProduct
 * Is a GadgetRecord of the model's type.
 **/
export type UpdateDraftedProductResult<Options extends UpdateDraftedProductOptions> = SelectedDraftedProductOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedDraftedProductOrDefault<Options>>;
/**
 * The return value from executing delete on draftedProduct
 * Is void because this action deletes the record
 **/
export type DeleteDraftedProductResult<Options extends DeleteDraftedProductOptions> = void;
/**
 * The fully-qualified, expanded form of the inputs for executing the upsert action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpsertDraftedProductVariables = {
  on?: ((Scalars['String'] | null))[];
  draftedProduct?: UpsertDraftedProductInput;
}
/**
 * The inputs for executing upsert on draftedProduct.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpsertDraftedProductVariables = Omit<
     UpsertDraftedProductInput,
     "on"
   > & {
     on?: ((Scalars['String'] | null))[];
   };
/**
 * The return value from executing upsert on draftedProduct
 *
 **/
export type UpsertDraftedProductResult<Options extends UpsertDraftedProductOptions> = SelectedDraftedProductOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedDraftedProductOrDefault<Options>>;

/**
 * A manager for the draftedProduct model with all the available operations for reading and writing to it.*/
export type DraftedProductManager = {
  readonly connection: GadgetConnection;

  findOne: {
      /**
       * Finds one draftedProduct by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
       **/
      <Options extends FindOneDraftedProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneDraftedProductOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedDraftedProductOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultDraftedProductSelection;
      namespace: null;
      optionsType: FindOneDraftedProductOptions;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
    }
  maybeFindOne: {
      /**
       * Finds one draftedProduct by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
       **/
      <Options extends MaybeFindOneDraftedProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneDraftedProductOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedDraftedProductOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: MaybeFindOneDraftedProductOptions;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultDraftedProductSelection;
      namespace: null;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
    }
  findMany: {
      /**
       * Finds many draftedProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindManyDraftedProductsOptions>(options?: LimitToKnownKeys<Options, FindManyDraftedProductsOptions>): PromiseOrLiveIterator<Options,GadgetRecordList<SelectedDraftedProductOrDefault<Options>>>;
      type: 'findMany';
      operationName: typeof pluralModelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: FindManyDraftedProductsOptions;
      defaultSelection: typeof DefaultDraftedProductSelection;
      namespace: null;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
    }
  findFirst: {
      /**
       * Finds the first matching draftedProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindFirstDraftedProductOptions>(options?: LimitToKnownKeys<Options, FindFirstDraftedProductOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedDraftedProductOrDefault<Options>>>;
      type: 'findFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: FindFirstDraftedProductOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultDraftedProductSelection;
      namespace: null;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
    }
  maybeFindFirst: {
      /**
       * Finds the first matching draftedProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
       **/
      <Options extends MaybeFindFirstDraftedProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstDraftedProductOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedDraftedProductOrDefault<Options>> | null>;
      type: 'maybeFindFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: MaybeFindFirstDraftedProductOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultDraftedProductSelection;
      namespace: null;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
    }
  findById: {
      /**
      * Finds one draftedProduct by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
      **/
      <Options extends FindOneDraftedProductOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneDraftedProductOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedDraftedProductOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneDraftedProductOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultDraftedProductSelection;
      namespace: null;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
    }
  maybeFindById: {
      /**
      * Finds one draftedProduct by its id. Returns a Promise that resolves to the record if found and returns null if the record isn't found.
      **/
      <Options extends FindOneDraftedProductOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneDraftedProductOptions>): Promise<GadgetRecord<SelectedDraftedProductOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneDraftedProductOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultDraftedProductSelection;
      namespace: null;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
    }
  create: {
      /**
       * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the flat style, all-params-together overload that most use cases should use.
      *
      * @example
      * * const draftedProductRecord = await api.draftedProduct.create({
        *   orderId: "example value for orderId",
        *   productId: "example value for productId",
        *   productTitle: "example value for productTitle",
        *   relatedProduct: "example value for relatedProduct",
        *   shop: "example value for shop",
        * });
      **/
      <Options extends CreateDraftedProductOptions>(

        variables: CreateDraftedProductVariables,
        options?: LimitToKnownKeys<Options, CreateDraftedProductOptions>
      ): Promise<CreateDraftedProductResult<Options>>;
      /**
       * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const draftedProductRecord = await api.draftedProduct.create({
        *   draftedProduct: {
        *     orderId: "example value for orderId",
        *     productId: "example value for productId",
        *     productTitle: "example value for productTitle",
        *     relatedProduct: "example value for relatedProduct",
        *     shop: "example value for shop",
        *   },
        * });
      **/
      <Options extends CreateDraftedProductOptions>(

        variables: FullyQualifiedCreateDraftedProductVariables,
        options?: LimitToKnownKeys<Options, CreateDraftedProductOptions>
      ): Promise<CreateDraftedProductResult<Options>>;
      type: 'action';
      operationName: 'createDraftedProduct';
      operationReturnType: 'CreateDraftedProduct';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: false;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: {
          draftedProduct: { required: false, type: 'CreateDraftedProductInput' }
        };
      variablesType: ((

               & (FullyQualifiedCreateDraftedProductVariables | CreateDraftedProductVariables)
             ) | undefined);
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'CreateDraftedProductInput' ];
      optionsType: CreateDraftedProductOptions;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
      defaultSelection: typeof DefaultDraftedProductSelection;
    }
  bulkCreate: {
      /**
        * Executes the bulkCreate action with the given inputs.
        */
       <Options extends CreateDraftedProductOptions>(
          inputs: (FullyQualifiedCreateDraftedProductVariables | CreateDraftedProductVariables)[],
          options?: LimitToKnownKeys<Options, CreateDraftedProductOptions>
       ): Promise<CreateDraftedProductResult<Options>[]>
      type: 'action';
      operationName: 'bulkCreateDraftedProducts';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: false;
      singleActionFunctionName: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: CreateDraftedProductOptions;
      namespace: null;
      variables: {
          inputs: { required: true, type: '[BulkCreateDraftedProductsInput!]' }
        };
      variablesType: (FullyQualifiedCreateDraftedProductVariables | CreateDraftedProductVariables)[];
      paramOnlyVariables: [];
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
      defaultSelection: typeof DefaultDraftedProductSelection;
    }
  update: {
      /**
       * Executes the update actionon one record specified by `id`.Runs the action and returns a Promise for the updated record.
      *
      * This is the flat style, all-params-together overload that most use cases should use.
      *
      * @example
      * * const draftedProductRecord = await api.draftedProduct.update("123", {
        *   orderId: "example value for orderId",
        *   productId: "example value for productId",
        *   productTitle: "example value for productTitle",
        *   relatedProduct: "example value for relatedProduct",
        *   shop: "example value for shop",
        * });
      **/
      <Options extends UpdateDraftedProductOptions>(
        id: string,
        variables: UpdateDraftedProductVariables,
        options?: LimitToKnownKeys<Options, UpdateDraftedProductOptions>
      ): Promise<UpdateDraftedProductResult<Options>>;
      /**
       * Executes the update actionon one record specified by `id`.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const draftedProductRecord = await api.draftedProduct.update("123", {
        *   draftedProduct: {
        *     orderId: "example value for orderId",
        *     productId: "example value for productId",
        *     productTitle: "example value for productTitle",
        *     relatedProduct: "example value for relatedProduct",
        *     shop: "example value for shop",
        *   },
        * });
      **/
      <Options extends UpdateDraftedProductOptions>(
        id: string,
        variables: FullyQualifiedUpdateDraftedProductVariables,
        options?: LimitToKnownKeys<Options, UpdateDraftedProductOptions>
      ): Promise<UpdateDraftedProductResult<Options>>;
      type: 'action';
      operationName: 'updateDraftedProduct';
      operationReturnType: 'UpdateDraftedProduct';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: true;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: {
          id: { required: true, type: 'GadgetID' },
          draftedProduct: { required: false, type: 'UpdateDraftedProductInput' }
        };
      variablesType: (
              { id: string }
              & (FullyQualifiedUpdateDraftedProductVariables | UpdateDraftedProductVariables)
            );
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'UpdateDraftedProductInput' ];
      optionsType: UpdateDraftedProductOptions;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
      defaultSelection: typeof DefaultDraftedProductSelection;
    }
  bulkUpdate: {
      /**
        * Executes the bulkUpdate action with the given inputs.
        */
       <Options extends UpdateDraftedProductOptions>(
          inputs: (FullyQualifiedUpdateDraftedProductVariables | UpdateDraftedProductVariables & { id: string })[],
          options?: LimitToKnownKeys<Options, UpdateDraftedProductOptions>
       ): Promise<UpdateDraftedProductResult<Options>[]>
      type: 'action';
      operationName: 'bulkUpdateDraftedProducts';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: true;
      singleActionFunctionName: 'update';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: UpdateDraftedProductOptions;
      namespace: null;
      variables: {
          inputs: { required: true, type: '[BulkUpdateDraftedProductsInput!]' }
        };
      variablesType: (FullyQualifiedUpdateDraftedProductVariables | UpdateDraftedProductVariables & { id: string })[];
      paramOnlyVariables: [];
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
      defaultSelection: typeof DefaultDraftedProductSelection;
    }
  delete: {
      /**
       * Executes the delete actionon one record specified by `id`.Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * await api.draftedProduct.delete("123");
      **/
      <Options extends DeleteDraftedProductOptions>(
        id: string,

        options?: LimitToKnownKeys<Options, DeleteDraftedProductOptions>
      ): Promise<DeleteDraftedProductResult<Options>>;
      type: 'action';
      operationName: 'deleteDraftedProduct';
      operationReturnType: 'DeleteDraftedProduct';
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
      optionsType: DeleteDraftedProductOptions;
      selectionType: Record<string, never>;
      schemaType: null;
      defaultSelection: null;
    }
  bulkDelete: {
      /**
        * Executes the bulkDelete action with the given inputs.Deletes the records on the server.
        */
       <Options extends DeleteDraftedProductOptions>(
          ids: string[],
          options?: LimitToKnownKeys<Options, DeleteDraftedProductOptions>
       ): Promise<DeleteDraftedProductResult<Options>[]>
      type: 'action';
      operationName: 'bulkDeleteDraftedProducts';
      isBulk: true;
      isDeleter: true;
      hasReturnType: false;
      acceptsModelInput: false;
      operatesWithRecordIdentity: true;
      singleActionFunctionName: 'delete';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: DeleteDraftedProductOptions;
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
      * * const result = await api.draftedProduct.upsert({
        *   id: "123",
        *   orderId: "example value for orderId",
        *   productId: "example value for productId",
        *   productTitle: "example value for productTitle",
        *   relatedProduct: "example value for relatedProduct",
        * });
      **/
      <Options extends UpsertDraftedProductOptions>(

        variables: UpsertDraftedProductVariables,
        options?: LimitToKnownKeys<Options, UpsertDraftedProductOptions>
      ): Promise<UpsertDraftedProductResult<Options>>;
      /**
       * Executes the upsert action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const result = await api.draftedProduct.upsert({
        *   draftedProduct: {
        *     id: "123",
        *     orderId: "example value for orderId",
        *     productId: "example value for productId",
        *     productTitle: "example value for productTitle",
        *     relatedProduct: "example value for relatedProduct",
        *   },
        * });
      **/
      <Options extends UpsertDraftedProductOptions>(

        variables: FullyQualifiedUpsertDraftedProductVariables,
        options?: LimitToKnownKeys<Options, UpsertDraftedProductOptions>
      ): Promise<UpsertDraftedProductResult<Options>>;
      type: 'action';
      operationName: 'upsertDraftedProduct';
      operationReturnType: 'UpsertDraftedProduct';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: false;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: {
          on: { required: false, type: '[String!]' },
          draftedProduct: { required: false, type: 'UpsertDraftedProductInput' }
        };
      variablesType: ((

               & (FullyQualifiedUpsertDraftedProductVariables | UpsertDraftedProductVariables)
             ) | undefined);
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [ 'on' ];
      hasReturnType: {
          '... on CreateDraftedProductResult': { hasReturnType: false },
          '... on UpdateDraftedProductResult': { hasReturnType: false }
        };
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'Scalars', 'UpsertDraftedProductInput' ];
      optionsType: UpsertDraftedProductOptions;
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
      defaultSelection: typeof DefaultDraftedProductSelection;
    }
  bulkUpsert: {
      /**
        * Executes the bulkUpsert action with the given inputs.
        */
       <Options extends UpsertDraftedProductOptions>(
          inputs: (FullyQualifiedUpsertDraftedProductVariables | UpsertDraftedProductVariables)[],
          options?: LimitToKnownKeys<Options, UpsertDraftedProductOptions>
       ): Promise<any[]>
      type: 'action';
      operationName: 'bulkUpsertDraftedProducts';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: false;
      singleActionFunctionName: 'upsert';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: UpsertDraftedProductOptions;
      namespace: null;
      variables: {
          inputs: { required: true, type: '[BulkUpsertDraftedProductsInput!]' }
        };
      variablesType: (FullyQualifiedUpsertDraftedProductVariables | UpsertDraftedProductVariables)[];
      paramOnlyVariables: [ 'on' ];
      selectionType: AvailableDraftedProductSelection;
      schemaType: Query["draftedProduct"];
      defaultSelection: typeof DefaultDraftedProductSelection;
    }
};

/**
 * A manager for the draftedProduct model with all the available operations for reading and writing to it.*/
export const DraftedProductManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultDraftedProductSelection,
  [
    {
      type: 'findOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: 'findMany',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: 'findFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: 'maybeFindFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: 'findOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'findById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'maybeFindById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: 'action',
      operationName: 'createDraftedProduct',
      operationReturnType: 'CreateDraftedProduct',
      functionName: 'create',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        draftedProduct: { required: false, type: 'CreateDraftedProductInput' }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: 'action',
      operationName: 'bulkCreateDraftedProducts',
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
        inputs: { required: true, type: '[BulkCreateDraftedProductsInput!]' }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: 'action',
      operationName: 'updateDraftedProduct',
      operationReturnType: 'UpdateDraftedProduct',
      functionName: 'update',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        id: { required: true, type: 'GadgetID' },
        draftedProduct: { required: false, type: 'UpdateDraftedProductInput' }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: 'action',
      operationName: 'bulkUpdateDraftedProducts',
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
        inputs: { required: true, type: '[BulkUpdateDraftedProductsInput!]' }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: 'action',
      operationName: 'deleteDraftedProduct',
      operationReturnType: 'DeleteDraftedProduct',
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
      operationName: 'bulkDeleteDraftedProducts',
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
      operationName: 'upsertDraftedProduct',
      operationReturnType: 'UpsertDraftedProduct',
      functionName: 'upsert',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        on: { required: false, type: '[String!]' },
        draftedProduct: { required: false, type: 'UpsertDraftedProductInput' }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [ 'on' ],
      hasReturnType: {
        '... on CreateDraftedProductResult': { hasReturnType: false },
        '... on UpdateDraftedProductResult': { hasReturnType: false }
      },
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: 'action',
      operationName: 'bulkUpsertDraftedProducts',
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
        inputs: { required: true, type: '[BulkUpsertDraftedProductsInput!]' }
      },
      paramOnlyVariables: [ 'on' ],
      defaultSelection: DefaultDraftedProductSelection
    }
  ] as const
) as unknown as {
  // Gadget generates these model manager classes at runtime dynamically, which means there is no source code for the class. This is done to make the bundle size of the client as small as possible, avoiding a bunch of repeated source code in favour of one small builder function. The TypeScript types above document the exact interface of the constructed class.
  new(connection: GadgetConnection): DraftedProductManager;
};