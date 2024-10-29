let button= document.querySelector(".end button");
let copy= document.querySelector(".text img");
let length=12;
let upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYX';
let lowerCase='abcdefghijklmnopqrstuvwxyx';
let numbers='0123456789';
let specialCase='~!@#$%^&*(){}[]_-+=<>,.?/`';
let sample= upperCase + lowerCase + numbers + specialCase;
button.addEventListener("click",()=>{
let password='';
let res=document.querySelector("input");
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
password+=numbers[Math.floor(Math.random()*numbers.length)];
password+=specialCase[Math.floor(Math.random()*specialCase.length)];
while(length>password.length){
    password+=sample[Math.floor(Math.random()*sample.length)];
};

res.value=password;
});
copy.addEventListener("click",()=>{
    let res=document.querySelector("input");
    res.select();
    res.setSelectionRange(0,999999);
    navigator.clipboard.writeText(res.value).then(()=>{
        alert("password copied to clipboard");
    }).catch(()=>{
        alert("try again");
    })
})