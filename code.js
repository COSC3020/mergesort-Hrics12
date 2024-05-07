function mergesort(array) {
    let currentSize;
    let leftStart
    let arraySize = array.length

    for (let currentSize = 1; currentSize <= arraySize -1; currentSize = currentSize * 2) {
        for (let leftStart = 0; leftStart < arraySize; leftStart += 2 * currentSize) {
            let mid = Math.min(leftStart + currentSize - 1, arraySize - 1);
            let rightEnd = Math.min(leftStart + 2 * currentSize - 1, arraySize - 1);
            merge(array, leftStart, mid, rightEnd)
        }
    }
    return array;
}
function merge(array, left, mid, right){

let x = mid + 1;
if(array[mid] <= array[x]){
    return;
}
    while (left <= mid && x <= right){
        if(array[left] <= array[x]){
            left++;
        }
        else{
            let value = array[x];
            let index = x;

            while(index != left){
                array[index] = array[index -1];
                index--
            }
            array[left] = value;
            left++;
            mid++;
            x++;
        }
    }
}

      
