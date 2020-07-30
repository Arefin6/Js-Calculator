function keyInput(id){
    const digit1 = document.getElementById(id).addEventListener("click",function(){
        const btnText = document.getElementById(id).innerText;
        const btnNumber = parseInt(btnText);
        //console.log(typeof(btnNumber));  
       const result = document.getElementById("output-value").innerText = btnText; 
     });
    
}
keyInput("0");
keyInput("1");
keyInput("2");
keyInput("3");
keyInput("4");
keyInput("5");
keyInput("6");
keyInput("7");
keyInput("8");
keyInput("9");

