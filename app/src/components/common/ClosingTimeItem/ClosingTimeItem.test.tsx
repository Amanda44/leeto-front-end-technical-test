import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ClosingTimeItem } from "./ClosingTimeItem";
import { DateTime } from "luxon";

describe("ClosingTimeItem", () => {
  it("should display 'Se clôture dans X jours' when the closing date is within 7 days", () => {
    const closingDate = DateTime.now().plus({ days: 3 }).toISO();
    const { getByText } = render(<ClosingTimeItem closingDate={closingDate} />);
    expect(getByText(/Se clôture dans 3 jours/)).toBeInTheDocument();
  });

  it("should display 'Se clôture dans X semaines' when the closing date is within 30 days", () => {
    const closingDate = DateTime.now().plus({ days: 14 }).toISO();
    const { getByText } = render(<ClosingTimeItem closingDate={closingDate} />);
    expect(getByText(/Se clôture dans 2 semaines/)).toBeInTheDocument();
  });

  it("should display 'Se clôture dans X mois' when the closing date is within a year", () => {
    const closingDate = DateTime.now().plus({ months: 5 }).toISO();
    const { getByText } = render(<ClosingTimeItem closingDate={closingDate} />);
    expect(getByText(/Se clôture dans 5 mois/)).toBeInTheDocument();
  });

  it("should display 'Se clôture dans X ans' when the closing date is more than a year away", () => {
    const closingDate = DateTime.now().plus({ years: 2 }).toISO();
    const { getByText } = render(<ClosingTimeItem closingDate={closingDate} />);
    expect(getByText(/Se clôture dans 2 ans/)).toBeInTheDocument();
  });

  it("should display 'Clôturée il y a X jours' when the closing date was within the last 7 days", () => {
    const closingDate = DateTime.now().minus({ days: 3 }).toISO();
    const { getByText } = render(<ClosingTimeItem closingDate={closingDate} />);
    expect(getByText(/Clôturée il y a 3 jours/)).toBeInTheDocument();
  });

  it("should display 'Clôturée il y a X semaines' when the closing date was within the last 30 days", () => {
    const closingDate = DateTime.now().minus({ days: 14 }).toISO();
    const { getByText } = render(<ClosingTimeItem closingDate={closingDate} />);
    expect(getByText(/Clôturée il y a 2 semaines/)).toBeInTheDocument();
  });

  it("should display 'Clôturée il y a X mois' when the closing date was within the last year", () => {
    const closingDate = DateTime.now().minus({ months: 5 }).toISO();
    const { getByText } = render(<ClosingTimeItem closingDate={closingDate} />);
    expect(getByText(/Clôturée il y a 5 mois/)).toBeInTheDocument();
  });

  it("should display 'Clôturée il y a X ans' when the closing date was more than a year ago", () => {
    const closingDate = DateTime.now().minus({ years: 2 }).toISO();
    const { getByText } = render(<ClosingTimeItem closingDate={closingDate} />);
    expect(getByText(/Clôturée il y a 2 ans/)).toBeInTheDocument();
  });

  it("should display '?' when the closing date is invalid", () => {
    const closingDate = "invalid-date";
    const { getByText } = render(<ClosingTimeItem closingDate={closingDate} />);
    expect(getByText("?")).toBeInTheDocument();
  });
});
