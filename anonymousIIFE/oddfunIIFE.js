const arr = [1,2,13,4,5,6,7,8],oddArr = [];

//  expression anonymous
(function(){
    arr.forEach((value) => {
        if(value%2 !== 0)
    oddArr.push(value);
    });
    console.log(oddArr);
})();
