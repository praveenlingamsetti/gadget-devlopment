// All the generated types for the "Shopify Order" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyOrder } from "@gadget-client/i-was-a-sare-development";
import { Select } from "@gadgetinc/api-client-core";

export type DefaultShopifyOrderServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly statusPageUrl: true;
      readonly totalCashRoundingAdjustment: true;
      readonly fulfillmentsCount: true;
      readonly retailLocationId: true;
    readonly retailLocation: false;
      readonly cancellation: true;
      readonly risk: true;
      readonly transactionsCount: true;
      readonly shopifyProtect: true;
      readonly taxExempt: true;
      readonly currentTotalAdditionalFeesSet: true;
      readonly originalTotalAdditionalFeesSet: true;
      readonly poNumber: true;
      readonly additionalFees: true;
      readonly merchantOfRecordAppId: true;
      readonly billingAddress: true;
      readonly sourceIdentifier: true;
      readonly sourceUrl: true;
      readonly browserIp: true;
      readonly buyerAcceptsMarketing: true;
      readonly cancelReason: true;
      readonly cancelledAt: true;
      readonly cartToken: true;
      readonly checkoutToken: true;
      readonly clientDetails: true;
      readonly closedAt: true;
      readonly currency: true;
      readonly currentSubtotalPrice: true;
      readonly currentSubtotalPriceSet: true;
      readonly currentTotalDiscounts: true;
      readonly currentTotalDiscountsSet: true;
      readonly currentTotalDutiesSet: true;
      readonly currentTotalPrice: true;
      readonly currentTotalPriceSet: true;
      readonly currentTotalTax: true;
      readonly currentTotalTaxSet: true;
      readonly customerLocale: true;
      readonly discountApplications: true;
      readonly discountCodes: true;
      readonly email: true;
      readonly estimatedTaxes: true;
      readonly financialStatus: true;
      readonly fulfillmentStatus: true;
      readonly landingSite: true;
      readonly lineItems: false;
      readonly name: true;
      readonly note: true;
      readonly noteAttributes: true;
      readonly number: true;
      readonly orderNumber: true;
      readonly orderStatusUrl: true;
      readonly originalTotalDutiesSet: true;
      readonly paymentGatewayNames: true;
      readonly phone: true;
      readonly presentmentCurrency: true;
      readonly processedAt: true;
      readonly shopifyCreatedAt: true;
      readonly referringSite: true;
      readonly shippingAddress: true;
      readonly sourceName: true;
      readonly shopifyUpdatedAt: true;
      readonly subtotalPrice: true;
      readonly subtotalPriceSet: true;
      readonly tags: true;
      readonly taxLines: true;
      readonly taxesIncluded: true;
      readonly test: true;
      readonly token: true;
      readonly totalDiscounts: true;
      readonly totalDiscountsSet: true;
      readonly totalLineItemsPrice: true;
      readonly totalLineItemsPriceSet: true;
      readonly totalOutstanding: true;
      readonly totalPrice: true;
      readonly totalPriceSet: true;
      readonly totalShippingPriceSet: true;
      readonly totalTax: true;
      readonly totalTaxSet: true;
      readonly totalTipReceived: true;
      readonly totalWeight: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyOrder` model. */
export interface CreateShopifyOrderActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
shopifyOrder?: { id?: string;statusPageUrl?: string;totalCashRoundingAdjustment?: string;fulfillmentsCount?: string;cancellation?: string;risk?: string;transactionsCount?: string;shopifyProtect?: string;taxExempt?: boolean;currentTotalAdditionalFeesSet?: string;originalTotalAdditionalFeesSet?: string;poNumber?: string;additionalFees?: string;merchantOfRecordAppId?: number;billingAddress?: string;sourceIdentifier?: string;sourceUrl?: string;browserIp?: string;buyerAcceptsMarketing?: boolean;cancelReason?: string;cancelledAt?: string;cartToken?: string;checkoutToken?: string;clientDetails?: string;closedAt?: string;currency?: string;currentSubtotalPrice?: string;currentSubtotalPriceSet?: string;currentTotalDiscounts?: string;currentTotalDiscountsSet?: string;currentTotalDutiesSet?: string;currentTotalPrice?: string;currentTotalPriceSet?: string;currentTotalTax?: string;currentTotalTaxSet?: string;customerLocale?: string;discountApplications?: string;discountCodes?: string;email?: string;estimatedTaxes?: boolean;financialStatus?: string;fulfillmentStatus?: string;landingSite?: string;name?: string;note?: string;noteAttributes?: string;number?: number;orderNumber?: number;orderStatusUrl?: string;originalTotalDutiesSet?: string;paymentGatewayNames?: string;phone?: string;presentmentCurrency?: string;processedAt?: string;shopifyCreatedAt?: string;referringSite?: string;shippingAddress?: string;sourceName?: string;shopifyUpdatedAt?: string;subtotalPrice?: string;subtotalPriceSet?: string;tags?: string;taxLines?: string;taxesIncluded?: boolean;test?: boolean;token?: string;totalDiscounts?: string;totalDiscountsSet?: string;totalLineItemsPrice?: string;totalLineItemsPriceSet?: string;totalOutstanding?: string;totalPrice?: string;totalPriceSet?: string;totalShippingPriceSet?: string;totalTax?: string;totalTaxSet?: string;totalTipReceived?: string;totalWeight?: number; };
};
  /**
  * @private The context of this action.
  */
  context: CreateShopifyOrderActionContext;
};


    
/** Context of the `update` action on the `shopifyOrder` model. */
export interface UpdateShopifyOrderActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
shopifyOrder?: { id?: string;statusPageUrl?: string;totalCashRoundingAdjustment?: string;fulfillmentsCount?: string;cancellation?: string;risk?: string;transactionsCount?: string;shopifyProtect?: string;taxExempt?: boolean;currentTotalAdditionalFeesSet?: string;originalTotalAdditionalFeesSet?: string;poNumber?: string;additionalFees?: string;merchantOfRecordAppId?: number;billingAddress?: string;sourceIdentifier?: string;sourceUrl?: string;browserIp?: string;buyerAcceptsMarketing?: boolean;cancelReason?: string;cancelledAt?: string;cartToken?: string;checkoutToken?: string;clientDetails?: string;closedAt?: string;currency?: string;currentSubtotalPrice?: string;currentSubtotalPriceSet?: string;currentTotalDiscounts?: string;currentTotalDiscountsSet?: string;currentTotalDutiesSet?: string;currentTotalPrice?: string;currentTotalPriceSet?: string;currentTotalTax?: string;currentTotalTaxSet?: string;customerLocale?: string;discountApplications?: string;discountCodes?: string;email?: string;estimatedTaxes?: boolean;financialStatus?: string;fulfillmentStatus?: string;landingSite?: string;name?: string;note?: string;noteAttributes?: string;number?: number;orderNumber?: number;orderStatusUrl?: string;originalTotalDutiesSet?: string;paymentGatewayNames?: string;phone?: string;presentmentCurrency?: string;processedAt?: string;shopifyCreatedAt?: string;referringSite?: string;shippingAddress?: string;sourceName?: string;shopifyUpdatedAt?: string;subtotalPrice?: string;subtotalPriceSet?: string;tags?: string;taxLines?: string;taxesIncluded?: boolean;test?: boolean;token?: string;totalDiscounts?: string;totalDiscountsSet?: string;totalLineItemsPrice?: string;totalLineItemsPriceSet?: string;totalOutstanding?: string;totalPrice?: string;totalPriceSet?: string;totalShippingPriceSet?: string;totalTax?: string;totalTaxSet?: string;totalTipReceived?: string;totalWeight?: number; };    
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: UpdateShopifyOrderActionContext;
};


    
/** Context of the `delete` action on the `shopifyOrder` model. */
export interface DeleteShopifyOrderActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: DeleteShopifyOrderActionContext;
};


  