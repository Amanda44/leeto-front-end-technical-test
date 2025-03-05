import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CardBeneficiariesList } from "./CardBeneficiariesList";
import { Beneficiary } from "../../../types/Beneficiary";

describe("CardBeneficiariesList", () => {
  const beneficiaries: Beneficiary[] = [
    {
      id: 1,
      firstName: "Geralt",
      type: "user",
      consumption: {
        allowedAmount: 0,
        consumedAmount: 0,
      },
    },
    {
      id: 2,
      firstName: "Yennefer",
      type: "companion",
      consumption: {
        allowedAmount: 0,
        consumedAmount: 0,
      },
    },
  ];

  it("should display the correct title", () => {
    render(<CardBeneficiariesList beneficiaries={beneficiaries} />);
    const title = screen.getByText(
      "Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?"
    );
    expect(title).toBeInTheDocument();
  });

  it("should display the companion icon and firstName", () => {
    render(<CardBeneficiariesList beneficiaries={beneficiaries} />);
    const icon = screen.getByTestId(`icon-${beneficiaries[1].type}`);
    expect(icon.textContent).toBe("💙");
    expect(screen.getByText("Yennefer")).toBeInTheDocument();
  });
});
