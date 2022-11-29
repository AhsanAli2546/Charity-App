<script>
export default {
  name: "FooterComp",
};
</script>

<template>
  <footer>
    <section class="container">
      <div class="row w-100 pt-5">
        <div class="col-lg-3">
          <img src="../assets/images/template-assets/logo-green.png" alt="company logo" />
          <p class="mt-2 text-white font-montserrat">10K</p>
          <p class="text-white font-playfair" style="font-weight: 100 !important">
            Worldwide Client <br />
            Already Connected
          </p>
        </div>
        <div class="col-lg-2">
          <p
            class="text-white font-Playfair"
            style="font-weight: 700; font-size: 16px; line-height: 24px"
          >
            Quick Link
          </p>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link font-montserrat p-1"
                style="
                  color: #afafaf;
                  font-size: 16px;
                  line-height: 24px;
                  font-weight: 400;
                "
                aria-current="page"
                href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link font-montserrat p-1"
                style="color: #afafaf"
                aria-current="page"
                href="#"
                >About Us</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link font-montserrat p-1"
                style="color: #afafaf"
                aria-current="page"
                href="#"
                >Blog Post</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link font-montserrat p-1"
                style="color: #afafaf"
                aria-current="page"
                href="#"
                >Photo Gallery</a
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-2">
          <p
            class="text-white font-playfair"
            style="font-weight: 700; font-size: 16px; line-height: 24px"
          >
            Get In Touch
          </p>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link font-montserrat p-1"
                style="color: #afafaf"
                aria-current="page"
                href="#"
                >Contact Us</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link font-montserrat p-1"
                style="color: #afafaf"
                aria-current="page"
                href="#"
                >Our Services</a
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-2">
          <p
            class="text-white font-playfair"
            style="font-weight: 700; font-size: 16px; line-height: 24px"
          >
            Address
          </p>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <p
                class="nav-link font-montserrat p-1"
                style="
                  color: #afafaf;
                  font-size: 16px;
                  line-height: 24px;
                  font-weight: 400;
                "
              >
                2464 Royal Ln. Mesa, New Jersey 45463
              </p>
            </li>
          </ul>
        </div>
        <div class="col-lg-3">
          <p
            class="text-white font-playfair"
            style="font-weight: 700; font-size: 16px; line-height: 24px"
          >
            Newsletter
          </p>
          <div class="d-flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              style="
                height: 40px;
                width: 170px;
                border-radius: 0px;
                outline: none;
                border: none;
                color: #555555;
                padding-left: 10px;
              "
            />
            <button
              class="ch-btn ch-primary-btn"
              style="width: 80px; font-size: 13px; padding: 0.3rem 0.5rem"
            >
              Subscribe
            </button>
          </div>
          <p
            class="w-100 font-montserrat mt-1"
            style="color: #cccccc; font-size: 12px; line-height: 20px; font-weight: 400"
          >
            Your email is safe with us, we don't spam.
          </p>
          <div class="mt-3">
            <p
              class="text-white font-playfair"
              style="font-weight: 700; font-size: 16px; line-height: 24px"
            >
              Follow Me
            </p>
          </div>
          <div>
            <i class="fa-brands fa-twitter p-2 m-1 rounded-circle bg-white"></i>
            <i class="fa-brands fa-square-instagram p-2 m-1 rounded-circle bg-white"></i>
            <i class="fa-brands fa-pinterest p-2 m-1 rounded-circle bg-white"></i>
            <i class="fa-brands fa-youtube p-2 m-1 rounded-circle bg-white"></i>
          </div>
        </div>
      </div>
      <hr class="text-white" />
      <p
        class="text-center font-montserrat mb-0 pb-2"
        style="color: rgb(202, 202, 202); font-size: 14px"
      >
        Designed by Ahsan
      </p>
    </section>
  </footer>
</template>

<style>
/*@import url('../assets/css/index-header.css');*/
</style>
