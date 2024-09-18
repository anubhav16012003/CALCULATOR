const displayInput = document.getElementById('displayNumbers');

function appendToDisplay (input){
    displayInput.value += input;
};

function resetDisplay (){
    displayInput.value = '';
};

function calculate (){
    try{
        displayInput.value = eval(displayInput.value);
    }
    catch{
        displayInput.value = "ERROR";
    }
};