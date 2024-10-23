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
var ShopifyOrder_exports = {};
__export(ShopifyOrder_exports, {
  DefaultShopifyOrderSelection: () => DefaultShopifyOrderSelection,
  ShopifyOrderManager: () => ShopifyOrderManager
});
module.exports = __toCommonJS(ShopifyOrder_exports);
var import_builder = require("../builder.js");
const DefaultShopifyOrderSelection = {
  __typename: true,
  id: true,
  additionalFees: true,
  billingAddress: true,
  browserIp: true,
  buyerAcceptsMarketing: true,
  cancelReason: true,
  cancellation: true,
  cancelledAt: true,
  cartToken: true,
  checkoutToken: true,
  clientDetails: true,
  closedAt: true,
  createdAt: true,
  currency: true,
  currentSubtotalPrice: true,
  currentSubtotalPriceSet: true,
  currentTotalAdditionalFeesSet: true,
  currentTotalDiscounts: true,
  currentTotalDiscountsSet: true,
  currentTotalDutiesSet: true,
  currentTotalPrice: true,
  currentTotalPriceSet: true,
  currentTotalTax: true,
  currentTotalTaxSet: true,
  customerLocale: true,
  discountApplications: true,
  discountCodes: true,
  email: true,
  estimatedTaxes: true,
  financialStatus: true,
  fulfillmentStatus: true,
  fulfillmentsCount: true,
  landingSite: true,
  merchantOfRecordAppId: true,
  name: true,
  note: true,
  noteAttributes: true,
  number: true,
  orderNumber: true,
  orderStatusUrl: true,
  originalTotalAdditionalFeesSet: true,
  originalTotalDutiesSet: true,
  paymentGatewayNames: true,
  phone: true,
  poNumber: true,
  presentmentCurrency: true,
  processedAt: true,
  referringSite: true,
  retailLocationId: true,
  risk: true,
  shippingAddress: true,
  shopId: true,
  shopifyCreatedAt: true,
  shopifyProtect: true,
  shopifyUpdatedAt: true,
  sourceIdentifier: true,
  sourceName: true,
  sourceUrl: true,
  statusPageUrl: true,
  subtotalPrice: true,
  subtotalPriceSet: true,
  tags: true,
  taxExempt: true,
  taxLines: true,
  taxesIncluded: true,
  test: true,
  token: true,
  totalCashRoundingAdjustment: true,
  totalDiscounts: true,
  totalDiscountsSet: true,
  totalLineItemsPrice: true,
  totalLineItemsPriceSet: true,
  totalOutstanding: true,
  totalPrice: true,
  totalPriceSet: true,
  totalShippingPriceSet: true,
  totalTax: true,
  totalTaxSet: true,
  totalTipReceived: true,
  totalWeight: true,
  transactionsCount: true,
  updatedAt: true
};
const modelApiIdentifier = "shopifyOrder";
const pluralModelApiIdentifier = "shopifyOrders";
;
;
;
;
;
;
;
;
const ShopifyOrderManager = (0, import_builder.buildModelManager)(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultShopifyOrderSelection,
  [
    {
      type: "findOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyOrderSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultShopifyOrderSelection,
      namespace: null
    },
    {
      type: "findMany",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyOrderSelection,
      namespace: null
    },
    {
      type: "findFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyOrderSelection,
      namespace: null
    },
    {
      type: "maybeFindFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultShopifyOrderSelection,
      namespace: null
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyOrder",
      functionName: "create",
      errorMessage: "The action create on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrder.create"
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyOrders",
      functionName: "bulkCreate",
      errorMessage: "The action create on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrder.bulkCreate"
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyOrder",
      functionName: "update",
      errorMessage: "The action update on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrder.update"
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyOrders",
      functionName: "bulkUpdate",
      errorMessage: "The action update on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrder.bulkUpdate"
    },
    {
      type: "stubbedAction",
      operationName: "deleteShopifyOrder",
      functionName: "delete",
      errorMessage: "The action delete on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrder.delete"
    },
    {
      type: "stubbedAction",
      operationName: "bulkDeleteShopifyOrders",
      functionName: "bulkDelete",
      errorMessage: "The action delete on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyOrder.bulkDelete"
    }
  ]
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyOrderSelection,
  ShopifyOrderManager
});
//# sourceMappingURL=ShopifyOrder.js.map
