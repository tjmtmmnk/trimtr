window.addEventListener("load", main, false);

function main(e) {
    const textarea = document.getElementById("source");
    textarea.addEventListener('change', (e) => {
        const text = e.srcElement.value;
        fetch('https://trimtr.herokuapp.com/trim', {
            method: 'post',
            headers: {
                "Content-Type": "text/plain; charset=UTF-8"
            },
            body: text
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Request failed: ${res.status}`);
                }

                res.json()
                    .then((data) => textarea.value = data[0].text)
            })
            .catch((err) => console.log(err));
    });
}
