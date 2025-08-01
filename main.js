// main.js
document.addEventListener("DOMContentLoaded", () => {
  const cantidadInput = document.getElementById("cantidad");
  const totalDisplay = document.getElementById("total");
  const precioUnitario = 100;

  function actualizarTotal() {
    const cantidad = parseInt(cantidadInput.value);
    const total = cantidad * precioUnitario;
    totalDisplay.textContent = `$${total}`;
  }

  cantidadInput.addEventListener("input", actualizarTotal);
  actualizarTotal();
});

