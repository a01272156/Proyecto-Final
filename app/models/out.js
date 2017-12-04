import DS from 'ember-data';

export default DS.Model.extend({
	fecha: DS.attr('string'),
	comentario: DS.attr('string',{defaultValue:'Sin comentario'}),
	autorizo: DS.attr('string'),
	productos: DS.attr('string'),
	usuario: DS.belongsTo('user'),
});
