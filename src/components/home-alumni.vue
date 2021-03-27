<template>
    <div>
         <!-- Testimonial section  heading -->
        <section class="section-testimonial-heading" id="testimonialHeading">
            <div class="container">
                <div class="row">
                    <div class="col text-center"
                        data-aos="fade-down"
                        data-aos-delay="500"
                    >
                        <h2>Apa Kata Alumni ?</h2>
                        <p>
                            Moments were giving them
                            <br>
                            the best experience
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonial section content  dibuat carousel-->
        <section class="section section-testimonial-content" id="testimonialContent">
            <div class="container">

                <div class="row justify-content-center" v-if="data.length > 1">
                    <carousel class="alumni-carousel col" :margin="40" :loop="true" :nav="false" :autoplay="true" :autoplayTimeout="2000" :autoplayHoverPause="true" :smartSpeed="1000" :dots="false" :responsive="{0:{items:1},600:{items:3}, 1000:{items:3}}">
                        <div class="alumni-item" v-for="alumni in data" :key="alumni.id" data-aos="fade-up" data-aos-delay="500">
                            <div class="card card-testimonial text-center">
                                <div class="testimonial-content">
                                    <img :src="alumni.photo" alt="" class="mb-4 rounded-circle ml-auto mr-auto">
                                    <h3 class="mb-4">
                                        {{ alumni.name }}
                                    </h3>
                                    <p class="testimonial" v-html="alumni.testimoni"></p>
                                </div>
                                <hr>
                                <p class="trip-to mt-2">
                                    {{ alumni.kampus_alumni.name }}
                                </p>
                            </div>
                        </div>
                    </carousel>
                </div>
                    

                <div class="row">
                    <div class="col-12 text-center">
                        <router-link to="/details/kontak/alumni" class="btn btn-get-started px-4 mt-4 mx-1">
                            Selengkapnya
                        </router-link>
                    </div>
                </div>
                
            </div>
        </section>

    </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
export default {
    name: 'HomeAlumni',
    props: {
        data: Array,
    },
    components: {
        carousel,
    }
}
</script>

<style lang="scss">
.section-testimonial-heading,
.section-guru-heading {
    background: linear-gradient(#fff 0%, #f7f9ff 100%);
    padding-top: 50px;
    min-height: 506px;

    h2 {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 40px;
    }

    p {
        font-size: 18px;
    }
}

.section-testimonial-content {
    margin-top: -300px;
    padding-bottom: 50px;


    .card-testimonial {
        padding: 40px 20px 10px;
        border-radius: 11px;
        margin-bottom: 20px;
        max-height: 910px;
    }

    .testimonial-content {
        min-height: 380px;

        img {
            border-radius: 50%;
            max-width: 150px !important;
        }
    }

    h3 {
        font-size: 22px;
    }

    .testimonial {
        font-weight: 200;
        font-size: 26px;
        color: #6e6e6e;
        min-height: 140px;
    }

    .trip-to {
        font-weight: normal;
        font-size: 22px;
        color: #6e6e6e;
    }

    hr {
        margin-left: -20px;
        margin-right: -20px;
    }

    .btn-get-started {
        background-color: #F27A30;
        color: #ffffff;

        &:hover {
            background-color: #E26D26;
            color: #ffffff;
        }
    }

    .btn-need-help {
        background-color: #f2f2f2;
        color: #c3c3c3;

        &:hover {
            background-color: #fafafa;
            color: #c3c3c3;
        }
    }
}
</style>