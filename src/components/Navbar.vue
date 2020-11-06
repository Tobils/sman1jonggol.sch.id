<template>
  <div class="navbar-main">
    <!-- nav bar  -->
    <div class="container">
       
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="/">
                <img src="@/assets/logo/logo.png" alt="logo NOMADS">
                <h4>SMAN 1 JONGGOL</h4>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/data-all/BERITA">Berita Terkini</b-nav-item>

                    <b-nav-item-dropdown text="Staff" right>
                        <b-dropdown-item>
                          <router-link to="/data-all/GURU">
                              Guru
                          </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="/data-all/TATA_USAHA">Tata Usaha</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Ekskull" right>
                        <b-dropdown-item href="/data-all/ekskul">OSIS</b-dropdown-item>
                        <b-dropdown-item href="#">PRAMUKA</b-dropdown-item>
                        <b-dropdown-item href="#">PMR</b-dropdown-item>
                        <b-dropdown-item href="#">KARATE</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item href="/data-all/ALUMNI">Alumni</b-nav-item>
                    <b-nav-item href="http://ppdb.sman1jonggol.sch.id" target="_blank">PPDB</b-nav-item>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

    <!-- agar router view berfungsi -->
    <router-view/>


  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
