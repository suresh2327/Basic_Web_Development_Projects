const mytext = document.getElementById("mytext")
const btn = document.getElementById("btn");
let myh4 = document.getElementById("myh4");
let age;
btn.onclick =function(){
    age =mytext.value;
    age=Number(age);
    if (age>18){
        myh4.textContent="u are eligible for vote";
    }
    else{
        myh4.textContent="u are not eligible for vote";
    }

}
