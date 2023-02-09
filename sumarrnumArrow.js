const arr = [1,2,3,47,5,65,7,7,8];
let sum =0;
//Arrow function to find sum of array
arr.forEach((num) => {
    sum += num;
});
console.log("sum of array numbers is:",sum);