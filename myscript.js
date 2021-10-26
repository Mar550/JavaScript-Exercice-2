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

//FUNCTIONS CHECK LENGTH FOR EACH INPUT 

/*document.getElementByClass("bouton1").addEventListener("click", submitForm);

function submitForm){
    let minlength = 5;Q
    let maxLength = 20;
    var userInput = inputtxt.value;
    if (userInput.length >= minlength && userInput.length <= maxlength){
        alert("Form submitted");
    }
    else {
        alert("Please input a CIN number between " + minLength + "and" + maxLength + "characters");
    }  
}


// FUNCTION CHECK NAME CHARACTERS
function validateName(){
var allowedCharacters = /^[a-zA-Z]+$/
    if (document.getElementsByName("names").match(allowedCharacters)){
        alert("Your form is submitted")
    }
    else {
        alert("Please enter only alphabets")
    }
}



// FUNCTION CHECK DOCUMENT TO SUBMIT FORM

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
*/

//FORM CONST

const form = document.querySelector(".form")


// INPUT NOT EMPTY NAME

const input = document.getElementById("names")

form.addEventListener("submit", (e)=>{

    e.preventDefault()
    console.log("Form submitted")
    
    if(input.value === ''){
        alert("input is not valid")
    }
    else{
        alert(input.value)
    }
})

// INPUT IS NOT EMPTY CIN
const input2 = document.getElementById("cin")

form.addEventListener("submit", (e)=>{

    e.preventDefault()
    console.log("Form submitted")
    
    if(input2.value === ''){
        alert("Please enter a valid CIN number")
    }
    else{
        alert(input.value)
    }
})

const input3 = document.getElementById("mail")

form.addEventListener("submit", (e)=>{

    e.preventDefault()
    console.log("Form submitted")
    
    if(input2.value === ''){
        alert("Please enter a valid e-mail")
    }
    else{
        alert(input.value)
    }
})


//INPUT SHOULD CONTAIN @MAIL ADRESS



function containArobase(){
    var userMail = document.getElementById("mail").value
    if (userMail.contains("@") == false) {
        alert("Please enter a valid mail adress")
    }
}





// MODULES SLECTIONNES 2 MAX

for (var i=0; i<4; i++) {
    var name = "Option" + i;
    var sel = document.getElementById("selection");
    sel.options.length =< 2;
}

// CHECKED VALUE DEFAUT  

var radiobtn = document.getElementById("check1")
radiobtn.checked = true;


// ANNULER VIDER LA PAGE

var annulerbtn = document.getElementById("bouton2");
annulerbtn.addEventListener("click", function(){
    location.reload(true)
});
