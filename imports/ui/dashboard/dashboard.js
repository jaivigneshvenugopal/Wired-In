import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './dashboard.html';

Template.dashboard.events ({
  'click .logout' :function(event) {
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  }
});
