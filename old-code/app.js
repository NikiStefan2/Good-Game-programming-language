let cuvinte;

let propozitii;

let functionCurrentWord = 3;

let VariabileIndex = 0;
//get the code input from user
var code = document.getElementById("code"),//valeu
    Compile_Btn = document.getElementById("Compile-Btn-Submit");

let RemainingTokens,
    CurrentTokenIndex = 0,
    CurrentToken;

/*let Token_Type,
    Token_Value;*/
//let Token = new Token();

//Token = new Token();

Compile_Btn.addEventListener('click', function () {
    //split all the code in words

    VariablesNames = [];
    VariablesValues = [];

    cuvinte = code.value.split(' ');

    propozitii = code.value.split('\n');

    CurrentToken = cuvinte[CurrentTokenIndex];

    //console.log(code.value);
    //console.log(cuvinte);
    //console.log(propozitii);

    /*cuvinte.forEach(word => {

        //let Token = new Token();
        
        ///let Tokan = new Token();
        //console.log(RemainingTokens);
        /*if (word == "variabila") {
            CreateVariable(cuvinte[1], cuvinte[3]);*/
    //console.log("Variabila Yeyyyy. Asta inseamna ca cineva foloseste. :0")
    /**//*/* *//*}
    //console.log(word);
});*/

    propozitii.forEach(propozitie => {

        let SentenceType;
        let sentenceWords = [];

        if (propozitie.includes("variabila") && !propozitie.includes("(variabila)")) {
            SentenceType = "VARIABLE";
            sentenceWords = propozitie.split(' ');

            CreateVariable(sentenceWords[1], sentenceWords[3]);//int
        } else if (propozitie.includes("scrie") && !propozitie.includes("(scrie")) {
            SentenceType = "METHOD";
            sentenceWords = propozitie.split(' ');

            WriteToConsole(sentenceWords[1]);

            console.log(sentenceWords[1]);
        } /*else if (propozitie.includes("functie")) {
            SentenceType = "FUNCTION";
            sentenceWords = propozitie.split(' ');

            executeWords = sentenceWords.slice(2);

            /*for(let CurrentWord = 3; CurrentWord < sentenceWords.length; CurrentWord++){
                CreateFunction(sentenceWords[CurrentWord]);
            }*/
            /*CreateFunction(executeWords);
        }*/
        else if(propozitie.includes("repeta") && !propozitie.includes("(repeta")){
            SentenceType = "METHOD";
            sentenceWords = propozitie.split(' ');

            //let executeWords = sentenceWords.slice(3);

            Repeta(sentenceWords[1], sentenceWords);
        }
        else if(propozitie.includes("apeleaza") && !propozitie.includes("(apeleaza")){
            SentenceType = "METHOD";
            sentenceWords = propozitie.split(' ');

            //let executeWords = sentenceWords.slice(3);

            Repeta(sentenceWords[1], sentenceWords);
        }
    });
})
//#region CheckForVariable
