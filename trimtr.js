const triggerEvent = (el, ev) => {
    const evt = new Event(ev, {bubbles: true});
    el.dispatchEvent(evt);
}
window.addEventListener('load', () => {
    chrome.runtime.sendMessage({ action: "judgeDomain" });

    chrome.runtime.onMessage.addListener(message => {
        let textarea;
        if (message.target == "google") {
            textarea = document.querySelector("textarea");
        } else if (message.target == "deepl") {
            textarea = document.getElementsByClassName("lmt__source_textarea")[0];
        }

        textarea.addEventListener('change', e => {
            const text = e.target.value;
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
                        .then((data) => {
                            textarea.value = data[0].text;
                            triggerEvent(textarea, 'input');
                        })
                })
                .catch((err) => console.log(err));
        });
    });
});