// All the generated types for the "draftedProduct" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, DraftedProduct } from "@gadget-client/i-was-a-sare-development";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultDraftedProductServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly orderId: true;
    readonly productId: true;
    readonly productTitle: true;
    readonly relatedProduct: true;
    readonly shop: true;
    readonly swatchId: true;
    readonly type: true;
    readonly variant: true;
};
/** Context of the `create` action on the `draftedProduct` model. */ export interface CreateDraftedProductActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `draftedProduct` record this action is operating on.
  */ record: GadgetRecord<Select<DraftedProduct, DefaultDraftedProductServerSelection>>;
    /**
  * @deprecated Use 'return' instead.
  */ scope: ActionExecutionScope;
    /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */ trigger: ActionTrigger;
    /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */ params: {
        draftedProduct?: {
            orderId?: string;
            productId?: string;
            productTitle?: string;
            relatedProduct?: string;
            shop?: string;
            swatchId?: string;
            type?: string;
            variant?: string;
        };
    };
    /**
  * @private The context of this action.
  */ context: CreateDraftedProductActionContext;
}
/** Context of the `update` action on the `draftedProduct` model. */ export interface UpdateDraftedProductActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `draftedProduct` record this action is operating on.
  */ record: GadgetRecord<Select<DraftedProduct, DefaultDraftedProductServerSelection>>;
    /**
  * @deprecated Use 'return' instead.
  */ scope: ActionExecutionScope;
    /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */ trigger: ActionTrigger;
    /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */ params: {
        draftedProduct?: {
            orderId?: string;
            productId?: string;
            productTitle?: string;
            relatedProduct?: string;
            shop?: string;
            swatchId?: string;
            type?: string;
            variant?: string;
        };
        id?: string;
    };
    /**
  * @private The context of this action.
  */ context: UpdateDraftedProductActionContext;
}
/** Context of the `delete` action on the `draftedProduct` model. */ export interface DeleteDraftedProductActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `draftedProduct` record this action is operating on.
  */ record: GadgetRecord<Select<DraftedProduct, DefaultDraftedProductServerSelection>>;
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
  */ context: DeleteDraftedProductActionContext;
}
