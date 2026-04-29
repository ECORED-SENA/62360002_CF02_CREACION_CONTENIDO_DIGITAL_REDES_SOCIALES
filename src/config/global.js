export default {
  global: {
    Name: 'Creación de contenido digital estratégico.',
    Description:
      'El componente formativo aborda el desarrollo de contenido digital aplicado a redes sociales, mediante el uso de herramientas tecnológicas, estrategias de comunicación, palabras clave y modelos de negocio, con el fin de fortalecer la presencia digital de una marca.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
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
        titulo: 'Herramientas digitales para la creación de contenido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación de herramientas digitales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Características, usos y selección de herramientas según el objetivo de comunicación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de herramientas digitales según su función',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aplicación de herramientas en la creación de contenido',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Criterios para la selección de herramientas digitales',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Aplicación práctica: creación de contenido digital',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contenido digital en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aplicación práctica: creación de calendarios de contenido',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Construcción de contenido digital',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios para definir el contenido digital',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Aplicación práctica: planificación de contenido digital',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Construcción del contenido digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Desarrollo de tipos de contenido digital',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aplicación de la estrategia de contenido',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Creación de imágenes para redes sociales (paso a paso)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Edición básica de video para redes sociales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Escritura de copies efectivos (<em>captions</em>)',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: '<em>Storytelling</em> aplicado a redes sociales',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Aplicación práctica: creación de contenido completo',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Errores comunes en la creación de contenido visual',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelo de negocio y contenido digital	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Actividad práctica',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Palabras clave y posicionamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Aplicación práctica: posicionamiento en redes sociales',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Aplicación de herramientas y contenido digital	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Aplicación práctica',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Evaluación del contenido digital',
            hash: 't_6_2',
          },
        ],
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
