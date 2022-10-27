
let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')

botones.forEach(boton => {
    boton.addEventListener('click', function(e) {

        const estilos = e.currentTarget.classList;

        if(estilos.contains('Aumentar')) {
            contador++;
        } 
        else if(estilos.contains('Disminuir')) {
            contador--;
        }
        else {
            contador = 0; 
            valor.style.color = 'black';
        }
          valor.textContent = contador;

        // cambiando los colores 

        if(contador > 0) {
            valor.style.color = '#009933';
        }
        if(contador < 0) {
            valor.style.color = 'red';
        }
        

    })
})