function deletebook(event) {
    event.preventDefault();

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!"
    }).then((result) => {
        if (result.isConfirmed) {
            const form = document.getElementById('deleteform');
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
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                            confirmButtonText: "To dashboard",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = data.url;
                            }
                        });
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "Something went wrong!",
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
    });
}
