Router.route('/signup-account', {
    template: 'signupAccount'
});
Router.route('/signup-details', {
  template: 'signupDetails'
});
Router.route('/signup-banksetup', {
  template: 'signupBanksetup'
});
Router.route('/budget-setup', {
  template: 'budgetSetup'
});
Router.route('/upload', {
  template: 'upload',
  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});
Router.route('/dashboard', {
  template: 'dashboard',
  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});
Router.route('/calendar-view', {
  template: 'events',
  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});
Router.route('/fullview', {
  template: 'fullview',
  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});
Router.route('/posb', {
  template: 'posb',
  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});
Router.route('/stdc', {
  template: 'stdc',
  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});
Router.route('/ocbc', {
  template: 'ocbc',
  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});
Router.route('/', {
  template: 'signin'
});
