let operatorOn = false;
let a='', b='', op='', res=0;
const display = document.querySelector(".result");

function calculation(a,op,b){
    switch(op){
        case '+': return a+b;
        case '–': return a-b;
        case '×': return a*b; 
        case '÷': return a/b;
    }
}

