<template>
    <section class="section-alumni">
        <div class="container">
            <div class="row">
                
                <div class="col-md-4 text-left"
                    data-aos="fade-right"
                    data-aos-delay="500"
                >
                    <h2>
                        Studi Alumni
                    </h2>
                    <p>
                        Lulusan sman 1 Jonggol
                        melanjutkan studi di kampus-kampus terbaik di Indonesia dan di luar negeri.  
                    </p>
                </div>

                <div class="col-md-8 justify-conttent-center" v-if="data.length > 1">
                    <carousel :loop="true" :items="3" :autoplay="true" :nav="false" :dots="false" :autoplayTimeout="2000" :responsive="{0:{items:1},600:{items:3}, 1000:{items:5}}">
                        <div 
                            v-for="kampus in data" 
                            :key="kampus.id"
                            data-aos="fade-left" data-aos-delay="500"
                        >
                            <img v-bind:src="kampus.photo" :alt="'logo' + kampus.name" class="logo-kampus">
                        </div>
                    </carousel>
                </div>

            </div>
        </div>
    </section>

</template>

<script>
import carousel from 'vue-owl-carousel2';

export default {
    name : 'HomeKampus',
    props: {
        data: Array
    },
    components: {
        carousel
    }
}
</script>

<style lang="scss">

.section-alumni {
    background-color: #ffffff;
    margin-top: -170px;
    padding-top: 240px;
    padding-bottom: 50px;

    h2 {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 40px;
    }

    p {
        font-size: 18px;
    }

    .logo-kampus {
        width: 60% !important;
        padding: 0;
    }
}

</style>