const contenedor = document.getElementById('contenido');

// 1. Creamos una función reutilizable
function cargarSeccion(archivo) {
  fetch(archivo)
    .then(respuesta => {
      if (!respuesta.ok) throw new Error("No se pudo cargar");
      return respuesta.text();
    })
    .then(html => {
      contenedor.innerHTML = html;
    })
    .catch(err => console.error(err));
}

// 3. Mantenemos el resto de la lógica para los clics
document.querySelectorAll('.btn-nav').forEach(boton => {
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    const archivo = boton.getAttribute('data-archivo');
    cargarSeccion(archivo);
  });
});