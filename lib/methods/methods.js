if (Meteor.isServer) {
	Meteor.methods({
		// Method for adding events
		addEvents: function(eventName, eventAddress) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Events.insert({
					eventName: eventName,
					eventAddress: eventAddress,
					author: username,
					date: date,
					createdAt: new Date(),
					address: 0,
					host: false,
					voted: [username],
					userId: Meteor.userId(), 
				});

			}
		},

		removeEvent: function(eventsId) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Events.remove(eventsId);
			}
		},

		countVote: function(thisEvent, Name) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Events.update(thisEvent, { $addToSet: { voted: Name}});
			}
		},

		/* userPointLaugh: function(EventAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(EventAuthor, { $inc: {'profile.address': +1}});
			}
		}, */

		/* laughVote: function(thisUser, thisEvent) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Events.update(thisEvent, {$inc: {address: +1}});
			}
		}, */

	});
	
}














