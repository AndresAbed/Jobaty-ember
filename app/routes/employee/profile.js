import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').addClass('fixed-header linux desktop pace-done');
  }
});
