import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Ember.Controller.extend(SweetAlertMixin,{
	permiso: true,
	autorizar: Ember.computed(function(){

	}),
	actions:{
		save(model){
			let user = this.get('model');
			this.set('user',user);
			user.save();
			let sweetAlert = this.get('sweetAlert');
      		sweetAlert({
      			title: 'Se creo',
      			text: 'El usuario se gurado exitosamente',
  				type: "success",
			});
		},
	changePicURl(url){
			console.log(url);
			this.set('model.picurl',url);
		},
		autorizarUsuario(usuario,pass){
			let usuarios = this.get('store').findAll('user');
			usuarios.then(()=>{
				usuario.forEach((item)=>{
					console.log(item);
					this.set('permiso',true);
					if (true) {
						return false;
					};
				})
			})
		},
	}
});
