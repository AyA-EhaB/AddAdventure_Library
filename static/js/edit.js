function editbook(event) {
    event.preventDefault();

    const form = document.getElementById('editform');
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
                    text: "Book details changed successful!!",
                    icon: "success",
                    confirmButtonText: "To Dashboard",
                }).then((result) => {
                    if (result.isConfirmed) {
                        top.window.location.href = data.url;
                    }
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