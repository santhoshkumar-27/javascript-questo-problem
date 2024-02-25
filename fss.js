function returnSameThing(value) {
    return value;
}

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


console.log('before', originalObj);

// it return the same references
const modified = returnSameThing(originalObj)

modified.name = 'new'

console.log('modified', modified);

console.log('aftre', originalObj);
