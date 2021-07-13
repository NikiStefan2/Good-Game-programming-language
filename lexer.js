let operators = ["=", "-", "+", "*", "/", ">", "<"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

class Token {
    constructor(source, Token_Type, Token_Value) {
        this.source = source;
        this.Token_Type = Token_Type;
        this.Token_Value = Token_Value;
    }
    Tokenize() {

        let tokens = [];

        let Index = 0;

        let words = this.source.split(' ');

       // let SEntences = Sentences.join(" ");

        console.log(words);

        while (Index < words.length) {
            //words[Index] = words[Index].replace("\n", " ");

            // if(words[Index].includes("\n")){
            //     words.splice(Index, 0, words[Index].slice(0, words[Index].indexOf("\n")) + " " + words[Index].slice(words[Index].indexOf("\n"), words[Index].length));
            //     // words[Index] = words[Index].slice(0, words[Index].indexOf("\n")) + " " + words[Index].slice(words[Index].indexOf("\n"), words[Index].length);
            // }
        
            if (words[Index] == "ver") {
                this.Token_Type = "VARIABLE";
                this.Token_Value = words[Index];
                tokens.push([this.Token_Type, this.Token_Value]);
            }
//era index+ index+++ aici
            operators.forEach(operator => {
                if (words[Index] == operator) {

                    this.Token_Type = "OPERATOR";
                    this.Token_Value = words[Index];

                    tokens.push([this.Token_Type, this.Token_Value]);
                }
            });

            for(let x = 0, p = 0; x < numbers.length, p < letters.length; x++, p++){
                if (words[Index].includes(numbers[x]) && !words[Index].includes(letters[p])) {//contains
                    this.Token_Type = "INTEGER";
                    this.Token_Value = words[Index];
                    tokens.push([this.Token_Type, this.Token_Value]);
                    break;
                }
            }

            for(let x = 0; x < letters.length; x++){
                if(words[Index].includes(letters[x]) && words[Index] !== "ver" && words[Index] !== "scrie" && words[Index] !== "daca" && words[Index] !== "atunci" && words[Index] !== "sfasit"){
                    this.Token_Type = "STRING";
                    this.Token_Value = words[Index];
                    tokens.push([this.Token_Type, this.Token_Value]);
                    break;
                }
            }

            if(words[Index] == "scrie"){
                this.Token_Type = "METHODFUNCTION";
                this.Token_Value = words[Index];
                tokens.push([this.Token_Type, this.Token_Value]);
            }

            if(words[Index] == "daca"){
                this.Token_Type = "KEYWORD";
                this.Token_Value = words[Index];
                tokens.push([this.Token_Type, this.Token_Value]);
            }
            
            if(words[Index] == "atunci"){
                this.Token_Type = "KEYWORD";//keywurd sau keywrd 
                this.Token_Value = words[Index]; //lkoltokens[Index]
                tokens.push([this.Token_Type, this.Token_Value]);//ceva  si aic  acici aici lol
            }

            if(words[Index] == "sfarsit"){
                this.Token_Type = "KEYWORD";
                this.Token_Value = words[Index];
                tokens.push([this.Token_Type, this.Token_Value]);
            }
            
            Index++;
        }

        return tokens;

        
    }
    tokens = [];
}


//#region  comentarii



                    // console.log(words[Index]);

/*if (words[Index] == operators[0]) {
    this.Token_Type = "VARIABLE";
    this.Token_Value = words[Index + 1];
    tokens.push([this.Token_Type, this.Token_Value]);
}
if (words[Index] == operators[1]) {
    this.Token_Type = "VARIABLE";
    this.Token_Value = words[Index + 1];
    tokens.push([this.Token_Type, this.Token_Value]);
}
if (words[Index] == operators[2]) {
    this.Token_Type = "VARIABLE";
    this.Token_Value = words[Index + 1];
    tokens.push([this.Token_Type, this.Token_Value]);
}
if (words[Index] == operators[3]) {
    this.Token_Type = "VARIABLE";
    this.Token_Value = words[Index + 1];
    tokens.push([this.Token_Type, this.Token_Value]);
}
if (words[Index] == operators[4]) {
    this.Token_Type = "VARIABLE";
    this.Token_Value = words[Index + 1];
    tokens.push([this.Token_Type, this.Token_Value]);
}*///TRUBUIA STRING DAR FACUO PRIMU INTEGER ;) STIAM EU BRESIT// this.Token_Value = words[Index];            // numbers.forEach(number => {
                                    //  });
                                    //var vaer var

//#endregion