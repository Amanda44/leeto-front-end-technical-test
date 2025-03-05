import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Loader } from "./Loader";

describe("Loader component", () => {
  it("should render the loader with spinning animation and text", () => {
    render(<Loader />);

    const loaderElement = screen.getByTestId("loader");
    const textElement = screen.getByText("Chargement...");

    expect(loaderElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(loaderElement.firstChild).toHaveClass("animate-spin");
  });
});
