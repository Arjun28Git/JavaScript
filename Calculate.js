
function calculate() {
    console.log("tdesF");
const op=document.getElementById("Operation").value;
const a=parseInt(document.getElementById("num1").value);
const b=parseInt(document.getElementById("num2").value); 
console.log(op);
    if(op == "Add") {
        alert("Result:"+(a+b));
    }   
    else if(op == "subtract") {
        alert("Result:"+(a-b));
    }
    else if(op == "multiply") {
        alert("Result:"+(a*b));
    }
    else if(op == "divide") {
        alert("Result:"+(a/b));
    }
    else {
        return "Invalid operation";
    }
  
}   