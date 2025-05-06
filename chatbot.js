function verMas() {
    const infoSection = document.getElementById("info");
    infoSection.scrollIntoView({ behavior: "smooth" });
  }
  
  function abrirChatbot() {
    document.getElementById("chatbot").style.display = "flex";
    
    // Resetear el contenido del chatbot al estado inicial
    const cuerpo = document.getElementById("chatbotBody");
    cuerpo.innerHTML = `
      <p>¡Hola! Soy el asistente virtual de la Municipalidad de San Bartolo.</p>
      <p>¿En qué puedo ayudarte hoy?</p>
      <button onclick="mostrarPaso('iniciar')">Iniciar habilitación comercial</button>
      <button onclick="mostrarPaso('renovar')">Renovar habilitación</button>
      <button onclick="mostrarPaso('titularidad')">Cambio de titularidad</button>
      <button onclick="mostrarPaso('requisitos')">Requisitos por tipo de negocio</button>
    `;
  }
  
  function cerrarChatbot() {
    document.getElementById("chatbot").style.display = "none";
  }
  
  function mostrarPaso(paso) {
    const cuerpo = document.getElementById("chatbotBody");
    let contenido = '';
    
    if (paso === 'iniciar') {
      contenido = `
        <p><strong>Para iniciar una habilitación comercial necesitás:</strong></p>
        <ul>
          <li>✅ Plano del local firmado por un profesional matriculado</li>
          <li>✅ Contrato de alquiler o escritura</li>
          <li>✅ Seguro de responsabilidad civil</li>
          <li>✅ Constancia de CUIT o inscripción en AFIP</li>
          <li>✅ Pago de la tasa de habilitación municipal</li>
        </ul>
        <p>Presentación presencial en la Oficina de Comercio o digital vía web municipal.</p>
      `;
    } else if (paso === 'renovar') {
      contenido = `
        <p><strong>Para renovar tu habilitación comercial:</strong></p>
        <ul>
          <li>✅ Copia de la habilitación anterior</li>
          <li>✅ Seguro vigente</li>
          <li>✅ Estar al día con las tasas municipales</li>
          <li>✅ Completar el formulario de renovación</li>
        </ul>
      `;
    } else if (paso === 'titularidad') {
      contenido = `
        <p><strong>Para cambiar titularidad:</strong></p>
        <ul>
          <li>✅ Nota firmada por el titular anterior</li>
          <li>✅ DNI y CUIT del nuevo titular</li>
          <li>✅ No tener deudas con el municipio</li>
          <li>✅ Pago de la tasa de transferencia</li>
        </ul>
      `;
    } else if (paso === 'requisitos') {
      contenido = `
        <p><strong>Seleccioná el tipo de comercio:</strong></p>
        <button onclick="mostrarPaso('gastronomico')">Local gastronómico</button>
        <button onclick="mostrarPaso('kiosco')">Kiosco o despensa</button>
        <button onclick="mostrarPaso('oficina')">Oficina / Estudio profesional</button>
      `;
    } else if (paso === 'gastronomico') {
      contenido = `
        <p><strong>Requisitos para local gastronómico:</strong></p>
        <ul>
          <li>🍽 Informe bromatológico</li>
          <li>🏷️ Certificado de manipulación de alimentos</li>
          <li>🧯 Informe de seguridad contra incendios</li>
        </ul>
      `;
    } else if (paso === 'kiosco') {
      contenido = `
        <p><strong>Requisitos para kiosco o despensa:</strong></p>
        <ul>
          <li>✅ Plano simple del local</li>
          <li>✅ Declaración jurada de productos</li>
        </ul>
      `;
    } else if (paso === 'oficina') {
      contenido = `
        <p><strong>Requisitos para oficina o estudio profesional:</strong></p>
        <ul>
          <li>✅ Constancia de título o colegiatura</li>
          <li>✅ Contrato del local</li>
        </ul>
      `;
    }
    
    // Agrega botón de volver
    contenido += `<button onclick="abrirChatbot()">⬅ Volver</button>`;
    cuerpo.innerHTML = contenido;
  }