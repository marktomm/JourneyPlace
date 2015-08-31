Posts = new Mongo.Collection('posts'); 

// TODO: Implement proper security here if will be used in production
Posts.allow({ 
  insert: function(){ 
    return true; 
  }, 
  update: function(){ 
    return true; 
  }, 
  remove: function(){ 
    return true; 
  } 
});

// aldeed:simpleschema schema will be used for autoform form
// generation and validation
PostsSchema = new SimpleSchema({
  preferences: {
    type: String,
    label: 'Preferences'
  },
  postType: {
    type: String,
    label: 'Post Type',
    allowedValues: ['looking', 'offering'],
    autoform: {
      type: 'select-radio-inline',
      defaultValue: 'looking',
      options: [
                { label: 'Looking', value: 'looking' },
                { label: 'Offer', value: 'offering' }
               ],
    }
  },
  space: {
    type: Number,
    label: 'Space (square meters)',
    min: 0,
    decimal: true // this allows floating points
  },
  price: {
    type: Number,
    label: 'Price',
    decimal: true // this allows floating points
  },
  location: {
    type: String,
    label: 'Location',
    max: 1000
  },
  pets: {
    type: Boolean,
    label: 'Pets'
  },
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      type: 'hidden'
    }
  }
});

// aldeed:collection2 package lets us do this
Posts.attachSchema(PostsSchema);

if(Meteor.isServer){
  Meteor.publish('all_posts', function() {
      return Posts.find();
  });
}