Template.pageSearch.onCreated(function() {
  var self = this;
  
  self.autorun(function() {
    self.subscribe('all_posts');
  });
});

Template.pageSearch.helpers({ 
  searchPosts: function(){
    
    // very simple, rough query logic
    var query = new Object();
    if(FlowRouter.getQueryParam('preferences'))
      query.preferences = FlowRouter.getQueryParam('preferences');
    if(FlowRouter.getQueryParam('space'))
      query.space = FlowRouter.getQueryParam('space');
    if(FlowRouter.getQueryParam('price'))
      query.price = FlowRouter.getQueryParam('price');
    if(FlowRouter.getQueryParam('location'))
      query.location = FlowRouter.getQueryParam('location');
    if(FlowRouter.getQueryParam('pets'))
      query.pets = FlowRouter.getQueryParam('pets');


    var posts;
    
    if(jQuery.isEmptyObject(query)) {
      //return all (used in All Posts nav button)
      posts = Posts.find().fetch();
    } else {
      posts = Posts.find().fetch();
      // very simple, rough query logic
      posts = _.filter(posts, function(val){
        return _.some(this,function(val2){
          return val2['preferences'] == val['preferences'] ||
                  val2['space'] == val['space'] ||
                  val2['price'] == val['price'] ||
                  val2['location'] == val['location'] ||
                  val2['pets'] == val['pets'];
        });
      }, new Array(query));  
    }
    
    return posts;
  } 
}); 

Template.pageSearch.events({ 
  // "click #foo": function(event, template){ 
  //    
  // } 
}); 
