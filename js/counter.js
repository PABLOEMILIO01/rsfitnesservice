// Función para actualizar el contador del medio
const updateMiddleCounter = (counter, target) => {
  let count = 0;
  const increment = target / 200;
  const interval = setInterval(() => {
    if (count < target) {
      count = Math.ceil(count + increment); // Actualizar el valor actual del contador
      counter.innerText = `${count}%`; // Mostrar el valor actualizado con el símbolo de porcentaje
    } else {
      clearInterval(interval); // Detener el intervalo cuando se alcanza el objetivo
      setTimeout(() => {
        counter.innerText = "0%"; // Reiniciar el contador después de 5 segundos
        updateMiddleCounter(counter, target); // Reiniciar la actualización del contador
      }, 5000);
    }
  }, 10); // Velocidad de actualización del contador
};

// Función para inicializar los contadores
const initializeCounters = () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter, index) => {
    const target = +counter.getAttribute("data-target");
    if (index === 1) { // Si el contador es el del medio
      counter.innerText = "0%";
      updateMiddleCounter(counter, target); // Iniciar la actualización del contador del medio
    } else {
      counter.innerText = "0";
      const updateCounter = () => {
        let count = +counter.innerText;
        const increment = target / 200;
        const interval = setInterval(() => {
          if (count < target) {
            count = Math.ceil(count + increment);
            counter.innerText = `${count}`;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              counter.innerText = "0"; // Reiniciar el contador después de 5 segundos
              updateCounter(); // Reiniciar la actualización del contador
            }, 5000);
          }
        }, 10);
      };
      updateCounter(); // Iniciar la actualización del contador
    }
  });
};

initializeCounters(); // Iniciar la inicialización de los contadores
