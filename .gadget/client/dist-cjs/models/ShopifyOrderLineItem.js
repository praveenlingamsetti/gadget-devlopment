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
var ShopifyOrderLineItem_exports = {};
__export(ShopifyOrderLineItem_exports, {
  DefaultShopifyOrderLineItemSelection: () => DefaultShopifyOrderLineItemSelection,
  ShopifyOrderLineItemManager: () => ShopifyOrderLineItemManager
});
module.exports = __toCommonJS(ShopifyOrderLineItem_exports);
var import_builder = require("../builder.js");
const DefaultShopifyOrderLineItemSelection = {
  __typename: true,
  id: true,
  attributedStaffs: true,
  createdAt: true,
  currentQuantity: true,
  discountAllocations: true,
  fulfillableQuantity: true,
  fulfillmentService: true,
  fulfillmentStatus: true,
  giftCard: true,
  grams: true,
  name: true,
  orderId: true,
  originLocationId: true,
  price: true,
  priceSet: true,
  productExists: true,
  productId: true,
  properties: true,
  quantity: true,
  requiresShipping: true,
  shopId: true,
  shopifyCreatedAt: true,
  shopifyUpdatedAt: true,
  sku: true,
  taxLines: true,
  taxable: true,
  title: true,
  totalDiscount: true,
  totalDiscountSet: true,
  updatedAt: true,
  variantId: true,
  variantInventoryManagement: true,
  variantTitle: true,
  vendor: true
};
const modelApiIdentifier = "shopifyOrderLineItem";
const pluralModelApiIdentifier = "shopifyOrderLineItems";
;
;
;
;
;
;
;
;
const ShopifyOrderLineItemManager = (0, import_builder.buildModelManager)(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultShopifyOrderLineItemSelection,
  [
    {
      type: "findOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyOrderLineItemSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyOrderLineItemSelection,
      namespace: null
    },
    {
      type: "findMany",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyOrderLineItemSelection,
      namespace: null
    },
    {
      type: "findFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyOrderLineItemSelection,
      namespace: null
    },
    {
      type: "maybeFindFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyOrderLineItemSelection,
      namespace: null
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyOrderLineItem",
      functionName: "create",
      errorMessage: "The action create on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrderLineItem.create"
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyOrderLineItems",
      functionName: "bulkCreate",
      errorMessage: "The action create on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrderLineItem.bulkCreate"
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyOrderLineItem",
      functionName: "update",
      errorMessage: "The action update on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrderLineItem.update"
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyOrderLineItems",
      functionName: "bulkUpdate",
      errorMessage: "The action update on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrderLineItem.bulkUpdate"
    },
    {
      type: "stubbedAction",
      operationName: "deleteShopifyOrderLineItem",
      functionName: "delete",
      errorMessage: "The action delete on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrderLineItem.delete"
    },
    {
      type: "stubbedAction",
      operationName: "bulkDeleteShopifyOrderLineItems",
      functionName: "bulkDelete",
      errorMessage: "The action delete on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrderLineItem.bulkDelete"
    }
  ]
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyOrderLineItemSelection,
  ShopifyOrderLineItemManager
});
//# sourceMappingURL=ShopifyOrderLineItem.js.map
