import { buildModelManager } from "../builder.js";
const DefaultDraftedProductSelection = {
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
};
const modelApiIdentifier = "draftedProduct";
const pluralModelApiIdentifier = "draftedProducts";
;
;
;
;
;
;
;
;
;
const DraftedProductManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultDraftedProductSelection,
  [
    {
      type: "findOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: "findMany",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: "findFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: "maybeFindFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: "findOne",
      operationName: pluralModelApiIdentifier,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: pluralModelApiIdentifier,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultDraftedProductSelection,
      namespace: null
    },
    {
      type: "action",
      operationName: "createDraftedProduct",
      operationReturnType: "CreateDraftedProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        draftedProduct: { required: false, type: "CreateDraftedProductInput" }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: "action",
      operationName: "bulkCreateDraftedProducts",
      functionName: "bulkCreate",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: "create",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: "[BulkCreateDraftedProductsInput!]" }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: "action",
      operationName: "updateDraftedProduct",
      operationReturnType: "UpdateDraftedProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        id: { required: true, type: "GadgetID" },
        draftedProduct: { required: false, type: "UpdateDraftedProductInput" }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: "action",
      operationName: "bulkUpdateDraftedProducts",
      functionName: "bulkUpdate",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: "update",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: "[BulkUpdateDraftedProductsInput!]" }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: "action",
      operationName: "deleteDraftedProduct",
      operationReturnType: "DeleteDraftedProduct",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: true,
      variables: { id: { required: true, type: "GadgetID" } },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: false,
      hasCreateOrUpdateEffect: false,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteDraftedProducts",
      functionName: "bulkDelete",
      isBulk: true,
      isDeleter: true,
      hasReturnType: false,
      acceptsModelInput: false,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: "delete",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: { ids: { required: true, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "upsertDraftedProduct",
      operationReturnType: "UpsertDraftedProduct",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        on: { required: false, type: "[String!]" },
        draftedProduct: { required: false, type: "UpsertDraftedProductInput" }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateDraftedProductResult": { hasReturnType: false },
        "... on UpdateDraftedProductResult": { hasReturnType: false }
      },
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultDraftedProductSelection
    },
    {
      type: "action",
      operationName: "bulkUpsertDraftedProducts",
      functionName: "bulkUpsert",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: "upsert",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: "[BulkUpsertDraftedProductsInput!]" }
      },
      paramOnlyVariables: ["on"],
      defaultSelection: DefaultDraftedProductSelection
    }
  ]
);
export {
  DefaultDraftedProductSelection,
  DraftedProductManager
};
//# sourceMappingURL=DraftedProduct.js.map
