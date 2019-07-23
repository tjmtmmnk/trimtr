import {parseFromFile} from "./parser";

class Main {
    constructor() {
        console.log("Hello! Node.js × TypeScript from Class");
        parseFromFile("01.txt");
    }
}

const main = new Main();