//let Variables = [];

let _Console = document.getElementsByClassName("code_compiled");

let RecognizedWords = {
    "VARIABLE": "ver",
    "OPERATOR": "="
}

let SyntaxTokens = [];
let ValueTokens = [];

let Sentences = [];

let Variables = [];

let canCompile = true;

document.getElementById("Compile-Btn-Submit").addEventListener('click', function () {
    if (canCompile) {

        canCompile = false;

        document.getElementById("Compiling-loading-screen").style.opacity = 1;//nu mergea ca era display none

        setTimeout(() => {
            Compile();
            document.getElementById("Compiling-loading-screen").style.opacity = 0;
        }, 3000);

        document.getElementById("code").setAttribute("disabled", "true");
    }
})

document.getElementById("Stop_Btn").addEventListener('click', () => {
    tokens = [];
    ClearArrays();

    _Console[0].value = "";

    document.getElementById("code").removeAttribute("disabled");

    canCompile = true;
});


let WriteToConsole = (message, type) => {
    if (type == "eroare") {
        _Console[0].style.color = "red";
        _Console[0].value += message;//pusasem liniuta in loc de unber underline imi dadu o eroare si op fauic clasa
    }

    if (type == "message") {
        _Console[0].style.color = "white";
        _Console[0].value += message;
    }

    if (type == undefined || type == 'undefined') {
        _Console[0].style.color = "white";
        _Console[0].value += message;
    }
}

let CreateVariable = (name, value) => {
    Variables.push([name, value]);
    console.log(Variables);
}

let ClearArrays = () => {
    SyntaxTokens = [];
    ValueTokens = [];
    Sentences = [];
    Variables = [];
}

let Compile = () => {
    Sentences = document.getElementById("code").value.split("\n");

    console.log(Sentences);//iar acum televizor zisa si eu reclama la nutella sa iu la ceva dulce muzica si voec vocea cunoscuta pa

    let tokens = [];

    let oIndex = 0;

    while (oIndex < Sentences.length) {

        let _Token = new Token(Sentences[oIndex]);

        tokens = _Token.Tokenize();

        for (let i = 0; i < tokens.length; i++) {
            SyntaxTokens.push(tokens[i][0]);
            ValueTokens.push(tokens[i][1]);
            console.log(tokens[i][1]);
        }

        console.log(SyntaxTokens.join(" "));


        if (SyntaxTokens.join(" ").includes("VARIABLE STRING OPERATOR")) { //"//IFSTATEMENTSEPARATOR")) {
            console.log("lol ", ValueTokens[SyntaxTokens.indexOf("STRING")]);
            console.log("Variabile: ", ValueTokens[SyntaxTokens.indexOf("STRING")], ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1]);
            Variables.push([ValueTokens[SyntaxTokens.indexOf("STRING")], ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1]]);
            console.log(Variables);
        } else if (SyntaxTokens.join(" ").includes("METHODFUNCTION STRING") && !Sentences[oIndex].includes("#") || SyntaxTokens.join(" ").includes("METHODFUNCTION INTEGER") && !Sentences[oIndex].includes("#")) {
            console.log("ValueTokens", ValueTokens[1]);
            // //  if()//ma gandii ca la boolean random sa pui Random > 500? daca pui 700 in loc de 500 sunt mai multe sanse sa pice false cred si la 900 aproape de loc sa pice si la 300 mai multe sanse sa fie true


            //console.log(Variables[0])


            if (Variables.length > 0) {
                for (let i = 0; i < Variables.length; i++) {

                    if (ValueTokens[1] == Variables[i][0]) {
                        WriteToConsole(Variables[i][1]);//era sa gresescVariables[i[0]] Variables[i][0] chiar era corect ll lol experimenta i experimenta i i n consola
                        break;
                    } else {
                        WriteToConsole(ValueTokens[1]);
                    }
                }
            } else {
                WriteToConsole(ValueTokens[1]);
                console.log("Trebuie sa scriu ", ValueTokens[1]);
            }
        } else if (SyntaxTokens.join(" ").includes("KEYWORD INTEGER OPERATOR INTEGER KEYWORD")) {//CEVA NU ERA BINE CU PARANTEZE DESCHISE upos caps lock/...lL l mare sz zi zici ca e o cisma pa e maim l maree e mai mic decat l mic asa cum 1 > 2 in GGPls sa s din greseal acand spamez sageata styanga zici ca vibrez ca flash gata pa
            //let AllWords = ValueTokens;
            // console.log(AllWords);

            let AllWords = Sentences.join(" ").slice(Sentences.join(" ").indexOf("daca"), Sentences.join(" ").indexOf("sfarsit") + 7);//sfasit

            let FunctionWords = AllWords.slice(AllWords.indexOf("atunci") + 6, AllWords.indexOf("sfarsit"));//creca trebuie si aici plus 7 inainte imi dadui seama in consola

            FunctionWords = FunctionWords.split(' ');

            console.log(AllWords);
            console.log(FunctionWords);

            // let equation = AllWords.join(" ");//atat pentru acum
            let equation = AllWords.slice(AllWords.indexOf("daca") + 5, AllWords.indexOf("atunci"));//iar uitasem join la 2 2.0//pusesem 5 in loc de indexofdaca
            console.log(equation);

            //timpul sa rezolvam ecuatii
            // if(equation)

            let ResolveEcuation = () => {
                if (equation[2] == ">") {
                    return equation[0] > equation[4];
                }
                if (equation[2] == "<") {
                    return equation[0] < equation[4];
                }
                if (equation[2] == "=") {
                    return equation[0] == equation[4];
                }
            }

            console.log(equation[2]);
            console.log(Sentences.join(" "));

            let ActionFunctionWords = () => {
                if (FunctionWords.includes("scrie") && FunctionWords.includes("#")) {
                    WriteToConsole(FunctionWords[FunctionWords.indexOf("scrie") + 1]);
                }
            }

            if (ResolveEcuation())
                ActionFunctionWords();
        }

        SyntaxTokens = [];
        ValueTokens = [];

        oIndex++;
    }
}