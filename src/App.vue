<template>
    <div>
        <app-header></app-header>
        <app-carousel></app-carousel>
        <app-content></app-content>
        <app-footer></app-footer>
        <fill-register></fill-register>
        <fill-login></fill-login>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

export default {
    components: {
        'app-header': Header,
        'app-carousel': Carousel,
        'app-content': Content,
        'app-footer': Footer,
        'fill-register': Register,
        'fill-login': Login,
    },
    data() {

    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }
</style>
