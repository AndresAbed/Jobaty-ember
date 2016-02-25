import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  host: 'https://preprojobaty.appspot.com/_ah/api/jobatyApi/v1',
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  },
  pathForType: function(type) {
    return Ember.String.underscore(type);
  }
});
