import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
  it("should render the progressbar with correct percentage", () => {
    render(<ProgressBar allowedAmount={100} consumedAmount={50} />);
    const progressBar = screen.getByTestId("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("should render 100% when consumedAmount is greater than allowedAmount", () => {
    render(<ProgressBar allowedAmount={100} consumedAmount={150} />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("should render 0% when consumedAmount is less than 0", () => {
    render(<ProgressBar allowedAmount={100} consumedAmount={-50} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("should render the correct width for the progress bar", () => {
    render(<ProgressBar allowedAmount={100} consumedAmount={75} />);
    const progressBar = screen.getByTestId("progressbar").firstChild;
    expect(progressBar?.firstChild).toHaveStyle("width: 75%");
  });
});
