if(Meteor.isServer) {
  Meteor.publish("user_data", function () {
    return Meteor.users.find({_id: this.userId},
        {fields: {'services': 1}});
  });
}

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: 'sign-in',
  layoutTemplate: 'layout',
  layoutRegions: {},
  contentRegion: 'main'
});

AccountsTemplates.configureRoute('signUp', {
  name: 'signup',
  path: 'sign-in',
  layoutTemplate: 'layout',
  layoutRegions: {},
  contentRegion: 'main'
});

// AccountsTemplates.configure
var SubmitFunc = function(error, state){
  if (!error) {
    if (state === 'signIn') {
      // Successfully logged in
      // Meteor.subscribe("user_data");
    }
    if (state === 'signUp') {
      // Successfully registered
      // Meteor.subscribe("user_data");
    }
  } 
};

AccountsTemplates.configure({
  // FlowRouter conf 
  defaultLayout: 'layout',
  defaultLayoutRegions: {},
  defaultContentRegion: 'main',
  
  // Behaviour
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: false,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

//    // Privacy Policy and Terms of Use
//    privacyUrl: 'privacy',
//    termsUrl: 'terms-of-use',

//    // Redirects
//    homeRoutePath: '/',
//    redirectTimeout: 4000,

//    // Hooks
//    onLogoutHook: myLogoutFunc,
  onSubmitHook: SubmitFunc,
//
//    // Texts
//    texts: {
//      button: {
//          signUp: 'Register Now!'
//      },
//      socialSignUp: 'Register',
//      socialIcons: {
//          'meteor-developer': 'fa fa-rocket'
//      },
//      title: {
//          forgotPwd: 'Recover Your Password'
//      },
//    },
});