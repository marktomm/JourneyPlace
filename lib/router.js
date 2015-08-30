FlowRouter.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {main: 'pageIndex'});
  },
  name: 'indexPage'
});

FlowRouter.route('/search', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {main: 'pageSearch'});
  },
  name: 'indexPage'
});