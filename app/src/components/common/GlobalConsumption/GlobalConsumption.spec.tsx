import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GlobalConsumption } from "./GlobalConsumption";

describe("GlobalConsumption", () => {
  it("should render the correct text", () => {
    render(<GlobalConsumption allowedAmount={100} consumedAmount={50} />);

    expect(
      screen.getByTestId("global-consumption")?.firstChild?.textContent
    ).toBe("50 € dépensés / 100 €");
  });

  it("should render the ProgressBar component within GlobalConsumption component", () => {
    render(<GlobalConsumption allowedAmount={100} consumedAmount={50} />);

    const progressBar = screen.getByTestId("progressbar");
    expect(progressBar).toBeInTheDocument();
  });
});
