const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const passwordValidate = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

export const Validate = (inputs) => {
  const errors = {};
  if (!regexEmail.test(inputs.userName)) {
    errors.userName = "Debe ser un email";
  }
  if (!inputs.userName) {
    errors.userName = "Este campo no puede estar vacio";
  }
  if (inputs.userName.length > 35) {
    errors.userName = "No puede tener mas de 35 caracteres";
  }

  if (!passwordValidate.test(inputs.password)) {
    errors.password = "Debe contener minimo un número";
  }
  if (inputs.password.length < 6 || inputs.password.length > 20) {
    errors.password = "Debe tener mínimo 6 y máximo 20 caracteres";
  }
  return errors;
};
