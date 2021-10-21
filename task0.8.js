function time_Converter(num){
    var hours = Math.floor(num/60);
    var minutes = num%60;
    console.log(hours + ":" + minutes);
}

console.log(time_Converter(71));