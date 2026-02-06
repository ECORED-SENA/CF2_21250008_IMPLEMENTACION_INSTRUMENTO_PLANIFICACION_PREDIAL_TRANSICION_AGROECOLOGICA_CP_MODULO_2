<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___color_1
      .px-5

        .row.align-items-center.mb-3
          .col-xl
            .row.align-items-center.m-0.style___box_1(data-aos="fade-right")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/intro/img2.jpg", alt='' style="max-width: 400px").m-auto
              .col-xl
                p.mb-0 El componente formativo #[b Valoración y manejo de sistemas productivos agroecológicos] tiene como propósito fortalecer en los aprendices las capacidades necesarias para analizar, mejorar y valorizar los sistemas productivos agroecológicos presentes en sus territorios. Incluye criterios ecológicos, nutricionales y económicos, junto con técnicas de evaluación participativa, uso riguroso de registros prediales y análisis detallado de los ciclos productivos. Este proceso facilita la identificación de cuellos de botella, oportunidades de mejora y estrategias de fortalecimiento local, articulando la producción con el bienestar familiar y comunitario.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/img3.png", alt='' style="max-width: 350px").m-auto
        
        .row.align-items-center.mb-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/img4.png", alt='' style="max-width: 400px").m-auto
          .col-xl
            p.mb-4 También se impulsa la sistematización de experiencias y la aplicación de indicadores productivos y ambientales del IPPTA para formular propuestas de mejora ajustadas al contexto, orientadas a promover la autonomía territorial y la sostenibilidad agroecológica. Junto a las soluciones ya documentadas, se valora el aporte de prácticas emergentes construidas por promotores, extensionistas y familias rurales, que enriquecen el repertorio agroecológico mediante saberes locales e innovación comunitaria.
            p.mb-0.style___box_2(data-aos="fade-left") Esta estación pedagógica plantea una comprensión integral del sistema productivo. El cruce entre indicadores y prácticas permite construir planes de transición coherentes, medibles y participativos, en favor del fortalecimiento territorial. Con ello se abre paso a la siguiente parada: la Estación Socioeconómica, enfocada en la valoración de los sistemas agroecológicos desde perspectivas económicas, organizativas y culturales. Allí se examinan estrategias de comercialización justa, circuitos cortos, economía solidaria y consolidación de redes comunitarias orientadas al fortalecimiento local.
        
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
