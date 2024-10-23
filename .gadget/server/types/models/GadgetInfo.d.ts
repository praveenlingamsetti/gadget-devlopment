// All the generated types for the "gadgetInfo" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, GadgetInfo } from "@gadget-client/i-was-a-sare-development";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultGadgetInfoServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly syncStatus: true;
};
/** Context of the `create` action on the `gadgetInfo` model. */ export interface CreateGadgetInfoActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `gadgetInfo` record this action is operating on.
  */ record: GadgetRecord<Select<GadgetInfo, DefaultGadgetInfoServerSelection>>;
    /**
  * @deprecated Use 'return' instead.
  */ scope: ActionExecutionScope;
    /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */ trigger: ActionTrigger;
    /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */ params: {
        gadgetInfo?: {
            syncStatus?: string;
        };
    };
    /**
  * @private The context of this action.
  */ context: CreateGadgetInfoActionContext;
}
/** Context of the `update` action on the `gadgetInfo` model. */ export interface UpdateGadgetInfoActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `gadgetInfo` record this action is operating on.
  */ record: GadgetRecord<Select<GadgetInfo, DefaultGadgetInfoServerSelection>>;
    /**
  * @deprecated Use 'return' instead.
  */ scope: ActionExecutionScope;
    /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */ trigger: ActionTrigger;
    /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */ params: {
        gadgetInfo?: {
            syncStatus?: string;
        };
        id?: string;
    };
    /**
  * @private The context of this action.
  */ context: UpdateGadgetInfoActionContext;
}
/** Context of the `delete` action on the `gadgetInfo` model. */ export interface DeleteGadgetInfoActionContext extends AmbientContext {
    /**
  * The model this action is operating on
  */ model: NotYetTyped;
    /**
  * An object specifying the `gadgetInfo` record this action is operating on.
  */ record: GadgetRecord<Select<GadgetInfo, DefaultGadgetInfoServerSelection>>;
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
  */ context: DeleteGadgetInfoActionContext;
}
