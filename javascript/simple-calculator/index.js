const display = document.getElementById("display");
function apppenToDisaplay(input){
    display.value+=input;
}
function clearDisaplay(){
    display.value=0;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}