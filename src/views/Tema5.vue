<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Palabras clave y posicionamiento
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 Las palabras clave son términos que facilitan que los usuarios encuentren contenido en medios digitales. Su uso estratégico mejora la visibilidad, el alcance y la interacción, al conectar el contenido con los intereses del público objetivo y fortalecer la presencia digital de la marca.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img107.png', alt='').m-auto
    p.mb-5 En relación con esta temática, se profundizará en conocer los tipos de palabras clave, el uso de #[i hashtags], el posicionamiento en redes sociales, la aplicación de palabras clave en el contenido digital y los criterios para el uso de palabras clave y posicionamiento.
    .row.justify-content-center
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Tipos de palabras clave").ajuste-cajaAcordion
            p.mb-3 Las palabras clave pueden clasificarse según su función dentro del contenido digital:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Palabras clave generales]: son términos amplios relacionados con un tema (ejemplo: deporte, comida, educación).
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Palabras clave específicas]: describen con mayor detalle un producto o servicio (ejemplo: ropa deportiva para gimnasio, comida saludable casera).
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Palabras clave de intención]: indican una acción o necesidad del usuario (ejemplo: comprar, aprender, mejorar).
          .row(titulo="Uso de <em>hashtags</em>").ajuste-cajaAcordion
            p Los #[i hashtags] son etiquetas utilizadas en redes sociales para clasificar y agrupar contenido bajo un mismo tema. Estos permiten que las publicaciones sean encontradas por usuarios interesados en temas específicos.
            p El uso adecuado de #[i hashtags] permite:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Aumentar la visibilidad del contenido.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Llegar a nuevas audiencias.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Mejorar el posicionamiento en redes sociales.
          .row(titulo="Posicionamiento en redes sociales").ajuste-cajaAcordion
            p.mb-3 El posicionamiento en redes sociales hace referencia a la capacidad que tiene una marca o contenido para ser visible y reconocido por los usuarios dentro de las plataformas digitales. Este posicionamiento depende de factores como el uso adecuado de palabras clave, #[i hashtags], calidad del contenido y nivel de interacción con la audiencia.
          .row(titulo="Factores que influyen en el posicionamiento").ajuste-cajaAcordion
            p.mb-3 El posicionamiento en redes sociales se ve influenciado por los siguientes elementos:
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Uso de palabras clave]: permite que el contenido sea encontrado fácilmente.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Uso de #[i hashtags]]: facilita la clasificación del contenido.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Calidad del contenido]: imágenes y videos atractivos generan mayor interacción.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Frecuencia de publicación]: mantener constancia mejora la visibilidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Interacción con usuarios]: comentarios, #[i likes] y compartidos aumentan el alcance.
          .row(titulo="Aplicación de palabras clave en el contenido digital").ajuste-cajaAcordion
            p Las palabras clave deben integrarse de forma estratégica dentro del contenido digital para mejorar su visibilidad. Estas no solo se utilizan en los textos, sino también en los elementos que acompañan la publicación.
            p Se recomienda aplicar las palabras clave en:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | El #[i copy] o descripción de la publicación.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Los títulos o mensajes principales.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Los #[i hashtags].
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | El nombre del contenido (cuando aplica).
          .row(titulo="Criterios para el uso de palabras clave y posicionamiento").ajuste-cajaAcordion
            .row.align-items-center.mb-2
              .col-xl-6.mb-4.mb-lg-0.ajuste-caja-acordion
                .caja-tema1-1.mb-2
                  p #[b Relevancia: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: relación con el contenido. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      |  Aplicación: mejora el alcance. 
                .caja-tema1-1.mb-0
                  p #[b Claridad: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: fácil comprensión. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      |  Aplicación: evita confusión. 
              .col-xl-6.ajuste-caja-acordion-1
                .caja-tema1-1.mb-2
                  p #[b Intención: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: necesidad del usuario. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: mejora los resultados. 
                .caja-tema1-1.mb-0
                  p #[b Cantidad: ] 
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      |  Descripción: uso moderado. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aplicación: evita saturación. 
            .row.align-items-center
              .col-xl-6.mb-4.mb-lg-0.ajuste-caja-acordion
                .caja-tema1-1.mb-2
                  p #[b Coherencia: ]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Descripción: relación con la marca. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      |  Aplicación: refuerza la identidad.  
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Aplicación práctica: posicionamiento en redes sociales
    p.mb-5 Se invita a realizar la siguiente actividad práctica sobre posicionamiento en redes sociales:
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
                | Defina un producto o servicio.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Identifique palabras clave principales.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Defina palabras clave secundarias.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Seleccione #[i hashtags] adecuados.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Construya una publicación aplicando estos elementos.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img108.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Ejemplo" :icono="require('@/assets/curso/temas/img22.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Ejemplo
            p #[b Producto]: servicio de entrenamiento personalizado.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Palabra clave principal: entrenamiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Palabras secundarias: fitness, ejercicio, salud.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[i Hashtags]: #Entrenamiento #Fitness #VidaSaludable.
            .caja-tema1-1
              p.mb-0 #[b Publicación:]
              p.mb-0 “Mejora tu rendimiento con entrenamiento personalizado #Entrenamiento #Fitness #VidaSaludable”
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img109.png', alt="" style="max-width: 450px").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
