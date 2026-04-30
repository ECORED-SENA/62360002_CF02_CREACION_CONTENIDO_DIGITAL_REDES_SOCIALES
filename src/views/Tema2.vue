<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Contenido digital en redes sociales
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 El contenido digital es la información que una marca crea y comunica en medios digitales para transmitir su propuesta de valor, promocionar productos y generar interacción. Debe planificarse estratégicamente para atraer clientes, posicionar la marca y cumplir objetivos del negocio.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img25.png', alt='').m-auto
    p.mb-5 En esta sección se estudiarán los tipos de contenido digital, la estrategia, el calendario de contenido, su estructura y los criterios para su planificación.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img26.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Tipos de contenido digital").ajuste-cajaAcordion
            p El contenido digital puede clasificarse según su origen y propósito en tres tipos principales:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Curaduría de contenido]: consiste en compartir información de otras fuentes, adaptándola al contexto de la marca. Se utiliza principalmente para informar o complementar contenido.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Contenido editorial]: es contenido que busca educar o aportar valor al público, fortaleciendo la relación con la audiencia.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Contenido de autoría]: es contenido original creado por la marca, enfocado en promocionar productos o servicios y generar conversión.
            p.mb-3 El uso adecuado de estos tipos de contenido permite mantener una comunicación equilibrada y alineada con los objetivos del modelo de negocio.
          .row(titulo="Estrategia de contenido digital").ajuste-cajaAcordion
            p La estrategia de contenido digital consiste en planificar el contenido que se va a crear, teniendo en cuenta la propuesta de valor, el público objetivo y los objetivos de comunicación.
            p Para que el contenido sea efectivo, debe responder a las siguientes preguntas:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué ofrece la marca?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿A quién va dirigido el contenido?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué se quiere lograr con la publicación?
            p.mb-3 Una estrategia bien definida permite que el contenido tenga un propósito claro y contribuya al cumplimiento de los objetivos del negocio.
          .row(titulo="Calendario de contenido digital").ajuste-cajaAcordion
            p El calendario de contenido digital es una herramienta de planificación que permite organizar las publicaciones que se realizarán en redes sociales durante un periodo determinado. Este calendario facilita la organización del contenido, evita la improvisación y permite mantener coherencia en la comunicación de la marca.
            p El uso de un calendario de contenido permite:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Planificar publicaciones con anticipación. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener frecuencia constante. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Organizar tipos de contenido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Alinear el contenido con los objetivos del negocio. 
            p #[b Beneficios del uso de un calendario de contenido: ]
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Permite mayor organización. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mejora la estrategia digital. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evita publicaciones improvisadas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilita el seguimiento del contenido. 
            p #[b Errores comunes en la planificación del contenido]
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No definir objetivos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Publicar sin frecuencia. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No variar el contenido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No considerar el público objetivo.
    .row.align-items-center.mb-0
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Estructura de un calendario de contenido").ajuste-cajaAcordion
            p Un calendario de contenido debe incluir los siguientes elementos:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fecha de publicación. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipo de contenido (imagen, video, historia). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tema o mensaje. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Canal digital. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Objetivo del contenido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 Palabras clave o #[i hashtags]. 
            p.mb-3 Esta estructura permite organizar el contenido de forma clara y estratégica.
          .row(titulo="Ejemplo de calendario de contenido").ajuste-cajaAcordion
            p En la siguiente tabla se presenta un ejemplo de calendario de contenido:
            .ajuste-tabla-acordion
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Ejemplo de calendario de contenido
              .tabla-a(data-aos="zoom-in").mb-3
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Fecha
                      th.ajuste-border-tabla.texto-left Tipo
                      th.ajuste-border-tabla.texto-left Contenido
                      th.ajuste-border-tabla.texto-left Canal
                      th.texto-left Objetivo
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Lunes
                      td.ajuste-border-tabla.texto-left Imagen
                      td.ajuste-border-tabla.texto-left Producto
                      td.ajuste-border-tabla.texto-left Instagram
                      td.texto-left Promocionar
                    tr
                      td.ajuste-border-tabla.texto-left Miércoles
                      td.ajuste-border-tabla.texto-left Video
                      td.ajuste-border-tabla.texto-left Uso del producto
                      td.ajuste-border-tabla.texto-left #[i TikTok]
                      td.texto-left Informar
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Viernes
                      td.ajuste-border-tabla.texto-left Historia
                      td.ajuste-border-tabla.texto-left Promoción
                      td.ajuste-border-tabla.texto-left Instagram
                      td.texto-left Vender
          .row(titulo="Criterios para la planificación del contenido").ajuste-cajaAcordion
            p Los criterios para la planificación del contenido son:
            .ajuste-tabla-acordion
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Criterios para la planificación del contenido
              .tabla-a(data-aos="zoom-in").mb-3
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Aplicación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left Frecuencia
                      td.ajuste-border-tabla.texto-left Cantidad de publicaciones
                      td.texto-left Mantiene visibilidad
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Variedad
                      td.ajuste-border-tabla.texto-left Diferentes tipos de contenido
                      td.texto-left Evita monotonía
                    tr
                      td.ajuste-border-tabla.texto-left Coherencia
                      td.ajuste-border-tabla.texto-left Relación con la marca
                      td.texto-left Refuerza identidad
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Objetivo
                      td.ajuste-border-tabla.texto-left Propósito del contenido
                      td.texto-left Orienta estrategia
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img27.png", alt="" ).m-auto
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Aplicación práctica: creación de calendarios de contenido
    p.mb-5 En el siguiente ejercicio, se aplicarán los conocimientos adquiridos sobre creación de calendario de contenido.
    TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-4.py-md-5(titulo="Actividad" :icono="require('@/assets/curso/temas/img21.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Actividad
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Defina una marca o emprendimiento. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Establezca 3 tipos de contenido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cree un calendario de publicaciones para una semana. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Defina el objetivo de cada publicación.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img23.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Ejemplo" :icono="require('@/assets/curso/temas/img22.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Ejemplo
            p #[b Marca]: tienda de ropa.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Ejemplo de calendario de contenido
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Día
                    th.ajuste-border-tabla.texto-left Contenido
                    th.ajuste-border-tabla.texto-left Tipo
                    th.texto-left Canal
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Lunes
                    td.ajuste-border-tabla.texto-left Nueva colección
                    td.ajuste-border-tabla.texto-left Imagen
                    td.texto-left Instagram
                  tr
                    td.ajuste-border-tabla.texto-left Miércoles
                    td.ajuste-border-tabla.texto-left Video <i>outfit</i>
                    td.ajuste-border-tabla.texto-left Video
                    td.texto-left <i>TikTok</i>
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Viernes
                    td.ajuste-border-tabla.texto-left Promoción
                    td.ajuste-border-tabla.texto-left Historia
                    td.texto-left Instagram
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img24.png', alt="" style="max-width: 450px").m-auto
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Construcción de contenido digital
    p.mb-5 Para estructurar contenido digital alineado con el modelo de negocio, se recomienda el siguiente proceso:
    .bg-carrusel
      .px-5
        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img32.svg' style="max-width: 90px").m-auto
                p.mb-0.text-center Identificar la propuesta de valor de la marca.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img33.svg' style="max-width: 90px").m-auto
                p.mb-0.text-center Definir el objetivo del contenido (atraer, informar o vender).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img34.svg' style="max-width: 90px").m-auto
                p.mb-0.text-center Identificar el público objetivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img35.svg' style="max-width: 90px").m-auto
                p.mb-0.text-center Seleccionar el canal digital adecuado.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img36.svg' style="max-width: 90px").m-auto
                p.mb-0.text-center Elegir el tipo de contenido (curaduría, editorial o autoría).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img37.svg' style="max-width: 90px").m-auto
                p.mb-0.text-center Definir el mensaje principal.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img38.svg' style="max-width: 90px").m-auto
                p.mb-0.text-center Establecer el formato del contenido (imagen, video, texto).
        Separador
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Criterios para definir el contenido digital
        p.mb-5 Los siguientes criterios permiten tomar decisiones adecuadas antes de crear el contenido digital.
    .row.justify-content-center
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span Criterios para definir el contenido digital 
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Criterio
                th.ajuste-border-tabla.texto-left Descripción
                th.texto-left Aplicación
            tbody
              tr
                td.ajuste-border-tabla.texto-left Propuesta de valor
                td.ajuste-border-tabla.texto-left Qué ofrece la marca
                td.texto-left Define el enfoque del contenido
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Objetivo
                td.ajuste-border-tabla.texto-left Qué se quiere lograr
                td.texto-left Orienta el mensaje
              tr
                td.ajuste-border-tabla.texto-left Público objetivo
                td.ajuste-border-tabla.texto-left A quién va dirigido
                td.texto-left Define el estilo
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Canal digital
                td.ajuste-border-tabla.texto-left Dónde se publica
                td.texto-left Ajusta el formato
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Aplicación práctica: planificación de contenido digital
    p.mb-5 En el siguiente ejercicio, se aplicarán los conocimientos adquiridos sobre cómo planificar contenido digital antes de su producción.
    TabsB.color-acento-contenido(data-aos="zoom-in").mb-0
      .py-4.py-md-5(titulo="Actividad" :icono="require('@/assets/curso/temas/img21.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Actividad
            p Desarrolle el siguiente ejercicio:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Defina un emprendimiento o marca.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Identifique la propuesta de valor.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Establezca un objetivo de contenido.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Defina el público objetivo.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Seleccione un canal digital.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Elija el tipo de contenido.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Defina el mensaje principal.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img39.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Ejemplo" :icono="require('@/assets/curso/temas/img22.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Ejemplo
            p Marca: emprendimiento de ropa deportiva.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Propuesta de valor: ropa cómoda y accesible.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Objetivo: promocionar producto.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Público: jóvenes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Canal: Instagram.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipo de contenido: autoría.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mensaje: “Comodidad y estilo para tu entrenamiento”.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img40.png', alt="" style="max-width: 450px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
