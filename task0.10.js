function check_Strings(str1,str2){
    var output = "";
    for(var i=0; i<str1.length; i++){
        var character = str1.charAt(i);
        //console.log(str.charAt(i));

        for(var loopstr2=0; loopstr2<str2.length; loopstr2++){
           // console.log(str.charAt(i) + ":" + vowels[looparr]);
            if(character.toLowerCase() == str2.charAt(loopstr2)){
               // console.log(character);
               if(output != ""){
                   output += ",";
               }
                output +=character;
                break;
            }
            
            
        }
    }
    console.log(output);
}
check_Strings("yonaaa","bonaaa");
/*var yonda = ["a","b","c"];
var yongaa = "abc";
console.log(yonda[0]);
||  (yongaa.charAt(0));*/