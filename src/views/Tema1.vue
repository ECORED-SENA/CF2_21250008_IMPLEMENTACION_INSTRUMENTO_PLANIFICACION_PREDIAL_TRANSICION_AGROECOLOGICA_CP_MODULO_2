<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Indicadores productivos

    p.mb-5 En el marco de la #[b transición agroecológica], los indicadores productivos son herramientas fundamentales para #[b observar, valorar y orientar] el funcionamiento de los sistemas agroalimentarios, siempre en relación con sus contextos territoriales. No se trata solamente de medir rendimientos o volúmenes, sino de comprender cómo se relacionan e interactúan los elementos ecológicos, sociales y culturales en cada finca o comunidad.

    .fondo___color_1
      .px-5

        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img2.png", alt='' style="max-width: 400px").m-auto
          .col-xl
            p.mb-3.style___box_3(data-aos="fade-left") Dado que la agroecología reconoce que cada territorio posee #[b dinámicas propias, saberes locales y condiciones ecológicas particulares], los indicadores deben desarrollarse desde una #[b mirada situada]. Esto significa construirlos y aplicarlos teniendo en cuenta el contexto específico, con el objetivo de identificar #[b avances, limitaciones y oportunidades de mejora]. En este sentido, los indicadores productivos permiten fortalecer la #[b autonomía, resiliencia y sostenibilidad] de los sistemas agroecológicos.
            .row.align-items-center
              .col-xl-auto(data-aos="zoom-in")
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img3.svg", alt='' style="max-width: 85px").m-auto
              .col-xl
                p.mb-0 Esta unidad tiene como finalidad que los aprendices comprendan el #[b sentido profundo] de los indicadores productivos, así como su #[b utilidad práctica] en el diseño, monitoreo y evaluación de procesos agroecológicos.
    
        <!-- BLOQUE 1 -->
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Concepto, tipos y finalidad de los indicadores productivos
        
        p.mb-5 A continuación, se presentan los principales conceptos relacionados con los indicadores productivos, sus características, tipos y finalidades específicas, organizados en una tabla para facilitar su comprensión:

        <!-- SLYDER IMAGENES -->
        .fondo___slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Indicador productivo
                    p.mb-0 Herramienta que permite #[b observar, medir y valorar] aspectos del sistema productivo agroecológico.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Tipos de indicadores
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-3
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Cuantitativos]: expresan valores numéricos (ej. número de especies, % de insumos producidos).
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Cualitativos]: describen condiciones o prácticas (ej. tipo de manejo del suelo).
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Indicadores combinados
                    p.mb-0 Integran aspectos #[b técnicos, sociales y ecológicos] para ofrecer una visión más integral del sistema productivo.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Indicadores participativos
                    p.mb-0 Son construidos y valorados #[b colectivamente] por los actores del territorio, permitiendo el diálogo entre saberes técnicos y comunitarios.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Finalidades principales
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-3
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Monitorear] el estado y evolución de los sistemas productivos.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Identificar] fortalezas, debilidades y oportunidades.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Diseñar estrategias] de transición agroecológica ajustadas al contexto local.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Facilitar el diálogo] entre distintos tipos de conocimiento.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Evaluar impactos] ecológicos, sociales y económicos de las prácticas implementadas.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Indicadores productivos IPPTA
    
    .row.align-items-center.mb-5
      .col-xl
        p.mb-3.style___box_4(data-aos="zoom-in") La valoración de un indicador productivo en agroecología implica mucho más que aplicar una escala numérica. Se trata de #[b leer el territorio], interpretar las prácticas y reconocer los procesos que dan cuenta de la transición hacia sistemas más sostenibles. Por eso, las técnicas de valoración deben ser #[b comprensibles, contextualizadas y participativas], permitiendo que los actores locales se identifiquen con los criterios evaluados y se #[b apropien del proceso].
        p.mb-0 Estas técnicas no solo hacen visibles los avances, sino que también ayudan a detectar #[b cuellos de botella], a tomar decisiones informadas y a #[b fortalecer la autonomía] y la planificación colectiva. En el marco del IPPTA, su aplicación busca formar capacidades para el #[b monitoreo comunitario] y el diseño de #[b estrategias de mejora continua].
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img10.png", alt='').m-auto
      
    <!-- TITULOS TERCER NIVEL -->
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Componentes productivos evaluados

    p.mb-3 Los indicadores productivos dentro del IPPTA no se aplican de manera aislada, sino que se vinculan con #[b componentes específicos del agroecosistema]. Estos componentes expresan las #[b prácticas, relaciones y decisiones] que configuran la producción agroecológica en cada territorio. Evaluarlos permite entender cómo se articulan los elementos del sistema, qué tan sostenibles son y qué oportunidades existen para su mejora. El objetivo de esta evaluación no es imponer un modelo único, sino #[b reconocer la diversidad] de formas de producción, visibilizar los saberes locales y orientar los procesos de transición desde la #[b realidad concreta de cada finca o comunidad].

    p.mb-5 Los principales componentes evaluados en el IPPTA son: 

    .fondo___color_2
      .px-5

        .fondo___carrusel
          .px-5
            .row.align-items-center.mb-5
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img14.svg' alt='' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Diversidad de cultivos
                    p.mb-0 Evalúa la variedad de especies vegetales presentes en el sistema productivo.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img15.svg' alt='' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Diversidad de especies animales
                    p.mb-0 Considera la presencia y manejo de diferentes especies animales.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img16.svg' alt='' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Integración agricultura-ganadería
                    p.mb-0 Mide el nivel de articulación entre la producción vegetal y animal.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img17.svg' alt='' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Bienestar animal
                    p.mb-0 Observa las condiciones de manejo, salud y confort de los animales en la finca.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img18.svg' alt='' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Producción de insumos biopreparados
                    p.mb-0 Valora la capacidad del sistema para producir sus propios insumos (fertilizantes, repelentes, etc.).
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img19.svg' alt='' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Protección y custodia de semillas
                    p.mb-0 Reconoce prácticas relacionadas con la conservación, intercambio y uso de semillas propias o nativas.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img19.svg' alt='' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Manejo agroecológico del suelo
                    p.mb-0 Evalúa las prácticas de conservación, fertilización natural y estructura del suelo dentro del sistema productivo.

            p.mb-5.style___box_3(data-aos="zoom-in") Al medir y calificar estos indicadores se construye lo que se denomina #[b Línea Base Funcional] del sistema agroecológico. Este diagnóstico inicial permite identificar el #[b estado actual] de los componentes productivos, visibilizar #[b prácticas clave] y orientar decisiones técnicas y comunitarias. A partir de esta información, tanto el productor como el equipo territorial pueden #[b priorizar acciones] de diversificación, integración y autonomía, asegurando que la #[b transición agroecológica] sea contextualizada, progresiva y estratégicamente fortalecida desde el territorio.

            <!-- TITULOS TERCER NIVEL -->
            .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
              .col-lg-auto
                figure
                  img(src="@/assets/curso/temas/img11.svg" alt='' style="max-width: 60px").m-auto
              .col
                h3 Mecánica de valoración 
            
            .row.align-items-center.mb-5.m-0
              .col-xl
                p.mb-3 En el marco del IPPTA, la #[b mecánica de valoración] permite traducir las observaciones realizadas en la finca en una #[b calificación numérica]. Esta no surge solo de mirar, sino también de #[b conversar con los productores], interpretar prácticas y registrar elementos como la cantidad de especies presentes, el manejo del suelo o la producción de bioinsumos. A cada situación observada se le asigna un valor #[b entre 1 y 5], según las descripciones establecidas por cada indicador.
                .row.align-items-center.m-0.style___box_4.ajuste___box_4(data-aos="zoom-in")
                  .col-xl-auto(data-aos="fade-right")
                    figure.d-none.d-xl-block
                      img(src="@/assets/curso/temas/img20.svg" alt='').m-auto
                  .col-xl
                    p.mb-0 Este sistema de valoración facilita la elaboración de un #[b diagnóstico claro] del estado productivo del predio, permite #[b comparar entre diferentes fincas], identificar #[b cambios a lo largo del tiempo] y tomar decisiones más informadas para fortalecer la transición agroecológica.
              .col-xl-auto(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img21.png" alt='').m-auto

            p.mb-5 La herramienta utiliza una #[b escala ordinal de 1 a 5], donde cada número refleja un nivel cualitativo de sostenibilidad:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center
          .col-xl-5(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img22.png" alt='').m-auto
          .col-xl-7
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Escala ordinal de valoración IPPTA
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Puntaje
                    th Descripción
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla #[b 1]
                    td.texto-left Condición #[b crítica] o de #[b alto riesgo ambiental].
                  tr
                    td.ajuste-border-tabla #[b 2]
                    td.texto-left Condición #[b deficiente], con necesidad urgente de mejora.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla #[b 3]
                    td.texto-left Condición #[b intermedia], con prácticas parcialmente sostenibles.
                  tr
                    td.ajuste-border-tabla #[b 4]
                    td.texto-left Condición #[b buena], con prácticas agroecológicas consolidadas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla #[b 5]
                    td.texto-left Condición #[b óptima], plenamente agroecológica y regenerativa.

    p.mb-5 Cada indicador incluye una #[b escala progresiva de descripciones cualitativas], que va desde escenarios de #[b baja diversificación, alta dependencia o desarticulación], hasta formas de manejo #[b integradas, autónomas y sostenibles]. El evaluador debe seleccionar la descripción que #[b mejor represente la realidad] del predio, y así asignar el puntaje correspondiente.

    <!-- TITULOS CUERTO NIVEL -->
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Valoración en el ciclo agrícola

    p.mb-4 Para captar las variaciones del sistema productivo a lo largo del año, el IPPTA propone realizar dos mediciones anuales:

    .row.align-items-center
      .col-xl
        .row.align-items-center.mb-3.m-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img23.svg" alt='').m-auto
          .col-xl.style___box_2(data-aos="zoom-in")
            .style___box_5
              ul.fa-ul.estilo___ul.mb-0
                li.mb-3
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Una en temporada seca.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Otra en época de lluvias.
        p.mb-0 Este enfoque permite construir una línea base funcional del predio, identificar oportunidades de mejora, y dar seguimiento a los avances en la transición agroecológica. Además, articula criterios técnicos con la observación participativa y los saberes propios del territorio, fortaleciendo así los procesos de evaluación colectiva.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img24.png" alt='').m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Indicadores productivos evaluados en la herramienta IPPTA

    .row.align-items-center.mb-5.m-0
      .col-xl
        p.mb-3.style___box_4(data-aos="fade-right") La transición agroecológica necesita que conozcamos bien cómo está funcionando cada finca. Para eso, el IPPTA propone un conjunto de indicadores productivos que ayudan a observar y entender las prácticas que se realizan en el predio: qué se cultiva, cómo se crían los animales, si se producen insumos propios, si se conservan semillas, entre otros. Estos indicadores permiten hacer un diagnóstico claro y participativo del sistema productivo, construir una línea base funcional y tomar decisiones que mejoren la autonomía, la diversidad y la sostenibilidad de la finca desde su propia realidad territorial.
        p.mb-0 Las dimensiones productivas evaluadas (como la diversidad de cultivos, la integración entre agricultura y ganadería, la producción de bioinsumos o la protección de semillas) reflejan aspectos clave para fortalecer la autonomía, la sostenibilidad y la resiliencia de los sistemas agroecológicos. Al aplicarse con técnicas participativas, estos indicadores permiten que productores, técnicos y comunidades dialoguen sobre sus prácticas, reconozcan sus avances y definan juntos acciones de mejora. Así, se articulan los saberes locales con criterios técnicos, generando estrategias productivas contextualizadas, pertinentes y regenerativas para cada territorio.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img25.png" alt='').m-auto
    
    .row.align-items-center.m-0.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block  
          img(src="@/assets/curso/temas/img26.svg" alt='').m-auto
      .col-xl.style___box_3.ajuste___box_3(data-aos="fade-left")
        p.mb-0 Lo valioso de esta evaluación es que ayuda a entender mejor lo que pasa en la finca. Al observar y calificar cada indicador productivo, se convierte esa realidad compleja en información concreta y útil. Esto permite que productores y técnicos puedan identificar qué está funcionando bien, qué necesita mejorar y cómo avanzar hacia una producción más diversa, autónoma y sostenible en el tiempo.
    
    p.mb-5 A continuación, se presenta la tabla con el desglose de cada indicador, su descripción y su relevancia dentro del proceso de transición agroecológica.

    .bg--img_03.mb-3
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img27.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Diversidad de cultivos").ajuste-cajaAcordion
              p.mb-1 #[b Descripción]: evalúa la variedad de cultivos en asociación, rotación y prácticas de descanso. 
              p.mb-1 #[b Importancia agroecológica]: aumenta la resiliencia del agroecosistema, mejora la nutrición, reduce plagas y fortalece la soberanía alimentaria.
              p.mb-1 #[b Medición]: 
              ol.lista-ol--cuadro
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Dos cultivos sembrados de forma independiente. 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Tres cultivos con rotación, incluyendo transitorios y asociados. 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Tres cultivos en asociación diversificada sin descanso con leguminosas. 
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Cuatro o más cultivos en asociación diversificada con descanso y leguminosas.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Cuatro o más cultivos en asociación con cultivos nutricionales, prácticas culturales y descanso con leguminosas.
            .row(titulo="Diversidad de especies animales").ajuste-cajaAcordion
              p.mb-1 #[b Descripción]: evalúa la cantidad de especies animales, número de animales y diversidad de usos. 
              p.mb-1 #[b Importancia agroecológica]: favorece la integración productiva, el reciclaje de nutrientes y la diversificación de ingresos y funciones ecológicas.
              p.mb-1 #[b Medición]: 
              ol.lista-ol--cuadro
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | No se criaron animales. 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Una especie con hasta tres usos (alimentario, abono, comercialización). 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Dos especies con pocos animales y un solo uso.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Tres especies con número significativo y al menos dos usos.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Más de tres especies con diferentes razas, número significativo y al menos tres usos.
            .row(titulo="Integración entre animales y cultivos").ajuste-cajaAcordion
              p.mb-1 #[b Descripción]: uso de productos vegetales para alimentación animal y aprovechamiento de subproductos. 
              p.mb-1 #[b Importancia agroecológica]: promueve el cierre de ciclos, reduce la dependencia externa y mejora la eficiencia ecológica del sistema. 
              p.mb-1 #[b Medición]: 
              ol.lista-ol--cuadro
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Los productos con los que se alimentan los animales no se producen en la finca y su estiércol no se utiliza como fertilizante. 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | 20% de vegetales usados para alimentación animal.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | 50% de vegetales usados para alimentación animal. 
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | 80% de vegetales usados para alimentación animal. 
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | 100% de los productos y/o pastoreo con los que se alimentan los animales se producen en la finca y todo su estiércol se recicla como fertilizante.
    
    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Manejo del suelo").ajuste-cajaAcordion
              p.mb-1 #[b Descripción]: mide la aplicación de materia orgánica y prácticas de conservación del suelo. 
              p.mb-1 #[b Importancia agroecológica]: mejora la fertilidad natural, previene la erosión, activa la biología del suelo y reduce la degradación territorial. 
              p.mb-1 #[b Medición]: 
              ol.lista-ol--cuadro
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Sin prácticas ni aplicación de materia orgánica. 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Una práctica sin aplicación de materia orgánica. 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Dos prácticas + aplicación esporádica. 
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Dos prácticas + aplicación permanente. 
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Tres o más prácticas + aplicación permanente.
            .row(titulo="Bienestar animal").ajuste-cajaAcordion
              p.mb-1 #[b Descripción]: prácticas implementadas para el bienestar de los animales. 
              p.mb-1 #[b Importancia agroecológica]: mejora la salud animal, reduce el estrés y fortalece la ética agroecológica en el manejo productivo.
              p.mb-1 #[b Medición]: 
              ol.lista-ol--cuadro
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | No se implementaron prácticas.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Una práctica (ej. sombra, cercas vivas, bancos de proteína). 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Dos prácticas.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Tres prácticas.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Cuatro o más prácticas.
            .row(titulo="Producción de insumos, bioinsumos y biopreparados en la finca").ajuste-cajaAcordion
              p.mb-1 #[b Descripción]: producción de insumos para fertilidad, arvenses y control de organismos nocivos. 
              p.mb-1 #[b Importancia agroecológica]: fortalece la autonomía productiva, reduce costos y evita el uso de insumos tóxicos o dependientes del mercado. 
              p.mb-1 #[b Medición]: 
              ol.lista-ol--cuadro
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | 100% comprados. 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | 90% comprados, 10% producidos.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | 50% comprados, 50% producidos.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | 10% comprados, 90% producidos.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | 100% producidos en la finca.
            .row(titulo="Protección y custodia de semillas").ajuste-cajaAcordion
              p.mb-1 #[b Descripción]: evalúa la conservación y reproducción de semillas criollas y nativas en la finca.
              p.mb-1 #[b Importancia agroecológica]: preserva la biodiversidad, la cultura campesina y la soberanía genética frente a modelos dependientes y homogéneos.
              p.mb-1 #[b Medición]: 
              ol.lista-ol--cuadro
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | No tiene semillas criollas, todas son compradas.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Hasta 20% criollas reproducidas e intercambiadas.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | 20 - 50% criollas reproducidas e intercambiadas.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Más del 50% criollas reproducidas e intercambiadas.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | 100% criollas reproducidas, intercambiadas y conservadas sin compra.
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img28.png", alt="" ).m-auto

    <!-- TITULOS TERCER NIVEL -->
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img11.svg" alt='' style="max-width: 60px").m-auto
      .col
        h3 Ejemplo práctico: Finca Renacer 
    
    p.mb-5 Sigamos con el ejemplo de la finca #[b El Renacer], ahora evaluada en la estación productiva. Este predio, ubicado en la vereda La Esperanza, en el piedemonte del Cauca, presenta una combinación de cultivos diversificados: café bajo sombra, frutales nativos y hortalizas en terrazas, junto con la crianza de gallinas criollas.

    .row.align-items-center.mb-5
      .col-xl
        p.mb-3.style___box_2(data-aos="fade-right") Aunque se reconocen avances importantes en la #[b restauración ecológica] y el #[b manejo de residuos], la evaluación productiva evidenció #[b debilidades en la integración] entre cultivos y animales, el #[b bienestar animal] y la #[b producción de bioinsumos]. Las gallinas no reciben alimentación proveniente de la finca ni se aprovecha su estiércol como abono, y las condiciones de crianza aún no garantizan su salud ni comodidad. Además, aunque se elaboran algunos biofertilizantes, la dependencia de insumos externos sigue siendo alta.
        p.mb-0 Estos resultados permiten identificar oportunidades claras para #[b fortalecer la autonomía, cerrar ciclos productivos] y avanzar hacia una agroecología #[b más eficiente y regenerativa] desde el territorio.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img29.png", alt="" ).m-auto
    
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 2.
      span Evaluación de los indicadores productivos
    .tabla-a(data-aos="zoom-in").mb-5
      table
        thead
          tr
            th.ajuste-border-tabla Indicador
            th.ajuste-border-tabla Condición observada en la finca
            th Valoración de 1 a 5
        tbody
          tr
            td.ajuste-border-tabla.texto-left Diversidad de cultivos
            td.ajuste-border-tabla.texto-left Cultivos en asociación: café bajo sombra, frutales nativos, hortalizas y leguminosas; se aplican prácticas de descanso.
            td 4
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Diversidad de especies animales
            td.ajuste-border-tabla.texto-left Se crían gallinas criollas con fines alimentarios y venta de huevos; no hay otras especies ni razas.
            td 2
          tr
            td.ajuste-border-tabla.texto-left Integración entre animales y cultivos
            td.ajuste-border-tabla.texto-left No se aprovechan residuos vegetales como alimento ni se utiliza el estiércol como abono; no hay cierre de ciclos productivos.
            td 1
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Manejo del suelo
            td.ajuste-border-tabla.texto-left Se aplican terrazas y cobertura vegetal; incorporación esporádica de materia orgánica.
            td 3
          tr
            td.ajuste-border-tabla.texto-left Bienestar animal
            td.ajuste-border-tabla.texto-left Las gallinas tienen sombra natural, pero no cuentan con zonas de descanso ni bancos de proteína; condiciones básicas pero no óptimas.
            td 2
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Producción de insumos, bioinsumos y biopreparados
            td.ajuste-border-tabla.texto-left Se elaboran algunos biofertilizantes líquidos; aún se depende en gran parte de insumos comprados.
            td 3
          tr
            td.ajuste-border-tabla.texto-left Protección y custodia de semillas
            td.ajuste-border-tabla.texto-left Conservación e intercambio de semillas criollas de frijol, maíz y hortalizas en red comunitaria; más del cincuenta por ciento reproducidas en la finca.
            td 4
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left #[b Promedio general]
            td.ajuste-border-tabla.texto-left 
            td #[b 2.7]
    
    .row.align-items-center.m-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block  
          img(src="@/assets/curso/temas/img30.svg" alt='').m-auto
      .col-xl.style___box_3.ajuste___box_3_1(data-aos="fade-left")
        p.mb-0 #[b Condición productiva del predio]: media-baja, con necesidad de intervención en integración agropecuaria, bienestar animal y autonomía en bioinsumos.
 
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
