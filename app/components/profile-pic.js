import Ember from 'ember';

export default Ember.Component.extend({
	firebaseUtil: Ember.inject.service(),
	session: Ember.computed(function() {
		let pro = this.get('model');
		console.log(pro);
		return pro;
	}),
	actions:{
	previewImage(event){
		let input = event.target;
		let file = input.files[0];

		let reader = new FileReader();

		reader.onload = (e)=> {
			console.log('reader');
			this.$('#preview').attr('src',e.target.result);
			this.get('firebaseUtil').uploadFile(`pics/${this.get('session.id')}`,file).then((downloadURL)=>{
				this.sendAction('didChange',downloadURL);
				console.log(downloadURL);
			})
		}
		reader.readAsDataURL(file);
	}
}
});
