function validationForm() {
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const form = document.querySelector('#signup');


    form.addEventListener('submit', (event) => {

        let messages = [];


        if (firstName.value === '' || firstName.value === null) {
            messages.push('first name is required');
        }

        if (lastName.value === '' || lastName.value === null) {
            messages.push('last name is required');
        }

        if (email.value === '' || email.value === null) {
            messages.push('email is required');
        }

        if (phone.value === '') {
            messages.push('invalid number');
        }

        if (phone.length) {
            
        }

        if (password.value !== confirmPassword.value) {
            messages.push(`passwords do not match`);
        }

        if (password.value === '' || confirmPassword.value.length === '') {
            event.preventDefault();
            messages.push(`password is not valid`);
        }

        if (messages.length > 0) {
            event.preventDefault();
            alert(messages.join(', '));
        }
    });
}

validationForm();