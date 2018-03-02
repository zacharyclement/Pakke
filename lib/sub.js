if (Meteor.isClient) {
	Meteor.subscribe('Events');
	Meteor.subscribe('Users');
	Meteor.subscribe('ProfileImages');
	Meteor.subscribe('UserImages');
}