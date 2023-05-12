<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary menu">
        <div class="container-fluid">
            <a class="navbar-brand" href="../public/index.html"><img src="../assets/logo.png"
                    alt="logo-img" id="logo-img"/></a>
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
                            <li><a class="dropdown-item" href="#">DSLR</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Compact</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Mirrorless</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Film</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Instant</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Camcorder</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Action</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link active" aria-current="page" href="#">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/member" href="/Login/login.html">Sing In</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
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