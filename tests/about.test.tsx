import { findByText, render } from "@testing-library/react";

import About from "../src/pages/about";

test("sample suits", async () => {
  const { container } = render(<About />);
  expect(await findByText(container, "This is the about page")).toBeVisible();
});
