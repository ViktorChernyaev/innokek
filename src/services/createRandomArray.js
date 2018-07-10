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

function randomName() {
    return nameTemplates[randomMinMax(0, 15)];
};

