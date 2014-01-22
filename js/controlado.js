var signals = ['Izquierda', 'Derecha', 'Arriba', 'Abajo', 'alert 0'];
var r = Remote.receiver(signals);

r.on('alert 0', function(error, signal) {
	if (!error) alert('Spooky action at a distance be this!');
});

r.on('Arriba', function(error, signal) {
	document.querySelector('#arriba').className = 'seleccionado';
	document.querySelector('#abajo').className = 'nulo';
	document.querySelector('#izquierda').className = 'nulo';
	document.querySelector('#derecha').className = 'nulo';
});

r.on('Abajo', function(error, signal) {
	document.querySelector('#arriba').className = 'nulo';
	document.querySelector('#abajo').className = 'seleccionado';
	document.querySelector('#izquierda').className = 'nulo';
	document.querySelector('#derecha').className = 'nulo';
});

r.on('Izquierda', function(error, signal) {
	document.querySelector('#arriba').className = 'nulo';
	document.querySelector('#abajo').className = 'nulo';
	document.querySelector('#izquierda').className = 'seleccionado';
	document.querySelector('#derecha').className = 'nulo';
});

r.on('Derecha', function(error, signal) {
	document.querySelector('#arriba').className = 'nulo';
	document.querySelector('#abajo').className = 'nulo';
	document.querySelector('#izquierda').className = 'nulo';
	document.querySelector('#derecha').className = 'seleccionado';
});