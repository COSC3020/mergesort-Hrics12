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

The outerloop run $log(n)$ times becasue current size is being doubled each iteration. $n$ is the size of the array. The inner loop runs $n$ times in total for all the iterations of the outerloop because the 
the size of the sub-arrays are double when merged each iteration of the outside loop. This means the number of sub-arrays is being cut in half. This is because the inner loop is merging pairs of sub-arrays and then moves on to the next pair. The size of the sub-arrays merging is based on what iteration the outerloop is on. In each iteration of the outerloop the nummber of elements merging is $n$ becasue the size of the sub-arrays is doubling but the amount of sub-arrays are halving. So the function is being called once for each pair of sub-arrays merging and has a time complexity of $O(n)$ because it is processing each element in the sub-array once.
This means the total time complexity of the algorithm is $O(n\log n)$ because the merge function is called $n$ times for each $log n$ iteration.

The two nested loop don't go over the same data. The first is for the left sub-array and the second is over the right sub-array. So they don't share any elements and the total number of iterations is relative to the size of the original array.
