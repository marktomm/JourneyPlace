Template.pageIndex.onCreated(function() {  
  var self = this;
  
  self.autorun(function() {
    self.subscribe('user_data');
  });
}); 


Template.pageIndex.helpers({
  // log: function(){
  //   console.log(Meteor.user());
  // }
});