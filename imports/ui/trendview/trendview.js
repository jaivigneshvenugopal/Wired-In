import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './trendview.html';

Template.trendview.events ({
  'click .logout' :function(event) {
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  }
});

Template.trendview.onRendered(function() {
  var ans= new Array();
  Meteor.call('getinfo', function(error, result) {
    if(error){
      console.log(error.reason);
      return;
    }
    else {
      var ctx  = document.getElementById("trendChart").getContext("2d");
      var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
        datasets: [{
            fillColor: "#87CEEB",
            strokeColor: "rgba(0,0,0,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [result[0], result[1], result[2], result[3], result[4], result[5], result[6], result[7], result[8], result[9], result[10], result[11]]
        }]
      };

      var trendChart = new Chart(ctx).Bar(data);
    }
  })
});
