/**
 * Merges two arrays in one
 * @param {any[]} a - first array
 * @param {any[]} b - second array
 *
 */
export function intersect(a: any[], b: any[]) {
    var setB = new Set(b);
    return [...new Set(a)].filter(x => setB.has(x));
}

/**
 * Generates array within the given range of numbers
 * @param {number} start - Start number
 * @param {string} end - End number
 * @param {string} step - Stepping rate, if is not passed by default is 1
 *
 */
export function* range(start: number, end: number, step: number = 1) {
    while (start <= end) {
        yield start;
        start += step;
    }
}

/**
 * Recursively cleans deeply nested object keys which are empty or null
 *
 */
export const clean = (obj: object) =>
    Object.fromEntries(
        Object.entries(obj).flatMap(([k, v]) =>
            String(v) !== '[object Object]' ? [[k, v]] :
                (v = clean(v), Object.keys(v).length > 0 ? [[k, v]] :
                    [])));


/**
 * Creates random index number for the given array
 *
 */
export const randomIndex = (arr: any[], exceptIndex: number | null = null) => {
    const result = arr?.length > 0 ? Math.floor(Math.random() * arr.length) : -1;

    if (result === exceptIndex) randomIndex(arr, exceptIndex);
    return result;
}