import { randomMinMax, randomString as randomValue } from "helpers/random";

const nameTemplates = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetuer",
    "adipiscing",
    "elit",
    "anane",
    "commodo",
    "ligula",
    "eget",
    "dolor",
    "aenean",
    "massa",
    "natoque"
];
const randomName = () => nameTemplates[randomMinMax(0, 15)];

function* objectGenerator(keysCount) {
    let i = 0;
    while (i < keysCount) {
        i++;
        yield { [randomName()]: randomValue() };
    }
}

function* arrayGenerator(k = 1000) {
    let i = 0;
    while (i < k) {
        i++;
        yield Object.assign({}, ...objectGenerator(randomMinMax(1, 10)));
    }
}

function* arraysGenerator(count) {
    let i = 0;
    while (i < count) {
        i++;
        yield Array.from(arrayGenerator(randomMinMax(5, 10)));
    }
}

export default function generate() {
    return Array.from(arraysGenerator(randomMinMax(10, 20))).map((item, i) => ({ item, i }));
}

