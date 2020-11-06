<template>
  <div class="home">
    <Navbar></Navbar>
    <Header></Header>

    <main>
      <Berita :data="data.berita" :home="true"></Berita>
      <Kampus :data="data.kampus"></Kampus>
      <Testimoni :data="data.alumni"></Testimoni>
      <Guru :data="data.guru"></Guru>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Berita from '@/components/Berita.vue';
import Kampus from '@/components/Kampus.vue';
import Testimoni from '@/components/Testimoni.vue';
import Guru from '@/components/Guru.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    Berita,
    Kampus,
    Testimoni,
    Guru,
    Footer
  },
  props:{    
  },
  data: function(){
    return {
      data: []
    }
  },
  methods: {
    getData()
    {
        axios
          .get('http://cms.sman1jonggol.sch.id/api/v1/home')
          .then((res) => {
            this.data = res.data.data
          })
          .catch(err =>console.log(err))
    }
  },
  mounted(){
    this.getData()
  }
}
</script>
