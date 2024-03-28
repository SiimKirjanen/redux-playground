import React from "react";

import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test/render-with-providers";
import Counter from ".";
import { setupStore } from "../../store";
import { increment } from "../../slices/counter/counterSlice";

describe("Counter", () => {
  it("should render counter", () => {
    renderWithProviders(<Counter />);

    screen.getByText("Counter");
    screen.getByRole("button", {
      name: /increment/i,
    });
    screen.getByRole("button", {
      name: /decrement/i,
    });
  });

  it("should increment counter", () => {
    const store = setupStore();
    store.dispatch(increment());

    renderWithProviders(<Counter />, { store });

    fireEvent.click(screen.getByRole("button", { name: /increment/i }));
    fireEvent.click(screen.getByRole("button", { name: /increment/i }));

    screen.getByText("3");
  });

  it("should decrement counter", () => {
    renderWithProviders(<Counter />, {
      preloadedState: {
        counter: {
          value: 5,
        },
      },
    });

    fireEvent.click(screen.getByRole("button", { name: /decrement/i }));
    fireEvent.click(screen.getByRole("button", { name: /decrement/i }));

    screen.getByText("3");
  });
});
