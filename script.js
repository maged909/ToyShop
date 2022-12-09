const submitContactBtn = document.getElementById("submitContact")
const alertContactMessage = document.getElementById("alertContactMessage")
const buyBtns = document.querySelectorAll(".buyBtn")
const alertBaught = document.getElementById("alertBaught")
const firstNameFeild = document.getElementById("firstName")

submitContactBtn.addEventListener("click", alertSeccess);
buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener("click", Baught);
});
var cart = 0;

function alertSeccess(e) {
    e.preventDefault();
    UserName = firstNameFeild.value
    if(UserName == ''){
        firstNameFeild.classList.add("border-danger")
    }else{
        firstNameFeild.classList.remove("border-danger")
        alertContactMessage.classList.remove("d-none")

        var inputs = document.querySelectorAll('.contactFormInput');
        inputs.forEach(input => {
            input.value='';
        });

        setTimeout(hideAlert, 5000);
    }
    alertContactMessage.innerHTML = 'Thank you '+UserName+' For Contacting us.'
  }
function hideAlert(){
    alertContactMessage.classList.add("d-none")
    alertBaught.classList.add("d-none")
}
function Baught(){
    alertBaught.classList.remove("d-none");
    cart = cart+1
    alertBaught.innerHTML = 'Added To Cart - Your Cart Has '+cart+" element(s)!" 
    setTimeout(hideAlert, 3000);
}