import Message from "../../../Components/Message";
import RegisterForm from "../_registerForm/_registerForm";

const UpdateForm = ({ user, errorGet }) => {
  return (
    <>
      {errorGet === true ? (
        <Message>
          Wystąpił błąd. Prawdopodobnie ten user nie istnieje, albo nie masz
          uprawnień do przeglądania tej strony.
        </Message>
      ) : (
        <RegisterForm
          url={`update/${user?.id}`}
          user={user}
          resetForm={false}
          successMessage="Konto zostało poprawnie zaktualizowane."
          errorMessage="Wystąpił nieoczekiwany błąd."
          buttonText="Zaktualizuj"
          header={`Edytuj konto ${user?.profile.name} ${user?.profile.lastname}`}
        />
      )}
    </>
  );
};

export default UpdateForm;
