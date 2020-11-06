<template>
    <!-- header  -->
    <header class="text-center">
        <h1>
            SMAN I JONGGOL
            <br>
        </h1>
        <h3>
            Kampus hijau berbudaya
        </h3>
        <p class="mt-5">
            Jl. Sukasirna, Jonggol, Bogor
        </p>
        <router-link to="/details/profile/sejarah" class="btn btn-get-started px-4 mt-4">
            Selengkapnya
        </router-link>
    <router-view/>
        
    </header>
    
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String
    }
}
</script>

<style lang="scss">
// header
header {
    padding: 180px 0 160px;
    // margin-top: -70px;
    // background-image: url('../images/header.jpg');
    // background-size: cover;

    h1, p {
        color: #071c4d;
    }

    h1 {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 50px;
    }

    p {
        font-size: 22px;
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