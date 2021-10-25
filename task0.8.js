function timeConverter(num){
    let hours = Math.floor(num/60);
    let minutes = num%60;
    console.log(hours + " hour(s)" + "," + minutes + " minute(s)");
}

console.log(timeConverter(71));