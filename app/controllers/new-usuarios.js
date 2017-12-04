import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Ember.Controller.extend(SweetAlertMixin,{
	actions:{
		save(model,userAux){
			let users = this.store.query('user', {
        orderBy: 'usuario',
      });	
			let bool = true;
			users.then(()=>{
			let user = this.get('model');
			this.set('user',user);
			users.forEach((item)=>{
				if (item.data.usuario==userAux) {
					bool = false;
					let sweetAlert = this.get('sweetAlert');
      				sweetAlert({
      				title: 'Error',
      				text: 'El campo usuario ya existe',
  					type: "error",
					});
				};
			})
			if(bool){
				user.save();
			}
			})
		},
	changePicURl(url){
			console.log(url);
			this.set('model.picurl',url);
		},
	}
});
