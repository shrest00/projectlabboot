const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el))

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const formText = document.getElementById('form-text');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
           
            event.preventDefault();

            
            const email = document.getElementById('userEmail').value;
            console.log("Form submitted for:", email);

            
            signupForm.classList.add('d-none');
            formText.classList.add('d-none');

           
            thankYouMessage.classList.remove('d-none');
            
           
            const toastElement = document.getElementById('mainToast');
            if (toastElement) {
                const toastBody = document.getElementById('toastBody');
                toastBody.innerText = "Subscription successful!";
                const toast = new bootstrap.Toast(toastElement);
                toast.show();
            }
        });
    }
});