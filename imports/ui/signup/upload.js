import './upload.html';
//import { Cust_info } from '../lib/user_accounts.js';

Template.upload.onCreated( () => {
  Template.instance().uploading = new ReactiveVar( false );
});

Template.upload.helpers({
  uploading() {
    return Template.instance().uploading.get();
  }
});

Template.upload.events({
  'change [name="uploadCSV"]' ( event, template ) {
    //var csvfile = event.target.files[0];
    //var csvString = csvfile.readAsText();
    var bank = document.getElementById("mySelect").value;
    var string;
    switch(bank) {
      case 'POSB':
        string = 'parseUploadPosb';
        break;
      case 'OCBC':
        string = 'parseUploadOcbc';
        break;
      case 'STDC':
        string = 'parseUploadStdc';
        break;
      default:
        alert('This is not a ' + bank + ' statement. Please upload ' + bank + ' statement');
    }

    Papa.parse( event.target.files[0], {
      header: false,
      complete(results, file) {

          //var olddata = results.data;
          //olddata.splice(0,17);
          //var json = JSON.stringify(olddata[0]);
          //console.log("json is " + json);
          //var newdata = olddata;

        Meteor.call(string, results.data, ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'warning' );
          }
          else {
            template.uploading.set( false );
            Bert.alert( 'Upload complete!', 'success', 'growl-top-right' );
          }
        });

        //string = "";
        //console.log(results.data);
        //olddata.splice(0,16);
        //var json = JSON.stringify(olddata);
        //console.log("json is " + json);
      }
    });
  }
});

    /*var csv = Papa.unparse({olddata}, {
      	quotes: true,
      	quoteChar: '"',
      	delimiter: ",",
        //download: true,
      	header: true,
      	newline: "\r\n"
    });
    */

    //console.log(csv);

    //if (csv == 1) {
    //  console.log("csv is 1");
    //}
    //console.log("hey!");

    //papa.parse(json, {
    //  header: true,
    //  complete( results, file ) {
    //    console.log(results.data);
