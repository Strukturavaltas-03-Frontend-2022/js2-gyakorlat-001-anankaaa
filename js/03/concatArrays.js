const concatArrays = (a,...arrays) => {
    let result = [];
    for (let i=0; i<arrays.length; i++){
        for (let j=0; j<arrays[i].length; j++){
            let word = arrays[i][j].trimEnd();
            if(!word.includes(a) && !result.includes(word)){
                result.push(word);
            }
        }
    }
    return result;
} 

export default concatArrays;