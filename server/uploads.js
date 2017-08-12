import { Meteor } from 'meteor/meteor';

Meteor.methods({
  parseUploadPosb(data) {
    check( data, Array );
    data.NewField = 'Date';
    data.NewField = 'Bank';
    data.NewField = 'Description';
    data.NewField = 'Debit';
    data.NewField = 'Credit';

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[i];
      //console.log("item 1  is " + item["0"]);
      item.Bank = 'POSB';
      item.Date = item["0"];
      item.Description = item["4"];
      item.Debit = item["2"];
      item.Credit = item["3"];

      var date = moment(item.Date).format('MM/DD/YYYY');

      item.Date = date;
      if (date != "Invalid date") {
        Cust_info.insert(item);
      }
    }
  },

  parseUploadOcbc(data) {
    check( data, Array );
    data.NewField = 'Date';
    data.NewField = 'Bank';
    data.NewField = 'Description';
    data.NewField = 'Debit';
    data.NewField = 'Credit';

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[i];
      //console.log("item 1  is " + item["0"]);
      item.Bank = 'OCBC';
      item.Date = item["0"];
      item.Description = item["2"];
      item.Debit = item["3"];
      item.Credit = item["4"];

      var date = moment(item.Date, "D-M-YYYY").format('MM/DD/YYYY');

      item.Date = date;
      if (date != "Invalid date") {
        Cust_info.insert(item);
      }
    }
  },

  parseUploadStdc(data) {
    check( data, Array );
    data.NewField = 'Date';
    data.NewField = 'Bank';
    data.NewField = 'Description';
    data.NewField = 'Debit';
    data.NewField = 'Credit';

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[i];
      //console.log("item 1  is " + item["0"]);
      item.Bank = 'STDC';
      item.Date = item["0"];
      item.Description = item["1"];
      item.Debit = item["4"];
      item.Credit = item["3"];

      var date = moment(item.Date, "DD-MM-YYYY").format('MM/DD/YYYY');

      item.Date = date;
      if (date != "Invalid date") {
        Cust_info.insert(item);
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
          if(item.Debit != "") {
            let amount = parseFloat(item.Debit);
            total += amount;
          }
          //console.log(amount);
          //console.log(total);
        };
        console.log("total is " + total);
        return total;
  },

  'collection' : function () {
      return {
      collection: Cust_info,
      rowsPerPage: 5,
      showFilter: true,
      showRowCount: true,
      fields: [
         {key: 'Transaction Date',
          label: 'Date' },
        ]
      };
   },
});
