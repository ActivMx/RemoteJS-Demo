var signals = ['Izquierda', 'Derecha', 'Arriba', 'Abajo', 'alert 0'];
var t = Remote.transmitter(signals);

document.querySelector('#arriba_btn').addEventListener('click', function() {
    t.emit('Arriba');
});

document.querySelector('#abajo_btn').addEventListener('click', function() {
    t.emit('Abajo');
});

document.querySelector('#izquierda_btn').addEventListener('click', function() {
    t.emit('Izquierda');
});

document.querySelector('#derecha_btn').addEventListener('click', function() {
    t.emit('Derecha');
});