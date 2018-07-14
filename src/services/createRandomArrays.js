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

function* arrayGenerator(k = 1000, generator) {
    let i = 0;
    while (i < k) {
        i++;
        yield generator ? Object.assign({}, ...generator()) : { label: randomValue(), value: randomValue() };
    }
}

function* arraysGenerator(count) {
    let i = 0;
    while (i < count) {
        i++;
        yield Array.from(arrayGenerator(randomMinMax(5, 10), () => objectGenerator(randomMinMax(1, 10))));
    }
}

export function arrayOfArrays() {
    return Array.from(arraysGenerator(randomMinMax(10, 20))).map((item, i) => ({ item, i }));
}

export function labelValueArray() {
    // console.log(Array.from(arrayGenerator()))
    return Array.from(arrayGenerator()).map((item, i) => ({ item, i }));
}

