let firstNumber="";
let secondnumber="";
let operator="";

function appendNumber(num){    
        if(operator===""){           
            firstNumber+=num; 
            document.getElementById("result").value=firstNumber;     
        }
        else{
            secondnumber+=num;  
            document.getElementById("result").value=firstNumber+""+operator+""+secondnumber;      
        }
}
function setOperator(op){    

    operator=op;  
    document.getElementById("result").value=firstNumber+""+operator;

}
function calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseFloat(firstNumber)+parseFloat(secondnumber);
            break;
        case '-':
            result=parseFloat(firstNumber)-parseFloat(secondnumber);
            break;
        case '*':
            result=parseFloat(firstNumber)*parseFloat(secondnumber);
            break;
        case '/':
            result=parseFloat(firstNumber)/parseFloat(secondnumber);
            break;
    }
    document.getElementById("result").value=result;      
}
function clearresult(){
     firstNumber="";
     secondnumber="";
       operator="";
       document.getElementById("result").value="";  
}
