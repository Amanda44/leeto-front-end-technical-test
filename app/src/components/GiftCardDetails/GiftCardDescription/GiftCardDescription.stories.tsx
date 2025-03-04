import { Meta, StoryObj } from "@storybook/react";

import { GiftCardDescription } from "./GiftCardDescription";

export default {
  title: "GiftCardDescription",
  component: GiftCardDescription,
} as Meta;

type Story = StoryObj<typeof GiftCardDescription>;

export const WithItem: Story = {
  args: {
    description:
      "Description Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam",
  },
};

export const WithoutItem: Story = {
  args: {
    description: undefined,
  },
};
