let operatorOn = false;
let a='', b='', op='', res=0;
const output = document.querySelector(".output");
const calc = document.querySelector(".calc");

function calculation(a,op,b){
    switch(op){
        case '+': return a+b;
        case '-': return a-b;
        case '*': return a*b; 
        case '/': return Number.parseFloat(a/b).toFixed(2);
        case '%': return a%b;
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

function handleNumbers(e){
    if(!operatorOn){
        a += e;
        output.textContent = '';
        calc.textContent = a;
    }
    else{
        b += e;
        calc.textContent = `${a} ${op} ${b}`;
    }
}

function handleOperators(e){
    op = e;
    calc.append(op);
    calc.textContent = `${a} ${op} ${b}`;
    operatorOn = true;
}

function handleSpecialButtons(e){
    if(e === 'AC' || e === 'c'){
        clearScreen();
    } 
    else if (e === '=' || e === 'Enter'){
        if(!op) {
            return output.textContent = a
        };
        dispatch(a,op,b);
        output.textContent = res;
        a = res;
        b = '';
        op = '';
    } 
    else if (e === '←' || e === 'Backspace'){
        let s = calc.textContent;
        let removed = s.substring(s.length-1);
        s = s.substring(0,s.length-1);
        calc.textContent = s;
        
        if(res){
            calc.textContent='';
        }
        else if(removed===op){
            op = '';
            operatorOn = false;
        }else if(b){ 
            b = b.substring(0,b.length-1)}
        else {a = a.substring(0,a.length-1)};
    }
}

function handleButtons(e){
    if(e.target.className === 'standard-bttn'){
        handleNumbers(e.target.textContent);
    } else if(e.target.className === 'operator-bttn'){
        handleOperators(e.target.textContent);
    } else{
        handleSpecialButtons(e.target.textContent);
    }
}

function mouseClick(){
    document.addEventListener("click",(e)=>handleButtons(e));
}

mouseClick();

function handleKeys(e){
    let validOp = ['+','-','*','/','%']; 
    if(isFinite(e)){
        handleNumbers(e);
    } else if(validOp.includes(e)){
        handleOperators(e)
    } else{
        handleSpecialButtons(e);
    }
}

function keyPress(){
    document.addEventListener("keydown",(e)=> handleKeys(e.key));
}

keyPress();
