<template>
    <!-- header  -->
    <header class="text-center">
        <div class="section-header"
            data-aos="fade-down" 
            data-aos-delay="500"
        >
            <h1>
                SMAN I JONGGOL
                <br>
            </h1>
            <h4 class="p-2">
                Kampus hijau berbudaya
            </h4>
            <p class="mt-5 m-2">
                Jl. Sukasirna, Jonggol, Bogor
            </p>
            <router-link to="/details/profile/sejarah" class="btn btn-get-started px-4 mt-4">
                Profile
            </router-link>
            <router-view/>
        </div>
        
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
    padding: 180px 0 180px;
    background-color: #cbcbcb;
    margin-top: -90px;
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