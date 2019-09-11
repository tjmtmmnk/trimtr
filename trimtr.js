window.addEventListener("load", main, false);

function main(e) {
    $('textarea#source').change(() => {
        var text = $('textarea#source').val();
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
                    .then((data) => $('textarea#source').val(data[0].text))
            })
            .catch((err) => console.log(err));
    });
}
