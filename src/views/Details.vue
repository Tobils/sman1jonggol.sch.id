<template>
    <div class="details">
        <Navbar></Navbar>

        <main>
            <section class="section-details-header"></section>
            <section class="section-details-content">
                <div class="container" v-if="data">

                    <div class="row">
                        <div class="col p-0">
                            <nav>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item" v-if=" this.$route.params.tipe.toLowerCase() !== 'berita' ">
                                        {{ this.$route.params.id }}
                                    </li>
                                    <li class="breadcrumb-item" v-else>
                                        {{ this.$route.params.tipe }}
                                    </li>
                                    <li class="breadcrumb-item active">
                                        Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div class="row" v-if=" this.$route.params.tipe.toLowerCase() == 'berita' && this.$route.params.id.toLowerCase() == 'all'">

                            <div class="col-lg-12 pl-lg-0">
                                <div class="card card-details">
                                    <div class="d-flex flex-row align-content-stretch flex-wrap">

                                        <div class="card mx-2 my-2" style="width: 18rem;" v-for="berita in data" :key="berita.id" >
                                            <div class="berita-image" v-if="berita.galleries.length > 0">
                                                    <img :src="berita.galleries[0].photo" alt="" class="card-image-top" width="100px">
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    {{ berita.judul.toUpperCase() }} 
                                                </h5>
                                            </div>
                                            <router-link :to="'/details/berita/'+berita.id" class="btn btn-primary px-4">
                                                Lihat
                                            </router-link>
                                            </div>
                                    </div>
                                </div>
                            </div>

                    </div>


                    <div class="row" v-else-if=" this.$route.params.tipe.toLowerCase() == 'berita' && this.$route.params.id.toLowerCase() != 'all'">
                        <div class="col-lg-8 pl-lg-0">
                            <div class="card card-details">

                                <h1 class="text-capitalize mb-2">
                                    {{ data.judul }}
                                </h1>



                                <div class="gallery" v-if="data.galleries.length > 0">
                                </div>


                                <p class="text-justify"  v-html="data.deskripsi">
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card card-details card-right">
                                <h2>Berita Lainnya</h2>
                                <hr>
                                <table class="berita-lainnya text-left">
                                    <li class="list-unstyled my-2" v-for="berita in lainnya" :key="berita.id">
                                        <router-link :to="'/details/berita/'+berita.id" class="text-lowercase" v-if="berita.id != id">
                                            {{berita.judul}}
                                        </router-link>
                                    </li>
                                </table>
                            </div>
                        </div>
                    </div>
                    


                    <div class="row" v-else-if="this.$route.params.tipe.toLowerCase() == 'kontak'">
                        <div class="col-lg-12 pl-lg-0">
                            <div class="card card-details">
                                <div class="d-flex flex-row align-content-stretch flex-wrap">

                                    <div class="card shadow  mx-2 my-2" style="width: 18rem;" v-for="kontak in data" :key="kontak.id">
                                        <img :src="kontak.photo" alt="photo" width="100px" class="rounded-circle  ml-auto mr-auto mt-3">
                                        <div class="card-body">
                                            <p class="text-center text-primary">{{ kontak.name }}</p>
                                            <hr>
                                            <p class="text-center" v-if="kontak.kampus_alumni !== undefined">
                                                {{ kontak.kampus_alumni.name }}
                                            </p>
                                            <p class="text-center" v-if="kontak.subject !== undefined">
                                                {{ kontak.subject }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row" v-else-if="this.$route.params.tipe.toLowerCase() == 'profile'">
                        <div class="col-lg-12 pl-lg-0">
                            <div class="card card-details">

                                <h1 class="text-capitalize mb-2">
                                </h1>



                                <div class="gallery">
                                    
                                </div>


                                <p class="text-justify" v-html="data.profile[0].deskripsi">

                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </main>
        <Footer></Footer>
        <router-view></router-view>
    </div>    
</template>

<script>
/**
 * route params tipe [berita, profile]
 * route params id berita -> [all, id]
 * route params id profile -> [sejarah, guru, tata-usaha, alumni, ekskul]
 */
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
// import { ProductZoomer } from 'vue-product-zoomer';


export default {
    name: 'Details',
    components: {
        Navbar,
        Footer,
        // ProductZoomer
    },
    data(){
        return{
            tipe: null,
            id: null,
            data: null,
            lainnya: Object,
            images: Object,
            zoomerOptions: {
                pane: "container-round",
                hoverDelay: 300,
                namespace: "inline-container",
                move_by_click: true,
                scroll_items: 4
            }
        }
    },
    methods: {
        setImageProperties(galleries)
        {   
            let normal_size = []
            let i = 1;
            for (let item in galleries)
            {
                normal_size.push({
                    id: i,
                    url: require(item.photo)
                })
                i++
            }

            this.images.push(normal_size);
        },

        /**
         * berita
         *  /berita
         *  /:id
         * 
         * profile
         *  /kontak?tipe = [GURU|TATA_USAHA|ALUMNI]
         *  /profile?tipe= [SEJARAH|EKSKUL] 
         * 
         */
        setData(id, tipe)
        {
            this.tipe = tipe
            this.id = id

            switch (this.tipe) {
                case 'berita':
                    if(this.id == 'all')
                    {
                        this.uri = 'https://cms.sman1jonggol.sch.id/api/v1/' + this.tipe
                        axios
                            .get(this.uri)
                            .then((res) => {
                                this.data = res.data.data;
                            })
                            .catch((err) => {
                                console.log(err)
                            })

                    }else {
                        /**
                         * berita lainnya
                         */
                        this.id = this.$route.params.id;
                        this.uri = 'https://cms.sman1jonggol.sch.id/api/v1/' + this.tipe
                        axios
                            .get(this.uri)
                            .then(res => {
                                this.lainnya = res.data.data
                            })
                            .catch(err =>console.log(err))

                        /**
                         * spesifik berita id
                         */
                        this.uri = 'https://cms.sman1jonggol.sch.id/api/v1/berita' + '/' + this.id
                        axios
                            .get(this.uri)
                            .then((res) => {
                                this.data = res.data.data[0]
                                // if(res.data.data[0].galleries.length > 0)
                                // {
                                //     this.setImageProperties(res.data.data[0].galleries)
                                // }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                    break;

                case 'kontak':
                    this.uri = 'https://cms.sman1jonggol.sch.id/api/v1/' + this.tipe + '?tipe=' + this.id.toUpperCase()
                    axios
                        .get(this.uri)
                        .then((res) => {
                            switch (this.id.toLowerCase()) {
                                case 'guru':
                                    this.data = res.data.data.guru
                                    break;

                                case 'tata_usaha':
                                    this.data = res.data.data.tata_usaha
                                    break;

                                case 'alumni':
                                    this.data = res.data.data.alumni
                                    break;
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    break;

                case 'profile':
                    this.uri = 'https://cms.sman1jonggol.sch.id/api/v1/' + this.tipe + '?tipe=' + this.id.toUpperCase()
                    axios
                        .get(this.uri)
                        .then((res) => {
                            this.data = res.data.data
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    break;

                default:
                    break;
            }

            /**
             * tipe berita
             */
                
            /**
             * profile [guru, tata-usaha, alumni, sejarah]
             */
        }
    },
    created() {
        let tipe = this.$route.params.tipe
        let id = this.$route.params.id
        this.setData(id, tipe)
    },
    watch: {
        $route(to) {
            this.data = null;
            this.setData(to.params.id, to.params.tipe);
        }
    }
    
    // beforeRouteUpdate (to, from, next) {
    //     this.setData(to.params.id, to.params.tipe);
    //     next();
    // }    
}
</script>

<style lang="scss" scoped>

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
    }
}

</style>