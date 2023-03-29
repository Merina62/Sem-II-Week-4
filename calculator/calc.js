const button1 = document.getElementById("button1");
const displaytext1 = document.getElementById('display')
button1.addEventListener("click", () => 
    (displaytext1.value += button1.value)       
); 

 
const button2 = document.getElementById("button2");
const displaytext2 = document.getElementById('display')
button2.addEventListener("click", () => 
    (displaytext2.value += button2.value)       
); 
    
const button3 = document.getElementById("button3");
const displaytext3 = document.getElementById('display')
button3.addEventListener("click", () => 
    (displaytext3.value += button3.value)       
); 

const button4 = document.getElementById("button4");
const displaytext4 = document.getElementById('display')
button4.addEventListener("click", () => 
    (displaytext4.value += button4.value)       
); 

const button5 = document.getElementById("button5");
const displaytext5 = document.getElementById('display')
button5.addEventListener("click", () => 
    (displaytext5.value += button5.value)       
); 

const button6= document.getElementById("button6");
const displaytext6 = document.getElementById('display')
button6.addEventListener("click", () => 
    (displaytext6.value += button6.value)       
); 

const button7 = document.getElementById("button7");
const displaytext7 = document.getElementById('display')
button7.addEventListener("click", () => 
    (displaytext7.value += button7.value)       
); 

const button8 = document.getElementById("button8");
const displaytext8 = document.getElementById('display')
button8.addEventListener("click", () => 
    (displaytext8.value += button8.value)       
); 

const button9 = document.getElementById("button9");
const displaytext9 = document.getElementById('display')
button9.addEventListener("click", () => 
    (displaytext9.value += button9.value)       
); 

const button0 = document.getElementById("button0");
const displaytext0 = document.getElementById('display')
button0.addEventListener("click", () => 
    (displaytext0.value += button0.value)       
); 

const addButton = document.getElementById("addButton");
const displaytext11 = document.getElementById('display')
addButton.addEventListener("click", () => 
    (displaytext11.value += addButton.value)       
); 

const subtractButton = document.getElementById("subtractButton");
const displaytext12 = document.getElementById('display')
subtractButton.addEventListener("click", () => 
    (displaytext12.value += subtractButton.value)       
); 


const multiplyButton = document.getElementById("multiplyButton");
const displaytext13 = document.getElementById('display')
multiplyButton.addEventListener("click", () => 
    (displaytext13.value += multiplyButton.value)       
); 

const divideButton = document.getElementById("divideButton");
const displaytext14 = document.getElementById('display')
divideButton.addEventListener("click", () => 
    (displaytext14.value += divideButton.value)       
); 

const clearButton = document.getElementById("clearButton");
const displaytext15 = document.getElementById('display')
clearButton.addEventListener("click", () => 
    (displaytext15.value="")       
); 


const equalsButton = document.getElementById("equalsButton");
const displaytext16 = document.getElementById('display')
equalsButton.addEventListener("click", ()=>
    (displaytext16.value=eval(displaytext16.value))
);