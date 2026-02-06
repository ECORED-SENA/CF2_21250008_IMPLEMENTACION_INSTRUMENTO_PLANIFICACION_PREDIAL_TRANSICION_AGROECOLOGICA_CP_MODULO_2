<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Plan de acompañamiento agroecológico
    
    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 El Plan de Acompañamiento Agroecológico se construye a partir del análisis de los indicadores productivos del IPPTA, que permiten observar el estado del sistema productivo en cada predio. Más que una evaluación estática, este proceso abre el camino para mejorar lo que ya se hace, ajustar prácticas que generan tensiones y fortalecer la producción agroecológica con base en evidencias y participación.
        .row.align-items-center
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img144.svg" alt='').m-auto
          .col-xl
            .style___box_10(data-aos="zoom-in")
              p.mb-0 El valor de los indicadores no radica solo en medir, sino en conectarse con prácticas concretas que las familias campesinas ya aplican o pueden incorporar, como el pastoreo racional Voisin, el uso de animales para mejorar suelos, la conservación de semillas o la alimentación agroecológica. Así, diagnóstico y acción se entrelazan para avanzar hacia una transición agroecológica real, situada y sostenible.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img145.png" alt='').m-auto

    p.mb-5 A continuación, se presenta una síntesis de los elementos que orientan la formulación del plan de acción para avanzar hacia la transición agroecológica en el predio.

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Plan de intervención
                p.mb-0 El plan de intervención constituye el núcleo de cualquier proceso de gestión ambiental, pues convierte las ideas en acciones concretas y los diagnósticos en mejoras reales sobre el territorio. Su construcción requiere método y sensibilidad para comprender el paisaje y actuar con propósito. Esta estructura se basa en pasos que permiten avanzar de forma ordenada hacia la transición agroecológica.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img146.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Identificar los problemas prioritarios
                p.mb-0 Este proceso inicia con una lectura detallada del predio a partir de la línea base y los indicadores productivos del IPPTA. Dicha lectura permite entender cómo se está produciendo, cuáles prácticas generan tensiones o limitaciones y en qué puntos existen oportunidades de fortalecimiento. Se reconocen situaciones como baja diversidad, uso intensivo de insumos externos o poca articulación entre cultivos y animales. Esta revisión general ayuda a precisar qué requiere atención, qué puede reforzarse y cómo avanzar hacia una producción coherente con los principios agroecológicos. Con esta base, es posible proponer prácticas adaptadas al contexto, apoyadas en el conocimiento local y en la experiencia de quienes habitan y transforman el territorio.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img147.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Definir objetivos específicos
                p.mb-0 Tras identificar las limitaciones y oportunidades del sistema productivo, se establecen propósitos claros sobre aquello que se desea transformar. Estos objetivos deben ser específicos, viables y verificables. Algunos ejemplos son: ampliar la diversidad de cultivos en una zona del predio, reducir la dependencia de insumos comprados durante una temporada o fortalecer la articulación entre animales y cultivos en una unidad integrada. Estos propósitos funcionan como referentes que orientan el diseño del plan predial, organizan las acciones, facilitan el seguimiento y permiten ajustar estrategias conforme a las dinámicas del territorio.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img148.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Seleccionar las medidas agroecológicas
                p.mb-0 En esta fase inicia el componente más práctico y creativo. Se eligen las estrategias productivas más apropiadas según las características del predio y las metas definidas. Entre las alternativas se incluyen la diversificación de cultivos, el diseño de sistemas mixtos con animales, la incorporación de materia orgánica mediante compostaje o el uso de cercas vivas que brinden sombra y alimento. La clave es que cada medida responda a las necesidades reales del sistema y contribuya a mejorar su funcionamiento, equilibrio y desempeño agroecológico.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img149.png', alt='' style="max-width: 500px").m-auto
















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
