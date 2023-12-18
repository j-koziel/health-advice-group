import { Menu } from "../../components/Menu";
import { Header } from "../../components/Header";
import { render, screen } from "@testing-library/react";
import { menuLinks } from "../../settings/links";

// test to see whether the menu links actually render
test("renders menu links", () => {
  render(<Header />);
  render(<Menu />);
  for (let link of menuLinks) {
    const menuLink = screen.getByText(link.label);
    expect(menuLink).toBeInTheDocument();
  }
});
