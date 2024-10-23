"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ShopifyInventoryItem_exports = {};
__export(ShopifyInventoryItem_exports, {
  DefaultShopifyInventoryItemSelection: () => DefaultShopifyInventoryItemSelection,
  ShopifyInventoryItemManager: () => ShopifyInventoryItemManager
});
module.exports = __toCommonJS(ShopifyInventoryItem_exports);
var import_builder = require("../builder.js");
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
const ShopifyInventoryItemManager = (0, import_builder.buildModelManager)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyInventoryItemSelection,
  ShopifyInventoryItemManager
});
//# sourceMappingURL=ShopifyInventoryItem.js.map
