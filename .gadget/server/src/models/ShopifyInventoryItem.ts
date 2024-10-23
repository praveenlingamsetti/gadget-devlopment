// All the generated types for the "Shopify Inventory Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyInventoryItem } from "@gadget-client/i-was-a-sare-development";
import { Select } from "@gadgetinc/api-client-core";

export type DefaultShopifyInventoryItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly measurement: true;
      readonly duplicateSkuCount: true;
      readonly inventoryHistoryUrl: true;
      readonly legacyResourceId: true;
      readonly trackedEditable: true;
      readonly unitCost: true;
      readonly cost: true;
      readonly countryCodeOfOrigin: true;
      readonly countryHarmonizedSystemCodes: true;
      readonly productVariant: false;
      readonly harmonizedSystemCode: true;
      readonly provinceCodeOfOrigin: true;
      readonly locations: false;
      readonly shopifyCreatedAt: true;
      readonly requiresShipping: true;
      readonly sku: true;
      readonly tracked: true;
      readonly shopifyUpdatedAt: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyInventoryItem` model. */
export interface CreateShopifyInventoryItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyInventoryItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyInventoryItem, DefaultShopifyInventoryItemServerSelection>>;
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
shopifyInventoryItem?: { id?: string;measurement?: string;duplicateSkuCount?: number;inventoryHistoryUrl?: string;legacyResourceId?: string;trackedEditable?: string;unitCost?: string;cost?: string;countryCodeOfOrigin?: string;countryHarmonizedSystemCodes?: string;harmonizedSystemCode?: string;provinceCodeOfOrigin?: string;shopifyCreatedAt?: string;requiresShipping?: boolean;sku?: string;tracked?: boolean;shopifyUpdatedAt?: string; };
};
  /**
  * @private The context of this action.
  */
  context: CreateShopifyInventoryItemActionContext;
};


    
/** Context of the `update` action on the `shopifyInventoryItem` model. */
export interface UpdateShopifyInventoryItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyInventoryItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyInventoryItem, DefaultShopifyInventoryItemServerSelection>>;
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
shopifyInventoryItem?: { id?: string;measurement?: string;duplicateSkuCount?: number;inventoryHistoryUrl?: string;legacyResourceId?: string;trackedEditable?: string;unitCost?: string;cost?: string;countryCodeOfOrigin?: string;countryHarmonizedSystemCodes?: string;harmonizedSystemCode?: string;provinceCodeOfOrigin?: string;shopifyCreatedAt?: string;requiresShipping?: boolean;sku?: string;tracked?: boolean;shopifyUpdatedAt?: string; };    
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: UpdateShopifyInventoryItemActionContext;
};


    
/** Context of the `delete` action on the `shopifyInventoryItem` model. */
export interface DeleteShopifyInventoryItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyInventoryItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyInventoryItem, DefaultShopifyInventoryItemServerSelection>>;
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
  context: DeleteShopifyInventoryItemActionContext;
};


  