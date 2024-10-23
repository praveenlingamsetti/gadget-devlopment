// All the generated types for the "Shopify Order Line Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyOrderLineItem } from "@gadget-client/i-was-a-sare-development";
import { Select } from "@gadgetinc/api-client-core";

export type DefaultShopifyOrderLineItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly attributedStaffs: true;
      readonly currentQuantity: true;
      readonly fulfillableQuantity: true;
      readonly fulfillmentService: true;
      readonly fulfillmentStatus: true;
      readonly grams: true;
      readonly productExists: true;
      readonly variantInventoryManagement: true;
      readonly orderId: true;
    readonly order: false;
      readonly originLocationId: true;
    readonly originLocation: false;
      readonly productId: true;
    readonly product: false;
      readonly variantId: true;
    readonly variant: false;
      readonly price: true;
      readonly quantity: true;
      readonly requiresShipping: true;
      readonly sku: true;
      readonly title: true;
      readonly giftCard: true;
      readonly name: true;
      readonly variantTitle: true;
      readonly vendor: true;
      readonly shopifyCreatedAt: true;
      readonly priceSet: true;
      readonly properties: true;
      readonly shopifyUpdatedAt: true;
      readonly discountAllocations: true;
      readonly taxLines: true;
      readonly taxable: true;
      readonly totalDiscount: true;
      readonly totalDiscountSet: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyOrderLineItem` model. */
export interface CreateShopifyOrderLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderLineItem, DefaultShopifyOrderLineItemServerSelection>>;
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
shopifyOrderLineItem?: { id?: string;attributedStaffs?: string;currentQuantity?: number;fulfillableQuantity?: number;fulfillmentService?: string;fulfillmentStatus?: string;grams?: number;productExists?: boolean;variantInventoryManagement?: string;price?: string;quantity?: number;requiresShipping?: boolean;sku?: string;title?: string;giftCard?: boolean;name?: string;variantTitle?: string;vendor?: string;shopifyCreatedAt?: string;priceSet?: string;properties?: string;shopifyUpdatedAt?: string;discountAllocations?: string;taxLines?: string;taxable?: boolean;totalDiscount?: string;totalDiscountSet?: string; };
};
  /**
  * @private The context of this action.
  */
  context: CreateShopifyOrderLineItemActionContext;
};


    
/** Context of the `update` action on the `shopifyOrderLineItem` model. */
export interface UpdateShopifyOrderLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderLineItem, DefaultShopifyOrderLineItemServerSelection>>;
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
shopifyOrderLineItem?: { id?: string;attributedStaffs?: string;currentQuantity?: number;fulfillableQuantity?: number;fulfillmentService?: string;fulfillmentStatus?: string;grams?: number;productExists?: boolean;variantInventoryManagement?: string;price?: string;quantity?: number;requiresShipping?: boolean;sku?: string;title?: string;giftCard?: boolean;name?: string;variantTitle?: string;vendor?: string;shopifyCreatedAt?: string;priceSet?: string;properties?: string;shopifyUpdatedAt?: string;discountAllocations?: string;taxLines?: string;taxable?: boolean;totalDiscount?: string;totalDiscountSet?: string; };    
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: UpdateShopifyOrderLineItemActionContext;
};


    
/** Context of the `delete` action on the `shopifyOrderLineItem` model. */
export interface DeleteShopifyOrderLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderLineItem, DefaultShopifyOrderLineItemServerSelection>>;
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
  context: DeleteShopifyOrderLineItemActionContext;
};


  