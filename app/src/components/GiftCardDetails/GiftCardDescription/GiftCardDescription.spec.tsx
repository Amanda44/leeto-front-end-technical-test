import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GiftCardDescription } from "./GiftCardDescription";

describe("GiftCardDescription", () => {
  it("should render the description", () => {
    render(<GiftCardDescription description="Ceci est une description" />);
    expect(screen.getByText("Ceci est une description")).toBeInTheDocument();
  });
});
