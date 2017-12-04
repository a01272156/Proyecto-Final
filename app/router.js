import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('home',{path: '/'});
  this.route('inventario');
  this.route('usuarios');
  this.route('new-usuarios');
  this.route('retirar');
  this.route('agregar');
  this.route('logs');
  this.route('usuarios-details',{path: '/usuarios-details/:id'});
  this.route('añadir');
  this.route('add');
  this.route('pedidos');
  this.route('new-pedidos');
  this.route('myuser');
  this.route('recibir-pedido');
  this.route('usarios-editar',{path: '/usarios-editar/:id'});
  this.route('editar',{path: '/editar/:id'});
});

export default Router;
