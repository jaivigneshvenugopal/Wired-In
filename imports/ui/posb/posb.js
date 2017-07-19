import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './posb.html';

Template.posb.events ({
  'click .logout' :function(event) {
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  }
});

Template.posb.helpers ({
    collection : function() {
      return Cust_info;
    },

    settings : function() {
      return {
      collection: Cust_info.find({"Bank": "POSB"}),
      rowsPerPage: 20,
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
