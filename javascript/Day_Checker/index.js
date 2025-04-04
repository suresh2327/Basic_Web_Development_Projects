
let btn = document.getElementById("btn");
let para = document.getElementById("para");
btn.onclick = function(){
   let day= document.getElementById("mytext").value;
   day=Number(day);
    switch(day){
        case 1:
            para.textContent=`So, day ${day} is Monday`;
            break;
        case 2:
            para.textContent=`So, day ${day} is Tuesday`;
            break;
        case 3:
            para.textContent=`So, day ${day} is Wednesday`;
            break;
        case 4:
            para.textContent=`So, day ${day} is Thursday`;
            break;
        case 5:
            para.textContent=`So,  day ${day} is Friday`;
            break;
        case 6:
            para.textContent=`So, day ${day} is Saturaday`;
            break;
        case 7:
            para.textContent=`So, day ${day} is Sunday Funday`;
            break;
        default:
            para.textContent="Invalid input";
            break;
    }
  
    
}




