import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import '../collections/user_accounts.js';
import './calendar.html';

Template.events.onCreated( () => {
  let template = Template.instance();
});

Template.events.onRendered( () => {
  $( '#events-calendar' ).fullCalendar({
    dayRender: function( date, cell ) {
      var start= moment(date).format('MM/DD/YYYY');
      //if (typeof start === "string") {
      //  alert("yes");
      //};
      Meteor.call('dailyExp', start, function(error, result) {
        if(error){
          console.log(error.reason);
          return;
        }
        else {
          //cell.css(text-align: center);
          cell.html("$" + result);
        }
      //alert("value is " + value);
      })
    }
  });
});
