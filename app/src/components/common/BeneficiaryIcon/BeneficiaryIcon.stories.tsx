import { Meta, StoryObj } from "@storybook/react";

import { BeneficiaryIcon } from "./BeneficiaryIcon";

export default {
  title: "BeneficiaryIcon",
  component: BeneficiaryIcon,
} as Meta;

type Story = StoryObj<typeof BeneficiaryIcon>;

export const WithUserIcon: Story = {
  args: {
    type: "user",
  },
};

export const WithCompanionIcon: Story = {
  args: {
    type: "companion",
  },
};

export const WithChildIcon: Story = {
  args: {
    type: "child",
  },
};

export const WithoutIcon: Story = {
  args: {
    type: undefined,
  },
};
