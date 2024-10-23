import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "draftedProduct" model, go to https://i-was-a-sare-development.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "kFOGjMcjJAxz",
  fields: {
    orderId: { type: "string", storageKey: "GSja9eQSHvwp" },
    productId: { type: "string", storageKey: "JERaFrmeFhp1" },
    productTitle: { type: "string", storageKey: "OWErpTOJ53Hh" },
    relatedProduct: { type: "string", storageKey: "DF_M--ladFTW" },
    shop: { type: "string", storageKey: "n7_p9K1WQO_v" },
    swatchId: { type: "string", storageKey: "dfMkvuVV_y6z" },
    type: { type: "string", storageKey: "7KI980sA8kS-" },
    variant: { type: "string", storageKey: "crWinqOpiMpU" },
  },
};
