function handleSubmit(e) {
    e.preventDefault();
    const data = {};
    const form = document.querySelector('form');
    // const btn = document.querySelector('input[type="submit"]');
    // console.log(form, btn);
    // btn.disabled = true;
    const formData = new FormData(form);
    for (var pair of formData.entries()) {
        // console.log(pair[0] + ': ' + pair[1]);
        data[pair[0]] = pair[1];
    }
    // console.log('data', data);
    fetch(
        // 'https://script.google.com/macros/s/AKfycbwGEWitAqhpg1AcuykxSnxSxn8cVwt4H8ew82TkL7xBQ3L2M8OyupwLbuue3CqLP1C1/exec',
        'https://script.google.com/macros/s/AKfycby3YrCCdfxHyTQpR3EZwElZg2gI4IR01ztWcIJYKA96fBFS6R_jjY2NxgAE352hJa0/exec',
        // 'https://script.google.com/macros/s/AKfycbzRE7VQdFRLXrO7x6GQ5cOGLKSihbvWWQKKTAZo8hE/dev',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(data),
        }
    )
        .then((data) => data.json())
        .then((result) => {
            // console.log(result);
        })
        .catch((err) => console.log(err.message))
        .finally(() => {
            form.reset();
            // btn.disabled = false;
        });
}

window.onload = function () {
    var form = document.querySelector('form');
    form.onsubmit = handleSubmit.bind(form);
};

function closeModal(id) {
    document.querySelector('#modal' + id).style.display = 'none';
}

function openModal(id) {
    console.log('see more');
    document.querySelector('#modal' + id).style.display = 'grid';
}
