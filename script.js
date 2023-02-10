//carousel//
var carousel=document.querySelector('img');
var images=["img/slide/slide-1.jpg","img/slide/slide-2.jpg","img/slide/slide-3.jpg"];
var num=0;
function next(){
    num++;
       if(num>=images.length){
        num=0;
        carousel.src=images[num]
        
    }
    else{
       carousel.src=images[num]
       
    }
                    
};
function prev(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }

};
//car end
//alert//
function cart(){
    alert("Item added to cart");
}
//form//
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("mail");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm");


form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
});

function checkinput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if(usernameValue === ''){
        setError(username,'Username cannot be blank');
        alert("Please Enter Name");
        return false;
    }
    else{
        setSuccess(username);
    }
    if(emailValue === ''){
        setError(email,'Email cannot be blank');
        alert("Please Enter Email");
        return false;
    }
    else if(!isEmail(emailValue)){
        setError(email,'Not a valid Email');
    }
    else{
        setSuccess(email);
    }
    if(passwordValue === ''){
        setError(password,'Phone No cannot be blank');
        alert("Please Enter PhoneNo");
        return false;
    }
    else{
        setSuccess(password);
    }
    if(password2Value === ''){
        setError(password2,'Date cannot be blank')
        alert("Please Enter Date");
        return false;
    }
    else{
        setSuccess(password2);
    }

}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email);
}



