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
                                        All
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-lg-12 pl-lg-0">
                            
                            <div class="card card-details" v-if="this.tipe === 'berita'">
                                 <div class="section-data row justify-content-center" v-if="data.length > 0">
                                    <div class="data-item" v-for="berita in data" :key="berita.id">

                                        <div class="card-data text-center d-flex flex-column">
                                            <div class="data-image" v-if="berita.galleries.length > 0">
                                                <img :src="berita.galleries[0].photo" alt="" width="150px">
                                            </div>
                                            <div class="data-title text-lowercase">
                                                {{ berita.judul }} 
                                            </div>
                                            <div class="data-button my-auto">
                                                <a :href="'/details/'+tipe+'/'+berita.id" class="btn btn-data-details px-4">
                                                    Lihat
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <!-- guru, tata usaha, alumni memiliki pola page yang sama -->
                            <div class="card justify-content-center card-details mr-3 d-flex flex-row align-content-stretch flex-wrap" v-else-if="this.tipe === 'guru' || this.tipe === 'tata_usaha' || this.tipe === 'alumni'">
                               <div v-for="kontak in data" :key="kontak.id">
                                    <div class="card shadow card-kontak text-center mr-4">

                                        <div class="kontak-content">
                                            <img :src="kontak.photo" alt="user" class="mb-2 rounded-circle">
                                            <h3 class="mb-4">
                                                {{ kontak.name }}
                                            </h3>
                                        </div>

                                        <div class="testimoni" v-if="tipe == 'alumni'">
                                            <p class="testimonial" v-html="kontak.testimoni"></p>
                                            <hr>
                                            {{ kontak.kampus_alumni.name }}
                                        </div>

                                        <div v-else>
                                            <hr>    
                                            <p class="mapel">
                                                {{ kontak.subject }}
                                            </p>
                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <!-- profile -> [sejarah, ekskul] -->
                            <div class="card card-details" v-else-if="this.tipe === 'sejarah' || this.tipe === 'ekskul'">
                                <!-- judul  -->
                                <h1 class="text-capitalize mb-2">
                                    {{ data[0].judul }}
                                </h1>
                                <p>

                                </p>
                                <!-- deskripsi -->
                                <p class="text-justify" v-html="data[0].deskripsi"></p>
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
    name:'Details',
    components: {
        Navbar,
        Footer,

    },
    data(){
        return {
            data: Object,
            tipe: String,
            uri: 'http://cms.sman1jonggol.sch.id/api/v1/'
        }
    },
    methods: {
        getData(){
            this.tipe = this.$route.params.tipe;
            this.tipe = this.tipe.toLowerCase();
            
            if(this.tipe == 'berita')
            {
                this.uri = this.uri + this.tipe
                axios
                    .get(this.uri)
                    .then(res => this.data = res.data.data)
                    .catch(err =>console.log(err))
            }
            else if(this.tipe == 'guru') 
            {
                this.uri = this.uri + 'kontak?tipe=' + this.tipe
                axios
                    .get(this.uri)
                    .then(res => this.data = res.data.data.guru)
                    .catch(err =>console.log(err))
            }

            else if(this.tipe == 'tata_usaha') 
            {
                this.uri = this.uri + 'kontak?tipe=' + this.tipe
                axios
                    .get(this.uri)
                    .then(res => this.data = res.data.data.tata_usaha)
                    .catch(err =>console.log(err))
            }

            else if(this.tipe == 'alumni') 
            {
                this.uri = this.uri + 'kontak?tipe=' + this.tipe
                axios
                    .get(this.uri)
                    .then(res => this.data = res.data.data.alumni)
                    .catch(err =>console.log(err))
            }

            else if(this.tipe == 'sejarah' || this.tipe == 'ekskul') 
            {
                this.uri = this.uri + 'profile?tipe=' + this.tipe
                axios
                    .get(this.uri)
                    .then((res) =>{
                        this.data = res.data.data.profile   
                        console.log(this.uri)
                    })
                    .catch(err =>console.log(err))
            }
        }
    },
    mounted(){
       this.getData() 
    }
}
</script>
<style lang="scss">

// untuk data berita 
.section-data{
    .data-item {
        margin-right: 20px;

        .card-data {
            padding: 20px;
            min-height: 280px;
            background-color: #081B40;
            color: #081B40;
            background-size: cover;
            margin-bottom: 5px;
            border-radius: 10px;
        }

        .data-title {
            margin-top: 20px;
            font-size: 18px;
            color: #ffffff;
        }

        .data-button {
            margin-bottom: 20px;
            .btn-data-details {
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

        // untuk data kontak 
        .card-kontak {
            padding: 40px 20px 10px;
            border-radius: 11px;
            margin-bottom: 20px;
            min-height: 140px;
            max-width: 200px;
        }

        .kontak-content {
            img {
                border-radius: 50%;
                max-width: 150px !important;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
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
}

</style>