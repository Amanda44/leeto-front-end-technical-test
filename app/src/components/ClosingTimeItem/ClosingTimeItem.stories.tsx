import { Meta, StoryObj } from "@storybook/react";

import { ClosingTimeItem } from "./ClosingTimeItem";

export default {
  title: "ClosingTimeItem",
  component: ClosingTimeItem,
} as Meta;

type Story = StoryObj<typeof ClosingTimeItem>;

export const InDays: Story = {
  args: {
    closingDate: "2025-03-11",
  },
};

export const InMonths: Story = {
  args: {
    closingDate: "2025-05-11",
  },
};

export const InYears: Story = {
  args: {
    closingDate: "2027-11-11",
  },
};

export const Expired: Story = {
  args: {
    closingDate: "2024-11-11",
  },
};

export const WithoutItem: Story = {
  args: {
    closingDate: "",
  },
};
