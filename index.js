let operatorOn = false;
let a='', b='', op='', res=0;
const output = document.querySelector(".output");
const calc = document.querySelector(".calc");

function calculation(a,op,b){
    switch(op){
        case '+': return a+b;
        case '-': return a-b;
        case '*': return a*b; 
        case '/': return a/b;
        case '%': return a%b;
        default: return a;
    }
}

function dispatch(a,op,b){
    a = Number(a);
    b = Number(b);
    res = calculation(a,op,b);

    res = res % 1 != 0 ? res.toFixed(3) : res;
    
    if(res.toString().length>17){
        res = res.toString().substring(0, 10)+'...';
        output.textContent = '';
        output.append(res);
        res = Number(res.substring(0,10));
        return;
    }
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
    if (e==='.'){
        if(!operatorOn){
            if (a.includes('.')){
                return;
            }
            a+=e;
            calc.textContent = `${a}`;
        } else{
            if (b.includes('.')){
                return;
            }
            b+=e;
            calc.textContent = `${a} ${op} ${b}`;
        }
    }
    else if(!operatorOn){
        a += e;
        output.textContent = '';
        calc.textContent = `${a}`;
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
    switch(e){
        case 'AC':
        case 'c':
            clearScreen();
            break;

        case '=':
        case 'Enter':
            dispatch(a,op,b);
            a = res;
            b = '';
            op = '';
            break;
            
        case '←':
        case 'Backspace':
            let s = calc.textContent;
            let removed = s.substring(s.length-1);
            calc.textContent = calc.textContent.substring(0,calc.textContent.length-1);
            
            if(res){
                calc.textContent='';
                b = '';
            }
            else if(removed===op){
                op = '';
                operatorOn = false;
            }else if(b){ 
                b = b.substring(0,b.length-1)}
            else {a = a.substring(0,a.length-1)};
            break;
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
    if(isFinite(e) || e === '.'){
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
