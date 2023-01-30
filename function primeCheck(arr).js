function primeCheck(arr){
let newArr = [...arr]
    for(i=0 ; i<arr.length ; i++){
        if(arr[i] < 1 || arr[i] == 1){

            newArr.splice(i , 1); 

        } else if(arr[i] == 2){
            
        }
        for(x=0 ; x<arr[i]/2 ; x++){
             
            if((arr[i]/2) % x == 0){
             
                newArr.splice(i , 1);
                break;
            }
        }
    }
    return newArr;

}
let x =[1 ,2,6,47,34,5,89,11,56,3]

console.log(primeCheck(x))