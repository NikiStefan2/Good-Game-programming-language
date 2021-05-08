//let alphabetuitai

let alfabet = "abcdefghijklmnopqrstuvwxyz",
    letters = alfabet.split('');

let NumbersArabic = "0123456789",
    Numbers = NumbersArabic.split('');

let OperatorsString = "=+-*/",
    Operators = OperatorsString.split('');

let Tokenize = (word) => {
        if (word.toLowerCase() == "variabila") {
            Token_Type = "VARIABLE";
        }
        letters.forEach(letter => {
            if (word.toLowerCase().includes(letter)) {
                Token_Type = "STRING";
            }
        });
        Numbers.forEach(Number => {
            if (word.toLowerCase().includes(Number)) {
                Token_Type = "INTEGER";
            }
        });
        Operators.forEach(Operator => {
            if (word.toLowerCase().includes(Operator)) {
                if(Operator == "+"){
                    Token_Type = "PLUS";
                }
                if(Operator == "-"){
                    Token_Type = "MINUS";
                }
                if(Operator == "*"){
                    Token_Type = "MULTIPLICATION";
                }
                if(Operator == "/"){
                    Token_Type = "DIVIDE";
                }
                if(Operator == "="){
                    Token_Type = "EQUALS";
                }
                //Token_Type = "OPERATOR";//OPEARA
            }
        });
    }
        