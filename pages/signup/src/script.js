document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', e => {
        resetErrorMessage();
        e.preventDefault();
        validField();
    });

    function validField() {
        const requiredFields = document.querySelectorAll('.required-field');
        
        for(let field of requiredFields){
            if(field.value === ''){
                const errorMessage = field.parentElement.querySelector('.error-message');

                errorMessage.style.display = 'block'

                throw new Error('Todos os campos precisam ser preenchidos');
            }
        }

        const passwordField = document.getElementById('user-password');
        const confirmPassword = document.getElementById('confirm-password');

        if(passwordField.value !== confirmPassword.value){
            const errorMessage = confirmPassword.parentElement.querySelector('.error-message');

            errorMessage.textContent = 'As senhas precisam ser igauis';

            errorMessage.style.display = 'block';
        }
    }

    function resetErrorMessage(){
        const errorMessage = document.querySelectorAll('.error-message');

        for(let i = 0; errorMessage.length > i; i++){
            errorMessage[i].style.display = "none"
          }
    }
});
