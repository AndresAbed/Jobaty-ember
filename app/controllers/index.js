import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    loginUser: function() {
      var user = this.store.createRecord('login-user', {
        email: this.get('email'),
        password: this.get('password')
      });
      user.save();
    }
  }
});
