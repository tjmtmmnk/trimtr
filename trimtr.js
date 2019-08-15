window.addEventListener("load", main, false);

function _parseJSON(response) {
    return response.text().then(function (text) {
        return text ? JSON.parse(text) : {}
    })
}

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
            .then((res) => {
                if (res.status !== 200) {
                    console.log("maybe ISE");
                    return;
                }

                _parseJSON(res)
                    .then((data) => {
                        var trimed_text = data[0].text;
                        $('textarea#source').val(trimed_text);
                    })
            })
            .catch((err) => console.log("Fetch Error : -S", err));
    });
}