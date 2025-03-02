import { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
} as Meta;

type Story = StoryObj<typeof ProgressBar>;

export const WithAmounts: Story = {
  args: {
    allowedAmount: 200,
    consumedAmount: 40,
  },
};
