let operatorOn = false;
let a='', b='', op='', res=0;
const output = document.querySelector(".output");
const calc = document.querySelector(".calc");

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
            output.textContent = a;
            calc.textContent = a;
        }else{
            b += e.target.textContent;
            calc.append(b);
            dispatch(a,op,b);
        }
    } else if(e.target.className === 'operator-bttn'){
        op = e.target.textContent;
        calc.append(op);
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