function initMap() {
	var autocomplete;
	autocomplete = new google.maps.places.Autocomplete(
		/** @type {HTMLInputElement} */(document.getElementById('event-location')),
		{ types: ['geocode'] });
	google.maps.event.addListener(autocomplete, 'place_changed', function() {
	});
}

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
		eventStart : document.getElementById('event-start-time').value,
		eventEnd : document.getElementById('event-end-time').value,
		eventLocation : document.getElementById('event-location').value,
		eventAttendees : document.getElementById('event-guest-list').value,
		eventMessage : document.getElementById('event-message').value
	};
	var eventList = [];
	if(myStorage['eventList'])
		eventList = JSON.parse(myStorage['eventList']);
	eventList.unshift(myEvent);
	myStorage['eventList'] = JSON.stringify(eventList);
}

//default values for time
eventStartTime.value = "2016-03-02T11:42";
eventEndTime.value = "2016-03-02T11:42";

