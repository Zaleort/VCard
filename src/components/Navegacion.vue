<template>
    <header class="nav-bar">
        <div class="logo-container">
            <a href="#"><img src="../assets/logo.png" alt="Logo" height="40px"></a>
        </div>
        <img @click="openMenu"
            class="icon hamburger"
            src="../assets/hamburger.svg"
            alt="Abrir menú">
        <nav id="nav" class="nav">
            <ul class="nav-list">
                <li @click="openMenu" ><router-link class="nav-link" to="/">Inicio</router-link></li>
                <li @click="openMenu"><router-link  class="nav-link" to="/sobre">Sobre mí</router-link></li>
                <li @click="openMenu"><router-link  class="nav-link" to="/faq">FAQ</router-link></li>
                <li @click="openMenu"><router-link  class="nav-link" to="/contacto">Contacto</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navegacion',
    methods: {
        openMenu: () => {
            if (window.innerWidth < 768) {
                document.getElementById('nav').classList.toggle('open-menu');
            }
        },
    },
};
</script>

<style lang="scss">
@import '../scss/variables';

.nav-bar {
    padding: 0 25px;
    min-height: $nav-height;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $grey200;
    background-color: #fff;
}

.logo-container {
    margin-right: 35px;
}

.hamburger {
    background: transparent;
    cursor: pointer;
    border: none;
}

.nav {
    position: absolute;
    top: $nav-height;
    z-index: 10;
    left: 0;
    right: 0;
    height: 0;
    visibility: hidden;
}

.nav-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.nav-link {
    height: $nav-height;
    display: block;
    text-decoration: none;
    color: $primary-color;
    background-color: #ffffff;
    padding: 25px 16px;
    transition: color, background-color, border 0.15s ease;
}

.nav-link:hover, .router-link-exact-active {
    text-decoration: none;
    color: $grey50;
    background-color: $primary-color;
}

.open-menu {
    height: 272px;
    visibility: visible;
    animation: fade-in-down-slight 350ms ease;
}

@media only screen and (min-width: $tablet) {
    .hamburger { display: none; }

    .nav-bar {
        justify-content: center;
    }

    .nav {
        position: static;
        visibility: visible;
        height: auto;
    }

    .nav-list {
        display: flex;
    }

    .nav-link {
        color: $grey900;
        background-color: transparent;
    }

    .nav-link:hover, .router-link-exact-active {
        color: $grey900;
        background-color: transparent;
        border-bottom: 3px solid $primary-color;
    }

    .open-menu {
        animation: none;
    }
}
</style>
