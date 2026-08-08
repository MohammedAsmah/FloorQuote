import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { Calculator } from "./Calculator";

describe("Calculator", () => {
  it("renders a homepage return link for the calculator flow", () => {
    const markup = renderToStaticMarkup(<Calculator />);

    expect(markup).toContain("FloorQuote");
    expect(markup).toContain("Return to FloorQuote home");
  });
});
