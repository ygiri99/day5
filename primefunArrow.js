const arr = [1,2,13,4,5,61,7,89,9];
let prime = [],p,i=0;

for(var no of arr){
    //Arrow function to return if prime number
    p=((num) => {
        if(num===2)
        return num; 
        else if(num===3)
        return num;
        else if(num%2!==0){
            for(var i=3;;i+=2){
                if(num%i===0)
                break;
                else if(i*i>num){
                return num;
                }
            }
        }
    })(no);
    //adding prime numbers to prime array
    if(p!==undefined){
        prime[i]=p;
        i++;
    }
    }
    console.log(prime);