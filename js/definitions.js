function getInputFieldValue(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ' ';
    return inputFieldValue;
}

function getElementValue(elementID){
    const element = document.getElementById(elementID);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValue(elementID, newValue){
    const elementValueString = document.getElementById(elementID);
    elementValueString.innerText = newValue;
}