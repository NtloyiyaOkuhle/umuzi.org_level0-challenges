
function timeConverter(n) {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    console.log( rhours + " hour(s) : " + rminutes + " minute(s).");
    }
    
    console.log(timeConverter(61));