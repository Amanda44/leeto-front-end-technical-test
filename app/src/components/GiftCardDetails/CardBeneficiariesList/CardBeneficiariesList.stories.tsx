import { Meta, StoryObj } from "@storybook/react";

import { CardBeneficiariesList } from "./CardBeneficiariesList";

export default {
  title: "CardBeneficiariesList",
  component: CardBeneficiariesList,
} as Meta;

type Story = StoryObj<typeof CardBeneficiariesList>;

export const OneUserView: Story = {
  args: {
    beneficiaries: [
      {
        id: 1,
        type: "user",
        firstName: "Geralt",
        consumption: {
          allowedAmount: 50,
          consumedAmount: 30,
        },
      },
    ],
  },
};

export const OneBeneficiaryView: Story = {
  args: {
    beneficiaries: [
      {
        id: 1,
        type: "companion",
        firstName: "Yennefer",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
    ],
  },
};

export const TwoBeneficiariesView: Story = {
  args: {
    beneficiaries: [
      {
        id: 1,
        type: "companion",
        firstName: "Yennefer",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
      {
        id: 2,
        type: "child",
        firstName: "Cirilla",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
    ],
  },
};

export const ThreeBeneficiariesView: Story = {
  args: {
    beneficiaries: [
      {
        id: 1,
        type: "user",
        firstName: "Geralt",
        consumption: {
          allowedAmount: 50,
          consumedAmount: 30,
        },
      },
      {
        id: 2,
        type: "companion",
        firstName: "Yennefer",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
      {
        id: 3,
        type: "child",
        firstName: "Cirilla",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
    ],
  },
};

export const FourBeneficiariesView: Story = {
  args: {
    beneficiaries: [
      {
        id: 1,
        type: "user",
        firstName: "Geralt",
        consumption: {
          allowedAmount: 50,
          consumedAmount: 30,
        },
      },
      {
        id: 2,
        type: "companion",
        firstName: "Yennefer",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
      {
        id: 3,
        type: "child",
        firstName: "Cirilla",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
      {
        id: 4,
        type: "child",
        firstName: "Jaskier",
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
    ],
  },
};
