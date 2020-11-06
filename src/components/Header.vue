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
        <router-link to="/adata-all/SEJARAH" class="btn btn-get-started px-4 mt-4">
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