import Ember from 'ember';
export default Ember.Controller.extend({
	productos: Ember.computed(function(){
		return this.get('store').findAll('product');
	}),
	actions:{
		nuevo(){
			this.transitionToRoute('agregar');
		}
	}
});
