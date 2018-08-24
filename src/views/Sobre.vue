<template>
  <main class="container about-grid animate faster fade-in">
    <div id="resumen">
      <h1 class="text-primary title">Sobre mí</h1>
      <h2 class="m-0 subtitle">The amazing plantilla</h2>
      <p>
        La plantilla increíble nace de la frustración al tener que lidiar con otra plantilla
        catastrófica, pesada y cuyo diseño dificultaba su personalización.
      </p>
    </div>
    <div id="imagen"><!-- Segunda columna --></div>
    <h2 id="caracteristicas" class="about-subtitle">Características</h2>
      <div class="caracteristicas-item">
        <h3>Flexible</h3>
        <p>La plantilla increíble está construida con tecnologías de hoy, lo que permite estructurar
          la página en componentes reutilizables y programables.
        </p>
      </div>
      <div class="caracteristicas-item">
        <h3>Ligera</h3>
        <p>Esta plantilla solo usa Vue, por lo que además de beneficiarse de la rapidez del
          framework, solo llega a pesar 150kB
        </p>
      </div>
      <div class="caracteristicas-item">
        <h3>Sencilla</h3>
        <p>Gracias a Sass, se puede modificar el aspecto general de la página de forma rápida y
          sencilla por el uso de variables.
        </p>
      </div>
      <div class="caracteristicas-item">
        <h3>Compatible</h3>
        <p>Gracias a CSSPrefixer, PostCSS y Babel, puedes escribir el CSS y JavaScript del mañana
          para navegadores de ayer.
        </p>
      </div>
  </main>
</template>

<script>
export default {
    name: 'sobre',
    data: function () {
        return {
            windowHeight: 0,
            elements: [],
        };
    },
    methods: {
        getWindowHeight: function () {
            this.windowHeight = window.innerHeight;
        },

        checkPos: function () {
            while (this.elements.length) {
                const posFromTop = this.elements[0].getBoundingClientRect().top;
                if (posFromTop - this.windowHeight > 0) return;

                this.elements[0].className = this.elements[0].className.replace('animate-on-scroll', 'animate');
            }
        },
    },

    mounted: function () {
        this.elements = document.getElementsByClassName('animate-on-scroll');
        this.getWindowHeight();
        this.checkPos();
        document.addEventListener('scroll', this.checkPos);
        document.addEventListener('resize', this.getWindowHeight);
    },

    beforeDestroy: function () {
        document.removeEventListener('scroll', this.checkPos);
        document.removeEventListener('resize', this.getWindowHeight);
    },
};
</script>

<style lang="scss">
@import '../scss/variables';

.about-grid {
  padding: 15px 0 35px 0;
  display: grid;
  grid-template-columns: 1fr;
}
.about-title {
  margin-bottom: 5px;
}

.about-subtitle {
  font-weight: 400;
}

#caracteristicas {
  margin-bottom: 0;
}

.caracteristicas-item {
  h3 {
    font-weight: 500;
    margin-bottom: 0;
  }
}

@media only screen and (min-width: $laptop) {
  .about-grid {
    grid-column-gap: 25px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "resumen resumen imagen imagen"
      "h2 h2 h2 h2"
      "item item item item";
  }

  #resumen {
    grid-area: resumen;
  }

  #imagen {
    grid-area: imagen
  }

  #caracteristicas {
    grid-area: h2;
  }
}
</style>
