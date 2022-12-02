const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formElements = {
        email,
        password
    };
    console.log (formElements);

    if(event.currentTarget.elements.email.value == '' || event.currentTarget.elements.password.value == '') {
        alert('Всі поля повинні бути заповнені')} 
    event.currentTarget.reset()  
};
