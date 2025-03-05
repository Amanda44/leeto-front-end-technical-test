import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BackButton } from "./BackButton";

describe("BackButton", () => {
  it("should render the BackButton component", () => {
    render(<BackButton onClick={() => {}} label="Retour" />);
    const buttonElement = screen.getByAltText("go back button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call onClick when the button is clicked", () => {
    const handleClick = vi.fn();
    render(<BackButton onClick={handleClick} label="Retour" />);
    const buttonElement = screen.getByAltText("go back button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should display the label when provided", () => {
    render(<BackButton onClick={() => {}} label="Retour" />);
    const labelElement = screen.getByText("Retour");
    expect(labelElement).toBeInTheDocument();
  });

  it("should not display the label on small screens", () => {
    render(<BackButton onClick={() => {}} label="Retour" />);
    const labelElement = screen.getByText("Retour");
    expect(labelElement).toHaveClass("hidden");
  });
});
