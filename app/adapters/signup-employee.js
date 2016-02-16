import DS from 'ember-data';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType: function(type) {
    return Ember.String.underscore(type);
  }
});
