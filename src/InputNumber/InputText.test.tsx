// @vitest-environment jsdom
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputNumber } from "./index";

describe("InputNumber", () => {
  it("calls the onChange callback handler", async () => {
    const onChange = vi.fn();

    render(<InputNumber value={0} onChange={onChange} />);

    await userEvent.type(screen.getByRole("textbox"), "1");

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("renders label correctly", async () => {
    render(<InputNumber value={0} label="InputNumber" />);
    expect(screen.getByText("InputNumber")).toBeDefined();
  });
});
