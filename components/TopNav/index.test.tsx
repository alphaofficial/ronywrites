import { render, screen } from "@testing-library/react";
import { TopNav } from "..";

describe("<TopNav />", () => {
  it("renders the topnav", () => {
    render(<TopNav />);
    const link = screen.getByText(/About/i);

    expect(link).toBeInTheDocument();
  });
});
