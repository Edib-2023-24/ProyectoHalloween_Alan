// Definir la fecha de Halloween del próximo año
const halloweenNextYear = new Date(new Date().getFullYear() + 1, 9, 31); // Mes en JavaScript es 0-indexado, por lo que 9 es octubre

// Función para calcular y actualizar el tiempo restante
function actualizarReloj() {
  const ahora = new Date();
  const diferencia = halloweenNextYear - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Actualizar el contenido HTML con el tiempo restante
  document.getElementById("dias").querySelector("h4").innerText = dias;
  document.getElementById("horas").querySelector("h4").innerText = horas;
  document.getElementById("minutos").querySelector("h4").innerText = minutos;
  document.getElementById("segundos").querySelector("h4").innerText = segundos;
}

// Llamar a la función de actualización cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función de actualización al cargar la página para que se muestre inmediatamente
actualizarReloj();
