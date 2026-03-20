function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function handleFormSubmit(formId, messageId) {
  const form = document.getElementById(formId);
  const messageEl = document.getElementById(messageId);

  if (!form || !messageEl) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      messageEl.textContent = "Please fill in all required fields.";
      messageEl.className = "form-message error";
      return;
    }

    messageEl.textContent = "Thanks! Your application has been received.";
    messageEl.className = "form-message success";

    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setCurrentYear();
  handleFormSubmit("hero-form", "hero-form-message");
  handleFormSubmit("lead-form", "lead-form-message");
});
