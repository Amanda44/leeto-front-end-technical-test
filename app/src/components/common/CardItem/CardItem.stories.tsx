import { Meta, StoryObj } from "@storybook/react";

import { CardItem } from "./CardItem";

export default {
  title: "CardItem",
  component: CardItem,
} as Meta;

type Story = StoryObj<typeof CardItem>;

const MyComponent = () => (
  <div>
    <h1>Title</h1> <p>Item Lorem Ipsum</p>
  </div>
);

export const WithItem: Story = {
  args: {
    item: <MyComponent />,
  },
};

export const WithoutItem: Story = {
  args: {
    item: undefined,
  },
};
