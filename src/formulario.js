import validarCantidad from "./validaciones/validarcantidad";
import marcarPaso from "./marcarpaso";
import siguientePaso from "./siguientepaso";
import validarNombre from "./validaciones/validarNombre";
import validarCorreo from "./validaciones/validarCorreo";
validarCorreo
validarNombre
const formulario = document.getElementById('formulario');
/*
formulario.querySelector('.formulario__body').scrollLeft = 1;
 */
formulario.addEventListener('keyup', (e) => {
  if(e.target.tagName === 'INPUT'){
    if(e.target.id === 'cantidad'){
      validarCantidad();
    } else if (e.target.id === 'nombre-receptor') {
      validarNombre();
    } else if (e.target.id === 'correo-receptor') {
      validarCorreo();
    }
  }
});

const btnSubmit = document.getElementById('formulario__btn');
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;


  if(pasoActual === 'cantidad') {
    if(validarCantidad()) {
      marcarPaso('cantidad');
      siguientePaso();
    }
  } else if(pasoActual === 'datos') {
    if (validarNombre() && validarCorreo()) {
      marcarPaso('datos');
      siguientePaso();
    }
  } else if (pasoActual === 'metodo') {
    marcarPaso('metodo');

    // formato de la moneda

    const opciones = {style: 'currency', currency: 'MXN'};
    const formatoMoneda = new Intl.NumberFormat('es-MX', opciones);
    document.querySelector('[data-valor="cantidad"] span').innerText = formatoMoneda.format(formulario.cantidad.value);
    document.querySelector('[data-valor="nombre-receptor"] span').innerText = formulario['nombre-receptor'].value;
    document.querySelector('[data-valor="correo-receptor"] span').innerText = formulario['correo-receptor'].value;
    document.querySelector('[data-valor="metodo"] span').innerText = formulario.metodo.value;

    btnSubmit.querySelector('span').innerHTML = 'Transferir';
    btnSubmit.classList.add('formulario__btn--disabled');

    btnSubmit.querySelector('[data-icono="siguiente"]').classList.remove('formulario__btn-contenedor-icono--active');
    btnSubmit.querySelector('[data-icono="banco"]').classList.add('formulario__btn-contenedor-icono--active');

    siguientePaso();

    setTimeout(() => {
      btnSubmit.classList.remove('formulario__btn--disabled');
    }, 4000);
  } else if (pasoActual === 'confirmacion' && !btnSubmit.matches('.formulario__btn--disabled')) {
    btnSubmit.querySelector('span').innerText = 'Transfiriendo';
    btnSubmit.classList.add('formulario__btn--disabled');

    setTimeout(() => {
      formulario.classList.add('formulario--hidden');
      document.getElementById('alerta').classList.add('alerta--active');
    }, 4000);
  }
});
