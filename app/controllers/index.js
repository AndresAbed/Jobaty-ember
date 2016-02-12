import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login_user: function() {
      var user = this.store.createRecord('login-user', {
        email: this.get('email'),
        password: this.get('password')
      });
      user.save();
    },
    signup_employee: function() {
      var employee = this.store.createRecord('signup-employee', {
        name: this.get('name'),
        lastName: this.get('lastname'),
        email: this.get('email'),
        password: this.get('password')
      });
      employee.save();
    }
  }
});
