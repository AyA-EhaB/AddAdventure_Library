function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function confirmBorrow(bookId, personId) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You are about to borrow this book.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, borrow it!',
        cancelButtonText: 'No, cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`{% url 'borrow_book' book_id=0 person_id=0 %}`.replace('0', bookId).replace('0', personId), {
                method: 'POST',
                headers: {
                    'X-CSRFToken': getCookie('csrftoken'),
                }
            })
            .then(response => {
                if (response.ok) {
                    Swal.fire(
                        'Borrowed!',
                        'The book has been borrowed successfully.',
                        'success'
                    ).then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire(
                        'Error!',
                        'Something went wrong. Please try again later.',
                        'error'
                    );
                }
            })
            .catch((error) => {
                Swal.fire(
                    'Error!',
                    'Something went wrong. Please try again later.',
                    'error'
                );
            });
        }
    });
}