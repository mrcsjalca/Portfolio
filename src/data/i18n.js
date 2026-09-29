
// Este objeto centraliza las cadenas de texto en español (es), catalán (ca) e inglés (en).
// Cada clave (key) se corresponde con el atributo [data-i18n="clave"] en el HTML.
// Cuando el usuario hace clic en los botones de idioma, un script ligero recorre
// el DOM mediante document.querySelectorAll('[data-i18n]') y actualiza el contenido
// reactivamente sin necesidad de recargar la página ni utilizar frameworks pesados.

export const translations = {
  es: {
    // Navegación (Header)
    logo: "Marcos Jalca",
    sobremi: "Sobre mí",
    tecnologias: "Tecnologías",
    proyectos: "Proyectos",
    experiencia: "Experiencia",
    contacto: "Contacto",

    // Sección Hero
    heroTitle: "Marcos Jalca",
    heroSubtitle: "Estudiante de CFGS Desarrollo de Aplicaciones Multiplataforma (DAM) & Desarrollador Full-Stack",
    heroSubSubtitle: "Especializado en backend con Java, PHP (Symfony, Laravel), bases de datos SQL y entornos multiplataforma. Enfocado en código limpio, resolución de problemas y aprendizaje continuo",
    heroBadge: "Disponible para formación dual / prácticas",
    heroCtaProjects: "Ver Proyectos",
    heroCtaContact: "Contactar",

    // Sección Sobre Mí
    aboutTitle: "Sobre mí",
    aboutText: "Estudiante de CFGS Desarrollo de Aplicaciones Multiplataforma (DAM) en el INS Baix Camp (Reus). Construyo proyectos full-stack y de escritorio para dominar tecnologías modernas y preparar mi entrada al mercado laboral, con especial interés en contratos de formación dual y desarrollo de software empresarial.",
    aboutStatus: "Disponible para prácticas / contrato dual",
    aboutHighlightsEdu: "Estudiante DAM (2º curso)",
    aboutHighlightsLoc: "Reus, Tarragona",
    aboutHighlightsFocus: "Backend & Multiplataforma",

    //Sección Formacion
    extraTitle: "Formación Complementaria",

    // Sección Tecnologías (Skills)
    skillsTitle: "Tecnologías",
    filterAll: "Todas",
    filter_lang: "Lenguajes",
    filter_frameworks: "Frameworks",
    filter_db: "Bases de datos",
    filter_sys: "Sistemas y redes",
    filter_tools: "Herramientas",
    group_lang: "Lenguajes",
    group_frameworks: "Frameworks",
    group_db: "Bases de datos",
    group_sys: "Sistemas y redes",
    group_tools: "Herramientas",

    // Proyectos
    projectsTitle: "Proyectos Destacados",
    projectLowcostDesc: "Tienda online completa con pasarela de compra, carrito dinámico, gestión de roles de usuario y control de stock.",
    projectIncidenceDesc: "Sistema helpdesk full-stack para gestión, seguimiento y resolución de incidencias informáticas en tiempo real.",
    projectProveedoresDesc: "Aplicación empresarial para la gestión integral de proveedores y pedidos construida con Symfony 7 y arquitectura modular.",
    projectDungeonDesc: "Videojuego RPG de mazmorras con combate por turnos, sistema de inventario y arquitectura orientada a objetos (POO).",
    projectCodeBtn: "Código en GitHub",

    // Sección Experiencia y Formación
    expTitle: "Experiencia y Formación",
    expRubiconDate: "2024 - 2025",
    expRubiconRole: "Desarrollo de aplicaciones y soluciones empresariales",
    expRubicon1: "Desarrollo y mantenimiento de aplicaciones de gestión utilizando Velneo",
    expRubicon2: "Implementación de lógica de negocio, funciones y triggers en el backend",
    expRubicon3: "Desarrollo y optimización de funcionalidades adaptadas a las necesidades del cliente",
    expRubicon4: "Gestión avanzada de bases de datos relacionales dentro del entorno de desarrollo",
    expRubicon5: "Resolución de incidencias y mantenimiento evolutivo en entornos de producción",

    expBeepboxDate: "2023 - 2024",
    expBeepboxRole: "Técnico de soporte, sistemas y redes",
    expBeepbox1: "Instalación y configuración de sistemas operativos, software empresarial y periféricos",
    expBeepbox2: "Mantenimiento preventivo, diagnóstico y ensamblaje de equipos informáticos",
    expBeepbox3: "Resolución de incidencias críticas de hardware, conectividad y software",
    expBeepbox4: "Gestión de inventario informático, control de garantías y stock",

    expDamDate: "2024 - 2026 (En curso)",
    expDamRole: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    expDam1: "Formación especializada en Java (POO), arquitectura de software, bases de datos (SQL) y desarrollo móvil/multiplataforma",

    // Sección Contacto / Footer
    contactTitle: "Hablemos",
    contactSubtitle: "¿Tienes una propuesta laboral, proyecto o vacante de formación dual? Escríbeme y charlamos.",
    contactEmail: "Enviar un correo",
    copyright: "Todos los derechos reservados."
  },

  ca: {
    // Navegació (Header)
    logo: "Marcos Jalca",
    sobremi: "Sobre mi",
    tecnologias: "Tecnologies",
    proyectos: "Projectes",
    experiencia: "Experiència",
    contacto: "Contacte",

    // Secció Hero
    heroTitle: "Marcos Jalca",
    heroSubtitle: "Estudiant de CFGS Desenvolupament d'Aplicacions Multiplataforma (DAM) & Desenvolupador Full-Stack",
    heroSubSubtitle: "Especialitzat en backend amb Java, PHP (Symfony, Laravel), bases de dades SQL i entorns multiplataforma. Enfocat en codi net, resolució de problemes i aprenentatge continu",
    heroBadge: "Disponible per a formació dual / pràctiques",
    heroCtaProjects: "Veure Projectes",
    heroCtaContact: "Contactar",

    // Secció Sobre Mi
    aboutTitle: "Sobre mi",
    aboutText: "Estudiant del CFGS Desenvolupament d'Aplicacions Multiplataforma (DAM) a l'INS Baix Camp (Reus). Construeixo projectes full-stack i d'escriptori per dominar tecnologies modernes i preparar la meva entrada al mercat laboral, amb especial interès en contractes de formació dual i desenvolupament de programari empresarial.",
    aboutStatus: "Disponible per a pràctiques / contracte dual",
    aboutHighlightsEdu: "Estudiant DAM (2n curs)",
    aboutHighlightsLoc: "Reus, Tarragona",
    aboutHighlightsFocus: "Backend & Multiplataforma",

    //Secció Formacio
    extraTitle: "Formació complementària",

    // Secció Tecnologies (Skills)
    skillsTitle: "Tecnologies",
    filterAll: "Totes",
    filter_lang: "Llenguatges",
    filter_frameworks: "Frameworks",
    filter_db: "Bases de dades",
    filter_sys: "Sistemes i xarxes",
    filter_tools: "Eines",
    group_lang: "Llenguatges",
    group_frameworks: "Frameworks",
    group_db: "Bases de dades",
    group_sys: "Sistemes i xarxes",
    group_tools: "Eines",

    // Projectes
    projectsTitle: "Projectes Destacats",
    projectLowcostDesc: "Botiga online completa amb passarel·la de compra, carret dinàmic, gestió de rols d'usuari i control d'estoc.",
    projectIncidenceDesc: "Sistema helpdesk full-stack per a gestió, seguiment i resolució d'incidències informàtiques en temps real.",
    projectProveedoresDesc: "Aplicació empresarial per a la gestió integral de proveïdors i comandes construïda amb Symfony 7 i arquitectura modular.",
    projectDungeonDesc: "Videojoc RPG de masmorres amb combat per torns, sistema d'inventari i arquitectura orientada a objectes (POO).",
    projectCodeBtn: "Codi a GitHub",

    // Secció Experiència i Formació
    expTitle: "Experiència i Formació",
    expRubiconDate: "2024 - 2025",
    expRubiconRole: "Desenvolupament d'aplicacions i solucions empresarials",
    expRubicon1: "Desenvolupament i manteniment d'aplicacions de gestió utilitzant Velneo",
    expRubicon2: "Implementació de lògica de negoci, funcions i triggers al backend",
    expRubicon3: "Desenvolupament i optimització de funcionalitats adaptades a les necessitats del client",
    expRubicon4: "Gestió avançada de bases de dades relacionals dins de l'entorn de desenvolupament",
    expRubicon5: "Resolució d'incidències i manteniment evolutiu en entorns de producció",

    expBeepboxDate: "2023 - 2024",
    expBeepboxRole: "Tècnic de suport, sistemes i xarxes",
    expBeepbox1: "Instal·lació i configuració de sistemes operatius, programari empresarial i perifèrics",
    expBeepbox2: "Manteniment preventiu, diagnòstic i muntatge d'equips informàtics",
    expBeepbox3: "Resolució d'incidències crítiques de maquinari, connectivitat i programari",
    expBeepbox4: "Gestió d'inventari informàtic, control de garanties i estoc",

    expDamDate: "2024 - 2026 (En curs)",
    expDamRole: "CFGS Desenvolupament d'Aplicacions Multiplataforma",
    expDam1: "Formació especialitzada en Java (POO), arquitectura de software, bases de dades (SQL) i desenvolupament mòbil/multiplataforma",

    // Secció Contacte / Footer
    contactTitle: "Parlem-ne",
    contactSubtitle: "Tens una proposta laboral, projecte o vacant de formació dual? Escriu-me i en parlem.",
    contactEmail: "Enviar un correu",
    copyright: "Tots els drets reservats."
  },

  en: {
    // Navigation (Header)
    logo: "Marcos Jalca",
    sobremi: "About me",
    tecnologias: "Technologies",
    proyectos: "Projects",
    experiencia: "Experience",
    contacto: "Contact",

    // Hero Section
    heroTitle: "Marcos Jalca",
    heroSubtitle: "Multiplatform Application Development Student (DAM) & Full-Stack Developer",
    heroSubSubtitle: "Specialized in backend development using Java, PHP (Symfony, Laravel), SQL databases, and cross-platform environments. Focused on clean code, problem-solving, and continuous learning.",
    heroBadge: "Available for dual training / internship",
    heroCtaProjects: "View Projects",
    heroCtaContact: "Get in touch",

    // About Section
    aboutTitle: "About me",
    aboutText: "Vocational training student in Multiplatform Application Development (DAM) at INS Baix Camp (Reus). I build full-stack and desktop applications to master modern technologies and prepare for the job market, actively seeking dual training contracts and software development opportunities.",
    aboutStatus: "Available for internships / dual training",
    aboutHighlightsEdu: "DAM Student (2nd year)",
    aboutHighlightsLoc: "Reus, Spain",
    aboutHighlightsFocus: "Backend & Multiplatform",

    //Secció Formacio
    extraTitle: "Supplementary training",

    // Technologies Section (Skills)
    skillsTitle: "Technologies",
    filterAll: "All",
    filter_lang: "Languages",
    filter_frameworks: "Frameworks",
    filter_db: "Databases",
    filter_sys: "Systems & networking",
    filter_tools: "Tools",
    group_lang: "Languages",
    group_frameworks: "Frameworks",
    group_db: "Databases",
    group_sys: "Systems & networking",
    group_tools: "Tools",

    // Projects
    projectsTitle: "Featured Projects",
    projectLowcostDesc: "Full-featured e-commerce store with checkout gateway, dynamic cart, user role management, and stock control.",
    projectIncidenceDesc: "Full-stack helpdesk platform for real-time tracking, prioritization, and resolution of technical incidents.",
    projectProveedoresDesc: "Enterprise supplier and order management application built with Symfony 7 and modular architecture.",
    projectDungeonDesc: "Turn-based dungeon crawler RPG featuring dynamic combat, inventory system, and clean OOP architecture.",
    projectCodeBtn: "View on GitHub",

    // Experience Section
    expTitle: "Experience & Education",
    expRubiconDate: "2024 - 2025",
    expRubiconRole: "Business Application & Software Development",
    expRubicon1: "Development and maintenance of business management applications using Velneo",
    expRubicon2: "Backend implementation of business logic, procedures, and database triggers",
    expRubicon3: "Development and optimization of features tailored to client requirements",
    expRubicon4: "Relational database administration and data management inside the development environment",
    expRubicon5: "Issue troubleshooting and evolutionary maintenance in production environments",

    expBeepboxDate: "2023 - 2024",
    expBeepboxRole: "Systems, Support & Network Technician",
    expBeepbox1: "Installation and configuration of operating systems, enterprise software, and peripherals",
    expBeepbox2: "Preventive maintenance, diagnostics, and computer hardware assembly",
    expBeepbox3: "Troubleshooting critical hardware, software, and local network issues",
    expBeepbox4: "IT inventory management, warranty tracking, and stock control",

    expDamDate: "2024 - 2026 (In progress)",
    expDamRole: "Vocational Training — Multiplatform Application Development (DAM)",
    expDam1: "Specialized training in Java (OOP), software architecture, relational databases (SQL), and multiplatform development",

    // Contact Section / Footer
    contactTitle: "Let's talk",
    contactSubtitle: "Do you have a job offer, project, or dual training opportunity? Feel free to reach out.",
    contactEmail: "Send an email",
    copyright: "All rights reserved."
  }
};