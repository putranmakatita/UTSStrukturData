function flattenObject(obj) {
    const result = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const flatObj = flattenObject(obj[key]);
            for (const flatKey in flatObj) {
                result[`${key}.${flatKey}`] = flatObj[flatKey];
            }
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}

// test
console.log(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }));