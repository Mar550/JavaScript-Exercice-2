/* Function lengthName(inputtxt, minLength, maxLength){
    var userInput = inputtxt.value;
    if (userInput.length >= minlength && userInput.length <= maxlength){
        return true;
    }
    else {
        return ("Please input a name between " + minLenght + "and" + maxLength + "characters");
    }


function lengthID(inputtxt, minLength, maxLength){
    var userInput = inputtxt.value;
    if (userInput.length >= minlength && userInput.length <= maxlength){
        return true;
    }
    else {
        return ("Please input an ID number between " + minLength + "and" + maxLength + "characters");
    }

*/


/* document.getElementById("bouton")= function(){
    submitForm()
}; */

document.getElementByClass("bouton1").addEventListener("click", submitForm);

function submitForm(){
    let minlength = 5;
    let maxLength = 20;
    var userInput = inputtxt.value;
    if (userInput.length >= minlength && userInput.length <= maxlength){
        alert("Form submitted");
    }
    else {
        alert("Please input an ID number between " + minLength + "and" + maxLength + "characters");
    }  
}





let btn = document.getElementByClass('bouton1');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('check');
    rates.forEach((check) => {
        if (check.checked) {
            alert("Form sbmitted");       
        }
        else{
            alert("Please check a case in Niveau")
        }
    })
});


