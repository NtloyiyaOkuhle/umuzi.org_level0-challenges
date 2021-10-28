function timeConverter(num){
    let hours = Math.floor(num/60);
    let minutes = num%60;
    console.log(hours + " hour" + "," + minutes + " minute");
}

console.log(timeConverter(71));