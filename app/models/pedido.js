import DS from 'ember-data';

export default DS.Model.extend({
	numeroPedi: DS.attr('string'),
	provedor: DS.attr('string'),
	agente: DS.attr('string'),
	telefono: DS.attr('string'),
	contenido: DS.attr('string'),
	comentario: DS.attr('string'),
	descripcion: DS.attr('string'),
	fechaElabo: DS.attr('string'),
	fechaComp: DS.attr('string'),
	status: DS.attr('string', {defaultValue: 'Pendiente'}),
	costo: DS.attr('string'),
	usuarioRecibio: DS.attr('string'),
	usuarioRealizo: DS.belongsTo('user'), 
});
