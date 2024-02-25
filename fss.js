// it return the same references
function returnSameThing(value) {
    return value;
}
// it return the new references
function returnJsonParse(value) {
    return JSON.parse(JSON.stringify(value));
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

const modified = returnJsonParse(originalObj)

modified.name = 'new'

console.log('modified', modified);

console.log('aftre', originalObj);
