Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    // create a date string
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var date = (month + "/" + day + "/" + year).toString();

    	// Super User
      Accounts.createUser({
        username: 'Super User',
        email: 'Super@user.com',
        password: 'password',
        profile: {
        	address: 0,
        	host: false,
        }
      });

      var user0Id = Meteor.users.findOne({username: 'Super User'})._id;

      Events.insert({
        eventName: "Event 0",
        eventAddress: "Columbia Heights",
        author: "Super User",
        date: date,
        createdAt: new Date(),
        address: 0,
        host: false,
        voted: ["Super User"],
        userId: user0Id,
      });
      console.log("Super User Created");
      console.log("Super User Event Created");

      // User 1
      Accounts.createUser({
        username: 'User1',
        email: 'user1@example.com',
        password: 'password',
        profile: {
          address: 0,
          host: false,
        }
      });

      var user1Id = Meteor.users.findOne({username: 'User1'})._id;

      Events.insert({
        eventName: "Event 1",
        eventAddress: "Columbia Heights",  
        author: "User1",
        date: date,
        createdAt: new Date(),
        address: 0,
        host: false,
        voted: ["User1"],
        userId: user1Id,
      });
      console.log("User1 Created");
      console.log("User1 Event Created");

      // User 2
      Accounts.createUser({
        username: 'User2',
        email: 'user2@example.com',
        password: 'password',
        profile: {
          adress: 0,
          host: false,
        }
      });

      var user2Id = Meteor.users.findOne({username: 'User2'})._id;

      Events.insert({
        eventName: "Event 2",
        eventAddress: "Columbia Heights",        
        author: "User2",
        date: date,
        createdAt: new Date(),
        address: 0,
        host: false,
        voted: ["User2"],
        userId: user2Id,
      });
      console.log("User2 Created");
      console.log("User2 Event Created");

      // User 3
      Accounts.createUser({
        username: 'User3',
        email: 'user3@example.com',
        password: 'password',
        profile: {
          address: 0,
          host: false,
        }
      });

      var user3Id = Meteor.users.findOne({username: 'User3'})._id;

      Events.insert({
        eventName: "Event 3",
        eventAddress: "Columbia Heights",        
        author: "User3",
        date: date,
        createdAt: new Date(),
        address: 0,
        host: false,
        voted: ["User3"],
        userId: user3Id,
      });
      console.log("User3 Created");
      console.log("User3 Event Created");

      // User 4
      Accounts.createUser({
        username: 'User4',
        email: 'user4@example.com',
        password: 'password',
        profile: {
          address: 0,
          host: false,
        }
      });

      var user4Id = Meteor.users.findOne({username: 'User4'})._id;

      Events.insert({
        eventName: "Event 4",
        eventAddress: "Columbia Heights",        
        author: "User4",
        date: date,
        createdAt: new Date(),
        address: 0,
        host: false,
        voted: ["User4"],
        userId: user4Id,
      });
      console.log("User4 Created");
      console.log("User4 Event Created");

      // User 5
      Accounts.createUser({
        username: 'User5',
        email: 'user5@example.com',
        password: 'password',
        profile: {
          address: 0,
          host: false,
        }
      });

      var user5Id = Meteor.users.findOne({username: 'User5'})._id;

      Events.insert({
        eventName: "Event 5",
        eventAddress: "Columbia Heights",        
        author: "User5",
        date: date,
        createdAt: new Date(),
        address: 0,
        host: false,
        voted: ["User5"],
        userId: user5Id,
      });
      console.log("User5 Created");
      console.log("User5 Event Created");
      console.log("  ");
      console.log("User Database Seeded! Now get to work! :)");
      console.log("Event Database Seeded! Isn't that nice?! :P");

  }

});
