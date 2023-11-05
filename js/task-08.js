const form = document.querySelector('.login-form');

const sendForm = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert("Wszystkie pola muszą być wypełnione!");
  } else {
    const formValues = {};
    for (const input of event.currentTarget.elements) {
      if (input.type !== "submit") {
        formValues[input.name] = input.value;
      }
    }
    console.log("Wartości formularza:", formValues);
    event.currentTarget.reset();
  }
};

form.addEventListener('submit', sendForm);