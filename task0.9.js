var vowels = Array(5);
vowels = ["a","e","i","o","u",];

function print_Vowels(str){
    var output = "";
    for(var i=0; i<str.length; i++){
        var character = str.charAt(i);
        //console.log(str.charAt(i));

        for(var looparr=0; looparr<vowels.length; looparr++){
           // console.log(str.charAt(i) + ":" + vowels[looparr]);
            if(character.toLowerCase() == vowels[looparr]){
               // console.log(character);
               if(output != ""){
                   output += ",";
               }
                output +=character;
            }
            
            
        }
    }
    console.log("Vowels: " + output);
 /*   for(var master=0; master<4; master++){
        
        console.log("Master is : " + master.toString());
        for(var inner =0;inner<4;inner++){
            console.log(master.toString() + "x" + inner.toString());
        }
        console.log("/////////////////");
    }
*/
}
print_Vowels("Okuhle");