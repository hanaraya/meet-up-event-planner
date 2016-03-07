var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLEventsHeader = '<div class="display-section"><h1>My Events</h1><div>';

var HTMLEvent = '    <div class="display-section"> '+
'		<div class="flex-contatiner flex-vertical">	'+
'			<div class="flex-container flex-horizontal">'+
'				<div class="flex-2">'+
'					<div class="event-label">Event Name:</div> 	'+
'					<div class="event-detail">%eventName%</div>'+
'				</div>'+
'				<div class="flex-1">'+
'					<div class="event-label">Event Start:</div> 	'+
'					<div class="event-detail">%eventStart%</div>'+
'				</div>		'+
'			</div>'+
'			<div class="flex-container flex-horizontal">	'+
'				<div class="flex-2">'+
'					<div class="event-label">Event Type:</div> 	'+
'					<div class="event-detail">%eventType%</div>'+
'				</div>'+
'				<div class="flex-1">'+
'					<div class="event-label">Event End:</div> 	'+
'					<div class="event-detail">%eventEnd%</div>'+
'				</div>'+
'			</div>'+
'			<div class="flex-container flex-horizontal">'+
'				<div class="flex-2">'+
'					<div class="event-label">Event Host:</div> 	'+
'					<div class="event-detail">%eventHost%</div>'+
'				</div>	'+
'				<div class="flex-1">'+
'					<div class="event-label">Event Location:</div> 	'+
'					<div class="event-detail">%eventLocation%</div>'+
'				</div>'+
'			</div>'+
'			<div class="flex-container flex-horizontal">'+
'				<div class="flex-2">'+
'					<div class="event-label">Attendees:</div> 	'+
'					<div class="event-detail">%eventAttendees%</div>'+
'				</div>'+
'			</div>'+
'			<div class="flex-container flex-horizontal">'+
'				<div class="flex-2">'+
'					<div class="event-label">Message:</div> 	'+
'					<div class="event-detail">%eventMessage%</div>'+
'				</div>'+
'			</div>'+
'		</div>			'+
'	</div>';

var header = document.getElementById('main');

// var work = {};

// work.company = "oracle";
// work.location = "HQ";
// work.position = "Principal Applications Engineer";

// var workHistory = [work];

var myStorage = localStorage;

console.log('event List JS');

// if(workHistory.length > 0){
// 	console.log('work length > 0')
// 	var innerHTML = (HTMLworkStart);
// 	for(var i=0; i<workHistory.length;i++){
// 		innerHTML += (HTMLworkTitle.replace("%data",workHistory[i].company));
// 	}
// 	header.innerHTML = innerHTML;
// }

// var events = [{eventName: 'My Event 1'}, {eventName: 'My Event 2'}];
// myStorage['eventList'] = JSON.stringify(events);
// var eventList = [{eventName: 'My Event 1'}, {eventName: 'My Event 2'}];
// var innerHTML = "You do not have any events created";
// for (i in eventList){
// 	if(i==0)
// 		innerHTML=HTMLEventsHeader;
// 	var myEvent = HTMLEvent.replace('%eventName%', eventList[i].eventName);
// 	innerHTML += myEvent;

// }
console.log(myStorage);
var eventRet = JSON.parse(myStorage['eventList']);
console.log('eventRet ' + eventRet);
for (i in eventRet){
	if(i==0)
		innerHTML=HTMLEventsHeader;
	console.log(eventRet[i]);
	console.log(i);
	var myEvent = HTMLEvent.replace('%eventName%', eventRet[i].eventName);
	innerHTML += myEvent;

}
header.innerHTML = innerHTML;
