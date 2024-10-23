import { applyParams, save, ActionOptions, UpdateGadgetInfoActionContext } from "gadget-server";

/**
 * @param { UpdateGadgetInfoActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update",
};
