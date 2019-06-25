const firstNameInput = document.getElementById('firstname').value;
const lastNameInput = document.getElementById('lastname').value;
const emailInput = document.getElementById('email').value;
const userNameInput = document.getElementById('username').value;


function populateStorage() {
  localStorage.setItem('firstname', firstNameInput);
  localStorage.setItem('lastname', lastNameInput);
  localStorage.setItem('email', emailInput);
  localStorage.setItem('username', userNameInput);
    
}
populateStorage();