function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function handleFormSubmit(formId, messageId) {
  const form = document.getElementById(formId);
  const messageEl = document.getElementById(messageId);
  if (!form || !messageEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      messageEl.textContent = "Please fill in the required fields.";
      messageEl.className = "form-message error";
      return;
    }
    messageEl.textContent = "Got it. We’ll email you when your invite is ready.";
    messageEl.className = "form-message success";
    form.reset();
  });
}

function initEnergyPills() {
  const pills = document.querySelectorAll(".pill");
  const output = document.getElementById("step-output");
  if (!pills.length || !output) return;

  const messages = {
    low: "10‑minute decompression walk + 5‑minute mobility. No guilt, just maintenance.",
    ok: "18‑minute quiet strength block + short breathing reset. Enough to feel progress, not drained.",
    high: "30‑minute focused session in your best zone: heavier sets, smart intensity, built off last week’s data."
  };

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const mode = pill.dataset.mode;
      output.textContent = messages[mode] || messages.low;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  handleFormSubmit("hero-form", "hero-form-message");
  handleFormSubmit("lead-form", "lead-form-message");
  initEnergyPills();
});
