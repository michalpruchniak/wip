import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import mockAxios from "axios-mock-adapter";
import { MemoryRouter } from "react-router-dom";

import Register from "../Register";

/*
    Oczywiście nie pokrywałem aplikacji całkowicie testami,
    ponieważ nie jest to aplikacja produkcyjna, a jedynie chciałem pokazać,
    że potrafię pisać testy.
*/

test("render register page", () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );
  const header = screen.getByText("Zarejestruj się");
  expect(header).toBeInTheDocument();
});

test("check that after select job form will change", async () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );

  const selectElement = screen.getByLabelText("Stanowisko");
  fireEvent.change(selectElement, { target: { value: "2" } });
  const programmingLanguage = screen.getByText("Języki programowania");

  await waitFor(() => {
    expect(programmingLanguage).toBeInTheDocument();
  });

  fireEvent.change(selectElement, { target: { value: "3" } });
  const methodology = screen.getByText("Metodologie prowadzenia projektów");

  await waitFor(() => {
    expect(methodology).toBeInTheDocument();
  });
});
