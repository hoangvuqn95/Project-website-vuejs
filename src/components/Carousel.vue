<template>
    <div>
        <b-carousel
            id="carousel-one"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333; margin: 0 10px"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                caption="First slide"
                img-src="https://picsum.photos/1024/480/?image=52"              
            >
            </b-carousel-slide>
            <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=54"
            >
                <h2>Hello world</h2>
            </b-carousel-slide>
            <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=58"
            ></b-carousel-slide>
            <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=10"
            ></b-carousel-slide>
            <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=22"
            ></b-carousel-slide>
        </b-carousel>
        <p class="mt-4">
            Slide #: {{ slide }} <br>
            Sliding: {{ sliding }}
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true;
            },
            onSlideEnd(slide) {
                this.sliding = false;
            }
        }
    }
</script>

<style scoped>

</style>
