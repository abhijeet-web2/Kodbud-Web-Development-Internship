const form = document.getElementById("app-form");
const statusMsg = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, email, phone, message } = form.elements;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  statusMsg.className = "";

  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !phone.value.trim() ||
    !message.value.trim()
  ) {
    statusMsg.textContent = "Error: Please fill out all required fields.";
    statusMsg.className = "error";
  } else if (!emailRegex.test(email.value.trim())) {
    statusMsg.textContent = "Error: Please enter a valid email address.";
    statusMsg.className = "error";
  } else {
    statusMsg.textContent = "Success: Your application has been sent!";
    statusMsg.className = "success";
    form.reset();
  }
});