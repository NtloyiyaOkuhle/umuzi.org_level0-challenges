

function calcArea(a, b, c ){
    let semiperimeter   =   (a + b + c) / 2;
    let calculation     =   semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
    return Math.sqrt( calculation );
}
console.log( calcArea( 3,4,5 ) );