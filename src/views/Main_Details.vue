<template>
    
    <div class="data-all">
        <Navbar></Navbar>

        <main>
            <section class="section-details-header"></section>
            <section class="section-details-content">
                <div class="container">
                    <div class="row">
                        <div class="col p-0">
                            <nav>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        {{ this.$route.params.tipe }}
                                    </li>
                                    <li class="breadcrumb-item active">
                                        Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <!-- [berita details] -->
                    <div class="row" v-if="tipe == 'berita'">
                        <div class="col-lg-8 pl-lg-0">
                            <div class="card card-details">
                                <!-- judul  -->
                                <h1 class="text-capitalize mb-2">
                                    {{ data[0].judul }}
                                </h1>


                                <!-- Gallery post -->
                                <div class="gallery" v-if="data[0].galleries.length > 0">
                                    <ProductZoomer
                                        :base-images="images"
                                        :base-zoomer-options="zoomerOptions"
                                    />
                                </div>

                                <!-- deskripsi -->
                                <p class="text-justify" v-html="data[0].deskripsi"></p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card card-details card-right">
                                <h2>Berita Lainnya</h2>
                                <hr>
                                <table class="berita-lainnya text-left">
                                    <li class="list-unstyled my-2" v-for="berita in lainnya" :key="berita.id">
                                        <a :href="'/details/berita/'+berita.id" class="text-lowercase" v-if="berita.id != id">
                                            {{berita.judul}}
                                        </a>
                                    </li>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <Footer></Footer>
    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


import axios from 'axios';
export default {
    name:'Main_Details',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            data: Object,
            lainnya: Object,
            tipe: null,
            id: null,
            uri: 'http://cms.sman1jonggol.sch.id/api/v1/',
            images: {
                thumbs: []
            },
            zoomerOptions: {
                'zoomFactor': 4,
                'pane': 'container',
                'hoverDelay': 300,
                'namespace': 'container-zoomer',
                'move_by_click':true,
                'scroll_items': 4,
                'choosed_thumb_border_color': "#ff3d00"
            }
        }
    },
    methods: {
        getData(){
            this.tipe = this.$route.params.tipe;
            this.tipe = this.tipe.toLowerCase();
            /**
             * tipe [berita, sejarah, ekskul]
             */
            if(this.tipe == 'berita')
            {
                /**
                 * berita lainnya
                 */
                this.id = this.$route.params.id;
                this.uri = this.uri + this.tipe
                axios
                    .get(this.uri)
                    .then(res => {
                        this.lainnya = res.data.data
                    })
                    .catch(err =>console.log(err))

                /**
                 * spesifik berita id
                 */
                this.uri = this.uri + '/' + this.id
                axios
                    .get(this.uri)
                    .then(res => {
                        this.data = res.data.data
                        for (const image in this.data[0].galleries)
                        {
                            this.images.thumbs.push({
                                id: image.id,
                                url: image.photo
                            })
                        }
                        console.log(this.images)
                    })
                    .catch(err =>console.log(err))
            } 
        }

            
    },
    mounted() {
        this.getData()
    }

}
</script>


<style lang="scss">

// details
.section-details-header {
    min-height: 310px;
    background-color: #e4e6e8;
    margin-top: -70px;
}

.section-details-content{
    margin-top: -210px;
    min-height: 100vh;

    .breadcrumb {
        background-color: transparent;
        padding: 0;
        margin-bottom: 30px;
    }

    .breadcrumb-item {
        &.active {
            font-weight: bold;
            color: #071c4d;
        }
    }


    .card-details {
        padding: 50px;
        border-radius: 11px;

        h1 {
            font-size: 26px;
        }

        h2 {
            font-size: 20px;
        }

        p {
            font-size: 18px;
            color: #818181;
        }

        h3 {
            font-weight: 300;
            font-size: 14px;
            color: #071c4d;
        }

        .table-responsive {
            display: table;
        }

        .trip-informations {
            th {
                font-weight: 300;
                font-size: 18px;
                color: #071c4d;
            }

            td {
                font-weight: 300;
                font-size: 18px;
                color: #B1B1B1;
            }

            .text-blue {
                color: #071c4d;
                font-weight: bold;
            }

            .text-orange {
                color: #FF9E53;
                font-weight: bold;
            }
        }

        .payment-instructions {
            font-weight: 300;
            font-size: 14px;
            color: #b1b1b1;
        }

        .bank {
            .bank-item {
                margin-bottom: 30px;
                .bank-image {
                    width: 45px;
                    height: 45px;
                    float: left;
                }

                .description {
                    margin-left: 10px;
                    overflow: hidden;
                    float: left;

                    h3 {
                        font-size: 18px;
                        color: #071c4d;
                        margin-bottom: 0;
                    }

                    p {
                        font-weight: normal;
                        font-size: 16px;
                        color: #071c4d;
                        margin-bottom: 0;
                    }

                }
            }


        }



        .disclaimer {
            font-weight: 300;
            font-size: 14px;
            color: #B1B1B1;
        }

        .gj-datepicker {
            .datepicker{
                border-right: 0;
            }

            .input-group-append {
                .btn {
                    padding-right: 30px;
                }
            }
        }

        .btn-add-now {
            background-color: #071c4d;
            color: #ffffff;

            &:hover {
                background-color: #183886;
                color: #ffffff;
            }
        }
    }

    .card-right {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0;
    }

    .features {
        margin-top: 20px;

        h3 {
            font-size: 18px;
            color: #071c4d;
            margin-bottom: 0;
        }

        p {
            margin-bottom: 0;
        }

        .description {
            margin-left: 10px;
            overflow: hidden;
            float: left;
        }

        .feature-image {
            width: 45px;
            height: 45px;
            float: left;
        }
    }

    .gallery {
        .xzoom-container {
            display: block;

            .xzoom {
                // width: 100%;
                box-shadow: none;
                margin-bottom: 10px;
            }

            .xactive {
                border: 6px solid #1ABC9D;
                box-shadow: none;
            }
        }

        .card-gallery {
            img {
                max-height: 240px;

            }
        }
    }


    .members {
        .member-image {
            width: 40px;
            height: 40px;
        }
    }

    .join-container {
        margin-top: -16px;
    }

    .btn-join-now {
        background-color: #ff9e53;
        color: #ffffff;
        border-radius: 0;

        &:hover {
            background-color: #ffb57c;
            color: #ffffff;
        }
    }

}

</style>