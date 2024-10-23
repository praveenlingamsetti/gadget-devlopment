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
var ShopifyLocation_exports = {};
__export(ShopifyLocation_exports, {
  DefaultShopifyLocationSelection: () => DefaultShopifyLocationSelection,
  ShopifyLocationManager: () => ShopifyLocationManager
});
module.exports = __toCommonJS(ShopifyLocation_exports);
var import_builder = require("../builder.js");
const DefaultShopifyLocationSelection = {
  __typename: true,
  id: true,
  active: true,
  address1: true,
  address2: true,
  city: true,
  country: true,
  countryCode: true,
  createdAt: true,
  legacy: true,
  localizedCountryName: true,
  localizedProvinceName: true,
  name: true,
  phone: true,
  province: true,
  provinceCode: true,
  shopId: true,
  shopifyCreatedAt: true,
  shopifyUpdatedAt: true,
  updatedAt: true,
  zipCode: true
};
const modelApiIdentifier = "shopifyLocation";
const pluralModelApiIdentifier = "shopifyLocations";
;
;
;
;
;
;
;
;
const ShopifyLocationManager = (0, import_builder.buildModelManager)(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultShopifyLocationSelection,
  [
    {
      type: "findOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: "findMany",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: "findFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: "maybeFindFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyLocation",
      functionName: "create",
      errorMessage: "The action create on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyLocation.create"
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyLocations",
      functionName: "bulkCreate",
      errorMessage: "The action create on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyLocation.bulkCreate"
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyLocation",
      functionName: "update",
      errorMessage: "The action update on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyLocation.update"
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyLocations",
      functionName: "bulkUpdate",
      errorMessage: "The action update on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyLocation.bulkUpdate"
    },
    {
      type: "stubbedAction",
      operationName: "deleteShopifyLocation",
      functionName: "delete",
      errorMessage: "The action delete on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyLocation.delete"
    },
    {
      type: "stubbedAction",
      operationName: "bulkDeleteShopifyLocations",
      functionName: "bulkDelete",
      errorMessage: "The action delete on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyLocation.bulkDelete"
    }
  ]
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyLocationSelection,
  ShopifyLocationManager
});
//# sourceMappingURL=ShopifyLocation.js.map
