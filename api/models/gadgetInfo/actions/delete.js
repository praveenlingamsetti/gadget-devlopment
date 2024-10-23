import { deleteRecord, ActionOptions, DeleteGadgetInfoActionContext } from "gadget-server";

/**
 * @param { DeleteGadgetInfoActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await deleteRecord(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete",
};
