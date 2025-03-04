import { Meta, StoryObj } from "@storybook/react";

import { ValidityTimeItem } from "./ValidityTimeItem";

export default {
  title: "ValidityTimeItem",
  component: ValidityTimeItem,
} as Meta;

type Story = StoryObj<typeof ValidityTimeItem>;

export const WithItem: Story = {
  args: {
    openingDate: "2025-02-03",
    closingDate: "2025-11-11",
  },
};

export const WithoutItem: Story = {
  args: {
    openingDate: "",
    closingDate: "",
  },
};
