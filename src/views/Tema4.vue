<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Modelo de negocio y contenido digital	
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img100.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El modelo de negocio es la forma en que una empresa crea, entrega y genera valor, definiendo qué ofrece, a quién se dirige y cómo obtiene beneficios. En el entorno digital, orienta la creación de contenido alineado con la propuesta de valor y los objetivos comerciales.
    p.mb-5 En este capítulo se explorará la relación entre el contenido y el modelo de negocio, la propuesta de valor, la definición de objetivos de comunicación y los criterios para analizar el contenido en función del modelo de negocio.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img101.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Relación entre contenido y modelo de negocio
                p El contenido digital es un medio para comunicar la propuesta de valor de la marca dentro del modelo de negocio. Cada publicación debe responder a lo que la empresa ofrece y a lo que el cliente necesita.
                p Esta relación permite:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Atraer clientes potenciales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Generar reconocimiento de marca.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Promover productos o servicios.
                p.mb-0 Cuando el contenido está alineado con el modelo de negocio, se logra mayor coherencia y efectividad en la comunicación digital.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img102.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Propuesta de valor
                p La propuesta de valor es el beneficio principal que una marca ofrece a sus clientes y que la diferencia de la competencia. Es el elemento central que guía la creación de contenido digital.
                p Para definir la propuesta de valor se debe considerar:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Qué problema soluciona el producto o servicio.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Qué beneficios ofrece.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Qué lo hace diferente.
                p.mb-0 Una propuesta de valor clara permite construir contenido enfocado y relevante para el público objetivo.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img103.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Definición de objetivos de comunicación
                p Los objetivos de comunicación establecen lo que se desea lograr con el contenido digital dentro del modelo de negocio.
                p Los principales son:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Atraer]: captar la atención del público.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Informar]: dar a conocer productos o servicios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Vender]: generar conversión.
                p.mb-0 
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img104.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Criterios para alinear contenido con el modelo de negocio
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 8.
                  span Criterios para analizar contenido con el modelo de negocio
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
                        td.ajuste-border-tabla.texto-left Beneficio principal de la marca
                        td.texto-left Define el contenido
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left Objetivo de comunicación
                        td.ajuste-border-tabla.texto-left Lo que se quiere lograr
                        td.texto-left Orienta el mensaje
                      tr
                        td.ajuste-border-tabla.texto-left Público objetivo
                        td.ajuste-border-tabla.texto-left A quién va dirigido
                        td.texto-left Define el estilo
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left Canal digital
                        td.ajuste-border-tabla.texto-left Medio de publicación
                        td.texto-left Ajusta formato
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Actividad práctica
    p.mb-5 Para afianzar los conocimientos adquiridos, se invita a realizar la siguiente actividad:
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
                | Establezca un objetivo de comunicación.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Defina el público objetivo.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Describa un contenido que esté alineado con el modelo de negocio.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img105.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Ejemplo" :icono="require('@/assets/curso/temas/img22.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Ejemplo
            p Marca: Ropa deportiva.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Propuesta de valor: comodidad y rendimiento.
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
                | Contenido: imagen de producto con mensaje motivacional.
            .caja-tema1-1
              p.mb-0 Mensaje: “Entrena con estilo y comodidad”
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img106.png', alt="" style="max-width: 450px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
