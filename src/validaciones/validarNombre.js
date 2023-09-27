const formulario = document.getElementById('formulario');

const validarNombre = () => {
  const expRegularNombre = /^[a-zA-Z\s'-]+$/;

  const inputNombre = formulario['nombre-receptor'];

  if(expRegularNombre.test(inputNombre.value)){
    inputNombre.classList.remove('formulario__input--error');
    return true;
  } else {
    inputNombre.classList.add('formulario__input--error');
    return false;
  }
};

export default validarNombre;
