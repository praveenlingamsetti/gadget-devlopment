import { applyParams, save, ActionOptions, CreateGadgetInfoActionContext } from "gadget-server";

/**
 * @param { CreateGadgetInfoActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};
