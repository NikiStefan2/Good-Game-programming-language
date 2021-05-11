//let alphabetuitai

let alfabet = "abcdefghijklmnopqrstuvwxyz",
    letters = alfabet.split('');

let NumbersArabic = "0123456789",
    Numbers = NumbersArabic.split('');

let OperatorsString = "=+-*/",
    Operators = OperatorsString.split('');

var tokens;


let Tokenize = (word) => {
    Compile_Btn.addEventListener('click', function () {
        tokens = [];

        for (let k = 0; k < tokens.length; k++) {
            tokens[i] = new Array(2);
        }

        console.log(tokens);
        console.log("brrr");

        if (word == "variabila") {
            Token_Type = "VARIABLE";

            tokens.push(["VARIABLE", word]);

            console.log(word);
        }
        letters.forEach(letter => {
            if (word.includes(letter)) {
                Token_Type = "STRING";

                tokens.push(Token_Type);
            }
        });
        Numbers.forEach(Number => {
            if (word.includes(Number)) {
                Token_Type = "INTEGER";

                tokens.push(Token_Type);
            }
        });
        Operators.forEach(Operator => {
            if (word.includes(Operator)) {
                if (Operator == "+") {
                    Token_Type = "PLUS";

                    tokens.push(Token_Type);
                }
                if (Operator == "-") {
                    Token_Type = "MINUS";

                    tokens.push(Token_Type);
                }
                if (Operator == "*") {
                    Token_Type = "MULTIPLICATION";

                    tokens.push(Token_Type);
                }
                if (Operator == "/") {
                    Token_Type = "DIVIDE";

                    tokens.push(Token_Type);
                }
                if (Operator == "=") {
                    Token_Type = "EQUALS";

                    tokens.push(Token_Type);
                }
                //Token_Type = "OPERATOR";//OPEARA
            }
        });
        console.log(tokens);
        return tokens;
    });
}