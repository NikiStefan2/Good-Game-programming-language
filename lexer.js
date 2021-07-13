let operators = ["=", "-", "+", "*", "/"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

        while (Index <= words.length) {
            if (words[Index] == "ver") {//var vaer var
                this.Token_Type = "VARIABLE";
                this.Token_Value = words[Index];
                tokens.push([this.Token_Type, this.Token_Value]);
            }
            Index++;

            operators.forEach(operator => {
                if (words[Index] == operator) {

                    this.Token_Type = "OPERATOR";
                    // this.Token_Value = words[Index];
                    tokens.push(this.Token_Type);

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
                    }*/
                }
            });
            // numbers.forEach(number => {
            if (typeof words[Index] === "number") {

                this.Token_Type = "INTEGER";//TRUBUIA STRING DAR FACUO PRIMU INTEGER ;) STIAM EU BRESIT
                this.Token_Value = words[Index];
                tokens.push([this.Token_Type, this.Token_Value]);

                console.log("number");
            }

            //  });
        }

        return tokens;
    }
}
