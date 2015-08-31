FlowRouter.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {main: 'pageIndex'});
  },
  name: 'indexPage'
});

FlowRouter.route('/query', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {main: 'pagePostForm'});
  },
  name: 'queryPage'
});

FlowRouter.route('/my-offers', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {main: 'pageMyOffers'});
  },
  name: 'myOffersPage'
});

FlowRouter.route('/search', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {main: 'pageSearch'});
  },
  name: 'searchPage'
});