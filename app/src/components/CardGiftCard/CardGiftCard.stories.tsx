import { Meta, StoryObj } from "@storybook/react";

import { CardGiftCard } from "./CardGiftCard";

export default {
  title: "CardGiftCard",
  component: CardGiftCard,
} as Meta;

type Story = StoryObj<typeof CardGiftCard>;

export const WithItem: Story = {
  args: {
    name: "Carte cadeaux famille",
    closingDate: "2025-11-11",
    allowedAmount: 100,
    consumedAmount: 80,
  },
};
