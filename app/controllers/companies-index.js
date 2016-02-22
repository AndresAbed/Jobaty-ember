import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
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
