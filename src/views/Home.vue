<template>
    <div class="home">
        <Navbar></Navbar>
        <Header></Header>
        <main>
            <HomeBerita :data="data.berita"></HomeBerita>
            <HomeKampus :data="data.kampus"></HomeKampus>
            <HomeAlumni :data="data.alumni"></HomeAlumni>
            <HomeGuru :data="data.guru"></HomeGuru>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

import HomeBerita from '@/components/home-berita.vue'
import HomeKampus from '@/components/home-kampus.vue'
import HomeAlumni from '@/components/home-alumni.vue'
import HomeGuru from '@/components/home-guru.vue'

import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        Header,
        Navbar,
        Footer,
        HomeBerita,
        HomeKampus,
        HomeAlumni,
        HomeGuru
    },
    data(){
        return {
            data: null,
            uri: 'https://cms.sman1jonggol.sch.id/api/v1/home'
        }
    },
    methods: {
        fetchHomeData()
        {
            axios
                .get(this.uri)
                .then(res => {
                    this.data = res.data.data
                })
                .catch(err =>console.log(err))
        }
    },
    mounted(){
        this.fetchHomeData()
    }
}


</script>