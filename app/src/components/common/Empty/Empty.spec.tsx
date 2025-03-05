import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Empty } from "./Empty";

describe("Empty component", () => {
  it("should render the label correctly", () => {
    const { getByText } = render(
      <Empty label="Pas de cartes cadeaux actuellement" />
    );
    expect(getByText("Pas de cartes cadeaux actuellement")).toBeInTheDocument();
  });
});
