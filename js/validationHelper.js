function addEvent(node, type, callback){
	if(node.addEventListener)
	{
		node.addEventListener(type, function(e)
		{
			callback(e, e.target);

		}, false);
	}
	else if(node.attachEvent)
	{
		node.attachEvent('on' + type, function(e)
		{
			callback(e, e.srcElement);
		});
	}
}

function validate(input){
	var invalid = ((input.getAttribute("required") && !input.value) || (input.getAttribute("pattern") && input.value && !new RegExp(input.getAttribute("pattern")).test(input.value)));
	if(!invalid && input.getAttribute("aria-invalid")){
		input.removeAttribute("aria-invalid")
	}
	else if(invalid && !input.getAttribute("aria-invalid") ){
		input.setAttribute("aria-invalid", "true");
	}
	console.log("invalid " + invalid);
}

addEvent(document, 'change', function(e, target)
{
	validate(target);
});