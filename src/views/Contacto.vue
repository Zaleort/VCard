<template>
    <main class="container contact-grid animate fade-in faster">
        <div>
            <h1 class="text-primary title">Contacto</h1>
            <form class="form" v-on:submit.prevent action="./mail.php" method="POST">
                <div class="form-group">
                    <label class="form-label" for="nombre">Nombre: </label>
                    <input class="form-input" id="nombre" type="text" autocomplete="name" required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="tel">Teléfono: </label>
                    <input class="form-input" id="tel" type="tel" autocomplete="tel">
                </div>
                <div class="form-group" id="email-container">
                    <label class="form-label" for="email">Email: </label>
                    <input class="form-input" id="email" type="email" autocomplete="mail" required>
                </div>
                <div class="form-group" id="mensaje-container">
                    <label class="form-label" for="mensaje">Mensaje: </label>
                    <textarea class="form-input" name="mensaje" id="mensaje" cols="15" rows="10"></textarea>
                </div>
                <input @click="send" class="button submit-button" type="submit" value="Enviar" required>
            </form>
        </div>
        <div class="contact-info">
            <h2 class="text-primary title">Información de contacto</h2>
            <div class="contact-info-group">
                <img class="contact-info-item" src="../assets/location.svg" alt="">
                <h3 class="contact-info-item">Dirección</h3>
            </div>
            <div class="contact-info-group">
                <img class="contact-info-item" src="../assets/call.svg" alt="">
                <div class="contact-info-item">
                    <a href="#">Teléfono</a>
                </div>
            </div>
            <div class="contact-info-group">
                <img class="contact-info-item" src="../assets/mail.svg" alt="">
                <h3 class="contact-info-item">zaleortgames@outlook.com</h3>
            </div>
            <div class="contact-info-group">
                <img class="contact-info-item" src="../assets/facebook.svg" alt="">
                <a href="#" class="contact-info-item">Síguenos</a>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    name: 'contacto',
    methods: {
        send: function () {
            axios.post('./mail.php', {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                tel: document.getElementById('tel').value,
                mensaje: document.getElementById('mensaje').value,
            })
                .then((response) => {
                    console.log(response);
                });
        },
    },
};
</script>

<style lang="scss">
@import '../scss/variables';

.contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    padding-bottom: 50px;
}

.form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;

    textarea {
        resize: none;
    }
}

.form-label {
    font-size: 1.15rem;
    margin-bottom: 10px;
}

.form-input {
    padding: 8px 12px;
    font-size: 1.15rem;
    transition: all .25s ease;
    outline-offset: -2px;
    outline: solid 2px transparent;
}

.form-input:focus {
    outline-color: $primary-color;
}

.submit-button {
    background-color: $primary-color;
    font-family: 'Roboto', sans-serif;
    border: 0;
    color: #fff;
    font-size: 1.2rem;
}

.submit-button:hover {
    background-color: $accent-color;
}

.contact-info {
    grid-row: 1;
}

.contact-info-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;

    h3, a {
        font-size: 1.15rem;
        font-weight: normal;
        font-family: $sans-serif;
    }
}

.contact-info-item {
    display: inline-block;
    margin-right: 10px;
}

@media only screen and (max-width: $mobile-l) {
    .contact-info-group {
        h3, a {
            font-size: 1rem;
        }
    }
}

@media only screen and (min-width: $laptop) {
    .contact-grid {
        grid-template-columns: 55% 1fr;
        grid-gap: 50px;
    }

    .form {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "nombre telefono"
            "email email"
            "mensaje mensaje"
            "submit submit";
    }

    #mensaje-container {
        grid-area: mensaje;
    }

    #email-container {
        grid-area: email;
    }

    .submit-button {
        grid-area: submit;
    }

    .contact-info {
        grid-row: initial;
    }
}
</style>
