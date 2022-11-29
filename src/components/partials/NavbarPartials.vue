<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand mx-auto" href="index.html">
        <img src="../../assets/images/template-assets/logo.png" alt="company logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item me-3">
            <router-link to="/" class="nav-link active">Home</router-link>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          </li>
          <li class="nav-item me-3">
            <a class="nav-link" href="#">Causes</a>
          </li>
          <li class="nav-item me-3">
            <router-link to="/about" class="nav-link">About</router-link>
            <!-- <a class="nav-link" href="#">About</a> -->
          </li>
          <li class="nav-item dropdown me-3">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link" href="#">Blog</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <!-- <li class="nav-item me-2">
            <button class="ch-btn ch-primary-btn" href="#">Contact Us</button>
          </li> -->
          <li class="nav-item me-3">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link" href="#">Registration</a>
          </li>
          <!-- <li class="nav-item">

                    <button class="ch-btn ch-btn-white-outline " href="#"><i class="fa-solid fa-magnifying-glass"></i></button>
                  </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
