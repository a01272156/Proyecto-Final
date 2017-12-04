import Ember from 'ember';

import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';
export default Ember.Controller.extend(SweetAlertMixin,{
	actions:{
		submit(params){
			let producto = this.get('model');
			this.set('product',producto);
			producto.save();
			let sweetAlert = this.get('sweetAlert');
      		sweetAlert({
      			title: 'Se creo',
      			text: 'El Producto se guardo exitosamente',
  				type: "success",
			});
			this.transitionToRoute('inventario');
		},
		}
	
});
