import { buildModelManager } from "../builder.js";
const DefaultShopifyInventoryLevelSelection = {
  __typename: true,
  id: true,
  adminGraphqlApiId: true,
  available: true,
  canDeactivate: true,
  createdAt: true,
  deactivationAlert: true,
  inventoryItemId: true,
  locationId: true,
  shopId: true,
  shopifyUpdatedAt: true,
  updatedAt: true
};
const modelApiIdentifier = "shopifyInventoryLevel";
const pluralModelApiIdentifier = "shopifyInventoryLevels";
;
;
;
;
;
;
;
;
const ShopifyInventoryLevelManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultShopifyInventoryLevelSelection,
  [
    {
      type: "findOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: "findMany",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: "findFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: "maybeFindFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: "findOne",
      operationName: pluralModelApiIdentifier,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: pluralModelApiIdentifier,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: "findOne",
      operationName: pluralModelApiIdentifier,
      functionName: "findByInventoryItem",
      findByField: "inventoryItemId",
      findByVariableName: "inventoryItemId",
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: pluralModelApiIdentifier,
      functionName: "maybeFindByInventoryItem",
      findByField: "inventoryItemId",
      findByVariableName: "inventoryItemId",
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyInventoryLevel",
      functionName: "create",
      errorMessage: "The action create on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryLevel.create"
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyInventoryLevels",
      functionName: "bulkCreate",
      errorMessage: "The action create on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryLevel.bulkCreate"
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyInventoryLevel",
      functionName: "update",
      errorMessage: "The action update on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryLevel.update"
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyInventoryLevels",
      functionName: "bulkUpdate",
      errorMessage: "The action update on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryLevel.bulkUpdate"
    },
    {
      type: "stubbedAction",
      operationName: "deleteShopifyInventoryLevel",
      functionName: "delete",
      errorMessage: "The action delete on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryLevel.delete"
    },
    {
      type: "stubbedAction",
      operationName: "bulkDeleteShopifyInventoryLevels",
      functionName: "bulkDelete",
      errorMessage: "The action delete on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryLevel.bulkDelete"
    }
  ]
);
export {
  DefaultShopifyInventoryLevelSelection,
  ShopifyInventoryLevelManager
};
//# sourceMappingURL=ShopifyInventoryLevel.js.map
