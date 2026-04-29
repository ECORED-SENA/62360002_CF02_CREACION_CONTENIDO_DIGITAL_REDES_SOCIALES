<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Análisis y aplicación del contenido digital estratégico.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar los conocimientos del aprendiz en la creación de contenido digital, incluyendo el uso de herramientas, tipos de contenido, estrategias de comunicación y posicionamiento en redes sociales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Usted analiza una publicación que enseña cómo usar un producto. ¿Qué tipo de contenido está observando?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informativo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Emocional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promocional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una marca publica: “Compra ahora con 20% de descuento”. ¿Qué tipo de contenido es?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Emocional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promocional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Educativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Usted observa un video en el que un cliente cuenta su experiencia con un producto. ¿Qué tipo de contenido es?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Emocional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Promocional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Informativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es el objetivo principal del contenido promocional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informar bien.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar ventas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Educar muy bien.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entretener bien.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Usted desea generar conexión con su audiencia. ¿Qué tipo de contenido debe utilizar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promocional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Emocional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Si su objetivo es educar al usuario. ¿Qué tipo de contenido es más adecuado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informativo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Promocional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Emocional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Usted diseña una publicación. ¿Qué elemento ayuda a mejorar su efectividad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imagen llamativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mensaje claro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Llamado a la acción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Todas las anteriores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué sucede si una publicación no tiene coherencia entre imagen y mensaje?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora la intención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Genera confusión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumenta ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejora el diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Usted quiere aumentar la visibilidad de una publicación. ¿Qué recurso debe utilizar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hashtags.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué herramienta digital es adecuada para diseñar contenido visual?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Excel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Canva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Task.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Notas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Usted genera una acción en el usuario. ¿Qué debe incluir en la publicación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Llamado a la acción (CTA).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precio del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicación generalizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cliente o usuario activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué ocurre cuando se combinan contenido informativo y promocional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se pierde el o los objetivos previstos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se crea una estrategia más efectiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se reduce el alcance y objetivo final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se elimina el mensaje por errores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Usted analiza una publicación con consejos útiles. ¿Qué objetivo tiene?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vender.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Descontar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Informar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué elemento permite mejorar el alcance del contenido?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hashtags.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Usted crea contenido para redes sociales. ¿Qué debe definir primero?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El público objetivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El tipo de contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La plataforma inicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las herramientas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué tipo de contenido busca generar emociones en el usuario?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promocional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Emocional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué elemento permite organizar la estrategia de contenido?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calendario de contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Establecer el precio fijo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cliente final interesado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El producto para la venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Usted desea crear contenido en video. ¿Qué herramienta puede utilizar?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CapCut.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Excel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Word.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calculadora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué ocurre cuando el contenido está alineado con el público objetivo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuye el alcance.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora la efectividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reduce las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Genera la confusión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el objetivo de un contenido digital bien estructurado?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el costo del proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar el producto para la venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cumplir un objetivo comunicativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar los precios y ganacias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
