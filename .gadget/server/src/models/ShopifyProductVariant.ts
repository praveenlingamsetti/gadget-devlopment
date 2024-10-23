// All the generated types for the "Shopify Product Variant" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyProductVariant } from "@gadget-client/i-was-a-sare-development";
import { Select } from "@gadgetinc/api-client-core";

export type DefaultShopifyProductVariantServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly barcode: true;
      readonly compareAtPrice: true;
      readonly productId: true;
    readonly product: false;
      readonly inventoryPolicy: true;
      readonly inventoryQuantity: true;
      readonly option1: true;
      readonly inventoryItemId: true;
    readonly inventoryItem: false;
      readonly selectedOptions: true;
      readonly option2: true;
      readonly option3: true;
      readonly position: true;
      readonly price: true;
      readonly shopifyCreatedAt: true;
      readonly sku: true;
      readonly taxCode: true;
      readonly shopifyUpdatedAt: true;
      readonly orderLineItems: false;
      readonly presentmentPrices: true;
      readonly taxable: true;
      readonly title: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyProductVariant` model. */
export interface CreateShopifyProductVariantActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyProductVariant` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProductVariant, DefaultShopifyProductVariantServerSelection>>;
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
shopifyProductVariant?: { id?: string;barcode?: string;compareAtPrice?: string;inventoryPolicy?: string;inventoryQuantity?: number;option1?: string;selectedOptions?: string;option2?: string;option3?: string;position?: number;price?: string;shopifyCreatedAt?: string;sku?: string;taxCode?: string;shopifyUpdatedAt?: string;presentmentPrices?: string;taxable?: boolean;title?: string; };
};
  /**
  * @private The context of this action.
  */
  context: CreateShopifyProductVariantActionContext;
};


    
/** Context of the `update` action on the `shopifyProductVariant` model. */
export interface UpdateShopifyProductVariantActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyProductVariant` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProductVariant, DefaultShopifyProductVariantServerSelection>>;
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
shopifyProductVariant?: { id?: string;barcode?: string;compareAtPrice?: string;inventoryPolicy?: string;inventoryQuantity?: number;option1?: string;selectedOptions?: string;option2?: string;option3?: string;position?: number;price?: string;shopifyCreatedAt?: string;sku?: string;taxCode?: string;shopifyUpdatedAt?: string;presentmentPrices?: string;taxable?: boolean;title?: string; };    
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: UpdateShopifyProductVariantActionContext;
};


    
/** Context of the `delete` action on the `shopifyProductVariant` model. */
export interface DeleteShopifyProductVariantActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyProductVariant` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProductVariant, DefaultShopifyProductVariantServerSelection>>;
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
  context: DeleteShopifyProductVariantActionContext;
};


  