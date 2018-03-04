Template.eventForm.rendered = function() {

}

Template.eventForm.events({
	"submit .event-post": function() {
		var eventName = event.target.eventName.value;
		var eventAddress = event.target.eventAddress.value;

		console.log(eventName)
		console.log(eventAddress)

		if (isNotEmpty(eventName) &&
			isNotEmpty(eventAddress)) {

			Meteor.call('createEvent', eventName, eventAddress);

			event.target.eventName.value = "";
			event.target.eventAddress.value = "";

			Bert.alert("Your Event Was Posted!", "success", "growl-top-right");

		} else {
			
			Bert.alert("something went wrong", "danger", "growl-top-right");
		}

		return false; // prevent submit
	}
});

// Validation Rules

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-top-right");
	return false;
};