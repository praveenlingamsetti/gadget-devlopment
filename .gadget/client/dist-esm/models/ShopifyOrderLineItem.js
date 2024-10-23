import { buildModelManager } from "../builder.js";
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
const ShopifyOrderLineItemManager = buildModelManager(
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
export {
  DefaultShopifyOrderLineItemSelection,
  ShopifyOrderLineItemManager
};
//# sourceMappingURL=ShopifyOrderLineItem.js.map
