function handleSubmit(e) {
    e.preventDefault();
    fetch(
        'https://script.google.com/macros/s/AKfycbxbv-9WrGVrNYJ5QPDKO26b0Gxu8g9E6aoYFk--G7GM_TBf4oQuawR8O6i9eWdaqs5u/exec',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    )
        .then((data) => data.json())
        .then((result) => {
            console.log(data);
        })
        .catch((err) => console.log(err.message))
        .finally(() => {});
}
