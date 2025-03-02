import { Meta, StoryObj } from "@storybook/react";

import { BackButton } from "./BackButton";

export default {
  title: "BackButton",
  component: BackButton,
} as Meta;

type Story = StoryObj<typeof BackButton>;

export const WithLabel: Story = {
  args: {
    onClick: () => console.log("BackButton clicked"),
    label: "Back",
  },
};

export const WithoutLabel: Story = {
  args: {
    onClick: () => console.log("BackButton clicked"),
    label: "",
  },
};
