
<template>
    <div>
        <section class="section-guru-heading" id="guru">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <h2>
                            Meet Our Talented Teacher
                        </h2>
                        <p>
                            Guru-guru terbaik sman 1 jonggol.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-guru-content" id="guruContent">
            <div class="container">

                <div class="row justify-content-center" v-if="data.length > 1">

                    <carousel :margin="40" :loop="true" :nav="false" :autoplay="true">
                        <div class="guru-item justify-content-center" v-for="guru in data" :key="guru.id">
                            <div class="card card-guru text-center">
                                <div class="guru-content">
                                    <img :src="guru.photo" alt="user" class="mb-2 rounded-circle">
                                    <h3 class="mb-4">{{ guru.name }}</h3>
                                </div>
                                <hr>
                                <p class="mapel">
                                    {{ guru.subject }}
                                </p>
                            </div>
                        </div>
                    </carousel>

                    

                </div>

                <div class="row">
                    <div class="col-12 text-center">
                        <router-link to="/details/kontak/guru" class="btn btn-get-started px-4 mt-4 mx-1">
                            Selengkapnya
                        </router-link>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel2';
export default {
    name: 'HomeGuru',
    props: {
        data: Array
    },
    components: {
        carousel,
    }
}
</script>

<style lang="scss">
.section-guru-content {
    margin-top: -300px;
    padding-bottom: 50px;


    .card-guru {
        padding: 40px 20px 10px;
        border-radius: 11px;
        margin-bottom: 20px;
        min-height: 140px;
    }

    .guru-content {
        img {
            border-radius: 50%;
            max-width: 150px !important;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }

    h3 {
        font-size: 22px;
    }

    .guru {
        font-weight: 200;
        font-size: 26px;
        color: #6e6e6e;
        max-height: 140px;
    }

    .mapel {
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
}

</style>