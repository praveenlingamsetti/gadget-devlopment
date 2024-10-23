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
var ShopifyInventoryLevel_exports = {};
__export(ShopifyInventoryLevel_exports, {
  DefaultShopifyInventoryLevelSelection: () => DefaultShopifyInventoryLevelSelection,
  ShopifyInventoryLevelManager: () => ShopifyInventoryLevelManager
});
module.exports = __toCommonJS(ShopifyInventoryLevel_exports);
var import_builder = require("../builder.js");
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
const ShopifyInventoryLevelManager = (0, import_builder.buildModelManager)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyInventoryLevelSelection,
  ShopifyInventoryLevelManager
});
//# sourceMappingURL=ShopifyInventoryLevel.js.map
