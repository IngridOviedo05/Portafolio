/* ==========================================================
   BASE DE DATOS DE PROYECTOS
========================================================== */
const projects = {
  museoAR: {
    title: "Museo de la Costa Oriental",
    subtitle: "Experiencia de Realidad Aumentada",
    description: "Se desarrolló una experiencia inmersiva de Realidad Aumentada para complementar el recorrido museográfico mediante contenido digital interactivo.<br><br>El proyecto integra modelos tridimensionales, animaciones, audio e información contextual utilizando Unity y Vuforia, permitiendo que los visitantes accedan a contenido adicional mediante dispositivos móviles.<br><br>La propuesta busca fortalecer la divulgación del patrimonio cultural mediante tecnologías emergentes.",
    objective: "Diseñar una experiencia interactiva que complemente la exposición del museo y facilite la interpretación del patrimonio cultural mediante Realidad Aumentada.",
    role: "Investigación, diseño de experiencia de usuario, desarrollo de la aplicación en Unity, integración con Vuforia, pruebas de funcionamiento y optimización.",
    tools: ["Unity", "Vuforia", "C#", "Photoshop"],
    images: ["assets/img/portfolio/museo1.jpg", "assets/img/portfolio/museo2.jpg", "assets/img/portfolio/museo3.jpg"],
    video: "assets/videos/museo.mp4",
    info: {
      "Categoría": "Realidad Aumentada",
      "Cliente": "Museo de la Costa Oriental",
      "Tecnologías": "Unity · Vuforia · Photoshop",
      "Año": "2025"
    }
  },
  ixim: {
    title: "IXIM: El Cuerpo del Sol",
    subtitle: "Producción Audiovisual",
    description: "Animación presentada durante el Simposio de Cultura Maya Ichkaantijoo organizado por el Instituto Nacional de Antropología e Historia.<br><br>La pieza audiovisual explora la relación entre el maíz, el sonido y la memoria colectiva como elementos fundamentales de la identidad maya contemporánea.",
    objective: "Comunicar la permanencia de la cultura maya mediante un lenguaje audiovisual contemporáneo que vincule tradición, tecnología y patrimonio cultural.",
    role: "Dirección del equipo de producción, coordinación del cronograma, supervisión artística, integración audiovisual y presentación del proyecto.",
    tools: ["After Effects", "Photoshop", "Illustrator", "Premiere", "Storyboard"],
    images: ["assets/img/portfolio/ixim1.jpg", "assets/img/portfolio/ixim2.jpg", "assets/img/portfolio/ixim3.jpg"],
    video: "assets/videos/ixim.mp4",
    info: {
      "Categoría": "Animación",
      "Institución": "INAH",
      "Evento": "Simposio de Cultura Maya",
      "Rol": "Directora de Producción"
    }
  },
  rebranding: {
    title: "Rebranding de Laboratorio Dental",
    subtitle: "Identidad Visual",
    description: "Proyecto integral de identidad visual desarrollado para modernizar la imagen del laboratorio.<br><br>El sistema gráfico incluyó logotipo, aplicaciones impresas, manual básico de identidad, papelería institucional y recursos para redes sociales.",
    objective: "Crear una identidad visual contemporánea que transmitiera profesionalismo, innovación y confianza.",
    role: "Investigación, conceptualización, diseño de logotipo, desarrollo del sistema gráfico y aplicaciones de marca.",
    tools: ["Illustrator", "Photoshop", "Brand Identity"],
    images: ["assets/img/portfolio/rebranding.jpg", "assets/img/portfolio/rebranding2.jpg", "assets/img/portfolio/rebranding3.jpg"],
    info: {
      "Categoría": "Branding",
      "Cliente": "Teeth-nology",
      "Servicios": "Rebranding",
      "Año": "2025"
    }
  },
  mediaplan: {
    title: "Plan de Medios",
    subtitle: "Marketing Digital",
    description: "Diseño de una estrategia integral para fortalecer la presencia digital del laboratorio dental mediante contenido visual, campañas en redes sociales y planificación editorial.",
    objective: "Incrementar el posicionamiento digital y mejorar la comunicación con pacientes potenciales.",
    role: "Diseño de estrategia, creación de contenido, identidad para redes sociales y planificación de publicaciones.",
    tools: ["Illustrator", "Photoshop", "Meta Business", "Facebook", "Instagram"],
    images: ["assets/img/portfolio/media-1.png", "assets/img/portfolio/media-plan.jpg", "assets/img/portfolio/media-3.jpg"],
    info: {
      "Categoría": "Marketing",
      "Cliente": "Teeth-nology",
      "Servicios": "Plan de Medios",
      "Año": "2025"
    }
  },
  arduino: {
    title: "Varita Interactiva con Arduino",
    subtitle: "Desarrollo de Interfaces Físicas",
    description: "Proyecto interactivo desarrollado utilizando Arduino y sensores para controlar eventos digitales mediante una interfaz física personalizada.<br><br>La propuesta explora la interacción entre hardware y software para crear experiences inmersivas donde los movimientos del usuario modifican el comportamiento del sistema en tiempo real.",
    objective: "Investigar las posibilidades de interacción entre dispositivos físicos y entornos digitales mediante electrónica creativa.",
    role: "Diseño del circuito electrónico, programación de Arduino, integración con software multimedia y pruebas de usuario.",
    tools: ["Arduino", "C++", "Sensores", "Electrónica", "Prototipado"],
    images: ["assets/img/portfolio/arduino-wand.jpg"],
    video: "assets/videos/App1.mp4",
    info: {
      "Categoría": "Interacción",
      "Tecnología": "Arduino",
      "Rol": "Desarrolladora",
      "Año": "2025"
    }
  },
  puredata: {
    title: "Comunicación OSC",
    subtitle: "Pure Data + Processing",
    description: "Sistema interactivo basado en la comunicación OSC entre Pure Data y Processing para sincronizar audio y gráficos en tiempo real.<br><br>El proyecto investiga la relación entre el procesamiento sonoro y la visualización interactiva.",
    objective: "Desarrollar una plataforma multimedia donde sonido e imagen respondan simultáneamente mediante comunicación en red.",
    role: "Programación de patches en Pure Data, comunicación OSC y desarrollo visual en Processing.",
    tools: ["Pure Data", "Processing", "OSC", "Audio", "Interacción"],
    images: ["assets/img/portfolio/puredata.png"],
    video: "assets/videos/App2.mp4",
    info: {
      "Categoría": "Desarrollo Interactivo",
      "Tecnologías": "Pure Data · Processing",
      "Rol": "Programadora",
      "Año": "2025"
    }
  },
  modelado3d: {
    title: "Modelado 3D",
    subtitle: "Autodesk Maya",
    description: "Colección de ejercicios y proyectos desarrollados en Autodesk Maya enfocados en modelado, iluminación, texturizado y renderizado de escenarios tridimensionales.<br><br>Incluye recreación de espacios arquitectónicos, props y ambientes estilizados.",
    objective: "Perfeccionar habilidades de modelado tridimensional para producción audiovisual y experiencias inmersivas.",
    role: "Modelado, UV Mapping, materiales, iluminación y render.",
    tools: ["Autodesk Maya", "Arnold", "Photoshop"],
    images: ["assets/img/portfolio/books-1.png", "assets/img/portfolio/books-2.png", "assets/img/portfolio/books-3.png"],
    info: {
      "Categoría": "Modelado 3D",
      "Software": "Autodesk Maya",
      "Rol": "Modeladora",
      "Año": "2024"
    }
  },
  editorial: {
    title: "Diseño Editorial",
    subtitle: "Comunicación Visual",
    description: "Desarrollo de materiales impresos y digitales como folletos, tarjetas de presentación, publicidad institucional y material corporativo.<br><br>Cada pieza fue diseñada siguiendo principios de identidad visual y comunicación efectiva.",
    objective: "Crear materiales gráficos funcionales que fortalezcan la comunicación visual de diferentes organizaciones.",
    role: "Diseño editorial, composición, preparación para impresión y adaptación digital.",
    tools: ["Illustrator", "InDesign", "Photoshop"],
    images: ["assets/img/portfolio/editorial.jpg", "assets/img/portfolio/product-3.png", "assets/img/portfolio/product2.png"],
    info: {
      "Categoría": "Diseño Editorial",
      "Servicios": "Diseño Gráfico",
      "Rol": "Diseñadora",
      "Año": "2025"
    }
  }
};

/* ==========================================================
   CARGA DINÁMICA DEL PROYECTO
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project = projects[projectId];

  if (project) {
    // Actualizar títulos de forma dinámica
    document.title = `${project.title} | Ingrid Oviedo`;
    document.getElementById("page-project-title").textContent = project.title;
    document.getElementById("page-project-subtitle").textContent = project.subtitle || "";
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").innerHTML = project.description;
    document.getElementById("project-objective").innerHTML = project.objective;
    document.getElementById("project-role").innerHTML = project.role;

    // MEJORA SEO: Cambiar la meta-descripción dinámicamente
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", `Caso de estudio: ${project.title}. ${project.subtitle}`);
    }

    // Cargar Información Lateral
    const infoList = document.getElementById("project-info");
    infoList.innerHTML = "";
    for (const key in project.info) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${key}</strong><br>${project.info[key]}`;
      infoList.appendChild(li);
    }

    // Cargar Badges de Herramientas
    const toolsContainer = document.getElementById("project-tools");
    toolsContainer.innerHTML = "";
    project.tools.forEach(tool => {
      const span = document.createElement("span");
      span.className = "badge bg-primary me-2 mb-2";
      span.textContent = tool;
      toolsContainer.appendChild(span);
    });

    // Cargar Galería (Vídeos e Imágenes)
    const gallery = document.getElementById("swiper-images");
    gallery.innerHTML = "";

    // Inyectar Video si existe
    if (project.video) {
      const videoSlide = document.createElement("div");
      videoSlide.className = "swiper-slide";
      videoSlide.innerHTML = `
        <video controls style="width:100%; border-radius:12px;">
          <source src="${project.video}" type="video/mp4">
        </video>`;
      gallery.appendChild(videoSlide);
    }

    // Inyectar Imágenes con Alt indexado (Accesibilidad)
    project.images.forEach((img, index) => {
      const imgSlide = document.createElement("div");
      imgSlide.className = "swiper-slide";
      imgSlide.innerHTML = `
        <a href="${img}" class="glightbox">
          <img src="${img}" class="img-fluid rounded shadow-sm" alt="${project.title} - Vista ${index + 1}">
        </a>`;
      gallery.appendChild(imgSlide);
    });

    // Inicializar componentes externos tras cargar el contenido
    GLightbox({ selector: '.glightbox' });

    new Swiper('.swiper', {
      speed: 700,
      loop: true,
      spaceBetween: 30,
      autoplay: { delay: 3500, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true }
    });

  } else {
    // Vista de Error si no encuentra el ID
    document.querySelector(".portfolio-details").innerHTML = `
      <div class="container text-center py-5">
        <i class="bi bi-folder-x display-1 text-danger"></i>
        <h2 class="mt-4">Proyecto no encontrado</h2>
        <p>El proyecto solicitado no existe o el enlace es incorrecto.</p>
        <a href="portfolio.html" class="btn btn-primary mt-3">Volver al Portafolio</a>
      </div>`;
  }

  // Inicializar Animaciones AOS
  AOS.init({ duration: 800, once: true });
});