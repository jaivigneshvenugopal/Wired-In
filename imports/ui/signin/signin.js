import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './signin.html';

Template.signin.events ({
  'submit form': function(event, template) {
    event.preventDefault();
    var email = template.find('#email').value;
    var password = template.find('#password').value;

    console.log("Data Collected");
    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        console.log(error.reason);
        alert(error.reason);
      } else {
        Router.go("/dashboard");
      }
    });
  }
});
