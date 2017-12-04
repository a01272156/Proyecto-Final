import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	cantidad: DS.attr('number',{defaultValue: 0}),
	agregar: DS.attr('number',{defaultValue: 0}),
	unidades: DS.attr('string'),
	comentario: DS.attr('string'),
	minAceptable: DS.attr('number'),
	marca: DS.attr('string'),
});
