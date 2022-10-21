<template>
  <div class="container-lg container-fluid-md my-3 shadow-sm border">
    <div class="row my-3 px-3 d-flex justify-content-center">
      <div class="col-md-2 col-sm-3 col-12 my-auto mx-auto d-flex justify-content-center">
        <img class="img-fluid image-container" :src="imgPath" />
      </div>
      <div
        class="col-md-10 col-9 col-sm-9 my-sm-auto text-center text-sm-start"
      >
        <h5 class="lead my-2">{{ type }}</h5>
        <hr />
        <p> {{ description }} </p>
        <div class="row justify-content-center justify-content-md-end">
          <button @click="discover()" class="btn btn-primary card-button col-md-2 col-4">
            Discover
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
  height: 130px;
  width: 130px;
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
  name: "CardService",
  props: {
    imgPath: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // url: {
    //   type: String,
    //   required: true,
    // },
  },


  // mounted() {
  //   const num = 60;
  //   if (this.description.length >= num) {
  //     this.finalCardDescription = this.description.slice(0, num) + "...";
  //   } else {
  //     this.finalCardDescription = this.description;
  //   }
  // },

  /////////I need to retrieve the data by type

  methods: {
    discover() {
      //$router.push({ name: "services", params: { type: this.type } });
      this.$router.push({ name: "all-services-service", query: { type: this.type } });
      console.log("params", this.type);
    },
  },
};
</script>
