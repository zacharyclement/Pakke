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


// still working on this
// user is attending event

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

	// this is where 'attend event function will be'
	// each event needs submit button

		/* "click #laugh": function() {
			var thisUser = Meteor.userId();
			var thisEvent = Events.findOne({_id: this._id})._id;
			var eventAuthor = Events.findOne({_id: this._id}).userId;
			var Name = Meteor.user().username;
			var thisEventsVotes = Events.findOne({_id: this._id}, {voted: {$in: Name}}).voted;
	
			if (thisEventsVotes.indexOf(Name) > -1) {
				Bert.alert("You cannot vote twice", "danger", "growl-top-right");
				// In the array!, meaning user has voted
			} else {
				// Not in the Array, Do stuff.
				Meteor.call("countVote", thisEvent, Name);
				Meteor.call("userPointLaugh", eventAuthor);
				Meteor.call("laughVote", thisUser, thisEvent);
				Bert.alert("Your Vote Was Placed", "success", "growl-top-right");
	
			}
	
			if (Name == thisEventsVotes) {
				Bert.alert("You cannot vote for your own event", "danger", "growl-top-right");
			}
		}, });
		*/