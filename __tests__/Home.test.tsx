import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should render navigation", async () => {
    render(await Home());
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
  it("should render links", async () => {
    render(await Home());
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });
  it("should render video", async () => {
    render(await Home());
    const video = screen.getByRole("presentation");
    expect(video).toBeInTheDocument();
  });
});
