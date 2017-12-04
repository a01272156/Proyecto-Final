import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Ember.Controller.extend(SweetAlertMixin,{
	usuarios: Ember.computed(function(){
		return this.store.query('user', {
        orderBy: 'activo',
        equalTo: true,
      });
	}),
	actions:{
		save(hora,model,id){
			let user=this.get('store').find('user',id);
			user.then(()=>{
				let pedido = this.get('model');
				pedido.set('fechaElabo',hora);
				pedido.set('usuarioRealizo',user);
				this.set('pedido',pedido);
				let numeroPedido = hora+" "+this.get('model.provedor');
				pedido.set('numeroPedi',numeroPedido);
				pedido.save();
				user.get('content').save();
				let sweetAlert = this.get('sweetAlert');
      			sweetAlert({
      				title: 'Se creo',
      				text: 'El pedido se gurado exitosamente',
  					type: "success",
				});
			})
		}
	}
});
