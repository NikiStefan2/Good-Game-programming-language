let VariablesNames = [],
    VariablesValues = []; //ty[es types] types

let functions = [],
    functionsValue = [];

let index = 0;

let CreateVariable = (Variablename, VariableValue) => {
    //eval(new ("let " + Variablename + " = " + VariableValue + ";"));
    //console.log(eval(new let("var " + Variablename + " = " + VariableValue + ";", )));
    /**//*VariablesNames.push(Variablename);
    VariablesValues.push(VariableValue);*/

    //console.log(Variables);

    VariablesNames.push(Variablename);
    VariablesValues.push(VariableValue);
    console.log('lool');

    console.log(VariablesNames);
    console.log(VariablesValues);

    // ModifyVariable();

    /*for (let i = 0; i < VariablesNames; i++) {
        if (VariableName == VariablesNames[i]) {
            //VariablesValues[i] = VariableValue;
            ModifyVariable(i, VariableValue);
            console.log("Duplication");
            console.log(i);
            console.log(VariablesNames[i], VariablesValues[i]);
        }
        else {

        }
    }*/

    //let varsta = 13
}

//console.log(Variables);

let WriteToConsole = (message) => {
    console.log(message);
    let j;

    if (message != VariablesNames || VariablesNames.length == 0) {
        //eval('console.log("' + message + '");');
        // eval('console.log("' + message + '");');
        console.log(VariablesNames);

        Textarea.value += "\n" + message;
        console.log(message);
    }

    if (VariablesNames.length != 0) {
        for (j = 0; j < VariablesNames.length; j++) {
            console.log("vaca");

            if (message == VariablesNames[j]) {
                //eval('console.log(' + message + ');');

                Textarea.value += "\n" + VariablesValues[j];

                console.log(VariablesNames[j]);
                console.log(VariablesValues[j]);

                j = 0;

                return;
            }
            //console.log(message);
        }
    }
}

/*let ModifyVariable = (index, newValue) => {
    /*for(let i = 0; i < VariablesNames; i++){
        if(NumeVariabila != VariablesNames){
            CreateVariable()
        }
    }*/
/*VariablesValues[index] = newValue;

console.log("hehe bn ca merge nu mergea ca nu stiam ca merge looooll");

/*for (let i = 0; i < VariablesNames; i++) {
    if (VariableName == VariablesNames[i]) {
        VariablesValues[i] = VariableValue;
        console.log("Duplication");
        console.log(i);
        console.log(VariablesNames[i], VariablesValues[i]);
    }
    else {
        VariablesNames.push(Variablename);
        VariablesValues.push(VariableValue);
        console.log('lool');
    }
}*/
//}

/*let CreateFunction = (ExecuteCommand) => {
    Textarea.value += "\n \n \n " + ExecuteCommand.toString();
}*/

let Repeta = (Count, execution) => {
    let i = 0;

    while (i < Count) {
        Executa(execution.slice(2, 5));
        i++;
    }
}

let Funcite = (execution) => {
    let isCalled = false;

    if(isCalled){

    }
}

let ExecuteFunction = (FunctionName) => {
    for(let g = 0; g < functions; g++){
        if(FunctionName == functions[g]){
            Executa(functionsValue[g]);
        }
    }
}

let Executa = (words) => {
    words.forEach(word => {

        // let SentenceType;
        // let sentenceWords = [];

        if (word.includes("(scrie")) {
            // SentenceType = "METHOD";
            //sentenceWords = word.split(' ');

            index = 2;

            WriteToConsole(words[1]);

            console.log(words);
            console.log(words[1]);
        }
    });
}