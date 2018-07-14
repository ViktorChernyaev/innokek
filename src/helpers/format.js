export function objectEntryToString([name, value]) {
    return `{ ${name}: ${value} }`;
}

export function objectToString(obj) {
    return` [${Object.entries(obj).map(objectEntryToString).join(", ")}] `;
}
