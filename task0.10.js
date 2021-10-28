function checkStrings(str1,str2){
    let output = "";
    for(let i=0; i<str1.length; i++){
        let character = str1.charAt(i);

        for(let loopStr2=0; loopStr2<str2.length; loopStr2++){
            if(character.toLowerCase() == str2.charAt(loopStr2)){
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
checkStrings("yonaaa","bonaaa");