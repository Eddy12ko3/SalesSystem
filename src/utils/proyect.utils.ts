export const DataTables_Spanish = {
	processing: 'Procesando...',
	search: 'Buscar:',
	select: {
		rows: {
			_: '%d filas seleccionadas.',
			0: '',
			1: '1 fila seleccionada.',
		},
	},
	lengthMenu: 'Mostrar _MENU_ elementos',
	info: 'Mostrando desde _START_ al _END_ de _TOTAL_ elementos',
	infoEmpty: 'Mostrando ningún elemento.',
	infoFiltered: '(filtrado _MAX_ elementos total)',
	infoPostFix: '',
	loadingRecords: 'Cargando registros...',
	zeroRecords: 'No se encontraron registros',
	emptyTable: 'No hay datos disponibles en la tabla',
	paginate: {
		first: 'Primero',
		previous: 'Anterior',
		next: 'Siguiente',
		last: 'Último',
	},
	aria: {
		sortAscending: ': Activar para ordenar la tabla en orden ascendente',
		sortDescending: ': Activar para ordenar la tabla en orden descendente',
	},
};

export const isNumber = (value?: string | number): boolean => {
	return value != null && value !== '' && !isNaN(Number(value.toString()));
};
