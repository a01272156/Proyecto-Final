import Ember from 'ember';

export default Ember.Controller.extend({
	outs: Ember.computed(function(){
		let user = this.get('model.id');
		return this.store.query('out', {
        orderBy: 'usuario',
        equalTo: user,
        limitBy: 10
      })
	}),
	entrys: Ember.computed(function(){
		let user = this.get('model.id');
		return this.store.query('entry', {
        orderBy: 'usuario',
        equalTo: user,
        limitBy: 10
      })
	}),
});
