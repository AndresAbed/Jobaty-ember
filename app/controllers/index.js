import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login_user: function() {
    	$(".employee-sigin-messages").html("");
      document.getElementById("signin-employee-input").value = "Iniciando sesión...";
      var user = this.store.createRecord('login-user', {
        email: this.get('email'),
        password: this.get('password')
      });
      user.save().then(function() {
        //this.transitionToRoute('posts')
        document.location = "/test";
      }.bind(this), function(response){
      	$(".employee-sigin-messages").html("Email o contraseña invalidos");
        document.getElementById("signin-employee-input").value = "Iniciar sesión";
      }.bind(this));
    },
    signup_employee: function() {
    	$(".employee-sigup-messages").html("");
    	document.getElementById("signup-employee-input").value = "Registrando...";
      var employee = this.store.createRecord('signup-employee', {
        name: this.get('name'),
        lastName: this.get('lastname'),
        email: this.get('email'),
        password: this.get('password')
      });
      employee.save().then(function() {
      	$(".employee-sigup-messages").html("Cuenta registrada");
      }.bind(this), function(response) {
      	if (response.errors[0].status == 503) {
      		$(".employee-sigup-messages").html("Datos inválidos");
      		document.getElementById("signup-employee-input").value = "Registrarse";
      	}
      	else{
      		if (response.errors[0].status == 409) {
      			$(".employee-sigup-messages").html("El email ya está en uso");
      			document.getElementById("signup-employee-input").value = "Registrarse";
      		}
      	};
      }.bind(this));
    }
  }
});
