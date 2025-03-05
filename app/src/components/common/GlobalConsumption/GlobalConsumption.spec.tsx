import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GlobalConsumption } from "./GlobalConsumption";

describe("GlobalConsumption", () => {
  it("should render the correct text", () => {
    const { getByText } = render(
      <GlobalConsumption allowedAmount={100} consumedAmount={50} />
    );

    expect(getByText("50 € dépensé / 100 €")).toBeInTheDocument();
  });

  it("should render the ProgressBar component within GlobalConsumption component", () => {
    render(<GlobalConsumption allowedAmount={100} consumedAmount={50} />);

    const progressBar = screen.getByTestId("progressbar");
    expect(progressBar).toBeInTheDocument();
  });
});
