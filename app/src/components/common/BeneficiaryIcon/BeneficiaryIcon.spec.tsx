import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BeneficiaryIcon } from "./BeneficiaryIcon";

describe("BeneficiaryIcon", () => {
  it("should render user icon", () => {
    const { container } = render(<BeneficiaryIcon type="user" />);
    expect(container.textContent).toBe("🙋‍♂️");
  });

  it("should render companion icon", () => {
    const { container } = render(<BeneficiaryIcon type="companion" />);
    expect(container.textContent).toBe("💙");
  });

  it("should render child icon", () => {
    const { container } = render(<BeneficiaryIcon type="child" />);
    expect(container.textContent).toBe("👶");
  });

  it("should render default icon for unknown type", () => {
    const { container } = render(<BeneficiaryIcon type="" />);
    expect(container.textContent).toBe("?");
  });
});
