Template.search.rendered = function() {
	$("#search-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#events-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.search.helpers({
	inputAttributes: function() {
		return { 'class': 'easy-search-input', 'placeholder': 'Start Searching' };
	},
	players: function() {
		return Events.find({}, { sort: { createdAt: -1 } });
	},
	selectedName: function() {
		var event = EventsIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedEvent") });
		return event && event.eventName;
	},
	index: function () {
		return EventsIndex;
	},
	resultsCount: function() {
		return EventsIndex.getComponentDict().get('count');
	},
	showMore: function() {
		return false;
	},

	renderTmpl: () => Template.renderTemplate

});

Template.User.helpers({
	selected: function() {
		return Session.equals("selectedEvent", this.__originalId) ? "selected" : '';
	},
});

Template.User.events({
	'click': function() {
		Session.set("selectedEvent", this.__originalId);
	}
});