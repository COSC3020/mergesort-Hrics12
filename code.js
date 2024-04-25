function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let array2 = new Array(array.length);

    for (let currentSize = 1; currentSize < array.length; currentSize = currentSize * 2) {
        for (let L = 0; L < array.length; L += 2 * currentSize) {
            let R = Math.min(L + currentSize, array.length);
            let endR = Math.min(R + currentSize, array.length);
            let i = L;
            let j = R;
            let k = L;

            while (i < R && j < endR) {
                if (array[i] <= array[j]) {
                    array2[k++] = array[i++];
                } else {
                    array2[k++] = array[j++];
                }
            }

            while (i < R) {
                array2[k++] = array[i++];
            }

            while (j < endR) {
                array2[k++] = array[j++];
            }
        }

        let temp = array;
        array = array2;
        array2 = temp;
    }

    return array;
}
