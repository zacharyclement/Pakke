if (Meteor.isServer) {
	Meteor.methods({
		// Method for adding events
		createEvent: function (eventName, eventAddress) {
			if (!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Events.insert({
					eventHostUserId: Meteor.userId(),
					eventHostUserName: username,
					date: date,
					createdAt: new Date(),
					eventName: eventName,
					eventAddress: eventAddress,
					attendees: [username],

				});

			}
		},

		attendEvent: function (thisUserId, eventId) {
			if (!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Events.update(eventId, { $addToSet: { attendees: thisUserId } });
			}
		},

		removeEvent: function (eventsId) {
			if (!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Events.remove(eventsId);
			}
		},

		// still working on removeAttendee. Might not be necessary
/* 
		removeAttendee: function (eventsId, thisUserId) {
			if (!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Events.remove({attendees: thisUserId}});
			}
		}, */
		
	})};












