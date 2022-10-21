<template>
  <div class="container-lg container-fluid-md my-3 shadow-sm border">
    <div class="row my-3 px-3 d-flex justify-content-center">
      <div class="col-md-2 col-sm-3 col-12 my-auto mx-auto d-flex justify-content-center">
        <img class="img-fluid image-container" :src="imgPath">
      </div>
      <div
        class="col-md-10 col-9 col-sm-9 my-sm-auto text-center text-sm-start"
      >
        <h5 class="lead my-2">{{ heading}}</h5>
        <hr />
        <p> {{ descripton }} </p>
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
    name:"pointOfInterest",
    props:{
        imgPath: {
            required: true,
            type: String
        },
        descripton: {
            required: true,
            type: String
        },
        heading: {
            required: true,
            type: String
        },
        id: {
            required: false,
            type: Number
        },
    },

    methods:{
   discover(){
        this.$router.push({name:'all-pois-poi', query: {id: this.id}}); //Define id
        console.log("all-pois-poi/", this.id);
      }
  }
}
</script>
