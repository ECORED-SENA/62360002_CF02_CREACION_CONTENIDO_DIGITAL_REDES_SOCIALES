<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Aplicación de herramientas y contenido digital	
    p.mb-5 En el marco de esta temática, se profundizará en la aplicación integrada del contenido digital, el proceso de creación, los criterios para su evaluación y la evaluación del contenido digital.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img110.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Aplicación integrada del contenido digital").ajuste-cajaAcordion
            p La aplicación del contenido digital consiste en integrar todos los elementos trabajados durante el componente formativo para desarrollar una publicación completa alineada con el modelo de negocio.
            p En esta etapa se combinan:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Propuesta de valor.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Objetivo de comunicación.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Tipo de contenido.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Canal digital.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Herramientas digitales.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Palabras clave y #[i hashtags].
            p.mb-3 Esta integración permite que el contenido sea coherente, estratégico y funcional dentro del entorno digital.
          .row(titulo="Proceso aplicado de creación de contenido digital").ajuste-cajaAcordion
            p.mb-3 Para desarrollar contenido digital de forma práctica, se recomienda el siguiente proceso:
            ol.lista-ol--cuadro.mb-3
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Definir la propuesta de valor.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Establecer el objetivo del contenido.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Identificar el público objetivo.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Seleccionar el canal digital.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Elegir el tipo de contenido.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Crear la pieza digital (imagen o video).
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Redactar el mensaje (#[i copy]).
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Agregar palabras clave y #[i hashtags].
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Publicar el contenido.
            p.mb-3 Este proceso permite llevar la estrategia a la práctica de manera organizada.
          .row(titulo="Criterios para evaluar el contenido digital").ajuste-cajaAcordion
            .ajuste-tabla-acordion
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Criterios para evaluar el contenido digital
              .tabla-a(data-aos="zoom-in").mb-3
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Aplicación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Coherencia
                      td.ajuste-border-tabla.texto-left Relación con la marca
                      td.texto-left Refuerza identidad
                    tr
                      td.ajuste-border-tabla.texto-left Claridad
                      td.ajuste-border-tabla.texto-left Mensaje fácil de entender
                      td.texto-left Mejora comprensión
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Impacto
                      td.ajuste-border-tabla.texto-left Capacidad de atraer atención
                      td.texto-left Aumenta interacción
                    tr
                      td.ajuste-border-tabla.texto-left Adaptación
                      td.ajuste-border-tabla.texto-left Ajuste al canal digital
                      td.texto-left Mejora visualización
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Resultados
                      td.ajuste-border-tabla.texto-left Nivel de interacción
                      td.texto-left Evalúa efectividad
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Aplicación práctica
    p.mb-5 En el siguiente ejercicio, se aplicarán los conocimientos adquiridos sobre la presente temática.
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
                | Defina una marca o emprendimiento.
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
                | Seleccione el canal digital.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Cree una pieza de contenido (imagen o video).
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | 
                p.mb-0 Escriba el  #[i  copy].
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | 
                p.mb-0 Agregue <i>hashtags</i>.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img111.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Ejemplo" :icono="require('@/assets/curso/temas/img22.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Ejemplo
            p #[b Marca]: emprendimiento de accesorios hechos a mano.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Propuesta de valor: productos únicos y personalizados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Objetivo: promocionar producto.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Público: jóvenes y adultos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Canal: Instagram.
            .caja-tema1-1
              p.mb-0 #[b Contenido]: imagen de producto artesanal.
              p.mb-0 #[b #[i Hashtags]]: “Diseños únicos hechos a mano”.
              p.mb-0 #[b #[i Hashtags]]: #HechoAMano #Accesorios #Emprendimiento.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img112.png', alt="" style="max-width: 450px").m-auto
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Evaluación del contenido digital
    .ajuste-tema6
      .bg-1
        .px-5
          p.mb-5 Después de publicar el contenido, es importante analizar su rendimiento. Se pueden evaluar aspectos como:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-tema1.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/img113.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Alcance.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-tema1.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/img114.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Interacción.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-tema1.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/img115.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Comentarios.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-tema1.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/img116.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Nivel de respuesta del público.
          p.mb-0.text-center Este análisis permite mejorar la creación de contenido en futuras publicaciones.
          br
          br

</template>

<script>
export default {
  name: 'Tema6',
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
