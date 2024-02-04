function customStringify(value) {
    // Handle primitive values
    if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
        return String(value);
    } else if (typeof value === 'string') {
        return `"${value}"`;
    }

    // Handle arrays
    if (Array.isArray(value)) {
        const arrayString = value.map(item => customStringify(item)).join(',');
        return `[${arrayString}]`;
    }

    // Handle objects
    if (typeof value === 'object') {
        const objectString = Object.entries(value)
            .map(([key, val]) => `"${key}":${customStringify(val)}`)
            .join(',');
        return `{${objectString}}`;
    }
}

// Example usage:
const myObject = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'coding'],
    address: {
        city: 'New York',
        zipCode: '10001'
    }
};

const jsonString = customStringify(myObject);
console.log(jsonString);