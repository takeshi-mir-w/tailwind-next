import { findByText, render } from "@testing-library/react";

import Index from "../src/pages/index";

test("sample suits", async () => {
  const { container } = render(<Index />);
  expect(await findByText(container, "Hello Next.js 👋")).toBeVisible();
});
