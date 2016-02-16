import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    signup_company: function() {
      var company = this.store.createRecord('signup-company', {
        companyName: this.get('companyName'),
        email: this.get('email'),
        password: this.get('password')
      });
      company.save();
    }
  }
});
