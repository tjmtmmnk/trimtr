const GOOGLE_REGEX = /translate\.google/;
const DEEPL_REGEX = /www\.deepl/;

chrome.runtime.onMessage.addListener(message => {
    if (message.action == "judgeDomain") {
        chrome.tabs.query({
            "active": true,
            "currentWindow": true
        }, tabs => {
            const tab = tabs[0];
            if (RegExp(GOOGLE_REGEX).test(tab.url)) {
                chrome.tabs.sendMessage(tab.id, { target: "google" });
            } else if (RegExp(DEEPL_REGEX).test(tab.url)) {
                chrome.tabs.sendMessage(tab.id, { target: "deepl" });
            }
        });
    }
});