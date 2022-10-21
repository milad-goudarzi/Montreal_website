<template>
  <div class="container-lg container-fluid-md my-3 shadow-sm border">
    <div class="row my-3 d-flex justify-content-center">
      <!-- <div class="image-container col-md-2 col-sm-3 col-12 my-auto mx-auto">
        <img class="img-fluid" :src="imgPath" />
      </div> -->
      <div
        class="col-md-10 col-9 col-sm-9 my-sm-auto text-center text-sm-start"
      >
        <h5 class="lead my-2">{{ heading }}</h5>
        <hr />
        <p>{{ location }}</p>
        <p>Hours: {{ hours }}</p>
        <div class="d-flex justify-content-end">
          <button @click="goTo()" class="btn btn-primary card-button">
            Go to Website
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: 1s ease;
  opacity: 1;
}

.image-container {
  height: 150px;
  width: 120px;
  padding: 0px 0px;
}

.image-container > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  name: "listOfServices",
  props: {
    Neighbourhood: {
      required: true,
      type: String,
    },
    hours: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    url: {
      required: true,
      type: String,
    },
    heading: {
      required: true,
      type: String,
    },
    location: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
    //   url: "",
    };
  },

  methods: {
    goTo() {
      window.location = this.url;
    },
  },
};
</script>
