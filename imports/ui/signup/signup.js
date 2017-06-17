import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './signup-page1.html';
import './signup-page2.html';
import './signup-page3.html';

Template.signupAccount.events ({
  'submit form': function(event, template) {
    event.preventDefault();
    var email = template.find('#email').value;
    var password = template.find('#password').value;
    var password1 = template.find('#password1').value;
    var booleanPassword = false;
    var booleanError = false;

    console.log("Data Collected");

    if (password === password1) {
      Accounts.createUser({
        email: email,
        password: password
      },
      function(error){
        if(error){
          console.log(error.reason);
          alert(error.reason);
          booleanError = true;
        }
      });
    }
    else {
      booleanPassword = true;
      alert("Password mismatch!");
    }
    console.log("booleanError = " + booleanError);
    console.log("booleanPassword = " + booleanPassword);

    if (booleanPassword == false && booleanError == false) {
      console.log("User created");
      Router.go('/signup-details');
      booleanError = !booleanError;
      booleanPassword = !booleanPassword;
    }
  }
});

Template.signupDetails.events ({
  'submit form' :function(event, template) {
    event.preventDefault();
    var firstName = template.find('#FN').value;
    var lastName = template.find('#LN').value;
    var phone = template.find('#phone').value;
    var address = template.find('#add').value;

    console.log("Data Collected");

    Meteor.users.update(
      {_id: Meteor.userId()},
      {$set: {
          "profile.firstname":firstName,
          "profile.lastname":lastName,
          "profile.phone":phone,
          "profile.address":address
        }
      },
    );

    console.log("Data Updated");
    Router.go('/signup-banksetup');
  },
});
  // Achu don't delete this
  //'click .action-button means if you click the next button, it will still go ahead and delete the user.
  // Thus previous.next-button is important
  // Currently this funcion is not working
  /*'click .previous.action-button' :function(event, template) {
    event.preventDefault();
    Meteor.methods({
      selfDelete() {
          Meteor.users.remove(Meteor.userId());
      },
    });

    console.log("User Removed");
    Router.go('/signup-account');
  }
  */
