export default {
  global: {
    Name: 'Valoración y manejo de sistemas productivos agroecológicos',
    Description:
      'El componente busca fortalecer habilidades para implementar sistemas agroecológicos sostenibles, adaptados al entorno ecológico, social y cultural. Promueve el manejo del suelo, agua, biodiversidad y plagas con prácticas locales. Fomenta huertas, policultivos y sistemas agroforestales tropicales. Se aplican indicadores del IPPTA para evaluar el desempeño productivo y ecológico, apoyando la transformación territorial y comunitaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Indicadores productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto, tipos y finalidad de los indicadores productivos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Indicadores productivos IPPTA',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Indicadores productivos evaluados en la herramienta IPPTA',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Algunas soluciones agroecológicas para mejorar la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Manejo agroecológico del suelo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Manejo agroecológico de cultivos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Manejo agroecológico de animales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Conservación de semillas nativas y criollas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de acompañamiento agroecológico',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Indicadores productivos',
      referencia:
        'FAO, MADR, ADR & Unión Europea en Colombia. (2024). Guía de transición a la agroecología para extensionistas y promotores rurales en Colombia. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).  ',
      tipo: 'Manual',
      link: 'https://www.fao.org/agroecology/database/detail/es/c/1711004/',
    },
    {
      tema: 'Indicadores productivos IPPTA',
      referencia:
        'Agencia de desarrollo rural (2024). Tutorial del Instrumento de Planificación Predial para la Transición Agroecológica - IPPTA. [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pE801QBON00',
    },
    {
      tema: 'Plan de acompañamiento agroecológico',
      referencia:
        'Marquet, P. A., Rojas, M., Stehr, A., Farías, L., González, H., Muñoz, J. C., Wagemann, E., Rojas, C., Rodriguez, I., y Hoyos, J. (2021). Soluciones basadas en la naturaleza. Comité Científico de Cambio Climático; Ministerio de Ciencia, Tecnología, Conocimiento e Innovación.',
      tipo: 'Libro',
      link:
        'https://minciencia.gob.cl/uploads/filer_public/93/91/93918289-c1de-4506-9e71-d787d2b603cb/soluciones_basadas_en_la_naturaleza.pdf',
    },
    {
      tema: 'Plan de acompañamiento agroecológico',
      referencia:
        'Labrador, J. (2008). Manejo del suelo en los sistemas de producción ecológica. Valencia, España.',
      tipo: 'Libro',
      link:
        'https://www.agroecologia.net/wp-content/uploads/2019/01/manual-suelos-jlabrador.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abonos verdes',
      significado:
        'cultivos sembrados para mejorar la fertilidad del suelo, fijar nitrógeno y proteger contra la erosión.',
    },
    {
      termino: 'Alelopatía',
      significado:
        'capacidad de ciertas plantas para liberar compuestos que afectan el crecimiento de otras especies, utilizada para control de arvenses y plagas.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'conjunto de prácticas que garantizan condiciones adecuadas de alojamiento, alimentación, sanidad y respeto por los ritmos naturales.',
    },
    {
      termino: 'Bioinsumos',
      significado:
        'preparados naturales elaborados en la finca para fertilización, control de plagas y mejora del suelo, reduciendo el uso de insumos químicos.',
    },
    {
      termino: 'Control biológico',
      significado:
        'uso de organismos benéficos para regular poblaciones de insectos y patógenos, favoreciendo el equilibrio natural.',
    },
    {
      termino: 'Diversidad de cultivos',
      significado:
        'variedad de especies vegetales presentes en el predio, incluyendo asociaciones, rotaciones y prácticas de descanso.',
    },
    {
      termino: 'Indicador productivo',
      significado:
        'herramienta que permite observar, medir y valorar aspectos del sistema productivo, como diversidad, manejo del suelo, integración animal-cultivo y autonomía.',
    },
    {
      termino: 'Pastoreo rotacional',
      significado:
        'práctica que alterna el uso de parcelas para evitar sobrepastoreo y regenerar la cobertura vegetal.',
    },
    {
      termino: 'Rotación de cultivos',
      significado:
        'alternancia planificada de especies en el mismo terreno para mejorar la fertilidad y romper ciclos de plagas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Avella Muñoz, A., Garzón Fierro, E. M., Páez Díaz, M. J., y Ordosgoitia, D. (2022). Restauración ecológica: principios y prácticas. Ministerio de Ambiente y Desarrollo Sostenible de Colombia-Fundación Natura.',
      link:
        'https://natura.org.co/publicaciones/cartilla-restauracion-ecologica-principios-y-practicas-fundacion-natura/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), Ministerio de Agricultura y Desarrollo Rural (MADR), Agencia de Desarrollo Rural (ADR) y Unión Europea en Colombia. (2023). Guía de transición a la agroecología para extensionistas y promotores rurales en Colombia. FAO. ',
      link: 'https://www.fao.org/agroecology/database/detail/es/c/1711004/',
    },
    {
      referencia:
        'Gallego, S. (2019). Análisis de indicadores de sustentabilidad agroecológica en pequeños ganaderos de Primavera Vichada. ',
      link: 'https://ridum.umanizales.edu.co/handle/20.500.12746/3508',
    },
    {
      referencia:
        'Lozano, F. H. (2009). Herramientas de manejo para la conservación de biodiversidad en paisajes rurales. ',
      link: 'http://hdl.handle.net/20.500.12324/13044',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS). (2012). Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos (PNGIBSE).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS). (2024). Estrategia nacional de restauración 2023–2026: Juntos para recuperar la naturaleza perdida.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2025/03/ENR_3032024-3.pdf',
    },
    {
      referencia:
        'Martínez, R. Q. (2009). Guía metodológica para desarrollar indicadores ambientales y de desarrollo sostenible en países de América Latina y el Caribe.',
      link:
        'https://www.cepal.org/sites/default/files/courses/files/8_manual-61-cepal_formatoserie_color.pdf',
    },
    {
      referencia:
        'Prieto, J. (2024). Diseño hidrológico con línea clave para el trópico: Fundamentos para el manejo del agua y suelo en cambio climático. Secretaría Metropolitana de Ambiente de Quito y Corporación ECOPAR.',
      link: '',
    },
    {
      referencia:
        'Raudes, M., y Sagastume, N. (2009). Manual de conservación de suelos. Programa para la Agricultura Sostenible en Laderas de América Central, Carrera de Ciencia y Producción Agropecuaria, Escuela Agrícola Panamericana, El Zamorano. ',
      link: '',
    },
    {
      referencia:
        'Silva-Santamaría, L., y Ramírez-Hernández, O. (2017). Evaluación de agroecosistemas mediante indicadores de sostenibilidad en San José de las Lajas, provincia de Mayabeque, Cuba. Luna Azul, 44, 120–152. ',
      link: '',
    },
    {
      referencia:
        'Varela, M. V. (2010). Evaluación de sistemas de producción agroecológicos incorporando indicadores de sostenibilidad en la sabana de Bogotá. ',
      link: 'https://repositorio.unal.edu.co/handle/unal/11399',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Alava Arevalo',
          cargo: 'Instructor técnico',
          centro:
            'Centro Internacional de Producción Limpia Lope - Regional Nariño',
        },
        {
          nombre: 'Gonzalo Cardona',
          cargo: 'Coordinador Colombia',
          centro: 'Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Pablo Aguirre',
          cargo: 'Coordinador',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) - Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Jenny Gómez',
          cargo: 'Asistente técnica',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) - Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Roger Garcia',
          cargo: 'Consultor',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) - Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
