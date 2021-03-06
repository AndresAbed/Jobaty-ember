import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login_employee: function() {
    	$(".employee-sigin-messages").html("");
      document.getElementById("signin-employee-input").value = "Iniciando sesión...";
      var user = this.store.createRecord('login-employee', {
        email: this.get('login_email'),
        password: this.get('login_password')
      });
      user.save().then(function() {
        this.transitionToRoute('employee.offers');
      }.bind(this), function(response){
        $(".employee-sigin-messages").html("Email o contraseña invalidos");
        document.getElementById("signin-employee-input").value = "Iniciar sesión";
        $("#employee-signin")[0].reset();
      }.bind(this));
    },
    signup_employee: function() {
    	$(".employee-signup-messages").html("");
    	document.getElementById("signup-employee-input").value = "Registrando...";
      var employee = this.store.createRecord('signup-employee', {
        name: this.get('name'),
        last_name: this.get('lastname'),
        email: this.get('signup_email'),
        password: this.get('signup_password')
      });
      employee.save().then(function() {
      	$(".employee-signup-messages").html("Cuenta registrada");
        $("#employee-signup")[0].reset();
        document.getElementById("signup-employee-input").value = "Registrarse";
      }.bind(this), function(response) {
      	if (response.errors[0].status == 503) {
      		$(".employee-signup-messages").html("Datos inválidos, completar todos los campos.");
          $("#employee-signup")[0].reset();
      		document.getElementById("signup-employee-input").value = "Registrarse";
      	}
      	else{
      		if (response.errors[0].status == 409) {
      			$(".employee-signup-messages").html("El email ya está en uso");
            $("#employee-signup")[0].reset();
      			document.getElementById("signup-employee-input").value = "Registrarse";
      		}
      	};
      }.bind(this));
    }
  }
});
