Posts = new Mongo.Collection('name'); 

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
  title: {
    type: String,
    label: 'Preferences'
  },
  postType: {
    type: String,
    label: 'Post Type',
    allowedValues: ['looking', 'offering'],
    autoform: {
      firstOption: 'Peale select something',
      options: [
                { label: 'Looking', value: 'looking' },
                { label: 'Offer', value: 'offering' }
               ],
      noselect: true
    }
  },
  space: {
    type: Number,
    label: 'Space (square meters)',
    min: 0,
    decimal: true // this allow floating points
  },
  price: {
    type: Number,
    label: 'Last date this book was checked out',
    decimal: true // this allow floating points
  },
  location: {
    type: String,
    label: 'Location',
    max: 1000
  },
  pets: {
    type: Boolean,
    label: 'Pets'
  }
});

// aldeed:collection2 package lets us do this
Posts.attachSchema(PostsSchema);