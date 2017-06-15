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
  }
});
