import { Meteor } from 'meteor/meteor';
import '../imports/ui/collections/user_accounts.js';

Meteor.methods({
  parseUpload( data ) {
    check( data, Array );

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ],
          exists = Cust_info.findOne( { Serial: item.Serial } );

      if ( !exists ) {
        Cust_info.insert( item );
      } else {
        console.warn( 'Rejected. This item already exists.' );
      }
    }
  },

  'dailyExp': function(start) {
        if (typeof start === "string") {
            console.log("start is string");
        };
        var total = 0;
        var test = start.valueOf();
        console.log("date is " + start);
        var data = Cust_info.find({"Date":test}).fetch();
        //i = 0 is basically the first row, which are the headings. So calculate from i = 1 instead
        console.log("data length is " + data.length);
        for ( let i = 0; i < data.length; i++ ) {
          let item = data[i];
          let amount = parseFloat(item.Amount);
          //console.log(amount);
          total += amount;
          //console.log(total);
        };
        console.log("total is " + total);
        return total;
    }
});
