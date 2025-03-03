import { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  title: "Loader",
  component: Loader,
} as Meta;

type Story = StoryObj<typeof Loader>;

export const Loading: Story = {};
