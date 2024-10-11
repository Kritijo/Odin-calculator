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



function handleButtons(e){
    if(e.target.className === 'standard-bttn'){
        if(!operatorOn){
            a += e.target.textContent;
            display.textContent = a;
        }else{
            b += e.target.textContent;
            dispatch(a,op,b);
        }
    } else if(e.target.className === 'operator-bttn'){
        op = e.target.textContent;
        operatorOn = true;
    } else{
        if(e.target.textContent === 'AC'){
            clearScreen();
        }
    }
}

function mouseClick(){
    document.addEventListener("click",(e)=>handleButtons(e));
}

mouseClick();