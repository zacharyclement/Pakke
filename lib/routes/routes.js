Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// Events
	this.route('events', {
		path: '/events',
		template: 'events'
	});

	// home
	this.route('home', {
		path: '/',
		template: 'events'
	});

	// login
	this.route('login', {
		path: '/login',
		template: 'login'
	})

	// Signup
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});

	// Profile
	this.route('profile', {
		path: '/profile',
		template: 'profile'
	});


	// Search
	this.route('search', {
		path: '/search',
		template: 'search'
	});
});