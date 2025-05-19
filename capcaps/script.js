function toggleRegister() {
    const loginBox = document.querySelector('.form-box');
    const registerBox = document.getElementById('registerBox');
    loginBox.classList.toggle('hidden');
    registerBox.classList.toggle('hidden');
  }
  
  function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    if (username && password) {
      localStorage.setItem(username, password);
      alert('Registration successful. You can now login.');
      toggleRegister();
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password.');
    }
  }
  