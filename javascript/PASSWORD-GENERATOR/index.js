let input=10;
const iknow=document.getElementById("password");
const lowercase = true;
const uppercase = true;
const numbers =true;
const symbols=false;
function PasswordGenerator(lenght,lowercase,uppercase,numbers,symbols){
    const LowerCaseChars=`abcdefghikllmnopqrstuvwxyz`;
    const UpperCaseChars=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const NumberChars=`0123456789`;
    const SymbolsChars=`!@#$%^&*()_+{}[]|:;<>,.?/~`;

    let allowechars='';
    let password='';

    allowechars+=lowercase?LowerCaseChars:""
    allowechars+=uppercase?UpperCaseChars:""
    allowechars+=numbers?NumberChars:""
    allowechars+=symbols?SymbolsChars:""

    if (lenght<=0){
        iknow.textContent='password lenght is alteast 1 character';
    }
    else if(allowechars.length===0){
        iknow.textContent='atleast one set of charcaters are needed to generate passowrd';
        
    }
    for (let i=0;i<lenght;i++){
        const randomindex=Math.floor(Math.random()*allowechars.length);
        password+=allowechars[randomindex];
    }
    return password;

}
let result=PasswordGenerator(input,lowercase,uppercase,numbers,symbols)
const password=document.getElementById("password").textContent=result;

