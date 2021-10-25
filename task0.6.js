
function checkMaxi(){
    if (arguments.length > 0){
        let max = arguments[0];
       for (let i = 1; i < arguments.length; i++){
           if(arguments[i] > max){
               max = arguments[i];
           }
       }
       return max;
    }
}
console.log(checkMaxi(1,2,8,10));