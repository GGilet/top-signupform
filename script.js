const submitButton = document.querySelector('button');
let errorMessage = document.querySelector('#incorrectPassword');
let errorMessageConfirm = document.querySelector('#incorrectConfirmPassword');
let invalidPasswordMessage = document.createElement('p');
let buttonWasClicked = false;

function clearStytle() {
	password.classList.remove('passwords-invalid');
	confirmPassword.classList.remove('passwords-invalid');
	password.classList.remove('passwords-valid');
	confirmPassword.classList.remove('passwords-valid');
	errorMessage.removeChild(invalidPasswordMessage);
}

function validatePassword(form) {
	password1 = form.password.value;
	password2 = form.confirmPassword.value;
	if (password1 == '' || password2 == '') {
		if (password1 == '') {
			password.classList.add('passwords-invalid');
			invalidPasswordMessage.textContent = '* Password cannot be blank';
			errorMessage.appendChild(invalidPasswordMessage);
		} else if (password2 == '') {
			confirmPassword.classList.add('passwords-invalid');

			invalidPasswordMessage.textContent = '* Password cannot be blank';
			errorMessageConfirm.appendChild(invalidPasswordMessage);
		}
		errorMessage.className = 'incorrect-password';
		errorMessageConfirm.className = 'incorrect-password';
	} else if (password1 != password2) {
		password.classList.add('passwords-invalid');
		invalidPasswordMessage.textContent = '* Passwords must match';
		errorMessageConfirm.appendChild(invalidPasswordMessage);
		errorMessage.appendChild(invalidPasswordMessage);

		errorMessage.className = 'incorrect-password';
		errorMessageConfirm.className = 'incorrect-password';
	} else if (password1 == password2) {
		password.classList.add('passwords-valid');
		confirmPassword.classList.add('passwords-valid');
	}
}

submitButton.addEventListener('click', () => {
	console.log(password);
	console.log(confirmPassword);
	validatePassword(form);
	if (buttonWasClicked === true) {
		clearStytle();
		validatePassword(form);
		buttonWasClicked = false;
	}
	buttonWasClicked = true;
});
