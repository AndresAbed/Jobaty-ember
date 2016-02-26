import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
    login_company: function() {
      $(".company-sigin-messages").html("");
      document.getElementById("signin-company-input").value = "Iniciando sesión...";
      var company = this.store.createRecord('login-company', {
        email: this.get('login_email'),
        password: this.get('login_password')
      });
      company.save().then(function() {
        this.transitionToRoute('company.talents');
      }.bind(this), function(response){
        $(".company-sigin-messages").html("Email o contraseña invalidos");
        $("#company_signin")[0].reset();
        document.getElementById("signin-company-input").value = "Iniciar sesión";
      }.bind(this));
    },
		signup_company: function() {
			$(".company-sigup-messages").html("");
			document.getElementById("signup-company-input").value = "Registrando...";
			var company = this.store.createRecord('signup-company', {
				companyName: this.get('companyName'),
				email: this.get('email'),
				password: this.get('password')
			});
			company.save().then(function() {
				$(".company-sigup-messages").html("Cuenta registrada");
				document.getElementById("signup-company-input").value = "Registrarse";
			}.bind(this), function(response) {
				if (response.errors[0].status == 503) {
					$(".company-sigup-messages").html("Datos inválidos");
					document.getElementById("signup-company-input").value = "Registrarse";
				}
				else{
					if (response.errors[0].status == 409) {
						$(".company-sigup-messages").html("El email ya está en uso");
						document.getElementById("signup-company-input").value = "Registrarse";
					}
				};
			}.bind(this));
		}
	}
});
