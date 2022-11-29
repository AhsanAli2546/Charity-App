<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand mx-auto" href="index.html">
        <img src="../../assets/images/template-assets/logo.png" alt="company logo" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Pages
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
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
            <a type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Login
            </a>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog ">
                <div class="modal-content card ch-bg-primary-light border-0">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Charity</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div
                      class="PrimaryColor d-flex aligns-items-center justify-content-center mx-auto card w-100 shadow-sm p-3 mb-5 bg-white rounded ">
                      <div class="d-flex flex-column ">

                        <h1 class="text-center ch-text-primary">Sign in with your email</h1>
                        <div class="col-12">
                          <span class="mx-5 my-1"></span>
                          <span>Do not have an Account?</span>
                          <a href="#" class="ch-text-primary font-montserrat text-decoration-none">Sigin Up</a>
                        </div>


                      </div>
                      <span class="my-2"></span>
                      <form id="form" action="" method="post">
                        <div class="mb-3">

                          <input name="email" placeholder="Email Address" type="text"
                            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

                        </div>
                        <!-- <div class="mb-3">

                          <input name="password" placeholder="Password" type="password"
                            class="form-control" id="exampleInputPassword1">

                       
                        </div> -->
                        <div class="mb-3">
                          <button type="submit" value="Validate" name="login"
                            class="ch-btn ch-primary-btn w-100">Continue</button>
                        </div>
                      </form>
                      <div class="text-center">
                      <a href="#" class="ch-text-primary font-montserrat text-decoration-none">Forget your Password?</a>

                    </div>
                    </div>
                  
                  </div>
                  <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                  </div> -->
                </div>
              </div>
            </div>
            <!-- <router-link to="/login" class="nav-link">Login</router-link> -->
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
