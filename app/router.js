import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('companies-index', { path: '/empresas' });
  this.route('employee', { path: '/talento' }, function() {
    this.route('acepted', { path: '/aceptadas' });
    this.route('offers', { path: '/ofertas' });
    this.route('profile', { path: '/perfil' });
    this.route('proposals', { path: '/propuestas' });
    this.route('rejected', { path: '/rechazadas' });
  });
});

export default Router;
