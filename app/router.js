import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('companies-index', { path: '/empresas' });
  this.route('employee', { path: '/talento' }, function() {
    this.route('acepted', { path: '/aceptadas' });
    this.route('contact', { path: '/contacto' });
    this.route('offers', { path: '/ofertas' });
    this.route('profile', { path: '/perfil' });
    this.route('proposals', { path: '/propuestas' });
    this.route('rejected', { path: '/rechazadas' });
  });
  this.route('company', {path: '/empresa'}, function() {
    this.route('acepted-messages', { path: '/mensajes-aceptados' });
    this.route('rejected-messages', { path: '/mensajes-rechazados' });
    this.route('open-proposals', { path: '/propuestas-abiertas' });
    this.route('closed-proposals', { path: '/propuestas-cerradas' });
    this.route('new-position', { path: '/nuevo-puesto' });
    this.route('profile', { path: '/perfil' });
    this.route('talento', { path: '/talentos' });
  });
});

export default Router;
