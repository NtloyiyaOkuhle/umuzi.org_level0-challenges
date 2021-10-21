
function checkMaxi(){
    if (arguments.length > 0){
        var max = arguments[0];
       for (var i = 1; i < arguments.length; i++){
          // console.log(i.toString()+" "+arguments[i]);
           //console.log(i);
           if(arguments[i] > max){
               max = arguments[i];
           }
       }
       console.log(max);
    }
}
checkMaxi(1,2,8,10);