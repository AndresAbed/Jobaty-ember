import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://preprojobaty.appspot.com/_ah/api/jobatyApi/v1',
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  }
});
