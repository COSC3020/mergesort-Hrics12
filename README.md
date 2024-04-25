[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

```
function mergesort(array){// Base case becasue if an array only has 0 or 1 element it is already sorted
if (array.length <= 1) {
 return array;
}

let array2 = new Array(array.length);

for (let currentSize = 1; currentSize < array.length; currentSize = currentSize * 2) { // This outerloop run $log(n)$ times because current size is doubled each time

    for (let L = 0; L < array.length; L += 2 * currentSize) {// This middle loop runs $n$ times and is constant becasue it just goes over the 2*currentSize
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
```
So the outerloop runs $log(n)$ times on each iteration because currentSize is doubled each iteration. The middle loop runs $n$ times because it only iterates over the same size of array (2*currentArray). The innermiddle loop is constant.
So there is a linear amount of work being done $O(n)$ on each level and there are $O(log n)$ levels. So I think the run time complexity is $O(n\log n)$
