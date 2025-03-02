import { Meta, StoryObj } from "@storybook/react";

import { GlobalConsumption } from "./GlobalConsumption";

export default {
  title: "GlobalConsumption",
  component: GlobalConsumption,
} as Meta;

type Story = StoryObj<typeof GlobalConsumption>;

export const WithAmount: Story = {
  args: {
    allowedAmount: 240,
    consumedAmount: 49,
  },
};
