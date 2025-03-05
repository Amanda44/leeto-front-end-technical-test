import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ValidityTimeItem } from "./ValidityTimeItem";

/* TODO: mock locale so dates are formatted in french  */
describe("ValidityTimeItem", () => {
  it("should render the formatted opening and closing dates", () => {
    const { getByText } = render(
      <ValidityTimeItem openingDate="01-01-2023" closingDate="12-31-2023" />
    );

    expect(getByText("Jan 1, 2023")).toBeInTheDocument();
    expect(getByText("Dec 31, 2023")).toBeInTheDocument();
  });

  it("should render '?' for invalid opening date", () => {
    const { getByText } = render(
      <ValidityTimeItem openingDate="invalid-date" closingDate="2023-12-31" />
    );

    expect(getByText("?")).toBeInTheDocument();
    expect(getByText("Dec 31, 2023")).toBeInTheDocument();
  });

  it("should render '?' for invalid closing date", () => {
    const { getByText } = render(
      <ValidityTimeItem openingDate="2023-01-01" closingDate="invalid-date" />
    );

    expect(getByText("Jan 1, 2023")).toBeInTheDocument();
    expect(getByText("?")).toBeInTheDocument();
  });
});
