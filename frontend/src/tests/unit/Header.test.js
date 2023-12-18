import { Header } from "../../components/Header";
import { render, screen } from "@testing-library/react";

// Test to see whether the header title actually appears on the header
test("renders page title in header", () => {
  render(<Header />);
  const footerHeader = screen.getByText("Health Advice Group");
  expect(footerHeader).toBeInTheDocument();
});
