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
		eventStart : new Date(document.getElementById('event-start-time').value).toLocaleString(),
		eventEnd : new Date(document.getElementById('event-end-time').value).toLocaleString(),
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

