const baseLinks = [
  { path: "/sign-in", label: "Sign In" },
  { path: "/sign-up", label: "Sign Up" },
  { path: "/location-search", label: "Weather" },
  { path: "/location-search", label: "Air Quality" },
  { path: "/about-us", label: "About Us" },
  { path: "/articles", label: "Articles" },
];

export const menuLinks = [...baseLinks];
export const footerLinks = [
  ...baseLinks,
  { path: "/tncs", label: "Terms & Conditions" },
];
