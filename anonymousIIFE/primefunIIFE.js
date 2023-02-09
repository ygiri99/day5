const arr = [1, 2, 13, 4, 5, 61, 7, 89, 9,31,56];
let prime = [];

for (var no of arr) {
    //IIFE function to add prime number to prime[]
    (function (num) {
        if (num === 2)
            prime.push(num);
        else if (num === 3)
            prime.push(num);
        else if (num % 2 !== 0) {
            for (var i = 3; ; i += 2) {
                if (num % i === 0)
                    break;
                else if (i * i > num) {
                    prime.push(num);
                    break;
                }
            }
        }
    })(no);
}

console.log(prime);