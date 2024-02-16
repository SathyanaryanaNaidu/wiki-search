import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../index";
import { HEADING } from "@/src/constants/labels";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByText(HEADING);
    expect(heading).toBeInTheDocument();
  });
});
