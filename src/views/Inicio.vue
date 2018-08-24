<template>
    <main class="container land-page">
        <h1 class="text-primary land-page-title animate fast fade-in-up">The amazing plantilla</h1>
        <h2 class="land-page-subtitle animate fast delay-500 fade-in">¿Podría existir una plantilla mejor que la de Kreative?</h2>
    </main>
</template>

<script>
export default {
    name: 'inicio',
};
</script>

<style lang="scss">
@import '../scss/variables';

.land-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
}

.land-page-title {
    margin: 0;
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.land-page-subtitle {
    margin-top: 15px;
    font-size: 1.2rem;
    font-weight: 400;
}

@media only screen and (min-width: $mobile-l) {
    .land-page-title {
        font-size: 3rem;
    }
}

@media only screen and (min-width: $tablet) {
    .land-page-title {
        font-size: 4rem;
        letter-spacing: 5px;
    }

    .land-page-subtitle { font-size: 1.5rem; }
}
</style>
