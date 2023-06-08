<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary menu">
        <div class="container-fluid">
            <router-link to="/Camera-page" class="navbar-brand" href="../public/index.html"><img src="../assets/logo.png"
                    alt="logo-img" id="logo-img"/></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page"
                            to="/camera" target="_self">Camera</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/DSLR-Camera" class="dropdown-item" href="#">DSLR</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link to="Compact-Camera" class="dropdown-item" href="#">Compact</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link to="/Mirrorless-Camera" class="dropdown-item" href="#">Mirrorless</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link to="/Film-Camera" class="dropdown-item" href="#">Film</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link to="/Instant-Camera" class="dropdown-item" href="#">Instant</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link to="/Camcorder-Camera" class="dropdown-item" href="#">Camcorder</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link to="/Action-Camera" class="dropdown-item" href="#">Action</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link active" aria-current="page" href="#">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signIn" href="#">Sing In</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search" >
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Menu-bar',
 

}
</script>
<style scoped>
    #logo-img {
    width: 3.0rem;
    margin: 0 auto;
    }
    .navbar.navbar-expand-lg.bg-body-tertiary.menu {
        font-size: 1.063em;
    }

</style>