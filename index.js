let age = document.getElementById("age");
let gender = document.getElementById("gender");
let btn = document.getElementById("button");
let sat = document.getElementById("sat");

btn.addEventListener('click',function (){
   sat.textContent =  IBM (age.value,gender.value);
});



function IBM (age,sex){
    if(age<=24 && sex=="Male")
    return "Eligible";
    else if(age>=30 && sex=="Female")
    return "Eligible";
    else
    return "Not Eligible";
}

