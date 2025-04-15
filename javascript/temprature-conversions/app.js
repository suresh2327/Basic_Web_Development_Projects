let textbox=document.getElementById("mytext");
let fah=document.getElementById("cone");
let cel =document.getElementById("con");
let result=document.getElementById("result");
let temp;

function convert(){
     if(fah.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"°F";
     }
     else if(cel.checked){
        temp=Number(textbox.value);
        temp=(temp-32) *(5/9);
        result.textContent=temp.toFixed(1)+"°C";
     }
     else{
        result.textContent="select valid option";
     }
     
}