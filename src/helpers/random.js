export function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomString() {
    return Math.random().toString(36).substring(2, 15);
}
