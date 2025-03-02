import { Meta, StoryObj } from "@storybook/react";

import { GiftCardDetails } from "./GiftCardDetails";

export default {
  title: "GiftCardDetails",
  component: GiftCardDetails,
} as Meta;

type Story = StoryObj<typeof GiftCardDetails>;

export const WithItem: Story = {
  args: {
    id: 5,
    name: "Carte cadeaux famille",
    description:
      "Votre CSE vous offre une carte cadeaux pour toute la famille.",
    openingDate: "2025-03-03",
    closingDate: "2025-11-11",
    state: "active",
    allowedAmount: 100,
    consumedAmount: 80,
    beneficiaries: [
      {
        id: 1,
        type: "user",
        firstName: "Geralt",
        consumption: {
          allowedAmount: 50,
          consumedAmount: 30,
        },
      },
      {
        id: 2,
        type: "companion",
        firstName: "Yennefer",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
      {
        id: 3,
        type: "child",
        firstName: "Cirilla",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
    ],
  },
};
