function signupValidation() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;
  const userType = document.querySelector('input[name="user_type"]:checked').value;


  if (username === "") {
    alert("Please enter a username.");
    return false;
  }

  // for (let i = 0; i < localStorage.length; i++) {
  //   let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
  //   if (user.username === username) {
  //     alert("Already registed Username.");
  //     return false;
  //   }
  // }

  //if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password === "") {
    alert("Please enter a password.");
    return false;
  }

  // if password is at least 8 characters
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  // if password and confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }



  // Save data to local storage
  //missing hashed password function
  // const userData = {
  //   username,
  //   email,
  //   password,
  //   userType
  // };
  // console.log(userData);
  // localStorage.setItem(username, JSON.stringify(userData));

  // Display success message or redirect to another page
  alert("Registration successful!");

  return true;
}

// function to_login() {
//   if (signupValidation()) {
//     window.location.href = "../login.html";
//   }
// }

//event listener controls what happens after form submission
// const signupForm = document.querySelector('form');
// signupForm.addEventListener('submit', signupValidation);
