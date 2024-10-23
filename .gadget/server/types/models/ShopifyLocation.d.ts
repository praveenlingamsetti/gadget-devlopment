// All the generated types for the "Shopify Location" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyLocation } from "@gadget-client/i-was-a-sare-development";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyLocationServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly active: true;
    readonly address1: true;
    readonly address2: true;
    readonly city: true;
    readonly country: true;
    readonly countryCode: true;
    readonly legacy: true;
    readonly inventoryItems: false;
    readonly localizedCountryName: true;
    readonly localizedProvinceName: true;
    readonly name: true;
    readonly orders: false;
    readonly orderLineItems: false;
    readonly phone: true;
    readonly province: true;
    readonly provinceCode: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly zipCode: true;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyLocation` model. */ export interface CreateShopifyLocationActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `shopifyLocation` record this action is operating on.
  */ record: GadgetRecord<Select<ShopifyLocation, DefaultShopifyLocationServerSelection>>;
    /**
  * @deprecated Use 'return' instead.
  */ scope: ActionExecutionScope;
    /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */ trigger: ActionTrigger;
    /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */ params: {
        shopifyLocation?: {
            id?: string;
            active?: boolean;
            address1?: string;
            address2?: string;
            city?: string;
            country?: string;
            countryCode?: string;
            legacy?: boolean;
            localizedCountryName?: string;
            localizedProvinceName?: string;
            name?: string;
            phone?: string;
            province?: string;
            provinceCode?: string;
            shopifyCreatedAt?: string;
            shopifyUpdatedAt?: string;
            zipCode?: string;
        };
    };
    /**
  * @private The context of this action.
  */ context: CreateShopifyLocationActionContext;
}
/** Context of the `update` action on the `shopifyLocation` model. */ export interface UpdateShopifyLocationActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `shopifyLocation` record this action is operating on.
  */ record: GadgetRecord<Select<ShopifyLocation, DefaultShopifyLocationServerSelection>>;
    /**
  * @deprecated Use 'return' instead.
  */ scope: ActionExecutionScope;
    /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */ trigger: ActionTrigger;
    /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */ params: {
        shopifyLocation?: {
            id?: string;
            active?: boolean;
            address1?: string;
            address2?: string;
            city?: string;
            country?: string;
            countryCode?: string;
            legacy?: boolean;
            localizedCountryName?: string;
            localizedProvinceName?: string;
            name?: string;
            phone?: string;
            province?: string;
            provinceCode?: string;
            shopifyCreatedAt?: string;
            shopifyUpdatedAt?: string;
            zipCode?: string;
        };
        id?: string;
    };
    /**
  * @private The context of this action.
  */ context: UpdateShopifyLocationActionContext;
}
/** Context of the `delete` action on the `shopifyLocation` model. */ export interface DeleteShopifyLocationActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `shopifyLocation` record this action is operating on.
  */ record: GadgetRecord<Select<ShopifyLocation, DefaultShopifyLocationServerSelection>>;
    /**
  * @deprecated Use 'return' instead.
  */ scope: ActionExecutionScope;
    /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */ trigger: ActionTrigger;
    /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */ params: {
        id?: string;
    };
    /**
  * @private The context of this action.
  */ context: DeleteShopifyLocationActionContext;
}
