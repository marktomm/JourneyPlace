Template.pageMyOffers.onCreated(function() {
  var self = this;
  
  self.autorun(function() {
    self.subscribe('user_data');
    self.subscribe('my_offers');
  });
});

Template.pageMyOffers.helpers({ 
  searchPosts: function(){
    return Posts.find({});
  } 
}); 