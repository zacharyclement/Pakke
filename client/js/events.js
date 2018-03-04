Template.events.rendered = function () {
	$("#events-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.events.helpers({
	events: function () {
		var events = Events.find({}, { sort: { createdAt: -1 } });
		return events;
	}
});


Template.events.events({
	"click #submit-attendee": function () {
		console.log('submit attendee')
		var thisUserId = Meteor.userId();
		var eventId = Events.findOne({ _id: this._id })._id;
		var eventHostUserName = Events.findOne({ _id: this._id }).eventHostUserId;
		var thisUserName = Meteor.user().username;
		var thisEventsAttendees = Events.findOne({ _id: this._id }, { attendees: { $in: thisUserName } }).attendees;
		console.log(thisEventsAttendees)

		Meteor.call("attendEvent", thisUserId, eventId);
		Bert.alert("Your are attending this event", "success", "growl-top-right");
	}
});