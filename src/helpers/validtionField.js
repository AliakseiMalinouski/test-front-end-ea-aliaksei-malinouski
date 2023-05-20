export const validationField = (value) => {

    let currentValue = value;

    let valueToArray = currentValue.split("");

    let prohibitedSymbolsArray = [
        "!", "?", "+", "-", "(", ")", "{", "}", "=", ":", "*", "&", "^", "'", '"', ">", "<", ",", "/", "|", "&", "%", "#", "`", "~", ";",
    ];

    if(valueToArray.length <= 1) {
        return {
            status: "error",
            type: "empty field",
            text: "You have not entered anything - the value of the field is blank",
            state: true,
            example: "name0000@gmail.com",
        }     
    }

    else if(valueToArray.length < 15) {
        return {
            status: "error",
            type: "short value",
            text: "The value entered is too short",
            state: true,
            example: "name0000@gmail.com"
        }
    }

    else if(valueToArray.length > 15) {
        let illigalSymbols = [];

        for(let i = 0; i < valueToArray.length; i++) {
            let element = valueToArray[i];
            for(let j = 0; j < prohibitedSymbolsArray.length; j++) {
                let symbol = prohibitedSymbolsArray[j];
                if(element === symbol) {
                    illigalSymbols.push(element);
                }
            }
        }

        if(illigalSymbols.length) {
            return {
                status: "invalid",
                type: "invalid value",
                text: "The value entered contains illegal characters: ",
                state: true,
                example: "name0000@gmail.com",
                illigal: illigalSymbols.join(""),
            }
        }

        else if(!valueToArray.includes(`@`)) {
            return {
                status: "error",
                type: "does not contain an '@'",
                text: 'The value entered does not contain an "@"',
                state: true,
                example: "name0000@gmail.com"
            }
        }

        else if(valueToArray.includes('@')) {
            return {
                status: "success",
                type: "field is fill",
                text: "Field successfully completed",
                state: false,
                example: "name0000@gmail.com",
                value: valueToArray.join("")
            }
        }

    }

    return {
        status: "success",
        type: "field is fill",
        text: "Field successfully completed",
        state: false,
        example: "name0000@gmail.com",
        value: valueToArray.join("")
    }
    
}