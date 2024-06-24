// function login_click() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;


//     // Check username and password length
//     if (username.length < 4 || password.length < 8) {
//         alert("Username must be at least 4 characters long, and password must be at least 8 characters long.");
//         return;
//     }

//     // Check if user data exists in localStorage
//     let data = window.localStorage.getItem(username);
//     if (!data) {
//         alert("Invalid username or password.");
//         return;
//     }

//     const userData = JSON.parse(data);
//     console.log(userData);
//     // Check if username and password match and user type is correct
//     if (username === userData.username && password === userData.password) {
//         if (userData.userType === "admin") {
//             top.window.location.href = "../Admin/Navforadmin.html";
//         } else if (userData.userType === "user") {
//             top.window.location.href = "../User(1)/navforuser.html";
//         } else {
//             alert("Invalid user type.");
//         }
//     } else {
//         alert("Invalid username or password.");
//     }
//     alert("welcome " + userData.username);
// }
// for (let i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.getItem(localStorage.key(i)));
// }

