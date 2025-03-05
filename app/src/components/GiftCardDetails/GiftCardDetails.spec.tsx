import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GiftCardDetails } from "./GiftCardDetails";
import { GiftCard } from "../../types/GiftCard";

const giftCard: GiftCard = {
  id: 0,
  state: "active",
  name: "Carte Cadeau 'Voyage dans la Creuse'",
  openingDate: "2023-01-01",
  closingDate: "2023-12-31",
  allowedAmount: 100,
  consumedAmount: 50,
  description:
    "Un magnifique voyage detox dans la diagonale du vide pour déconnecter",
  beneficiaries: [
    {
      id: 1,
      firstName: "Geralt",
      type: "user",
      consumption: {
        allowedAmount: 75,
        consumedAmount: 25,
      },
    },
    {
      id: 2,
      firstName: "Yennefer",
      type: "companion",
      consumption: {
        allowedAmount: 25,
        consumedAmount: 25,
      },
    },
  ],
};

describe("GiftCardDetails", () => {
  it("should render the giftcard name", () => {
    render(<GiftCardDetails {...giftCard} />);
    const nameElement = screen.getByText(
      /Carte Cadeau 'Voyage dans la Creuse'/i
    );
    expect(nameElement).toBeInTheDocument();
  });

  it("should render the consumed amount", () => {
    render(<GiftCardDetails {...giftCard} />);
    const consumedAmountElement = screen.getByText(/50 €/i);
    expect(consumedAmountElement).toBeInTheDocument();
  });

  it("should render the gift card description", () => {
    render(<GiftCardDetails {...giftCard} />);
    const descriptionElement = screen.getByText(
      /Un magnifique voyage detox dans la diagonale du vide pour déconnecter/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should render the beneficiaries list", () => {
    render(<GiftCardDetails {...giftCard} />);
    const beneficiary1 = screen.getAllByText(/Vous-même/i);
    const beneficiary2 = screen.getAllByText(/Yennefer/i);
    expect(beneficiary1).toBeDefined();
    expect(beneficiary2).toBeDefined();
  });
});
