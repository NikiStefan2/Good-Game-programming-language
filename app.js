let words;
//get the code input from user
let code = document.getElementById("code"),//valeu
    Compile_Btn = document.getElementById("Compile-Btn-Submit");

let RemainingTokens,
    CurrentTokenIndex = 0,
    CurrentToken;

let Token_Type,
    Token_Value;

    
Compile_Btn.addEventListener('click', function () {
    //split all the code in words
    words = code.value.split(' ');

    CurrentToken = words[CurrentTokenIndex];

    console.log(code.value);
    console.log(words);

    words.forEach(word => {
        if (word == "variabila") {
            while (words[CurrentTokenIndex] != ";") {
                CurrentToken++;
                RemainingTokens++;
                CurrentTokenIndex++;
                break;
            }
            console.log("Variabila Yeyyyy. Asta inseamna ca cineva foloseste. :0")
        }
        console.log(word);
    });
})
//#region CheckForVariable
