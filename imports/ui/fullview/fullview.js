import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './fullview.html';

Template.fullview.events ({
  'click .logout' :function(event) {
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  }
});

Template.fullview.helpers ({
    collection : function() {
      return Cust_info;
    },

    settings : function() {
      return {
      collection: Cust_info,
      rowsPerPage: 23,
      showFilter: true,
      showRowCount: true,
      useFontAwesome:true,
      fields: [
         {key: 'Date',
          label: 'Date' },
         {key: 'Bank',
          label: 'Bank' },
         {key: 'ID',
          label: 'ID' },
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
