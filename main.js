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

let Functions = [];

let parameters = [];

document.getElementById("Compile-Btn-Submit").addEventListener('click', function () {
    if (canCompile) {

        canCompile = false;

        document.getElementById("Compiling-loading-screen").style.opacity = 1;//nu mergea ca era display none

        setTimeout(() => {
            Compile();
            document.getElementById("Compiling-loading-screen").style.opacity = 0;
        }, 3000);

        document.getElementsByClassName("code")[0].setAttribute("disabled", "true");

        ColoRize();
    }
})

document.getElementById("Stop_Btn").addEventListener('click', () => {
    tokens = [];
    ClearArrays();

    _Console[0].value = "";

    document.getElementsByClassName("code")[0].removeAttribute("disabled");

    canCompile = true;

    Textarea_Submit[0].style.display = "block";
    colorized_code.style.display = "none";

    words = [];

    for (let i = 0; i <= colorized_code.childNodes.length; i++) {
        // colorized_code.removeChild(document.getElementsByClassName("word-colorrizer")[i]);
        // colorized_code.removeChild(colorized_code.childNodes[i]);
    }

    colorized_code.removeChild(wordsSpans);
});


let WriteToConsole = (message, type, newLine) => {
    //if(!newLine)scrisai din nou fara autocomplete 2 in inchisoare in com,entarii lol *
    if (type == "eroare") {
        _Console[0].style.color = "red";
        _Console[0].value = "Eroare: " + message;//pusasem liniuta in loc de unber underline imi dadu o eroare si op fauic clasa
    }

    if (type == "message") {
        _Console[0].style.color = "white";
        _Console[0].value += newLine ? "\n" + message : message;
    }

    if (type == undefined || type == 'undefined') {
        _Console[0].style.color = "white";
        _Console[0].value += newLine ? "\n" + message : message;
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

let random = (min, max) => {
    return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
}

let Compile = () => {

    Sentences = document.getElementsByClassName("code")[0].value.split("\n");

    console.log(Sentences);//iar acum televizor zisa si eu reclama la nutella sa iu la ceva dulce muzica si voec vocea cunoscuta pa

    let tokens = [];

    let oIndex = 0;

    let ExecuteCodeFunctioninvers = (code) => {
        //  let executionCode = code.toString().indexOf(_newToken.Token_Value);
        //let _newToken = new Token(executionCode);
        //_newToken.Tokenize();
        //console.error(_newToken.Token_Value);

        // if (!code.includes("scrie") && !code.includes("#") && code == "daldf;ksgjkjlsdgnflokifsdg") {
        //     WriteToConsole(code[code.indexOf("scrie") + 1]);
        //     console.log(code[code.indexOf("scrie") + 1]);
        //     //WriteToConsole(ValueTokens.join(" ").slice(5).slice(2, ValueTokens[1].indexOf('"', 1)));
        // }

        if (FunctionWords.includes("scrie") && FunctionWords.includes("#")) {
            // WriteToConsole(FunctionWords[FunctionWords.indexOf("scrie") + 1]);
            //WriteToConsole(ValueTokens.join(" ").slice(5).slice(2, ValueTokens[1].indexOf('"', 1)));
            WriteToConsole(code.join(" ").slice(5).slice(2, code[1].indexOf('"', 1)));
        }
    }

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
            if (ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1] !== "input()" && !ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1].includes("random(")) {
                console.log("lol ", ValueTokens[SyntaxTokens.indexOf("STRING")]);
                console.log("Variabile: ", ValueTokens[SyntaxTokens.indexOf("STRING")], ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1]);
                console.error(ValueTokens[SyntaxTokens.indexOf("STRING")].length);
                Variables.push([ValueTokens[SyntaxTokens.indexOf("STRING")], ValueTokens.join(" ").slice(ValueTokens[SyntaxTokens.indexOf("STRING")].length + 5).slice(3, ValueTokens[1].indexOf('"', 1))]);//ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1]]);
                console.log(Variables);
            } else if (ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1] === "input()") {//stiam eu ca era o greseala ca nu era autocomplete la sageata adica la "" nu punea s doua sa puna doau doua
                Variables.push([ValueTokens[SyntaxTokens.indexOf("STRING")], prompt("Valoare pentru " + ValueTokens[SyntaxTokens.indexOf("STRING")], "")]);// == null? prompt("Valoare pentru " + ValueTokens[SyntaxTokens.indexOf("STRING")], "") : ]
            } else if (ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1].includes("random(")) {
                parameters = ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1].slice(/*7*/ ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1].indexOf("(") + 1, ValueTokens[SyntaxTokens.indexOf("OPERATOR") + 1].indexOf(")")).split(",") //ma gandii sa fac o functie i n js dar ma rasgandii la egal sunt
                let parameter1Min = parameters[0];
                let parameter2Max = parameters[1];

                console.error("parametrii: " + parameters + " min " + parameter1Min + " max " + parameter2Max);
                console.warn(random(0, 5));

                if (parameters.length == 2)
                    Variables.push([ValueTokens[SyntaxTokens.indexOf("STRING")], random(parameter1Min, parameter2Max)]);
                    else if(parameters.length > 2 || parameters.length < 2)
                        WriteToConsole("Functia random() trebuie sa aiba doar 2 parametri (minim, si maxim)", "eroare", false);
            }
        } else if (SyntaxTokens.join(" ").includes("METHODFUNCTION FUNCTIONSTRING") && !Sentences[oIndex].includes("#") || SyntaxTokens.join(" ").includes("METHODFUNCTION INTEGER") && !Sentences[oIndex].includes("#")) {
            console.log("ValueTokens", ValueTokens[1]);
            // //  if()//ma gandii ca la boolean random sa pui Random > 500? daca pui 700 in loc de 500 sunt mai multe sanse sa pice false cred si la 900 aproape de loc sa pice si la 300 mai multe sanse sa fie true


            //console.log(Variables[0])

            if (ValueTokens[0] == "scrie") {
                WriteToConsole(ValueTokens.join(" ").slice(5).slice(2, ValueTokens[1].indexOf('"', 1) + 1));
            } else if (ValueTokens[0] == "scrielinienoua") {
                WriteToConsole(ValueTokens.join(" ").slice(12).slice(2, ValueTokens[1].indexOf('"', 1)), "message", true);
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
                    //WriteToConsole(ValueTokens.join(" ").slice(5).slice(2, ValueTokens[1].indexOf('"', 1)));
                }// else if (FunctionWords.includes("FUNCTIONCALL")) {//.slice())
                //     console.log(ValueTokens[0].slice(0, ValueTokens[0].indexOf("(")));
                //     if (Functions.length > 0) {
                //         for (let i = 0; i < Functions.length; i++) {
                //             if (ValueTokens[0].slice(0, ValueTokens[0].indexOf("(")) == Functions[i][0]) {//aici ma incurc ma uitai in trevc trecut i i in inainte deci prima e positioa in coloabna coloana iar a doua e positia in rand nu stiu cum sa explic aici dar to tot uit cred nam inteles bine uit cred pa
                //                 ExecuteCodeFunctioninvers(Functions[i][1]);
                //             } else {
                //                 WriteToConsole("Functia " + ValueTokens[0] + " nu exista!", "eroare", false);
                //             }
                //         }
                //     } else {
                //         WriteToConsole("Functia " + ValueTokens[0] + " nu exista!", "eroare", false);
                //     }
                // }
            }

            if (ResolveEcuation())
                ActionFunctionWords();
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
                        WriteToConsole(" Variabila " + ValueTokens[1] + " nu exista!", "eroare");//voiam sa scrieu Eroare: acii aici dar scriu la write in console sau asa ceva 
                    }
                }
            } else {
                WriteToConsole("Variabila " + ValueTokens[1] + " nu exista!", "eroare");
            }
        } else if (SyntaxTokens.join(" ").includes("KEYWORD STRING OPERATOR STRING KEYWORD")) {//CEVA NU ERA BINE CU PARANTEZE DESCHISE upos caps lock/...lL l mare sz zi zici ca e o cisma pa e maim l maree e mai mic decat l mic asa cum 1 > 2 in GGPls sa s din greseal acand spamez sageata styanga zici ca vibrez ca flash gata pa
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

            let FirstNumber;
            let LastNumber;
            for (let i = 0; i < Variables.length; i++) {
                if (equation[0] == Variables[i][0]) {
                    FirstNumber = Variables[i][1];
                }
                if (equation[4] == Variables[i][0]) {
                    LastNumber = Variables[i][1];
                }
            }
            let ResolveEcuation2 = () => {
                if (equation[2] == ">") {
                    return FirstNumber > LastNumber;
                }
                if (equation[2] == "<") {
                    return FirstNumber < LastNumber;
                }
                if (equation[2] == "=") {
                    return FirstNumber == LastNumber;
                }
            }

            console.log(equation[2]);
            console.log(Sentences.join(" "));

            let ActionFunctionWords = () => {
                if (FunctionWords.includes("scrie") && FunctionWords.includes("#")) {
                    WriteToConsole(FunctionWords[FunctionWords.indexOf("scrie") + 1]);
                    //WriteToConsole(ValueTokens.join(" ").slice(5).slice(2, ValueTokens[1].indexOf('"', 1)));
                }
            }

            if (ResolveEcuation2())
                ActionFunctionWords();
        } else if (SyntaxTokens.join(" ").includes("FUNCTIONKEYWORD STRING")) { // && SyntaxTokens.join(" ").includes("(") && SyntaxTokens.join(" ").includes(")")) { //else if (SyntaxTokens.join(" ").includes("METHODFUNCTION FUNCTIONSTRING") && !Sentences[oIndex].includes("#") || SyntaxTokens.join(" ").includes("METHODFUNCTION INTEGER") && !Sentences[oIndex].includes("#")) {
            console.error(ValueTokens);
            let AllWordsHere = Sentences.join(" ").slice(Sentences.join(" ").indexOf("functie()"), Sentences.join(" ").indexOf("}"));//creca aici trebuie plus 1 si zici lol
            let CodeToExecute = AllWordsHere.slice(AllWordsHere.indexOf("{") + 1, AllWordsHere.indexOf("}"));
            Functions.push([ValueTokens[1], CodeToExecute]);
            console.group(CodeToExecute);

            // let ExecuteCodeFunctioninvers = (code) => {
            //     //let _newToken = new Token(code.toString());
            //     //console.error(_newToken.Tokenize());
            //     if (code.includes("scrie") && code.includes("#")) {
            //         WriteToConsole(code[code.indexOf("scrie") + 1]);
            //         console.log(code[code.indexOf("scrie") + 1]);
            //         //WriteToConsole(ValueTokens.join(" ").slice(5).slice(2, ValueTokens[1].indexOf('"', 1)));
            //     }
            // }
        } else if (SyntaxTokens.join(" ").includes("FUNCTIONCALL")) {//.slice())
            console.log(ValueTokens[0].slice(0, ValueTokens[0].indexOf("(")));
            if (Functions.length > 0) {
                for (let i = 0; i < Functions.length; i++) {
                    if (ValueTokens[0].slice(0, ValueTokens[0].indexOf("(")) == Functions[i][0]) {//aici ma incurc ma uitai in trevc trecut i i in inainte deci prima e positioa in coloabna coloana iar a doua e positia in rand nu stiu cum sa explic aici dar to tot uit cred nam inteles bine uit cred pa
                        ExecuteCodeFunctioninvers(Functions[i][1]);
                    } else {
                        WriteToConsole("Functia " + ValueTokens[0] + " nu exista!", "eroare", false);
                    }
                }
            } else {
                WriteToConsole("Functia " + ValueTokens[0] + " nu exista!", "eroare", false);
            }
        }//iatr gresii to t la roandomelse if(SyntaxTokens.join)

        //facui a asta inainte sa fac ;la token ma intorc imediat il be right back in a sec lol else if()
        //     console.log(ValueTokens);
        //     WriteToConsole(ValueTokens.join(" ").slice(5).slice(2, ValueTokens[1].indexOf('"', 1)));
        // }

        SyntaxTokens = [];
        ValueTokens = [];

        oIndex++;
    }
}

// document.body.scrollTo(document.getElementById("docs"));

let getInputFromConsole = () => {
    Textarea[0].removeAttribute("readonly");
    // if(Textarea[0]onkeydown.event.keyCode == 13){
    // Textarea[0].setAttribute("readonly", "true");
    //  return Textarea[0].value;
    //  }
    Textarea[0].onkeydown = (event) => {
        console.log(event.keyCode);//evalerror EvalError lol
        if (event.keyCode === 13) {
            return CloseConsole();
        }
    }
}

// console.error(CloseConsole());

let CloseConsole = () => {
    Textarea[0].setAttribute("readonly", "true");//true sau readonly cre3d ca true 12 f 1 fu true nu pusai radonly ca vad ca ,merge merge cu true pa
    return Textarea[0].value;
}

//console.error(getInputFromConsole());//2012 2012 2015 pardon nu mai nimeream