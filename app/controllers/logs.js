import Ember from 'ember';

export default Ember.Controller.extend({
	outs: Ember.computed(function(){
		return this.store.query('out',{
		orderBy: 'fecha',
      	limitToLast: 20
      })
	}),
	entrys:Ember.computed(function(){
		return this.store.query('entry',{
		orderBy: 'fecha',
      	limitToLast: 20
      })
	}),
});
