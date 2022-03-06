import { render, screen } from "@testing-library/react";
import { Title } from "..";

describe("<Title />", () => {
  it("renders a title", () => {
    render(<Title title="My title" />);

    const heading = screen.getByRole("heading", {
      name: /My title/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
