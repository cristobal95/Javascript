const formulario = document.getElementById('formulario');

const validarCorreo = () => {
  const expRegularCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const inputCorreo = formulario['correo-receptor'];

  if(expRegularCorreo.test(inputCorreo.value)){
    inputCorreo.classList.remove('formulario__input--error');
    return true;
  } else {
    inputCorreo.classList.add('formulario__input--error');
    return false;
  }
};

export default validarCorreo;
