<template>
    <!-- alumni logo section  -->
        <section class="section-networks">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 text-left">
                        <h2>
                            Studi Alumni
                        </h2>
                        <p>
                        Lulusan sman 1 jonggol
                        melanjutkan studi di kampus-kampus terbaik di Indonesia dan di luar negeri.  
                        </p>
                    </div>
                    <i class="fas fa-angle-right"></i>

                    <!-- Logo Kampus Alumni Dibuat carousel  -->
                    <div class="col-md-8 text-center justify-content-center" v-if="data.length > 0">
                        <carousel :loop="true" :items="3" :autoplay="true" :nav="false" :dots="false" :autoplayTimeout="2000" :responsive="{0:{items:1},600:{items:3}, 1000:{items:5}}">
                            <div v-for="kampus in data" :key="kampus.id">
                                <img v-bind:src="kampus.photo" :alt="'logo' + kampus.name" class="logo-partner justify-content-center">
                            </div>
                        </carousel>
                    </div>

                </div>
            </div>
        </section>
</template>

<script>
import carousel from 'vue-owl-carousel';


export default {
    name: "Kampus",
    components: {
        carousel,
    },
    props: {
        data: Object
    }
}
</script>

<style lang="scss" scoped>
    .section-networks {
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

        .logo-partner {
            padding: 0;
            margin-top: 30px;
        }

        .logo-partner {
            width: 70% !important;
        }
    }
</style>