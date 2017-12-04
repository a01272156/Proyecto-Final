import Ember from 'ember';

export default Ember.Controller.extend({
	productos: Ember.computed(function(){
		return DS.PromiseArray.create({
                  promise: this.get('store').findAll('product').then((productos)=>{
      		let arr = [];
      		productos.forEach((item)=>{
      			if((item.data.minAceptable*3)>item.data.cantidad){
      				arr.push(item);
      			}
      		});
      		return arr;
      	})
      })
	}),
      pedidos: Ember.computed(function(){
            return DS.PromiseArray.create({
                  promise: this.store.query('pedido', {
                  orderBy: 'status',
                  }).then((pedidos)=>{
                  let arr = [];
                  pedidos.forEach((item)=>{
                        if(item.data.status=='Pendiente'){
                              arr.push(item);
                        }
                        if(item.data.status=='Incompleto'){
                              arr.push(item);
                        }
                  });
                  return arr;
            })
      })
      })
});
