import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './stdc.html';

Template.stdc.events ({
  'click .logout' :function(event) {
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  }
});

Template.stdc.helpers ({
    collection : function() {
      return Cust_info;
    },

    settings : function() {
      return {
      collection: Cust_info.find({"Bank": "STDC"}),
      rowsPerPage: 21,
      showFilter: true,
      showRowCount: true,
      useFontAwesome:true,
      fields: [
        {key: 'Date',
         label: 'Date' },
        {key: 'Bank',
         label: 'Bank' },
        {key: 'Description',
         label: 'Description' },
        {key: 'Debit',
         label: 'Debit ($)' },
        {key: 'Credit',
         label: 'Credit ($)' },
        ]
      };
    }
 });
