FlowRouter.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {main: 'pageIndex'});
  },
  name: 'indexPage'
});