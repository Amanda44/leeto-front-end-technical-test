import { Meta, StoryObj } from "@storybook/react";

import { BeneficiaryConsumption } from "./BeneficiaryConsumption";

export default {
  title: "BeneficiaryConsumption",
  component: BeneficiaryConsumption,
} as Meta;

type Story = StoryObj<typeof BeneficiaryConsumption>;

export const UserType: Story = {
  args: {
    allowedAmount: 100,
    consumedAmount: 50,
    firstName: "John",
    type: "user",
  },
};

export const CompanionType: Story = {
  args: {
    allowedAmount: 180,
    consumedAmount: 90,
    firstName: "Johnny",
    type: "companion",
  },
};

export const ChildType: Story = {
  args: {
    allowedAmount: 16,
    consumedAmount: 2,
    firstName: "John Jr.",
    type: "child",
  },
};
