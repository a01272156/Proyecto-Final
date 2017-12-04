import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Ember.Controller.extend(SweetAlertMixin,{
	productos: Ember.computed(function(){
		return this.get('store').findAll('product');
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
      }),
	usuarios: Ember.computed(function(){
		return this.store.query('user', {
        orderBy: 'activo',
        equalTo: true,
      });
	}),
	actions:{
		submit(time,usuario,comentario,pedidoID,estatus){
			let entry = this.get('store').createRecord('entry',{});
			let cadena = ""; 
			let productos = this.get('productos');
			let user = this.get('store').find('user',usuario);
			let nombreUser;
			let pedido = this.get('store').find('pedido',pedidoID);
			productos.then(()=>{
				pedido.then(()=>{
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
					pedido.set('status',estatus);
					pedido.set('usuarioRecibio',nombreUser);
					pedido.set('comentario',comentario);
					pedido.set('fechaComp',time);
					pedido.get('content').save();
					let sweetAlert = this.get('sweetAlert');
      				sweetAlert({
      				title: 'Se creo',
      				text: 'Se gurado exitosamente',
  					type: "success",
					});
				})
			})
			})
		}
	}
});
