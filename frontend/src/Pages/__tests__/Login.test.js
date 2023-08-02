import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../Login";

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
