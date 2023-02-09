const arr = ["guvi",true,876,6,7,"geek","guvi","Duplicate","geeK",5,7,876,true,'guvi','geek','Duplicate']; 
const larr = [];
 // string elements convert to lowercase for ease comparision
for(var i=0; i < arr.length; i++){
    var a=arr[i];
    if(typeof(a) === "string")
   larr[i] = arr[i].toLowerCase(); 
   else
   larr[i] = arr[i];
}
//IIFE function to remove duplicate
let len = larr.length;
(function(larr,len,arr){
    for(var i=0; i < len; i++){
        for(var j=i+1; j < len; j++){
            if(larr[i] === larr[j]){
                 larr.splice(j,1);arr.splice(j,1);
                len=larr.length;
            }
            else
            continue;
        }
    }
})(larr,len,arr);
console.log(arr);   

