import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CardConsumptionTracking } from "./CardConsumptionTracking";
import { Beneficiary } from "../../../types/Beneficiary";

describe("CardConsumptionTracking", () => {
  const beneficiaries: Beneficiary[] = [
    {
      id: 1,
      firstName: "Geralt",
      type: "user",
      consumption: {
        allowedAmount: 100,
        consumedAmount: 50,
      },
    },
    {
      id: 2,
      firstName: "Yennefer",
      type: "companion",
      consumption: {
        allowedAmount: 200,
        consumedAmount: 150,
      },
    },
  ];

  it("should render correctly with multiple beneficiaries", () => {
    render(<CardConsumptionTracking beneficiaries={beneficiaries} />);

    expect(screen.getByText(/Vous-même • 50 € \/ 100 €/i)).toBeInTheDocument();
    expect(screen.getByText(/Yennefer • 150 € \/ 200 €/i)).toBeInTheDocument();
  });
});
