document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(loginForm);

    let isFormValid = true;
    for (const [name, value] of formData.entries()) {
      if (value.trim() === "") {
        isFormValid = false;
        alert("Wszystkie pola muszą być wypełnione!");
        break;
      }
    }

    if (isFormValid) {
      const formValues = {};
      formData.forEach((value, name) => {
        formValues[name] = value;
      });

      console.log("Wartości formularza:", formValues);

      loginForm.reset();
    }
  });
});