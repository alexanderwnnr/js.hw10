let arr = [10, 2, 8, 4, 3]

function sort(array) {
    let newArr = []
    while (array.length) {
    newArr = newArr.concat(array.splice(array.indexOf(array.reduce((prev, cur) => prev < cur ? prev : cur)), 1))
    }
    return newArr
}

sort(arr)