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

function handleSpecialButtons(e){
    if(e.target.textContent === 'AC'){
        clearScreen();
    } 
    else if (e.target.textContent === '='){
        if(!op) {
            return output.textContent = a
        };
        dispatch(a,op,b);
        output.textContent = res;
        a = res;
        b = '';
        op = '';
    } 
    else if (e.target.textContent === '←'){
        let s = calc.textContent;
        let removed = s.substring(s.length-1);
        s = s.substring(0,s.length-1);
        calc.textContent = s;
        
        if(removed===op){
            op = '';
            operatorOn = false;
        }else if(b){ 
            b = b.substring(0,b.length-1)}
        else {a = a.substring(0,a.length-1)};
    }
}

function handleButtons(e){
    if(e.target.className === 'standard-bttn'){
        if(!operatorOn){
            a += e.target.textContent;
            output.textContent = '';
            calc.textContent = a;
        }else{
            b += e.target.textContent;
            calc.textContent = `${a} ${op} ${b}`;
        }
    } else if(e.target.className === 'operator-bttn'){
        op = e.target.textContent;
        calc.append(op);
        calc.textContent = `${a} ${op} ${b}`;
        operatorOn = true;
    } else{
        handleSpecialButtons(e);
    }
}

function mouseClick(){
    document.addEventListener("click",(e)=>handleButtons(e));
}

mouseClick();