const arr = [1,2,3,47,5,65,7,7,8];
let sum =0;
//IIFE to sum array elements
(function(arr){
    for(var no of arr)
    sum += no;
    console.log("sum of array numbers is:",sum);
})(arr);
