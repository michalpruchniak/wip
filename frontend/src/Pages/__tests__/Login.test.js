import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../Login";
import axios from "axios";
import mockAxios from "axios-mock-adapter";

import jwt from "../../../__mocks__/jwt.json";
import invalidCredentials from "../../../__mocks__/invalidCredentials.json";

const axiosMock = new mockAxios(axios);

test("render form page", () => {
  render(<Login />);
  const header = screen.getByText(/Zaloguj się/i);
  expect(header).toBeInTheDocument();
});

test("check login validation", async () => {
  render(<Login />);

  const submitButton = screen.getByRole("submit", { value: "Zaloguj" });
  fireEvent.click(submitButton);

  const errorAlertEmail = await waitFor(() =>
    screen.getByText("Adres email jest wymagany.")
  );

  const errorAlertPassword = await waitFor(() =>
    screen.getByText("Hasło jest wymagane.")
  );

  expect(errorAlertEmail).toBeInTheDocument();
  expect(errorAlertPassword).toBeInTheDocument();

  const emailInput = screen.getByLabelText("Adres email");
  const passwordInput = screen.getByLabelText("Hasło");

  fireEvent.change(emailInput, { target: { value: "invalid" } });
  fireEvent.change(passwordInput, { target: { value: "i" } });
  fireEvent.click(submitButton);

  const errorAlertEmailPattern = await waitFor(() =>
    screen.getByText("To nie jest poprawny format adresu email.")
  );

  const errorAlertPasswordPattern = await waitFor(() =>
    screen.getByText("Minimalna długość hasła to 4 znaki.")
  );

  expect(errorAlertEmailPattern).toBeInTheDocument();
  expect(errorAlertPasswordPattern).toBeInTheDocument();
});

test("correclty logged-in", async () => {
  axiosMock.onPost("/login").reply(200, { jwt: jwt.jwt });
  render(<Login />);
  const emailInput = screen.getByLabelText("Adres email");
  const passwordInput = screen.getByLabelText("Hasło");
  const submitButton = screen.getByRole("submit", { value: "Zaloguj" });

  fireEvent.change(emailInput, { target: { value: "admin@admin.pl" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    screen.getByText("Udało Ci się zalogować na konto.");
  });
});

test("wrong creditionals", async () => {
  axiosMock.onPost("/login").reply(400, { error: invalidCredentials.error });

  render(<Login />);
  const emailInput = screen.getByLabelText("Adres email");
  const passwordInput = screen.getByLabelText("Hasło");
  const submitButton = screen.getByRole("submit", { value: "Zaloguj" });

  fireEvent.change(emailInput, { target: { value: "admin@admin.pl" } });
  fireEvent.change(passwordInput, { target: { value: "hello world" } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(
      screen.getByText(
        "Nie udało się zalogować. Prawdopodobnie podałeś zły adres email lub hasło."
      )
    ).toBeInTheDocument();
  });
});
