<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Construcción del contenido digital
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 El contenido digital es la información que una marca crea y comunica en medios digitales para transmitir su propuesta de valor, promocionar productos y generar interacción. Debe planificarse estratégicamente para atraer clientes, posicionar la marca y cumplir objetivos del negocio.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img41.png', alt='').m-auto
    p.mb-5 Seguidamente, se abordarán los niveles de relato, los arquetipos de marca, las líneas de comunicación, la definición del mensaje y los tipos de formatos en redes sociales.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img42.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Niveles de relato").ajuste-cajaAcordion
            p Los niveles de relato hacen referencia a la forma en que una marca comunica su mensaje a través del contenido digital.
            p Se pueden identificar tres niveles principales:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Nivel informativo]: comunica datos básicos del producto o servicio.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Nivel emocional]: busca generar conexión con el público.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Nivel persuasivo]: invita a la acción (comprar, seguir, interactuar).
          .row(titulo="Arquetipos de marca").ajuste-cajaAcordion
            p Los arquetipos de marca representan la personalidad que una empresa transmite a través de su comunicación. Estos ayudan a definir el tono, el estilo y el tipo de contenido que se crea.
            p Algunos ejemplos son:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b El explorador]: libertad, aventura.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b El cuidador]: confianza, cercanía.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b El héroe]: esfuerzo, superación.
            p.mb-3 Definir un arquetipo permite mantener coherencia en la comunicación digital.
          .row(titulo="Líneas de comunicación").ajuste-cajaAcordion
            p Las líneas de comunicación son los tipos de mensajes que una marca utiliza para interactuar con su público. Estas permiten organizar el contenido según su propósito.
            p Las principales son:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Informativa.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Educativa.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Promocional.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Emocional.
            p.mb-3 Estas líneas deben estar alineadas con el modelo de negocio y la estrategia de contenido.
          .row(titulo="Definición del mensaje de comunicación").ajuste-cajaAcordion
            p El mensaje de comunicación es la idea principal que la marca desea transmitir en cada contenido digital. Este debe ser claro, coherente y alineado con la propuesta de valor.
            p Para definir el mensaje se debe tener en cuenta:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El objetivo del contenido.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El público objetivo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El tipo de contenido.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El canal digital.
          .row(titulo="Tipos de formatos en redes sociales").ajuste-cajaAcordion
            p Los formatos determinan cómo se presenta el contenido:
            .row.align-items-center
              .col-xl-6.mb-4.mb-lg-0.ajuste-caja-acordion
                .caja-tema1-1.mb-2
                  p #[b #[i Post]:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Uso: mostrar producto. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Ventaja: alta visibilidad. 
                .caja-tema1-1.mb-0
                  p #[b #[i Reel]:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Uso: video corto.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Ventaja: mayor alcance. 
              .col-xl-6.ajuste-caja-acordion-1
                .caja-tema1-1.mb-2
                  p #[b Historia: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Uso: contenido rápido. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Ventaja: interacción. 
                .caja-tema1-1.mb-0
                  p #[b Carrusel:] 
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Uso: varias imágenes. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Ventaja: más información.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Desarrollo de tipos de contenido digital
    p.mb-5 La creación de contenido digital implica comprender el propósito de cada tipo de contenido y aplicar un proceso estructurado según objetivos como informar, vender o conectar. Su correcta implementación mejora la comunicación y optimiza los resultados en redes sociales.
    .caja-tema3.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img43.svg" style="max-width: 60px").m-auto
      .col
        h3 Creación de contenido informativo
    p.mb-5 En este pódcast se presentan las generalidades sobre la creación de contenido informativo.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema3-1(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img44.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Contenido informativo: fundamentos y práctica"
              :audio="require('@/assets/curso/podcast/podcast.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img45.png" ).m-auto
    p.mb-5 En el siguiente video se desarrollará un ejemplo de creación de contenido informativo. 
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SzJIbxMrbLY?si=OFff7Hnv81VPgxQa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Ejemplo de creación de contenido informativo.
    .caja-tema3.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img43.svg" style="max-width: 60px").m-auto
      .col
        h3 Creación de contenido promocional
    p.mb-5 El contenido promocional tiene como objetivo generar ventas o conversiones. Este tipo de contenido se centra en destacar los beneficios del producto o servicio y utiliza mensajes persuasivos para incentivar la acción del usuario. Las características, proceso y criterios de calidad son:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Características")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img46.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4 Características
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Enfoque comercial. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso de llamados a la acción (CTA). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Diseño atractivo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mensaje directo.
      .py-3.py-md-4(titulo="Proceso")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img47.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4 Proceso
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Definir el producto o servicio. 
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Identificar el beneficio principal. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Crear un mensaje llamativo. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Seleccionar una imagen atractiva. 
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Aplicar colores que generen contraste. 
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Insertar texto.  
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Agregar CTA.  
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Ajustar diseño. 
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Exportar.
      .py-3.py-md-4(titulo="Criterios de calidado")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img48.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4 Criterios de calidad
            .row.align-items-center.mb-3
              .col-xl-6.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-2
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Impacto: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: llama la atención. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: aumenta interacción. 
              .col-xl-6.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-2
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Claridad: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: mensaje directo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: facilita comprensión. 
            .row.align-items-center.mb-0
              .col-xl-6.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-2
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Persuasión: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: motiva acción. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: genera ventas. 
              .col-xl-6.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-2
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Diseño: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: visual atractivo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: mejora la conversión.
    p.mb-5 Dando continuidad de lo anterior, se desarrollará el siguente ejemplo de creación de contenido promocional:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema3-2(data-aos="fade-right")
          p #[b Ejemplo:]
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Producto]: crema facial hidratante.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Objetivo]: generar ventas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Canal]: Instagram.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Tipo de contenido]: promocional.
          p.mb-0 #[b Desarrollo:]
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img49.png', alt="" ).m-auto
    .bg-slider.mb-5
      .px-5
        .ajuste-slider-pasos(data-aos="zoom-in")
          PasosB.color-acento-contenido
            .row.align-items-center(titulo="Paso 1")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Definir el producto o servicio
                p Se selecciona el producto que se va a promocionar.
                p.mb-0 #[b Producto definido]: crema facial con ácido hialurónico. Es un producto claro, fácil de promocionar y enfocado en belleza y cuidado personal.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Paso 2")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Identificar el beneficio principal
                p Se define el valor que el producto ofrece al usuario.
                h5 Beneficio principal:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Hidrata la piel. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejora la elasticidad. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Reduce arrugas. 
                p.mb-0 Beneficio clave elegido: “#[b Hidratación y rejuvenecimiento de la piel]”.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img51.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Paso 3")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Crear un mensaje llamativo
                p Se construye una frase que capte la atención.
                h5 Mensaje: “Hidrata y rejuvenece tu piel”
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Corto.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Claro.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Atractivo.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Paso 4")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Seleccionar una imagen atractiva
                p Se elige una imagen que represente el producto.
                p Imagen utilizada:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mujer aplicando crema.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Piel limpia y brillante. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Producto visible. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Transmite resultado.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Genera confianza.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img53.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Paso 5")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Aplicar colores que generen contraste
                p Se seleccionan colores que destaquen el contenido.
                p Colores usados:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Verde: frescura y salud. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Dorado: calidad/#[i premium]. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Blanco: limpieza. 
                p.mb-0 Estos colores generan buen contraste y son atractivos visualmente.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img54.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Paso 6")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Insertar texto
                p Se agrega el contenido textual en la imagen.
                p Texto agregado:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Título principal. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Beneficios. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Nombre del producto. 
                p Ejemplo:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | “Firmeza y elasticidad”.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | “Efecto antiarrugas”.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Paso 7")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Agregar CTA (llamado a la acción)
                p Se incluye una instrucción para el usuario.
                p CTA:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Compra ahora! O ¡Pruébala hoy!]
                p.mb-0 Es directo e impulsa a la acción.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Paso 8")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Ajustar diseño
                p Se organiza todo visualmente.
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Alineación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tamaño del texto. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Distribución de elementos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Espacios.
                p Resultado:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Diseño limpio. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Fácil de leer. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Visualmente atractivo.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Paso 9")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Exportar
                p Se finaliza el contenido para publicación.
                p Configuración:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Formato: PNG. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tamaño: 1080 x 1080. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Calidad alta. 
                p.mb-0 Listo para: Instagram y Facebook.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 400px").m-auto
    .caja-tema3.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img43.svg" style="max-width: 60px").m-auto
      .col
        h3 Creación de contenido emocional
    p.mb-5 El contenido emocional busca generar una conexión con el público a través de sentimientos, experiencias o historias. Este tipo de contenido fortalece la relación entre la marca y el usuario. Sus características, proceso y criterio de calidad son:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Características")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/img59.png', alt="" ).m-auto
          .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
            h4 Características
            .caja-tema1-1
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso de #[i storytelling]. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Enfoque en experiencias. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Conexión emocional. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Baja promoción directa.
      .py-3.py-md-4(titulo="Proceso")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/img60.png', alt="" ).m-auto
          .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
            h4 Proceso
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Definir la emoción a transmitir. 
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Identificar una situación real. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Construir una historia breve. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Relacionar con el producto. 
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Diseñar imagen o video. 
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Agregar mensaje emocional. 
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Publicar.
      .py-3.py-md-4(titulo="Criterios de calidado")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/img61.png', alt="" ).m-auto
          .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
            h4 Criterios de calidad
            .row.align-items-center.mb-3
              .col-xl-6.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-2
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Conexión: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: genera emoción. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: fideliza. 
              .col-xl-6.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-2
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Autenticidad: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: realista. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: genera confianza. 
            .row.align-items-center.mb-0
              .col-xl-6.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-2
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Historia: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: narrativa clara. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: mejora la comprensión. 
              .col-xl-6.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-2
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Relación: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: vincula el producto. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: refuerza la marca.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema3-2.ajuste-tema3(data-aos="fade-right")
          p Sobre este tema se presentará el siguiente ejemplo:
          p #[b Ejemplo:]
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Producto]: café artesanal.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Objetivo]: generar conexión emocional. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Canal]: Instagram. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Tipo de contenido]: emocional.
          p.mb-0 #[b Desarrollo:]
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img62.png', alt="" ).m-auto
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img63.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 1. Definir la emoción a transmitir
                p #[b Emoción elegida:]
                p Tranquilidad y conexión personal
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Descanso.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Momentos propios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Bienestar.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 2. Identificar una situación real
                p #[b Situación:]
                p Una persona que después de un día largo se toma un momento para relajarse con una taza de café.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cotidiana.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Fácil de identificar.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Emocional.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 3. Construir una historia breve
                p #[b Historia:]
                p “Después de un día agitado, Laura encontró en una taza de café su momento de calma…”
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Genera conexión.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Transmite experiencia.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 4. Relacionar con el producto
                p #[b Relación:]
                p El café no es solo una bebida, es un momento personal.
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Enfoque emocional.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | No invasivo.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img67.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 5. Diseñar imagen o video
                p #[b Imagen ideal:]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Taza de café caliente. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ambiente cálido. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Luz suave. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Persona relajada.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img68.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 6. Agregar mensaje emocional
                p #[b Mensaje:]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | “Tu momento de calma empieza aquí”, o 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | “Más que café, es tu momento de calma”
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img69.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 7. Publicar
                p #[b #[i Copy] completo:]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | “Regálate un momento para ti  Disfruta cada pausa, cada instante #Momentos #Bienestar #Café #Relax”
    .caja-tema3.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img43.svg" style="max-width: 60px").m-auto
      .col
        h3 Comparación de tipos de contenido
    p.mb-5 Para identificar el objetivo y las características de cada tipo de contenido, se presenta la siguiente tabla.
    .row.justify-content-center
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 7.
          span Comparación de tipos de contenido
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Tipo
                th.ajuste-border-tabla.texto-left Objetivo
                th.texto-left Característica
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Informativo
                td.ajuste-border-tabla.texto-left Educar
                td.texto-left Claro y estructurado
              tr
                td.ajuste-border-tabla.texto-left Promocional
                td.ajuste-border-tabla.texto-left Vender
                td.texto-left Persuasivo
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Emocional
                td.ajuste-border-tabla.texto-left Conectar
                td.texto-left Experiencial
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Aplicación de la estrategia de contenido
    .bg-1
      .px-5
        p.mb-5 La aplicación de la estrategia de contenido consiste en llevar a la práctica lo planificado, asegurando que cada publicación cumpla con los objetivos definidos. Para aplicar la estrategia se debe:
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-0
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img70.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Seleccionar el tipo de contenido.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img70.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Definir el mensaje.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img70.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Elegir el canal digital.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img70.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Crear el contenido.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img70.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Publicar de manera adecuada.
        Separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Creación de imágenes para redes sociales (paso a paso)
        p.mb-5 Para crear imágenes para redes sociales, se deben seguir los siguientes pasos:
    .bg-carrusel.mb-5
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img72.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Definir el objetivo
                p.mb-0.text-center Establecer qué se desea lograr con la imagen, como informar, promocionar o generar interacción. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img73.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Identificar el producto o servicio
                p.mb-0.text-center Seleccionar el elemento que se va a comunicar en la pieza gráfica. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img74.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Seleccionar el canal digital
                p.mb-0.text-center Elegir la red social donde se publicará la imagen, teniendo en cuenta sus características. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img75.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Elegir el formato
                p.mb-0.text-center Definir el tipo de contenido, como post, historia o carrusel. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img76.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ingresar a una herramienta de diseño
                p.mb-0.text-center Acceder a una plataforma digital que permita crear la imagen. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img77.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Seleccionar plantilla o crear desde cero
                p.mb-0.text-center Escoger un diseño predeterminado o iniciar una composición propia. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img78.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Agregar imagen principal
                p.mb-0.text-center Incorporar el elemento visual que represente el contenido. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img79.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Aplicar colores corporativos
                p.mb-0.text-center Usar los colores de la marca para mantener coherencia visual. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img80.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Insertar texto
                p.mb-0.text-center Añadir el mensaje que acompañará la imagen. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img81.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ajustar tipografía y distribución
                p.mb-0.text-center Organizar los elementos visuales para lograr claridad y equilibrio. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img82.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Exportar la imagen
                p.mb-0.text-center Guardar el diseño en el formato adecuado para su publicación. 
        .row.justify-content-center
          .col-xl-6
            .caja-tema1-2.mb-0(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img20.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  p.mb-0 A continuación, se desarrollará un ejemplo práctico:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img83.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 1. Definir objetivo
                p.mb-0 Promocionar ropa deportiva para generar interés y ventas.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img84.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 2. Identificar el producto o servicio
                p.mb-0 Conjunto deportivo (#[i leggins +  top]).
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img85.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 3. Construir una historia breve
                p.mb-0 Instagram (contenido visual atractivo).
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img86.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 4. Relacionar con el producto
                p.mb-0 #[iPost] cuadrado (1:1), ideal para el #[i feed].
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img87.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 5. Diseñar imagen o video
                p.mb-0 Canva (u otra herramienta de diseño gráfico).
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img88.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 6. Agregar mensaje emocional
                p.mb-0 Se puede usar una plantilla #[i fitness] o diseño limpio.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img89.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 7. Publicar
                p Se selecciona una imagen:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Clara.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Atractiva.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Alineada con el producto.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img90.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 8. Aplicar colores corporativos
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Negro (base).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Blanco (texto principal).
                p.mb-0 Genera contraste y refuerza identidad.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img91.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 9. Insertar texto
                p Texto:
                p Rendimiento y comodidad en cada movimiento.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Clara.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Profesional.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Vende sin ser agresiva.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Conecta con el público.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img92.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 10. Ajustar tipografía y distribución
                p.mb-0 Se realiza ajustes en la tipografía y distribución del texto.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img93.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 11. Exportan la imagen
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Formato: JPG o PNG.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tamaño: 1080x1080 px.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Calidad alta.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Edición básica de video para redes sociales
    p.mb-5 Para realizar la edición básica de video para redes sociales, se realizan los siguientes pasos:
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .caja-tema3-2(data-aos="fade-right")
          p #[b Pasos]
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              |  Definir el objetivo del video.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Seleccionar el formato (Reel, TikTok, Short).
            li 
              .lista-ol--cuadro__vineta
                span 3
              |  Grabar #[i clips] cortos.
            li 
              .lista-ol--cuadro__vineta
                span 4
              |  Importar a herramienta de edición.
            li 
              .lista-ol--cuadro__vineta
                span 5
              |  Recortar #[i clips].
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Agregar texto.
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Incluir música.
            li 
              .lista-ol--cuadro__vineta
                span 8
              |  Ajustar duración (15–30 segundos).
            li 
              .lista-ol--cuadro__vineta
                span 9
              | Exportar video.
            li 
              .lista-ol--cuadro__vineta
                span 10
              | Publicar.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img94.png', alt="" ).m-auto
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Escritura de copies efectivos (#[i captions])
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        p El #[i copy] es el texto que acompaña la publicación y guía al usuario. Los pasos son:
        .row.align-items-center
          .col-xl-6.mb-4.mb-lg-0
            .caja-tema3-2.ajuste-tema3-1(data-aos="fade-right")
              p #[b Pasos]
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  |  Definir el objetivo.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Identificar el público.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Crear una frase llamativa.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Explicar el valor.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Agregar CTA (llamado a la acción).
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | 
                  p.mb-0 Incluir #[i hashtags].
          .col-xl-6
            p #[b Ejemplo]
            ul.fa-ul.estilo___ul.mb-4
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | “Entrena con comodidad y estilo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Descubre nuestra nueva colección.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Disponible ahora.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ##[i Fitness] #Entrenamiento”
            figure
              img(src='@/assets/curso/temas/img20.svg', alt='' style="width: 85px")
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img95.png', alt="" ).m-auto
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 #[i Storytelling] aplicado a redes sociales
    .bg-1
      .px-5
        .row.justify-content-center.align-items-center.mb-0
          .col-xl.mb-4.mb-lg-0
            p El #[i storytelling] permite contar historias para conectar emocionalmente.
            .row.align-items-center
              .col-xl-6.mb-4.mb-lg-0
                p #[b Pasos]
                ol.lista-ol--cuadro.mb-0
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    |  Definir el mensaje.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Identificar problema.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Mostrar solución.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Mostrar resultado.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Cerrar con CTA.
              .col-xl-6
                p #[b Ejemplo]
                ul.fa-ul.estilo___ul.mb-4
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | “Antes de entrenar, no encontraba ropa cómoda…”
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | “Ahora entreno con libertad y estilo”
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img96.png', alt="" ).m-auto
        Separador
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Aplicación práctica: creación de contenido completo
        p.mb-5 Para aplicar los conocimientos adquiridos, se invita a realizar el siguiente ejercicio:
    TabsB.color-acento-contenido(data-aos="zoom-in").mb-0
      .py-4.py-md-5(titulo="Actividad" :icono="require('@/assets/curso/temas/img21.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Actividad
            p Cree una publicación completa:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Diseñe una imagen o video.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Escriba el #[i  copy].
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Defina el canal digital.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Aplique #[i  storytelling].
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img97.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Ejemplo" :icono="require('@/assets/curso/temas/img22.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Ejemplo
            p Producto: ropa deportiva.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Imagen: personas entrenando.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[i Copy]: “Entrena con estilo”.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Canal: Instagram.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[i Storytelling]: comodidad y rendimiento.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img98.png', alt="" style="max-width: 450px").m-auto
    Separador
    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.8 Errores comunes en la creación de contenido visual
    p.mb-5 Estos son los errores más frecuentes:
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .caja-tema3-2.ajuste-tema3-2(data-aos="fade-right")
          p #[b Errores frecuentes]
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Texto ilegible. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mala calidad. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Saturación. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mal uso de colores. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Falta de jerarquía visual. 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img99.png', alt="" ).m-auto

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
