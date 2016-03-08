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

var header = document.getElementById('replaceMe');
var myStorage = localStorage;
var eventRet = [];
if(myStorage['eventList'])
	eventRet = JSON.parse(myStorage['eventList']);
var innerHTML = '';
for (var i in eventRet){
	var myEvent = HTMLEvent.replace('%eventName%', eventRet[i].eventName).replace('%eventType%', eventRet[i].eventType).replace('%eventHost%', eventRet[i].eventHost).replace('%eventStart%', eventRet[i].eventStart).replace('%eventEnd%', eventRet[i].eventEnd).replace('%eventLocation%', eventRet[i].eventLocation).replace('%eventAttendees%', eventRet[i].eventAttendees).replace('%eventMessage%', eventRet[i].eventMessage);
	innerHTML += myEvent;
}
header.innerHTML = innerHTML;
