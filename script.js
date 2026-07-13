const input=document.getElementById("password");
const bar=document.getElementById("bar");
const strength=document.getElementById("strength");
const tips=document.getElementById("tips");

const commonPasswords=[
"123456",
"password",
"qwerty",
"admin",
"abc123",
"welcome"
];

input.addEventListener("input",analyze);

function analyze(){

let pass=input.value;

if(pass==""){
bar.style.width="0%";
strength.innerHTML="";
tips.innerHTML="";
return;
}

if(commonPasswords.includes(pass.toLowerCase())){
bar.style.width="100%";
bar.style.background="red";
strength.innerHTML="Very Weak";
tips.innerHTML="This is a commonly used password.";
return;
}

let score=0;

if(pass.length>=8)score++;
if(/[A-Z]/.test(pass))score++;
if(/[a-z]/.test(pass))score++;
if(/[0-9]/.test(pass))score++;
if(/[!@#$%^&*]/.test(pass))score++;

switch(score){

case 1:
case 2:
bar.style.width="30%";
bar.style.background="red";
strength.innerHTML="Weak";
tips.innerHTML="Use uppercase, numbers and symbols.";
break;

case 3:
bar.style.width="60%";
bar.style.background="orange";
strength.innerHTML="Medium";
tips.innerHTML="Increase length and add symbols.";
break;

case 4:
bar.style.width="80%";
bar.style.background="yellow";
strength.innerHTML="Good";
tips.innerHTML="Almost perfect.";
break;

case 5:
bar.style.width="100%";
bar.style.background="lime";
strength.innerHTML="Strong";
tips.innerHTML="Excellent password!";
break;

}

}

document.getElementById("toggle").onclick=function(){

if(input.type==="password"){
input.type="text";
this.innerHTML="🙈";
}
else{
input.type="password";
this.innerHTML="👁";
}

}

function generatePassword(){

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password="";

for(let i=0;i<16;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length));
}

input.value=password;

analyze();

}

function copyPassword(){

navigator.clipboard.writeText(input.value);

alert("Password Copied!");

}