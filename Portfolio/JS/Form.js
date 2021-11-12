const emailInput = document.getElementById('Email');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (!emailInput.value.match(emailRegex)) {
  alert('Invalid email address.');
}