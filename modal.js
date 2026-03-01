const botonAbrirModal = document.getElementById('abrir-modal');
const modal = document.getElementById('modal');
const botonCerrarModal = document.getElementById('cerrar-modal');

// Función para abrir el modal
botonAbrirModal.addEventListener('click', () => {
  modal.classList.add('visible');
});

// Función para cerrar el modal
botonCerrarModal.addEventListener('click', () => {
  modal.classList.remove('visible');
});