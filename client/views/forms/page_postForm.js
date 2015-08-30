
Template.pagePostForm.helpers({ 
  // helperFunc: function(){ 
  //    
  // }, 
}); 

Template.pagePostForm.events({ 
  // "click #foo": function(event, template){ 
  //    
  // } 
}); 


AutoForm.hooks({
  PostsSearchOrInsert: {
    before: {
      insert: function(doc, template) {

        // if searching
        if(doc.postType === 'looking') {
          
          // we don't need postType for search
          var urlQuery = _.omit(doc, 'postType');
          var path = FlowRouter.path('/search', {}, urlQuery);
          
          FlowRouter.go(path);
          
          // cancel insert, so this query won't get inserted to db
          return false;
        } 
        else  // if inserting
        {
          // Must the user be logged in to add posts?
          // if(!Meteor.user()) {
          //   // Add some jquery modal dialog package and issue a
          //   // modal dialog requesting that user signs in
          //   return false;
          // }
          
          // append user id to post here or whatever
          // You have to make changes in the schema in order for this to work
          // doc = _.extend(doc, {
          //   userId: Meteor.userId()
          // });
        }

        // return doc indicated that everythng is ok and we proceed with
        // validation and insertion
        return doc;
      }
    }
  }
});