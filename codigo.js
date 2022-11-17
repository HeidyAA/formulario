//conectamos los text input en una clase
var inputs = document.getElementsByClassName('f_input');
//al activar cualquier botón se realiza el efecto
for (var i = 0; i < inputs.length; i++) {
//crear un evento al pasar el mouse habrá un movimiento - (keyup, hace que se mueva)
inputs[i].addEventListener('keyup', function(){
//si se elige uno de ellos habrá un desplazamiento según la clase fijada 
    if(this.value.length>=1) {
        this.nextElementSibling.classList.add('fijar');
    } else { //regresa al espacio anterior
        this.nextElementSibling.classList.remove('fijar');
    }
});
}
