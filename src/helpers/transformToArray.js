export const transformToArray = (object) => {
    let newArray = [];
    for(let hash in object) {
        newArray.push(object[hash]);
    }
    return newArray;
}