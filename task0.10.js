function check_Strings(str1,str2){
    let output = "";
    for(let i=0; i<str1.length; i++){
        let character = str1.charAt(i);

        for(let loopstr2=0; loopstr2<str2.length; loopstr2++){
            if(character.toLowerCase() == str2.charAt(loopstr2)){
                if(output.toLowerCase().indexOf(character.toLowerCase())< 0){
                    if(output != ""){
                        output += ",";
                    }
                     output +=character;
                     break;
                }
            }
            
            
        }
    }
    console.log(output);
}
check_Strings("yonaaa","bonaaa");