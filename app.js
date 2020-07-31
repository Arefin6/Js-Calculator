//Grabing the Number Buttons
const zeroBtn = document.getElementById("clac-zero");
const oneBtn = document.getElementById("clac-zero");
const twoBtn = document.getElementById("clac-zero");
const threeBtn = document.getElementById("clac-zero");
const fourBtn = document.getElementById("clac-zero");
const fiveBtn = document.getElementById("clac-zero");
const sixBtn = document.getElementById("clac-zero");
const sevenBtn = document.getElementById("clac-zero");
const eightBtn = document.getElementById("clac-zero");
const NineBtn = document.getElementById("clac-zero");

//Grabing the Operator Button
const decimalBtn=document.getElementById('clac-decimal');
const backspaceBtn=document.getElementById('clac-backspace');
const clearBtn=document.getElementById('clac-clear');
const displayElement=document.getElementById('clac-display-val');


let displayVal='0';
let pendingVal;
let evalstringArray=[];

var numbersBtns=document.getElementsByClassName('clac-btn-num');
var operatorsBtns=document.getElementsByClassName('clac-btn-operator');

var updateDisplayVal = (clickobj) => {

       var btnText = clickobj.target.innerText;
       if(displayVal === "0"){
           displayVal="";
       }
       displayVal+=btnText;
       displayElement.innerText=displayVal;
           
}
var performOperation = (clickobj) => {

	var operator=clickobj.target.innerText;
	  
	switch(operator){
		case '+':
            pendingVal=displayVal;
			displayVal='0';
			displayElement.innerText=displayVal;
			evalstringArray.push(pendingVal);
			evalstringArray.push('+');
			break;
		case '-':
            pendingVal=displayVal;
			displayVal='0';
			displayElement.innerText=displayVal;
			evalstringArray.push(pendingVal);
			evalstringArray.push('-');
			break;

		case 'x':
            pendingVal=displayVal;
			displayVal='0';
			displayElement.innerText=displayVal;
			evalstringArray.push(pendingVal);
			evalstringArray.push('*');
			break;
		case'÷':
			pendingVal=displayVal;
			displayVal='0';
			displayElement.innerText=displayVal;
			evalstringArray.push(pendingVal);
			evalstringArray.push('/');

			break;
        case'=':
			evalstringArray.push(displayVal);
			//displayVal='0';
			var evalutiion=eval(evalstringArray.join(' '));
			displayVal=evalutiion +'';
			displayElement.innerText=displayVal;
			evalstringArray=[];
			break;
		default:
			break;

		   }
	
}

for (let i = 0; i< numbersBtns.length; i++) {

    numbersBtns[i].addEventListener('click',updateDisplayVal,false);
}
for (let j = 0; j < operatorsBtns.length; j++) {

    operatorsBtns[j].addEventListener('click',performOperation,false);
}
clearBtn.onclick = () =>{
   displayVal = "0";
   pendingVal = undefined;
   evalStringArray = [];
   displayElement.innerHTML=displayVal; 
}
backspaceBtn.onclick = () =>{
    let lengthOfDisplayVal = displayVal.length;
    displayVal=displayVal.slice(0,lengthOfDisplayVal-1);
     if(displayVal===""){
         displayVal="0";
     }
     displayElement.innerText = displayVal;
}
decimalBtn.onclick = () =>{
    if(!displayVal.includes(".")){
        displayVal+=".";
        displayElement.innerHTML=displayVal; 
    }
}
