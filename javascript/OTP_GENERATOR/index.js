let btn = document.getElementById('btn');
let mylabel = document.getElementById('mylabel');
btn.onclick = function(){
    let random =Math.floor(Math.random()*10000-100)+1;
    mylabel.textContent=`Your random number is ${random}`;
}