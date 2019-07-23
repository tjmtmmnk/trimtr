import {createReadStream, readFile} from "fs-extra";

function parse() {

}

function parseFromFile(filename: string) {
    const path = process.cwd() + "/test/data/" + filename;
    console.log(path);
    let stream = createReadStream(path);

    stream.on("data", (chunk) => {
        console.log("hello" + chunk)
    });

    stream.on("close", () => {
        console.log("stream closed")
    });

    stream.on("error", (error) => {
        console.log("stream error")
    })
}

export {parse, parseFromFile}