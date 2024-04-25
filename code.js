function mergeSort(array) {
  if (array.length < 2) return array;
  let temp = new Array(array.length);
  for (let size = 1; size < array.length; size *= 2) {
    for (let LStart = 0; LStart < array.length; LStart += 2*size) {
      let L = LStart, R = Math.min(L + size, array.length), end = Math.min(R + size, array.length), tempIndex = L;
      while (L < R && R < end) {
        if (array[L] <= array[R]) {
          temp[tempIndex++] = array[L++];
        } else {
          temp[tempIndex++] = array[R++];
        }
      }
      while (L < R) {
        temp[tempIndex++] = array[L++];
      }
      while (R < end) {
        temp[tempIndex++] = array[R++];
      }
    }
    let swap = array;
    array = temp;
    temp = swap;
  }
  return array;
}
