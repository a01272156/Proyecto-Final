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
		submit(time,usuario,comentario){
			let entry = this.get('store').createRecord('entry',{});
			let cadena = ""; 
			let productos = this.get('productos');
			let user = this.get('store').find('user',usuario);
			let nombreUser;
			productos.then(()=>{
				user.then(()=>{
					productos.forEach((item)=>{
						item.save().then(()=>{
							if (item.data.agregar!=0) {
							cadena+= item.data.nombre+", "+item.data.marca+' existian: '+item.data.cantidad+' y se agregaron: '+item.data.agregar+'\n';
							let numAux = Number(item.data.agregar) + Number(item.data.cantidad);
							item.set('cantidad',numAux);
							item.set('agregar',0);
							item.save();
						};
						entry.set('productos',cadena);
						entry.save();
						})
					})
					nombreUser = user.content.data.nombre+" "+user.content.data.apellidoPat+" "+user.content.data.apellidoMat;
					entry.set('autorizo',nombreUser);
					entry.set('productos',cadena);
					entry.set('fecha',time);
					entry.set('usuario',user);
					entry.set('comentario',comentario);
					entry.save();
					user.get('content').save();
					let sweetAlert = this.get('sweetAlert');
      				sweetAlert({
      				title: 'Se creo',
      				text: 'Se gurado exitosamente',
  					type: "success",
					});
				})
			})

		}
	}
});
