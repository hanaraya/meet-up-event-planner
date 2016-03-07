




var firstPasswordElement = document.getElementById('new-password');
var secondPasswordElement = document.getElementById('repeat-password');
var userNameElement = document.getElementById('name');
var emailElement = document.getElementById('email');

var submitButton = document.getElementById('register-submit');
var passwordMinLength = 8;
var letterItem = document.getElementById('letter');
var capitalItem = document.getElementById('capital');
var numberItem = document.getElementById('number');
var lengthItem = document.getElementById('length');
var matchItem = document.getElementById('match');
var specialItem = document.getElementById('special');
var illegalItem = document.getElementById('illegal');

var validClassName = 'valid';
var invalidClassName = 'invalid';

var firstPasswordObject = {
	valid: false,
	inputStatus: function(){
		if(firstPasswordObject.valid){
			setValid(firstPasswordElement);
		}
		else{
			setInvalid(firstPasswordElement);
		}
	},
	validate: function(){
		var firstPassword=firstPasswordElement.value;
		firstPasswordObject.valid = true;
		console.log('validating');
		//check if password contains atleast one letter
		if(/[a-zA-Z]/.test(firstPassword)){
			letterItem.className = validClassName;
		}
		else{
			letterItem.className = invalidClassName;
			firstPasswordObject.valid = false;
		}

	//check if password contains atleast one capital letter
	if(/[A-Z]/.test(firstPassword)){
		capitalItem.className = validClassName;
	}
	else{
		capitalItem.className = invalidClassName;
		firstPasswordObject.valid = false;
	}

	//check if password contains atleast one number
	if(/[0-9]/.test(firstPassword)){
		numberItem.className = validClassName;
	}
	else{
		numberItem.className = invalidClassName;
		firstPasswordObject.valid = false;
	}

	//check if password meets min character length
	if(firstPassword.length >= passwordMinLength){
		lengthItem.className = validClassName;
	}
	else{
		lengthItem.className = invalidClassName;
		firstPasswordObject.valid = false;
	}

	//check if password contains atleast one special character
	if(/[!@#$%]/.test(firstPassword)){
		specialItem.className=validClassName;
	}
	else{
		specialItem.className=invalidClassName;
		firstPasswordObject.valid=false;
	}

	//check if the password containg any illegal character
	if(firstPassword.length > 0 && !/[^a-zA-Z0-9!@#$%]+$/.test(firstPassword)){
		illegalItem.className=validClassName;
	}
	else{
		illegalItem.className=invalidClassName;
		firstPasswordObject.valid=false;
	}
	firstPasswordObject.inputStatus();
}


}

var secondPasswordObject = {
	valid: false,
	inputStatus: function(){
		if(secondPasswordObject.valid){
			setValid(secondPasswordElement);
		}
		else{
			setInvalid(secondPasswordElement);
		}
	},
	validate: function(){

		var firstPassword = firstPasswordElement.value;
		var secondPassword = secondPasswordElement.value
		if(firstPassword === secondPassword){
			console.log('Password matched ' + secondPassword);
			secondPasswordObject.valid = true;
			match.className=validClassName;
		}
		else{
			secondPasswordObject.valid = false;
			match.className=invalidClassName;
		}
		secondPasswordObject.inputStatus();
		checkSubmitButton();
	}
}

function checkSubmitButton(){
	//Submit button is valid if all the elements are valid
	var userName=userNameElement.value;
	var email=emailElement.value;

	console.log('validating submit' + userName.length + email.length);

	submitButton.disabled = false;
	switch(true){
		case (userName.length < 1): break;
		case (email.length < 1): break;
		case (!firstPasswordObject.valid): console.log('firstPassword valid ' + firstPasswordObject.valid); break;
		case (!secondPasswordObject.valid): break;
		default: submitButton.disabled = false;
	}

}

function validateUserName(){
	var userName = this.value;
	if(userName.length > 0){
		setValid(this);
	}
	else{
		setInvalid(this);
	}
}

function setInvalid(input){
	if(!input.getAttribute("aria-invalid")){
		input.setAttribute("aria-invalid", "true");
	}

}

function setValid(input){
	if(input.getAttribute("aria-invalid")){
		input.removeAttribute("aria-invalid");
	}
}

function registerEventListeneres(){
	firstPwdElement.addEventListener('input', firstPwdChange);
	secondPwdElement.addEventListener('change', secondPwdChange);

	//register events handlers to enable/disable submit button
	// firstPasswordElement.addEventListener('input', firstPasswordObject.validate);
	// secondPasswordElement.addEventListener('input', secondPasswordObject.validate);
	// userNameElement.addEventListener('input', checkSubmitButton);
	// emailElement.addEventListener('input', checkSubmitButton);
	// userNameElement.addEventListener('input', validateUserName);

}



registerEventListeneres();