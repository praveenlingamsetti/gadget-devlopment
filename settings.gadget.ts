import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.3.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2024-10",
        enabledModels: [
          "shopifyInventoryItem",
          "shopifyInventoryLevel",
          "shopifyLocation",
          "shopifyOrder",
          "shopifyOrderLineItem",
          "shopifyProduct",
          "shopifyProductVariant",
        ],
        type: "partner",
        scopes: [
          "read_orders",
          "read_products",
          "read_inventory",
          "write_inventory",
          "read_locations",
          "write_orders",
        ],
      },
    },
  },
};
