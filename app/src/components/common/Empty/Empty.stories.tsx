import { Meta, StoryObj } from "@storybook/react";

import { Empty } from "./Empty";

export default {
  title: "Empty",
  component: Empty,
} as Meta;

type Story = StoryObj<typeof Empty>;

export const EmptyStory: Story = {
  args: {
    label: "Pas de cartes cadeaux ici pour le moment. Revenez plus tard ! 👀",
  },
};
