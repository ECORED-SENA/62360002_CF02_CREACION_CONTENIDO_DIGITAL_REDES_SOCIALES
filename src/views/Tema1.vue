<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Herramientas digitales para la creación de contenido
    p.mb-5 Las herramientas digitales son aplicaciones o plataformas que permiten crear, editar y publicar contenido como imágenes, videos y textos en medios digitales. Su uso en el marketing digital optimiza la producción de contenido, mejora su calidad y facilita la comunicación con el público, contribuyendo a estrategias más eficientes y alineadas con los objetivos de la marca.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Clasificación de herramientas digitales
    .bg-1
      .px-5
        p.mb-5 Acto seguido, se procederá a analizar la importancia de la marca en el entorno digital:
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img2.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Herramientas de diseño gráfico
                p.mb-0.text-center Permiten crear imágenes, piezas visuales y publicaciones.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img3.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Herramientas de edición de video
                p.mb-0.text-center Permiten producir contenido audiovisual.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img4.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Herramientas de gestión de redes sociales
                p.mb-0.text-center Permiten programar y administrar publicaciones.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img5.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Herramientas de análisis
                p.mb-0.text-center Permiten medir resultados e interacción.
        p.mb-0.text-center Esta clasificación permite identificar qué tipo de herramienta utilizar según el contenido que se desea desarrollar.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Características, usos y selección de herramientas según el objetivo de comunicación
    p.mb-5 Continuando con el análisis, es importante conocer las características de las herramientas digitales, sus usos y cómo seleccionarlas según el objetivo de comunicación; estas se son:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Características
                p Las herramientas digitales se caracterizan por:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ser accesibles. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ser intuitivas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ser adaptables a diferentes necesidades de comunicación. 
                p.mb-0 Estas herramientas permiten crear contenido visual atractivo, mejorar la presentación de la información y facilitar la interacción con los usuarios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Usos
                p Entre sus principales usos se encuentran:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Diseño de publicaciones para redes sociales. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Edición de contenido audiovisual. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Programación de contenido. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Análisis de resultados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Selección de herramientas según el objetivo de comunicación
                p.mb-0 La selección de herramientas digitales debe responder al objetivo de comunicación, el tipo de contenido y el público objetivo. Elegir correctamente permite optimizar la creación de contenido y mejorar los resultados de la estrategia digital.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Tipos de herramientas digitales según su función
    p.mb-5 Las herramientas digitales se clasifican según su función en el proceso de producción, lo que permite seleccionar la más adecuada según el tipo de contenido a desarrollar. Entre las principales categorías se encuentran:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Herramientas de diseño gráfico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img10.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Herramientas de diseño gráfico
            p Permiten crear contenido visual como imágenes, publicaciones y piezas gráficas.
            .caja-tema1-1.mb-3
              h5 Ejemplos:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Canva.]
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Photoshop. ]
            .caja-tema1-1.mb-0
              h5 Uso:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Diseño de #[i posts]. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Historias. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Banners.]
      .py-3.py-md-4(titulo="Herramientas de edición de video")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img11.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Herramientas de edición de video
            p Permiten crear y editar contenido audiovisual.
            .caja-tema1-1.mb-3
              h5 Ejemplos:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i CapCut.]
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Inshot.]
            .caja-tema1-1.mb-0
              h5 Uso:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Reels.]
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i TikTok.]
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Videos promocionales.
      .py-3.py-md-4(titulo="Herramientas de gestión de redes sociales")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img12.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Herramientas de gestión de redes sociales
            .caja-tema1-1.mb-3
              h5 Ejemplos:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Meta Business Suite.]
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Hootsuite.]
            .caja-tema1-1.mb-0
              h5 Uso:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Programar contenido.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Responder mensaje.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Analizar métricas.
      .py-3.py-md-4(titulo="Herramientas de análisis ")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img13.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Herramientas de análisis 
            .caja-tema1-1.mb-0
              h5 Uso:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Analizar alcance.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Medir interacción.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evaluar resultados.
    p.mb-5.text-center Para mayor comprensión sobre el uso de las herramientas digitales, se presenta la siguiente tabla comparativa:
    .row.justify-content-center.mb-0
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Comparación de herramientas digitales
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Herramienta
                th.ajuste-border-tabla.texto-left Tipo
                th.ajuste-border-tabla.texto-left Uso principal
                th.texto-left Nivel
            tbody
              tr
                td.ajuste-border-tabla.texto-left #[i Canva]
                td.ajuste-border-tabla.texto-left Diseño
                td.ajuste-border-tabla.texto-left Crear imágenes
                td.texto-left Básico
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[i Photoshop]
                td.ajuste-border-tabla.texto-left Diseño
                td.ajuste-border-tabla.texto-left Edición profesional
                td.texto-left Avanzado
              tr
                td.ajuste-border-tabla.texto-left #[i CapCut]
                td.ajuste-border-tabla.texto-left Video
                td.ajuste-border-tabla.texto-left Edición rápida
                td.texto-left Básico
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[i Meta Business]
                td.ajuste-border-tabla.texto-left Gestión
                td.ajuste-border-tabla.texto-left Programación
                td.texto-left Intermedio
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Aplicación de herramientas en la creación de contenido
    p.mb-5 La aplicación de herramientas digitales permite transformar ideas en contenido visual para redes sociales, facilitando su diseño, edición y publicación, y optimizando el proceso de producción digital. Para aplicar correctamente una herramienta digital en la creación de contenido, se recomienda seguir el siguiente procedimiento:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n").mb-5
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Definir el objetivo del contenido
              p.mb-0 Es informar, promocionar o educar.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img14.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img15.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Seleccionar la herramienta digital
              p.mb-0 Se selecciona la herramienta adecuada, según el tipo de contenido.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Elegir el formato de publicación
              p.mb-0 Puede ser imagen, video, carrusel, historia.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img16.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img17.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Diseñar
              p.mb-0 Es elaborar el contenido utilizando la herramienta seleccionada.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Revisar
              p.mb-0 Es revisar el contenido antes de su publicación.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img18.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img19.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Publicar
              p.mb-0 Es publicar en el canal digital correspondiente.
        .caja-tema1-2.mb-0(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img20.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              p.mb-0 Este proceso permite desarrollar contenido digital de manera organizada y alineada con la estrategia de comunicación de la marca.
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Criterios para la selección de herramientas digitales
    p.mb-5 Dada su importancia, a continuación se presentan, en forma de tabla, los criterios para la aplicación de herramientas digitales.
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Criterios para la aplicación de herramientas digitales
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Criterio
                th.ajuste-border-tabla.texto-left Descripción
                th.texto-left Aplicación
            tbody
              tr
                td.ajuste-border-tabla.texto-left Objetivo
                td.ajuste-border-tabla.texto-left Definir qué se quiere lograr
                td.texto-left Orienta el tipo de contenido
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Tipo de contenido
                td.ajuste-border-tabla.texto-left Imagen, video o texto
                td.texto-left Determina la herramienta
              tr
                td.ajuste-border-tabla.texto-left Público objetivo
                td.ajuste-border-tabla.texto-left Características de la audiencia
                td.texto-left Define el estilo del contenido
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Canal digital
                td.ajuste-border-tabla.texto-left Red social donde se publica
                td.texto-left Adapta el formato
        .caja-tema1-3(data-aos="flip-up")
          p.mb-0 Estos criterios permiten aplicar correctamente las herramientas digitales según las necesidades de la estrategia de contenido.
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Aplicación práctica: creación de contenido digital
    p.mb-5 Para poner en práctica los conocimientos adquiridos, se invita a que se realice la siguiente actividad de análisis sobre marca digital:
    TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-4.py-md-5(titulo="Actividad" :icono="require('@/assets/curso/temas/img21.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Actividad
            p Realice el siguiente ejercicio:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Defina un objetivo de comunicación (ejemplo: promocionar un producto).
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Seleccione una herramienta digital.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Defina el tipo de contenido que va a crear.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Identifique el público objetivo.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Seleccione un canal digital.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Describa cómo diseñaría la publicación.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Describa cómo adaptaría el contenido al canal seleccionado.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img23.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Ejemplo" :icono="require('@/assets/curso/temas/img22.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Ejemplo
            p #[b Objetivo]: promocionar un producto.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Herramienta: #[i Canva].
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipo de contenido: imagen tipo post.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Público: jóvenes entre 18 y 30 años.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Canal digital: Instagram.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Adaptación: diseño cuadrado, texto corto uso de colores corporativos y una imagen representativa.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aplicación: publicación en redes sociales con información del servicio.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img24.png', alt="" style="max-width: 450px").m-auto
    .row.justify-content-center
      .col-xl-10
        .caja-tema1-2.mb-0(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img20.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              p.mb-0 Este ejercicio permite comprender cómo aplicar herramientas digitales considerando el canal donde se publicará el contenido.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
