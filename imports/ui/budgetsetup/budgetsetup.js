import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './budgetsetup.html';

Template.budgetSetup.events ({
  'submit form': function(event, template) {
    event.preventDefault();
    var income = template.find('#income').value;
    var budget = template.find('#budget').value;

    console.log("Data Collected");

    Meteor.users.update(
      {_id: Meteor.userId()},
      {$set: {
          "profile.income":income,
          "profile.budget":budget
        }
      },
    );

    console.log("Data Updated");
    Router.go("/dashboard");
  }
});
