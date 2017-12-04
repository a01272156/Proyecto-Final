import Ember from 'ember';

export default Ember.Controller.extend({
	usuarios: Ember.computed(function() {
		return this.store.query('user', {
        orderBy: 'activo',
      })
	}),
	actions:{
		siguiente(params){
			this.transitionToRoute('/usuarios-details/'+params,params);
		},
		siguienteEd(params){
			this.transitionToRoute('/editar/'+params,params);
		},
	}
});
