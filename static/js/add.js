// static/js/add.js
function addbook(event) {
  event.preventDefault();

  const form = document.getElementById('addform');
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
          text: "Book added!!",
          icon: "success",
          confirmButtonText: "To Dashboard",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = data.url;
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
