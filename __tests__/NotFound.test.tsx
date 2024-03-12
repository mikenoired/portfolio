import NotFound from "@/app/not-found";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("NotFound", () => {
  it("should render NotFound", () => {
    render(<NotFound />);
    const notFound = screen.getByText("404");
    expect(notFound).toBeInTheDocument();
  });
});
