var firstPasswordElement = document.getElementById('new-password');
var secondPasswordElement = document.getElementById('repeat-password');
var passwordMinLength = 8;
var letterItem = document.getElementById('letter');
var capitalItem = document.getElementById('capital');
var numberItem = document.getElementById('number');
var lengthItem = document.getElementById('length');
var matchItem = document.getElementById('match');
var specialItem = document.getElementById('special');
var illegalItem = document.getElementById('illegal');
var emailElement = document.getElementById('email');

var validClassName = 'valid';
var invalidClassName = 'invalid';

var firstPasswordValidate = function(){
	var firstPassword=firstPasswordElement.value;
		//check if password contains atleast one letter
	if(/[a-zA-Z]/.test(firstPassword)){
		letterItem.className = validClassName;
	}
	else{
		letterItem.className = invalidClassName;
	}

	//check if password contains atleast one capital letter
	if(/[A-Z]/.test(firstPassword)){
		capitalItem.className = validClassName;
	}
	else{
		capitalItem.className = invalidClassName;
	}

	//check if password contains atleast one number
	if(/[0-9]/.test(firstPassword)){
		numberItem.className = validClassName;
	}
	else{
		numberItem.className = invalidClassName;
	}

	//check if password meets min character length
	if(firstPassword.length >= passwordMinLength){
		lengthItem.className = validClassName;
	}
	else{
		lengthItem.className = invalidClassName;
	}

	//check if password contains atleast one special character
	if(/[!@#$%]/.test(firstPassword)){
		specialItem.className=validClassName;
	}
	else{
		specialItem.className=invalidClassName;
	}

	//check if the password containg any illegal character
	if(firstPassword.length > 0 && !/[^a-zA-Z0-9!@#$%]+$/.test(firstPassword)){
		illegalItem.className=validClassName;
	}
	else{
		illegalItem.className=invalidClassName;
	}

	//check if first password is equal to second password
	var secondPassword = secondPasswordElement.value;
	if(firstPassword.length > 1 && firstPassword === secondPassword){
		matchItem.className=validClassName;
		setValidity(secondPasswordElement, false);
	}
	else{
		matchItem.className=invalidClassName;
	}

};


var secondPasswordValidate = function(){
	var firstPassword = firstPasswordElement.value;
	var secondPassword = secondPasswordElement.value;
	if(firstPassword.length > 1 && firstPassword === secondPassword){
		matchItem.className=validClassName;
		setValidity(secondPasswordElement, false);
	}
	else{
		matchItem.className=invalidClassName;
		setValidity(secondPasswordElement, true);
	}
};

function setValidity(input, invalid){
	if(!invalid && input.getAttribute('aria-invalid')){
		input.removeAttribute('aria-invalid');
	}
	else if(invalid && !input.getAttribute('aria-invalid') ){
		input.setAttribute('aria-invalid', 'true');
	}
}


function emailValidate(){
	if(emailElement.validity.patternMismatch){
		console.log('pattern mismatch');
		emailElement.setCustomValidity('Email must contain an "@" and "."\n Example: "name@domain.com"');
		emailElement.reportValidity();
		emailElement.reportValidity();
	}
	else{
		emailElement.setCustomValidity('');
	}

}

function registerEventListeners(){
	firstPasswordElement.addEventListener('input', firstPasswordValidate);
	secondPasswordElement.addEventListener('input', secondPasswordValidate);
	emailElement.addEventListener('input', emailValidate);
	emailElement.addEventListener('invalid', function(){
		emailElement.setCustomValidity('Email must contain an "@" and "."\n Example: "name@domain.com"');

	});
}


registerEventListeners();


