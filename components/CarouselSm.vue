<template>
  <div class="container-lg container-fluid text-center">
    <div
      class="carousel carousel-dark slide d-block d-md-none"
      id="carouselExampleControlsSmall"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card col-6 d-inline-block mx-1">
            <img
              class="img-fluid"
              src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsSmall"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsSmall"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "carouselSmallAndLowerSizedScreens",
  props: {
    imgPath: {
      type: String,
      required: true,
    },

    eventTitle: {
      type: String,
      required: true,
    },

    eventDescription: {
      type: String,
      required: true,
    },
  },
};
</script>