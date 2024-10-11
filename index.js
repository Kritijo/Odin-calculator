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

function dispatch(a,op,b){
    a = Number(a)
    b = Number(b)
    res = calculation(a,op,b);
    output.textContent = '';
    output.append(res);
}

function clearScreen(){
    output.textContent='';
    calc.textContent= '';
    a='';
    b='';
    res=0;
    operatorOn = false;
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
        handleSpecialButtons(e);
    }
}

function mouseClick(){
    document.addEventListener("click",(e)=>handleButtons(e));
}

mouseClick();