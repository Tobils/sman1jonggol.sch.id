<template>
    <div class="berita">
        <!-- Berita popular  -->
        <section class="section-popular" id="popular">
            <div class="container">
                <div class="row">
                    <div class="col text-center section-popular-heading">
                        <h2>
                            Berita Terkini 
                        </h2>
                        <p>
                            Kabar dan kegiatan di sman 1 jonggol
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Berita popular content  dibuat carousel-->
        <section class="section-popular-content">
            <div class="container">

                <div class="section-popular-travel row justify-content-center" v-if="data.length > 0">

                    <carousel class="col" :loop="true" :items="5" :nav="false" :autoplay="true" :margin="20" :autoplayTimeout="5000" :autoplayHoverPause="true" :smartSpeed="1000" :responsive="{0:{items:1},600:{items:3}, 1000:{items:3}}">
                        <div class="berita-item" v-for="berita in data" :key="berita.id">

                            <div class="card-travel text-center d-flex flex-column">
                                <div class="berita-image" v-if="berita.galleries.length > 0">
                                    <img :src="berita.galleries[0].photo" alt="">
                                </div>
                                <div v-else></div>
                                <div class="travel-country text-lowercase">
                                    {{ berita.judul }} 
                                </div>
                                <div class="travel-button mt-auto">
                                    <a :href="'/details/berita/'+berita.id" class="btn btn-travel-details px-4">
                                        Lihat
                                    </a>
                                </div>
                            </div>

                        </div>
                    </carousel>

                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <a href="/data-all/BERITA" class="btn btn-get-started px-2 mx-1">
                            Selengkapnya
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel';



export default {
    name: 'Berita',
    props: {
        data: Object,
        home: Boolean
    },
    components: {
        carousel,
    }
}
</script>

<style lang="scss">
.section-popular {
    min-height: 540px;
    margin-top: -50px;
    margin-bottom: -230px;
    background-color: #081B40;

    .section-popular-heading {
        margin-top: 150px;

        h2, p {
            color: #ffffff;
        }

        h2 {
            font-family: 'Playfair', serif;
            font-weight: bold;
            font-size: 40px;
        }

        p {
            font-size: 18px;
        }
    }
}



.section-popular-content{
    .section-popular-travel {
        .berita-item {
            .card-travel {
                min-height: 380px;
                background-color: #081B40;
                color: #081B40;
                background-size: cover;
                margin-bottom: 5px;
                border-radius: 10px;
            }

            .travel-country {
                margin-top: 20px;
                font-size: 18px;
                color: #ffffff;
            }

            .travel-location {
                font-size: 26px;
                color: #ffffff;
            }

            .travel-button {
                margin-bottom: 20px;
                .btn-travel-details {
                    background-color: #E26D26;
                    color: #ffffff;

                    &:hover {
                        background-color: #F27A30;
                        color: #ffffff;
                    }
                }
            }

        }

    }

    .btn-get-started {
        background-color: #F27A30;
        color: #ffffff;

        &:hover {
            background-color: #E26D26;
            color: #ffffff;
        }
    }
}
</style>