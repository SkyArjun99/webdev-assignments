document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('accessForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
            
    // Real-time Validation Logic (Regex)
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const setStatus = (input, isValid, errorId) => {
        const errorDiv = document.getElementById(errorId);
        if (isValid) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            errorDiv.style.visibility = 'hidden';
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
            errorDiv.style.visibility = 'visible';
        }
    };

    // Input Listeners for Live Feedback
    nameInput.addEventListener('input', () => setStatus(nameInput, nameInput.value.trim() !== "", 'name-error'));
            
    emailInput.addEventListener('input', () => setStatus(emailInput, validateEmail(emailInput.value), 'email-error'));

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
                
        const isNameValid = nameInput.value.trim() !== "";
        const isEmailValid = validateEmail(emailInput.value);

        if (isNameValid && isEmailValid) {
            alert("Access Granted. Sending Data...");
        } else {
            // Trigger Shake
            form.classList.add('shake');
            setTimeout(() => form.classList.remove('shake'), 300);
                    
            // Show errors
            setStatus(nameInput, isNameValid, 'name-error');
            setStatus(emailInput, isEmailValid, 'email-error');
        }
    });
});