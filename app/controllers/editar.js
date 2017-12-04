import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Ember.Controller.extend(SweetAlertMixin,{
	permiso: false,
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
	changePicURl1(url){
			console.log(url);
			this.set('model.picurl',url);
		},
		autorizarUsuario(usua,pass){
			let usuarios = this.get('store').findAll('user');
			let bool = false;
			usuarios.then(()=>{
				usuarios.forEach((item)=>{
					console.log(item);
					if (item.data.usuario==usua&&item.data.password==pass&&item.data.tipoUser=='Administrador'&&item.data.activo) {
						this.set('permiso',true);
						bool = true;
					};
				})
				if (!bool) {
					let sweetAlert = this.get('sweetAlert');
      		sweetAlert({
      			title: 'Error',
      			text: 'El usuario o la contraseña son incorrectos',
  				type: "error",
			});
				};
			})
		},
	}
});
