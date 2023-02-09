const arr1 = [2, 4, 6, 7, 4, 6, 56], arr2 = [4, 45, 3, 6, 7, 6, 54];

len = arr1.length;
// merging arr1 & arr2
const arr3 = arr1.concat(arr2);
arr3.sort(function (a, b) {
    return a - b;
});
//IIFE function to find median of sorted array
let median = (function (arr3, len) {

    return (arr3[len] + arr3[len - 1]) / 2;
})(arr3, len);

console.log(median);