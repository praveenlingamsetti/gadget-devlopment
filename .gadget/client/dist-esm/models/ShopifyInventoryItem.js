import { buildModelManager } from "../builder.js";
const DefaultShopifyInventoryItemSelection = {
  __typename: true,
  id: true,
  cost: true,
  countryCodeOfOrigin: true,
  countryHarmonizedSystemCodes: true,
  createdAt: true,
  duplicateSkuCount: true,
  harmonizedSystemCode: true,
  inventoryHistoryUrl: true,
  legacyResourceId: true,
  measurement: true,
  provinceCodeOfOrigin: true,
  requiresShipping: true,
  shopId: true,
  shopifyCreatedAt: true,
  shopifyUpdatedAt: true,
  sku: true,
  tracked: true,
  trackedEditable: true,
  unitCost: true,
  updatedAt: true
};
const modelApiIdentifier = "shopifyInventoryItem";
const pluralModelApiIdentifier = "shopifyInventoryItems";
;
;
;
;
;
;
;
;
const ShopifyInventoryItemManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultShopifyInventoryItemSelection,
  [
    {
      type: "findOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyInventoryItemSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyInventoryItemSelection,
      namespace: null
    },
    {
      type: "findMany",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryItemSelection,
      namespace: null
    },
    {
      type: "findFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryItemSelection,
      namespace: null
    },
    {
      type: "maybeFindFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryItemSelection,
      namespace: null
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyInventoryItem",
      functionName: "create",
      errorMessage: "The action create on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryItem.create"
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyInventoryItems",
      functionName: "bulkCreate",
      errorMessage: "The action create on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryItem.bulkCreate"
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyInventoryItem",
      functionName: "update",
      errorMessage: "The action update on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryItem.update"
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyInventoryItems",
      functionName: "bulkUpdate",
      errorMessage: "The action update on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryItem.bulkUpdate"
    },
    {
      type: "stubbedAction",
      operationName: "deleteShopifyInventoryItem",
      functionName: "delete",
      errorMessage: "The action delete on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryItem.delete"
    },
    {
      type: "stubbedAction",
      operationName: "bulkDeleteShopifyInventoryItems",
      functionName: "bulkDelete",
      errorMessage: "The action delete on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyInventoryItem.bulkDelete"
    }
  ]
);
export {
  DefaultShopifyInventoryItemSelection,
  ShopifyInventoryItemManager
};
//# sourceMappingURL=ShopifyInventoryItem.js.map
