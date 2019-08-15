window.addEventListener("load", main, false);

function main(e) {
    $('textarea#source').change(() => {
        var text = $('textarea#source').val();
        fetch('http://127.0.0.1:5000/trim', {
            method: 'post',
            headers: {
                "Content-Type": "text/plain; charset=UTF-8"
            },
            body: text
        })
            .then((trimed_text) => console.log(trimed_text))
            .catch((err) => console.log(err));
        console.log("aaa");
    });
};