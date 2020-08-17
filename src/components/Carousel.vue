<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"

        >



            <!-- slide whith img slot -->
            <!-- note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
                <template v-slot:img>
                    <img 
                        class="d-block img-fluid w-100 "
                        style="height:80vh!important;"
                        :src="require('@/assets/img/fruit3.jpg')" 
                        alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template v-slot:img>
                    <img 
                        class="d-block img-fluid w-100 "
                        style="height:80vh!important;"
                        :src="require('@/assets/img/fruit2.jpg')" 
                        alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template v-slot:img>
                    <img 
                        class="d-block img-fluid w-100 "
                        style="height:80vh!important;"
                        :src="require('@/assets/img/fruit.jpg')" 
                        alt="image slot"
                    >
                </template>
            </b-carousel-slide>

        </b-carousel>


    </div>
</template>

<script>
export default {
    data(){
        return{
            slide:0,
            sliding:null
        }
    },
    methods:{

    }
}
</script>
<style>

</style>