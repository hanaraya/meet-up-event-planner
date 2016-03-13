/*eslint-disable */
function initMap() {
	var autocomplete;
	autocomplete = new google.maps.places.Autocomplete(
		/** @type {HTMLInputElement} */(document.getElementById('event-location')),
		{ types: ['geocode'] });
	google.maps.event.addListener(autocomplete, 'place_changed', function() {
	});
}
/*eslint-enable */

var newEventForm = document.getElementById('new-event');
var eventStartTime = document.getElementById('event-start-time');
var eventEndTime = document.getElementById('event-end-time');

newEventForm.onsubmit = function(){
	//Store the meet-up events in the web storage local

	var myStorage = localStorage;
	var myEvent = {
		eventName : document.getElementById('event-name').value,
		eventType : document.getElementById('event-type').value,
		eventHost : document.getElementById('event-host').value,
		eventStart : new Date((new Date(eventStartTime.value).getTime() +timezoneOffset)).toLocaleString(),
		eventEnd : new Date((new Date(eventEndTime.value).getTime() +timezoneOffset)).toLocaleString(),
		eventLocation : document.getElementById('event-location').value,
		eventAttendees : document.getElementById('event-guest-list').value,
		eventMessage : document.getElementById('event-message').value
	};
	var eventList = []; 
	if(myStorage['eventList'])
		eventList = JSON.parse(myStorage['eventList']);
	eventList.unshift(myEvent);
	myStorage['eventList'] = JSON.stringify(eventList);
};

//default values for time
var currentDate = new Date();
 
// Find the current time zone's offset in milliseconds.
var timezoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;
 
// Subtract the time zone offset from the current UTC date, and pass
//  that into the Date constructor to get a date whose UTC date/time is
//  adjusted by timezoneOffset for display purposes.
var localDate = new Date(currentDate.getTime() - timezoneOffset);
 
// Get that local date's ISO date string and remove the Z and seconds part.
var localDateISOString = localDate.toISOString();
var currentDateTimeString = localDateISOString.substr(0,localDateISOString.length - 8);

eventStartTime.value = currentDateTimeString;
eventEndTime.value = currentDateTimeString;

function dateValidation(){
	var startTime = new Date(eventStartTime.value);
	var endTime = new Date(eventEndTime.value);
	var input = event.target;
	if(startTime > endTime){
		resetInputError(eventStartTime);
		resetInputError(eventEndTime);
		setValidity(input, true);
		input.setCustomValidity('Start time cannot be later than end time.\n Please set time so that end time is greater than start time.');
		input.reportValidity();
	}
	else{
		resetInputError(eventStartTime);
		resetInputError(eventEndTime);
	}

}

function resetInputError(input){
	if(input.getAttribute('aria-invalid')){
		input.removeAttribute('aria-invalid');
	}
	input.setCustomValidity('');
}

function setValidity(input, invalid){
	if(!invalid && input.getAttribute('aria-invalid')){
		input.removeAttribute('aria-invalid');
	}
	else if(invalid && !input.getAttribute('aria-invalid') ){
		input.setAttribute('aria-invalid', 'true');
	}

}

function registerEventListeners(){
	eventStartTime.addEventListener('change', dateValidation);
	eventEndTime.addEventListener('change', dateValidation);
}


registerEventListeners();

