const array = [3,5,6,1,2,7,4,]

function bubbleSort (array) {
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length -1 - n; i++) {
            if (array[i] > array[i + 1]) {
                const buff = array[i]
                array[i] = array[i + 1]
                array[i + 1] = buff
            }
        }
    }

    return array
}


console.log(bubbleSort(array))
console.log(array.length)
