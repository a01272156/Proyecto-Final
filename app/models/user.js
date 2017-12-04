import DS from 'ember-data';

export default DS.Model.extend({

	nombre: DS.attr('string'),
	apellidoPat: DS.attr('string'),
	apellidoMat: DS.attr('string'),
	direccion: DS.attr('string'),
	telefono: DS.attr('string'),
	curp: DS.attr('string'),
	activo: DS.attr('boolean',{defaultValue: true}),
	nacimiento: DS.attr('string'),
	usuario: DS.attr('string'),
	password: DS.attr('string'),
	tipoUser: DS.attr('string',{defaultValue: 'Empleado'}),
	picurl: DS.attr('string'),
	outs: DS.hasMany('out'),
	entrys: DS.hasMany('entry'),
	pedidos: DS.hasMany('pedido')

});
