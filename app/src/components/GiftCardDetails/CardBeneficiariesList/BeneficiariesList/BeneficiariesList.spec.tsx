import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BeneficiariesList } from "./BeneficiariesList";
import { Beneficiary } from "../../../../types/Beneficiary";

describe("BeneficiariesList", () => {
  it("renders 'Vous-même' when beneficiary is user type", () => {
    const beneficiaries: Beneficiary[] = [
      {
        type: "user",
        firstName: "Geralt",
        id: 0,
        consumption: {
          allowedAmount: 0,
          consumedAmount: 0,
        },
      },
    ];

    render(<BeneficiariesList beneficiaries={beneficiaries} />);

    expect(screen.getByText("Vous-même êtes éligible.")).toBeInTheDocument();
  });

  it("renders multiple beneficiaries correctly", () => {
    const beneficiaries: Beneficiary[] = [
      {
        type: "user",
        firstName: "Geralt",
        id: 0,
        consumption: {
          allowedAmount: 0,
          consumedAmount: 0,
        },
      },
      {
        type: "companion",
        firstName: "Yennefer",
        id: 0,
        consumption: {
          allowedAmount: 0,
          consumedAmount: 0,
        },
      },
      {
        type: "child",
        firstName: "Jaskier",
        id: 0,
        consumption: {
          allowedAmount: 0,
          consumedAmount: 0,
        },
      },
    ];

    render(<BeneficiariesList beneficiaries={beneficiaries} />);

    expect(screen.getByText("Vous-même,")).toBeInTheDocument();
    expect(screen.getByText("Yennefer et")).toBeInTheDocument();
    expect(screen.getByText("Jaskier")).toBeInTheDocument();
    expect(screen.getByText("sont éligibles.")).toBeInTheDocument();
  });

  it("renders beneficiary icons correctly", () => {
    const beneficiaries: Beneficiary[] = [
      {
        type: "user",
        firstName: "Geralt",
        id: 0,
        consumption: {
          allowedAmount: 0,
          consumedAmount: 0,
        },
      },
      {
        type: "companion",
        firstName: "Yennefer",
        id: 0,
        consumption: {
          allowedAmount: 0,
          consumedAmount: 0,
        },
      },
    ];

    render(<BeneficiariesList beneficiaries={beneficiaries} />);

    const icon = screen.getByTestId(`icon-${beneficiaries[0].type}`);
    expect(icon.textContent).toBe("🙋‍♂️");
  });
});
