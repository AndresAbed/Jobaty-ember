import Ember from 'ember';

export default Ember.Controller.extend({
  loginFailed: false,
  actions: {
    login_user: function() {
      this.setProperties({
        loginFailed: false,
      });
      document.getElementById("signin-employee-input").value = "Cargando...";
      var user = this.store.createRecord('login-user', {
        email: this.get('email'),
        password: this.get('password')
      });
      user.save().then(function() {
        //this.transitionToRoute('posts')
        document.location = "/test";
      }.bind(this), function(){
        this.set("loginFailed", true);
        document.getElementById("signin-employee-input").value = "Iniciar sesión";
      }.bind(this));
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
