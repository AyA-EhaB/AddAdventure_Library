function login(event) {
    event.preventDefault();

    const form = document.getElementById('loginform');
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
        if (data.status === 'success') {
            Swal.fire({
                title: "Good job!",
                text: `Login successful ... welcome ${data.username}!`,
                icon: "success",
                confirmButtonText: "To Home Page",
            }).then((result) => {
                if (result.isConfirmed) {
                    top.window.location.href = data.redirect_url;
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
