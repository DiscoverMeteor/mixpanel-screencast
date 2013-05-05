if (Meteor.isClient) {
  Meteor.startup(function () {
    mixpanel.init('37e5bd972674877725475abac5208e68');

    mixpanel.track("Application Startup", {
    });

    Deps.autorun(function () {
      var user = Meteor.user();
      if (user && !Meteor.loggingIn()) {
        mixpanel.identify(user._id);
        mixpanel.people.set({
          "$email": user.emails[0].address
        });
      }
    });
  });

  Template.hello.greeting = function () {
    return "Welcome to metrics.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'

      mixpanel.track("Hello Click", {
        some: true
      });

      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}
