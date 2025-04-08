function red(){
    document.body.style.backgroundColor="red";
   
}
function green(){
    document.body.style.backgroundColor="green";
}
function blue(){
    document.body.style.backgroundColor="blue";
}
function random(){
       let colors=["red","green","blue","yellow","purple","orange"];
       let randomColor=colors[Math.floor(Math.random()*colors.length)];
       document.body.style.backgroundColor=randomColor;
       
}