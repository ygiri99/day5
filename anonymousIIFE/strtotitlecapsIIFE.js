const arr = ['aNANATHI','arasu','ARUVI','Balaji','Babu','nagaRaj'],
strArr = [];
//IIFE for title cap
(function(){
    for(var ele of arr){
         ele = ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
        strArr.push(ele);
        }
})();
console.log(strArr);