let inc=document.getElementById("increase");
let dec = document.getElementById("decrease");
let re=document.getElementById("reset");

let count=0;
inc.onclick = function(){
    count++;
    document.getElementById("mycount").textContent=count;
}
dec.onclick=function(){
    count--;
    document.getElementById("mycount").textContent=count;
}
re.onclick = function(){
    count=0;
    document.getElementById("mycount").textContent=count;
}