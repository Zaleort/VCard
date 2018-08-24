<template>
    <main class="container animate faster fade-in">

    </main>
</template>

<script>
export default {
    name: 'faq',
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

</style>
