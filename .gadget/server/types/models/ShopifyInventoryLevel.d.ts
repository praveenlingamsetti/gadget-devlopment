// All the generated types for the "Shopify Inventory Level" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyInventoryLevel } from "@gadget-client/i-was-a-sare-development";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyInventoryLevelServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly canDeactivate: true;
    readonly deactivationAlert: true;
    readonly adminGraphqlApiId: true;
    readonly available: true;
    readonly shopifyUpdatedAt: true;
    readonly inventoryItemId: true;
    readonly inventoryItem: false;
    readonly locationId: true;
    readonly location: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyInventoryLevel` model. */ export interface CreateShopifyInventoryLevelActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `shopifyInventoryLevel` record this action is operating on.
  */ record: GadgetRecord<Select<ShopifyInventoryLevel, DefaultShopifyInventoryLevelServerSelection>>;
    /**
  * @deprecated Use 'return' instead.
  */ scope: ActionExecutionScope;
    /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */ trigger: ActionTrigger;
    /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */ params: {
        shopifyInventoryLevel?: {
            canDeactivate?: boolean;
            deactivationAlert?: string;
            adminGraphqlApiId?: string;
            available?: number;
            shopifyUpdatedAt?: string;
        };
    };
    /**
  * @private The context of this action.
  */ context: CreateShopifyInventoryLevelActionContext;
}
/** Context of the `update` action on the `shopifyInventoryLevel` model. */ export interface UpdateShopifyInventoryLevelActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `shopifyInventoryLevel` record this action is operating on.
  */ record: GadgetRecord<Select<ShopifyInventoryLevel, DefaultShopifyInventoryLevelServerSelection>>;
    /**
  * @deprecated Use 'return' instead.
  */ scope: ActionExecutionScope;
    /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */ trigger: ActionTrigger;
    /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */ params: {
        shopifyInventoryLevel?: {
            canDeactivate?: boolean;
            deactivationAlert?: string;
            adminGraphqlApiId?: string;
            available?: number;
            shopifyUpdatedAt?: string;
        };
        id?: string;
    };
    /**
  * @private The context of this action.
  */ context: UpdateShopifyInventoryLevelActionContext;
}
/** Context of the `delete` action on the `shopifyInventoryLevel` model. */ export interface DeleteShopifyInventoryLevelActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `shopifyInventoryLevel` record this action is operating on.
  */ record: GadgetRecord<Select<ShopifyInventoryLevel, DefaultShopifyInventoryLevelServerSelection>>;
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
  */ context: DeleteShopifyInventoryLevelActionContext;
}
