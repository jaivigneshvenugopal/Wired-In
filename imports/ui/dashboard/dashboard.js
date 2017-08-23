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

Template.dashboard.onRendered(function() {
  var amount = 0;
  Meteor.call('getdata', function(error, result) {
    if(error){
      console.log(error.reason);
      return;
    }
    else {
      amount = parseFloat(result);
      var ctx5 = document.getElementById("myChart").getContext("2d");
      var data4 = [
        {
            value: amount,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Spent",
        },
        {
            value: 10000-amount,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Saved"
        }
      ]
      var myDoughnutChart = new Chart(ctx5).Doughnut(data4,{
          animateScale: true,
          //animateRotate: true
      });
      console.log("result is " + result);
    }
  });
});
