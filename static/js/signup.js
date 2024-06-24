function signup(event) {
  event.preventDefault();

  const form = document.getElementById('signupform');
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    headers: {
      'X-CSRFToken': formData.get('csrfmiddlewaretoken'),
    },
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'success') {
        Swal.fire({
          title: "Good job!",
          text: "sign successful!!",
          icon: "success",
          confirmButtonText: "To Login Page",
        }).then((result) => {
          if (result.isConfirmed) {
            top.window.location.href = data.url;
          }
        });
      } else {
        Swal.fire({
          title: "Error",
          text: data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    })
    .catch(error => {
      Swal.fire({
        title: "Error",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    });
}

console.log("work!");