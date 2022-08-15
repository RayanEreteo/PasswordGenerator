//UPPERCASE COMMENT --- Category
//lowercase comment --- Line explanation


//VARIABLES
const generate = document.querySelector('#generate');
const output = document.querySelector(".pass-output");
const slider = document.querySelector("#pass-length-slider");
const sliderValue = document.querySelector("#pass-length-valuenumber");
const textCopyInfo = document.querySelector('.info-text');

//Adjust the value (number) to the slider value
sliderValue.innerHTML = slider.value;

//LISTENERS

generate.addEventListener('click', generatePass);
output.addEventListener('click', copyPass);
slider.addEventListener('input', function(){
        sliderValue.innerHTML = slider.value;
})

//FUNCTIONS

function generatePass(e){
        //Block the form submit
        e.preventDefault();
        //Put all the alphabet in a variable
        let allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@";
        //make a variable that will be equal to the slider value
        let passLength;
        passLength = slider.value;
        //Make a for loop that choose a random letter in the 'allChar' variable and will loop until it's equal to the variable 'passLength'

        //-1 in the condition to ignore the entry iteration
        generatedPassword = "";
        for (var i = 0; i <= passLength - 1; i++){
                generatedPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
        }
        //Output value will be equal to the generated password
        output.value = generatedPassword;   
}

function copyPass(){
        //Copy the the generated password to clipboard and change the info text
        navigator.clipboard.writeText(generatedPassword);
        textCopyInfo.innerHTML = "Password copied !";
        //Make a null variable that will contain a timer
        let time;
        //If the variable 'time' has already a timer we clear this timer and clear the variable
        if(time != null){
                window.clearTimeout(time)
                time = null
        }else{ //Else we set the variable to a timer of 3000ms that will call the 'resetText' function
                time = window.setTimeout(resetText, 3000);
        }
}

function resetText() {
        textCopyInfo.innerHTML = "Click on the input to generate password.";
}
