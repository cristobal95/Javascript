import validarCorreo from "./validaciones/validarCorreo";
import validarNombre from "./validaciones/validarNombre";
import validarCantidad from "./validaciones/validarcantidad";


validarCantidad

const linea = document.getElementById('linea-pasos');
linea.addEventListener('click', (e) => {
  if(!e.target.closest('.linea-pasos__paso')) return;

  const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;

  if (pasoActual === 'cantidad') {
    if(!validarCantidad()) return;
  } else if(pasoActual === 'datos') {
    if(!validarCorreo() || !validarNombre()) return;
  }

  const pasoANavegar = e.target.closest('.linea-pasos__paso');

  if (pasoANavegar.querySelector('.linea-pasos__paso-check--checked')){
    const pasoActual = linea.querySelector('.linea-pasos__paso-check--active');
    pasoActual.classList.remove('linea-pasos__paso-check--active');

    const id = pasoANavegar.dataset.paso;

    linea.querySelector(`[data-paso="${id}"] span`).classList.add('linea-pasos__paso-check--active');

        const btnFormulario = document.querySelector('#formulario__btn');
        btnFormulario.querySelector('span').innerText = "Siguiente";

        btnFormulario.querySelector('[data-icono="banco"]').classList.remove('formulario__btn-contenedor-icono--active')


        btnFormulario.querySelector('[data-icono="siguiente"]').classList.add('formulario__btn-contenedor-icono--active')

        btnFormulario.classList.remove('formulario__btn--disabled')

    document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
      inline: 'start',
      behavior: 'smooth',
    });
  }
});
