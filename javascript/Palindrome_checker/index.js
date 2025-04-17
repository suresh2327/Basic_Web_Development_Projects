
//let input ='suresh';
//input=input.toLowerCase();
//let output = input.split('').reverse().join('');
//console.log(output);


function palindrome(){
    let input = document.getElementById("mytext").value;
    let resut = document.getElementById("result")
    input=input.toLowerCase();
    let output=input.split('').reverse().join('');
    if(input===output){
        resut.textContent=`${input} is an palindrome`;
    }
    else{
        resut.textContent=`${input} is not an palindrome`;
    }

}
