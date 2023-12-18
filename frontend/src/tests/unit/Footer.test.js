import { render, screen } from "@testing-library/react";
import { Footer } from "../../components/Footer";
import { footerLinks } from "../../settings/links";
import { mockIntersectionObserver } from "jsdom-testing-mocks";

// Somewhere im using intersection observer but have no clue where
mockIntersectionObserver();

// This will test whether the footer header text actually appears on the footer
test("renders footer header", () => {
  // window.IntersectionObserver = mockIntersectionObserver;
  render(<Footer />);
  const headerFooterText = "HealthAdviceGroup";
  for (let letter of headerFooterText) {
    const footerHeaderEls = screen.getAllByText(letter);
    for (let el of footerHeaderEls) {
      expect(el).toBeInTheDocument();
    }
  }
});

// This will test whether the footer links actually appear on the footer
test("renders footer links", () => {
  // window.IntersectionObserver = mockIntersectionObserver;
  render(<Footer />);
  for (let link of footerLinks) {
    const footerLink = screen.getByText(link.label);
    expect(footerLink).toBeInTheDocument();
  }
});
