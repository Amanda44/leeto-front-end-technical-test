import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BeneficiaryConsumption } from "./BeneficiaryConsumption";
import { BeneficiaryConsumptionProps } from "./types";

describe("BeneficiaryConsumption", () => {
  const beneficiary: BeneficiaryConsumptionProps = {
    allowedAmount: 100,
    consumedAmount: 50,
    firstName: "Geralt",
    type: "user",
  };

  it("should render the formatted name and consumption details", () => {
    render(<BeneficiaryConsumption {...beneficiary} />);

    const textElement = screen.getByText(/Vous-même • 50 € \/ 100 €/i);
    expect(textElement).toBeInTheDocument();
  });

  it("should render the ProgressBar component within BeneficiaryConsumption component", () => {
    render(<BeneficiaryConsumption {...beneficiary} />);

    const progressBarElement = screen.getByTestId("progressbar");
    expect(progressBarElement).toBeInTheDocument();
  });
});
