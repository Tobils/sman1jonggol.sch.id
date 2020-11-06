<template>
    <div class="home">
        <Navbar></Navbar>
        <Header></Header>
        <main>
            <HomeBerita></HomeBerita>
            <!-- <HomeKampus></HomeKampus> -->
            <!-- <HomeAlumni></HomeAlumni> -->
            <!-- <HomeGuru></HomeGuru> -->
        </main>
        <Footer></Footer>
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

import HomeBerita from '@/components/home-berita.vue'
// import HomeKampus from '@/components/home-kampus.vue'
// import HomeAlumni from '@/components/home-alumni.vue'
// import HomeGuru from '@/components/home-guru.vue'

import Footer from '@/components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Navbar,
        Footer,
        HomeBerita,
        // HomeKampus,
        // HomeAlumni,
        // HomeGuru
    }
}


</script>