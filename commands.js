let VariablesNames = [],
    VariablesValues = []; //ty[es types] types

let CreateVariable = (Variablename, VariableValue) => {
    //eval(new ("let " + Variablename + " = " + VariableValue + ";"));
    //console.log(eval(new let("var " + Variablename + " = " + VariableValue + ";", )));
    /**//*VariablesNames.push(Variablename);
    VariablesValues.push(VariableValue);*/

    //console.log(Variables);
    console.log(VariablesNames);
    console.log(VariablesValues);

    if(VariablesValues.length === 0 || VariablesNames.length === 0){
        VariablesNames.push(Variablename);
        VariablesValues.push(VariableValue);
    }

    for(let i = 0; i < VariablesNames; i++){
        if(VariableName == VariablesNames[i]){
            VariablesValues[i] = VariableValue;
        } else{
            VariablesNames.push(Variablename);
            VariablesValues.push(VariableValue);
        }
    }

    //let varsta = 13
}

//console.log(Variables);

let WriteToConsole = (message) => {

    for (let j = 0; j < VariablesNames.length; j++) {
        if (message == VariablesNames[j]) {
            //eval('console.log(' + message + ');');

            Textarea.value += "\n" + VariablesValues[j];

            console.log(VariablesNames[j]);
            console.log(VariablesValues[j]);

            j = 0;

            break;
        } else {
            //eval('console.log("' + message + '");');
            // eval('console.log("' + message + '");');
            console.log(VariablesNames);

            Textarea.value += "\n" +  message;

            break;
        }
        //console.log(message);
    }
}

let ModifyVariable = (index, newValue) => {
    /*for(let i = 0; i < VariablesNames; i++){
        if(NumeVariabila != VariablesNames){
            CreateVariable()
        }
    }*/
    VariablesValues[index] = newValue;
}