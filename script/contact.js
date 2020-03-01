
function validateForm() {
    
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var phonenumber = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("text").value;
    
    var txtPattern = /[a-zA-Z]/;
    var phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 

    var fname = txtPattern.test(firstname);
    var lname = txtPattern.test(lastname);
    var text = txtPattern.test(text);
    var phoneCheck = phonePattern.test(phonenumber);
    var emailCheck = emailPattern.test(email); 



    var ferror = document.getElementById('firstNameError');

    if (fname === false) {
    ferror.style.display = 'block';}

    else {
    ferror.style.display = 'none';}

	var lerror = document.getElementById('lastNameError');

    if (lname === false) {
    lerror.style.display = 'block';}

    else {
    lerror.style.display = 'none';}

    var perror = document.getElementById('phoneError');

    if (phoneCheck === false) {
    perror.style.display = 'block';}

    else {
    perror.style.display = 'none';}

    var eerror = document.getElementById('emailError');


    if (emailCheck === false) {
    eerror.style.display = 'block';}

    else {
    eerror.style.display = 'none';}

    var terror = document.getElementById('textError');

    if (text === false) {
    terror.style.display = 'block';}

    else {
    terror.style.display = 'none';}

    };
   

   