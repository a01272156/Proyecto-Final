import Ember from 'ember';

export default Ember.Controller.extend({
	pedidos: Ember.computed(function(){
		return this.store.query('pedido', {
        orderBy: 'status',
      })
	})
});
