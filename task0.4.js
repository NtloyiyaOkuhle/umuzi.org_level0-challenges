let number = 9;
evenOrOdd(number);
evenOrOdd(6);



function evenOrOdd(num){
    let mod = num%2;
    if (mod == 1){
        console.log("Odd");
    }else {
        console.log("Even");
    }
    
}