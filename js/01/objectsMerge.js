const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}

const objectsMerge = (...objects) => {
    let result = {};
    for(let i=0; i<objects.length; i++) {
        result[i] = objects[i];
    }
    return result;
};

export default objectsMerge;
