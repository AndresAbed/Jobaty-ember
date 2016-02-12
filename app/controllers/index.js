import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login_user: function() {
      var user = this.store.createRecord('login-user', {
        email: this.get('email'),
        password: this.get('password')
      });
      user.save();
    }
  }
});
