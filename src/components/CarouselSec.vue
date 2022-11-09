<template>
  <!-- Carousel -->
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner bg-secondary">
      <div class="carousel-item active">
        <div class="container my-5">
          <div class="d-flex justify-content-center">
            <div class="hr-line border-white"></div>
            <div>
              <p class="mx-2 text-white font-montserrat" style="font-size: 18px">
                Our Testimonials
              </p>
            </div>
            <div class="hr-line border-white"></div>
          </div>
          <p
            class="font-playfair text-center text-white"
            style="font-size: 39px; font-weight: 700; line-height: 50px"
          >
            What Poeple Say
          </p>
          <div class="d-flex justify-content-center mb-2">
            <img
              class="rounded-circle"
              src="../assets/images/avatar.jpg"
              style="width: 80px"
              alt="avatar image"
            />
          </div>
          <p
            class="font-playfair text-center text-white"
            style="font-size: 20px; font-weight: 700; line-height: 28px"
          >
            Cameron Williamson
          </p>
          <p
            class="font-montserrat text-center text-white mb-4"
            style="font-size: 16px; font-weight: 600; line-height: 24px"
          >
            Founder
          </p>
          <p
            class="font-montserrat text-white text-center"
            style="font-size: 20px; line-height: 28px"
          >
            Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek
            icefish velvet-belly shark, California halibut round stingray northern sea
            robin. Southern grayling trout-perchSharksucker sea toad candiru rocket danio
            tilefish stingray deepwater stingray Sacramento splittail, Canthigaster
            rostrata.
          </p>
        </div>
        <!-- <img src="..." class="d-block w-100" alt="..."> -->
      </div>
      <div class="carousel-item">
        <div class="container my-5">
          <div class="d-flex justify-content-center">
            <div class="hr-line border-white"></div>
            <div>
              <p class="mx-2 text-white font-montserrat" style="font-size: 18px">
                Our Testimonials
              </p>
            </div>
            <div class="hr-line border-white"></div>
          </div>
          <p
            class="font-playfair text-center text-white"
            style="font-size: 39px; font-weight: 700; line-height: 50px"
          >
            What Poeple Say
          </p>
          <div class="d-flex justify-content-center mb-2">
            <img
              class="rounded-circle"
              src="../assets/images/avatar.jpg"
              style="width: 80px"
              alt="avatar image"
            />
          </div>
          <p
            class="font-playfair text-center text-white"
            style="font-size: 20px; font-weight: 700; line-height: 28px"
          >
            Cameron Williamson
          </p>
          <p
            class="font-montserrat text-center text-white mb-4"
            style="font-size: 16px; font-weight: 600; line-height: 24px"
          >
            Founder
          </p>
          <p
            class="font-montserrat text-white text-center"
            style="font-size: 20px; line-height: 28px"
          >
            Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek
            icefish velvet-belly shark, California halibut round stingray northern sea
            robin. Southern grayling trout-perchSharksucker sea toad candiru rocket danio
            tilefish stingray deepwater stingray Sacramento splittail, Canthigaster
            rostrata.
          </p>
        </div>
        <!-- <img src="..." class="d-block w-100" alt="..."> -->
      </div>
      <div class="carousel-item">
        <div class="container my-5">
          <div class="d-flex justify-content-center">
            <div class="hr-line border-white"></div>
            <div>
              <p class="mx-2 text-white font-montserrat" style="font-size: 18px">
                Our Testimonials
              </p>
            </div>
            <div class="hr-line border-white"></div>
          </div>
          <p
            class="font-playfair text-center text-white"
            style="font-size: 39px; font-weight: 700; line-height: 50px"
          >
            What Poeple Say
          </p>
          <div class="d-flex justify-content-center mb-2">
            <img
              class="rounded-circle"
              src="../assets/images/avatar.jpg"
              style="width: 80px"
              alt="avatar image"
            />
          </div>
          <p
            class="font-playfair text-center text-white"
            style="font-size: 20px; font-weight: 700; line-height: 28px"
          >
            Cameron Williamson
          </p>
          <p
            class="font-montserrat text-center text-white mb-4"
            style="font-size: 16px; font-weight: 600; line-height: 24px"
          >
            Founder
          </p>
          <p
            class="font-montserrat text-white text-center"
            style="font-size: 20px; line-height: 28px"
          >
            Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek
            icefish velvet-belly shark, California halibut round stingray northern sea
            robin. Southern grayling trout-perchSharksucker sea toad candiru rocket danio
            tilefish stingray deepwater stingray Sacramento splittail, Canthigaster
            rostrata.
          </p>
        </div>
        <!-- <img src="..." class="d-block w-100" alt="..."> -->
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
