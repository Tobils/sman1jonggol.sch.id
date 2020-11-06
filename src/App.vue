<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
    background-color: #ffffff;
    font-family: 'Assistant', sans-serif;
    color: #071c4d;
}

// navbar
.navbar-brand {
    img {
        max-height: 40px;
    }

    h4 {
        padding: 0;
    }

}

// button navbar right
.btn-navbar-right {
    margin-top: -10px !important;
    margin-bottom: -8px !important;
    margin-right: -33px !important;

    height: 70px;
    border-radius: 0;
}

// button login
.btn-login {
    background-color: #071c4d;
    color: #ffffff;

    &:hover {
        background-color: #1e3771;
        color: #ffffff;
    }
}


// ubar warna tulisan pada navbar
.navbar-light {
    .navbar-nav {
        .nav-link{
            color: #071c4d;

            &.active{
                font-weight: bold;
                color: #071c4d !important;
            }
        }
    }
}


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

// statistic
.section-stats{
    margin-top: -50px;

    .stats-detail {
        // margin-top: 15px;
        background-color: #ffffff;
        padding-left: 40px;
    }

    h2 {
        margin-top: 18px;
        font-size: 30px;
        margin-bottom: 0;
    }

    p {
        font-size: 16px;
        font-weight: lighter;
    }
}
</style>
