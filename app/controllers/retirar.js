import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Ember.Controller.extend(SweetAlertMixin,{
	store: Ember.inject.service('store'),
	productos: Ember.computed(function(){
		return this.get('store').findAll('product');
	}),
	usuarios: Ember.computed(function(){
		return this.store.query('user', {
        orderBy: 'activo',
        equalTo: true,
      });
	}),
	actions:{
		submit(param,param1,param2,param3,param4,param5,param11,param22,param33,param44,param55,user1){
			// console.log(param,param1,param2,param3,param4,param5,param11,param22,param33,param44,param55);
			// console.log(user);
			let out = this.get('store').createRecord('out',{});
			let comentario;
			let cadena ='';
			if (param1) {
			let producto1 = this.get('store').find('product',param1);
			producto1.then(()=>{
			cadena +=producto1.content.data.nombre+", "+producto1.content.data.marca+", Cantidad "+producto1.content.data.cantidad+" Se retiraron "+ param11+"\n";
			let valNew = producto1.content.data.cantidad-param11;
			if (valNew<0) {
				valNew=0;
				comentario+= "El produducto "+producto1.content.data.nombre+" de marca "+producto1.content.data.marca+" tuvo irregularidades \n";
			};
			producto1.set('cantidad',valNew);
			producto1.get('content').save();
			});
			};
			if (param2) {
			let producto2 = this.get('store').find('product',param2);
			producto2.then(()=>{
			cadena +=producto2.content.data.nombre+", "+producto2.content.data.marca+", Cantidad "+producto2.content.data.cantidad+" Se retiraron "+ param22+"\n";
			let valNew = producto2.content.data.cantidad-param22;
			if (valNew<0) {
				valNew=0;
				comentario+= "El produducto "+producto2.content.data.nombre+" de marca "+producto2.content.data.marca+" tuvo irregularidades \n";
			};
			producto2.set('cantidad',valNew);
			producto2.get('content').save();
			});
			};
			if (param3) {
			let producto3 = this.get('store').find('product',param3);
			producto3.then(()=>{
			cadena +=producto3.content.data.nombre+", "+producto3.content.data.marca+", Cantidad "+producto3.content.data.cantidad+" Se retiraron "+ param33+"\n";
			let valNew = producto3.content.data.cantidad-param33;
			if (valNew<0) {
				valNew=0;
				comentario+= "El produducto "+producto3.content.data.nombre+" de marca "+producto3.content.data.marca+" tuvo irregularidades \n";
			};
			producto3.set('cantidad',valNew);
			producto3.get('content').save();
			});

			};
			if (param4) {
			let producto4 = this.get('store').find('product',param4);
			producto4.then(()=>{
			cadena +=producto4.content.data.nombre+", "+producto4.content.data.marca+", Cantidad "+producto4.content.data.cantidad+" Se retiraron "+ param44+"\n";
			let valNew = producto4.content.data.cantidad-param44;
			if (valNew<0) {
				valNew=0;
				comentario+= "El produducto "+producto4.content.data.nombre+" de marca "+producto4.content.data.marca+" tuvo irregularidades \n";
			};
			producto4.set('cantidad',valNew);
			producto4.get('content').save();      
			});
			};
			if (param5) {
			let producto5 = this.get('store').find('product',param5);
			producto5.then(()=>{
			cadena +=producto5.content.data.nombre+", "+producto5.content.data.marca+", Cantidad "+producto5.content.data.cantidad+" Se retiraron "+ param55+"\n";
			let valNew = producto5.content.data.cantidad-param55;
			if (valNew<0) {
				valNew=0;
				comentario+= "El produducto "+producto5.content.data.nombre+" de marca "+producto5.content.data.marca+" tuvo irregularidades \n";
			};
			producto5.set('cantidad',valNew);
			producto5.get('content').save();   
			});
			};
			// console.log(cadena);
			let usuarioAux = this.get('store').find('user',user1);
			usuarioAux.then((user)=>{
			out.set('fecha',param);
			out.set('productos',cadena);
			out.set('usuario',usuarioAux);
			out.set('comentario',comentario);
			let autorizo = usuarioAux.content.data.nombre+" "+usuarioAux.content.data.apellidoPat+" "+usuarioAux.content.data.apellidoMat;
			out.set('autorizo',autorizo);
			out.save();
			usuarioAux.get('content').save();
			// console.log(out);
			// console.log(user);
			let sweetAlert = this.get('sweetAlert');
      		sweetAlert({
      			title: 'Se creo',
      			text: 'Los cambios se guardaron exitosamente',
  				type: "success",
			});
			this.transitionToRoute('inventario');
			})
			
		}
	}
});
