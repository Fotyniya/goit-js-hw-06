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
    console.table(formElements)

    const formData = new FormData (event.currentTarget);
    
    formData.forEach ((value, name) =>
       (!value) ? alert('Всі поля повинні бути заповнені'): 
       event.currentTarget.reset() 
    )
};
