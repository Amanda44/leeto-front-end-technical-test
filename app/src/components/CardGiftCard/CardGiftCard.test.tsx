import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router";
import { describe, it, expect } from "vitest";
import { CardGiftCard } from "./CardGiftCard";
import { CardGiftCardProps } from "./types";

describe("CardGiftCard Component", () => {
  const giftCard: CardGiftCardProps = {
    id: 1,
    closingDate: "2023-12-31",
    name: "Carte Cadeau Musique",
    allowedAmount: 100,
    consumedAmount: 50,
  };

  it("should render correctly with given props", () => {
    const { getByText, getByTestId } = render(
      <Router>
        <CardGiftCard {...giftCard} />
      </Router>
    );

    expect(getByText("Carte Cadeau Musique")).toBeInTheDocument();
    expect(getByText("Clôturée il y a 1 an")).toBeInTheDocument();
    expect(getByTestId("global-consumption")?.firstChild?.textContent).toBe(
      "50 € dépensés / 100 €"
    );
    expect(getByTestId("global-consumption")?.lastChild?.textContent).toBe(
      "50%"
    );
  });

  it("should have the correct link", () => {
    const { container } = render(
      <Router>
        <CardGiftCard {...giftCard} />
      </Router>
    );

    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "/giftcard/1");
  });

  it("should handle click on card", () => {
    const { getByTestId } = render(
      <Router>
        <CardGiftCard {...giftCard} />
      </Router>
    );

    const card = getByTestId("card-giftcard");
    fireEvent.click(card);

    expect(window.location.pathname).toBe("/giftcard/1");
  });
});
