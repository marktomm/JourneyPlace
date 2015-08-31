// TODO: Implement proper security here if will be used in production
Meteor.users.allow({ 
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

// is added to User schema 'profile' object
UserProfile = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    regEx: /^[a-zA-Z- ]{2,35}$/
  }
});

UserSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  emails: {
    type: [Object]
  },
  "emails.$.address":{
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified":{
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: UserProfile
  },
  services: {
    type: Object,
    blackbox: true
  },
  
  offerIds: {
    type: Array,
    optional: true
  },
  'offerIds.$': {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  
  // lookingIds: {
  //   type: [Object],
  //   optional: true
  // },
  // 'lookingIds.$.postId': {
  //   type: String,
  //   regEx: SimpleSchema.RegEx.Id
  // },
  // 'lookingIds.$.queryName': {
  //   type: String,
  //   regEx: SimpleSchema.RegEx.Id
  // }
});

// aldeed:collection2 package lets us do this
Meteor.users.attachSchema(UserSchema);