const arr = [1,2,3,4,5,6,7,8],oddArr = [];
//  Arrow function
arr.forEach(element => {
    if(element%2 === 1)
    oddArr.push(element);
 });
 console.log(oddArr);