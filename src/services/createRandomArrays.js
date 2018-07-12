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
const randomKeysCount = () => randomMinMax(1, 10);

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
        yield Object.assign({}, ...objectGenerator(randomKeysCount()));
    }
}

export default function generate(length) {
    return Array.from(arrayGenerator(length));
}

