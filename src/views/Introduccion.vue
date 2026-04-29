<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El presente componente formativo, titulado Creación de contenido digital estratégico, tiene como propósito desarrollar en el aprendiz las competencias necesarias para diseñar y estructurar contenido digital orientado a redes sociales, en coherencia con los objetivos del modelo de negocio y las estrategias de mercadeo digital. 
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En un entorno digital altamente competitivo, la generación de contenido se convierte en un elemento clave para posicionar marcas, atraer audiencias y fortalecer la comunicación con el público objetivo. Por ello, este componente aborda el uso de herramientas digitales, la planificación del contenido, la construcción de mensajes y la aplicación de palabras clave como elementos fundamentales dentro de una estrategia de contenido efectiva. 
    p.mb-0 A lo largo del documento, se presentan conceptos, procesos y actividades prácticas que permiten al aprendiz comprender cómo crear contenido informativo, promocional y emocional, así como su articulación con el modelo de negocio y los canales digitales. De esta manera, se busca fomentar la creación de contenido estratégico, coherente y alineado con las necesidades del entorno digital actual.

</template>

<script>
export default {
  name: 'Introduccion',
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
