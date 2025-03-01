import { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
} as Meta;

type Story = StoryObj<typeof ProgressBar>;

export const ListView: Story = {
  args: {
    viewType: "list",
    beneficiary: {
      id: 1,
      type: "user",
      firstName: "John",
      consumption: {
        allowedAmount: 200,
        consumedAmount: 40,
      },
    },
  },
};

export const DetailsView: Story = {
  args: {
    viewType: "details",
    beneficiary: {
      id: 2,
      type: "companion",
      firstName: "Jane",
      consumption: {
        allowedAmount: 48,
        consumedAmount: 1,
      },
    },
  },
};
