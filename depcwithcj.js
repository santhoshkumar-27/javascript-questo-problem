function deepCopyWithCircularReferences(obj, memo = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        // If the object is not a reference type, return it as is
        return obj;
    }

    // If the object is already copied, return the existing copy
    if (memo.has(obj)) {
        return memo.get(obj);
    }

    // Create a placeholder in the memo to handle circular references
    memo.set(obj, undefined);

    // Perform deep copy for arrays and objects
    let copiedObj;
    if (Array.isArray(obj)) {
        copiedObj = [];
        memo.set(obj, copiedObj);
        for (let i = 0; i < obj.length; i++) {
            copiedObj[i] = deepCopyWithCircularReferences(obj[i], memo);
        }
    } else {
        copiedObj = {};
        memo.set(obj, copiedObj);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copiedObj[key] = deepCopyWithCircularReferences(obj[key], memo);
            }
        }
    }

    // Update the placeholder in the memo with the actual deep copy
    memo.set(obj, copiedObj);

    return copiedObj;
}

// Example usage:
const originalObj = {
    name: 'asdfasdf',
    address: {
        no: 1,
        streetname: 'bhavani nagar',
        area: 'veerampattinm',
        city: 'Puducherry',
        state: 'Puducherry',
        zipcode: 605007
    }
};

// originalObj.circularReference = originalObj; // Circular reference

const deepCopy = deepCopyWithCircularReferences(originalObj);

console.log(deepCopy);