let hour = new Date().getHours();

if(hour < 12){
alert("Good Morning");
}else{
alert("Good Evening");
}

function changeColor(){
document.body.style.backgroundColor =
"#"+Math.floor(Math.random()*16777215).toString(16);
}

function addNumbers(){

let a =
Number(document.getElementById("num1").value);

let b =
Number(document.getElementById("num2").value);

document.getElementById("result").innerHTML =
"Result = " + (a+b);

}