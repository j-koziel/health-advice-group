import { render, screen } from "@testing-library/react";
import { Footer } from "../../components/Footer";

test("renders footer links", () => {
  render(<Footer />);
  const linkElements = screen.getAllByRole("link");
  for (let linkElement of linkElements) {
    expect(linkElement).toBeInTheDocument();
  }
});
