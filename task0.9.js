let vowels = Array(5);
vowels = ["a","e","i","o","u",];

function printVowels(str){
    let output = "";
    for(let i=0; i<str.length; i++){
        let character = str.charAt(i);

        for(let looparr=0; looparr<vowels.length; looparr++){
            if(character.toLowerCase() == vowels[looparr]){
                if(output.toLowerCase().indexOf(character.toLowerCase())< 0){
                    if(output != ""){
                        output += ",";
                    }
                     output +=character;
                    
                }
            }
            
            
        }
    }
    console.log("Vowels: " + output.toLowerCase());
}
printVowels("BonAa");