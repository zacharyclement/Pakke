Template.profile.rendered = function() {
	$("#profile-link").addClass('selected');
	$("#events-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#login-link").removeClass('selected');

}

Template.profile.helpers({
	eventsHosting: function() {
		var username = Meteor.user().username;
		var userId = Meteor.userId();
		var eventsHosting = Events.find({eventHostUserId: userId}, {sort: {createdAt: -1}});
		return eventsHosting;
	},

	
	eventsAttending: function() {
		var username = Meteor.user().username;
		var userId = Meteor.userId();
		
		var eventsAttending = Events.find({attendees: userId}, {sort: {createdAt: -1}})
		return eventsAttending;

	},
	
	email: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().emails[0].address;
		}
	},

	username: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().username;
		}
	},

	userHost: function() {
		return Meteor.user().profile.host;
	},

	UserImages: function() {
		var username = Meteor.user().username;
		var userId = Meteor.userId();
		var URL = UserImages.findOne({username: username}, {userId: userId});
		return URL;
	}

});

Template.profile.events({
	"click #delete-event": function() {
		Meteor.call("removeEvent", this._id);
		Bert.alert("Your Event Was Deleted", "success", "growl-top-right");
	},
	
	"click #not-attending": function() {
		var userId = Meteor.userId();
		var eventId = this._id;

		Meteor.call("removeAttendee", eventId, userId );
		Bert.alert("Your Event Was Deleted", "success", "growl-top-right");
	},

	"submit .edit-profile": function(event) {
		var file = $('#profileImage').get(0).files[0];

		if (file) {

			fsFile = new FS.File(file);

			ProfileImages.insert(fsFile, function(err, result){
				if (err) {
					throw new Meteor.Error(err);
				} else {

					var imageLoc = '/cfs/files/ProfileImages/'+result._id;

					UserImages.insert({
						userId: Meteor.userId(),
						username: Meteor.user().username,
						image: imageLoc,
					});

					Bert.alert("Profile Update Successful!", "success", "growl-top-right");
				}
			});

		}

		return false // prevent submit
	}
});

































