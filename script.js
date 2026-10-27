// Cambia este correo por el correo real que recibirá las consultas.
const EMAIL_DESTINO = "administracion@synergiahydro.com";

document.getElementById("year").textContent = new Date().getFullYear();

// Al pulsar "Consultar este servicio", el formulario selecciona ese servicio.
document.querySelectorAll(".service-cta").forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.getElementById("servicio");
    const service = link.dataset.service;
    const matchingOption = [...select.options].find(
      (option) => option.text === service,
    );
    if (matchingOption) select.value = matchingOption.value;
  });
});

// Prepara un correo. No almacena información ni la envía automáticamente.
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const servicio = document.getElementById("servicio").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  const subject = encodeURIComponent(`Consulta web: ${servicio}`);
  const body = encodeURIComponent(
    `Nombre: ${nombre}\nCorreo: ${correo}\nServicio: ${servicio}\n\nMensaje:\n${mensaje}`,
  );

  const notice = document.getElementById("notice");
  notice.style.display = "block";
  notice.textContent =
    "Se abrirá tu aplicación de correo con la consulta preparada. Revisa el destinatario antes de enviarla.";
  window.location.href = `mailto:${EMAIL_DESTINO}?subject=${subject}&body=${body}`;
});
