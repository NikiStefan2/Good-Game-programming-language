let VariablesNames = [],
    VariablesValues = []; //ty[es types] types

let CreateVariable = (Variablename, VariableValue) => {
    //eval(new ("let " + Variablename + " = " + VariableValue + ";"));
    //console.log(eval(new let("var " + Variablename + " = " + VariableValue + ";", )));
    VariablesNames.push(Variablename);
    VariablesValues.push(VariableValue);

    //console.log(Variables);
    console.log(VariablesNames);
    console.log(VariablesValues);

    //let varsta = 13
}

//console.log(Variables);

let WriteToConsole = (message) => {

    for (let j = 0; j < VariablesNames.length; j++) {
        if (message == VariablesNames[j]) {
            //eval('console.log(' + message + ');');


            console.log(VariablesNames[j]);
            console.log(VariablesValues[j]);

            j = 0;
        } else {
            eval('console.log("' + message + '");');
            // eval('console.log("' + message + '");');
            console.log(VariablesNames);
        }
        //console.log(message);
    }
}