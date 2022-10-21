<template>
  <div class="card d-inline-block my-4 shadow mx-auto">
    <div class="image-container d-flex justify-content-center">
      <img
      class="img-fluid"
      :src="imgPath"
      alt="..."
      />
    </div>
      
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center ">{{heading}}</h5>
        <p class="card-text text-start d-flex justify-content-center ">
          
          <b></b>{{duration}}<br>
          <!-- <b>Description:</b>{{finalCardDescription}} -->
        </p>
        <div class="d-flex justify-content-center">
        <button @click="discover()" class="btn btn-primary card-button">Discover</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: 0.3s ease;
  opacity:1;
  width: 600px;
}

.card:hover {
  border: 4px solid #8ad3d3;
}

.image-container {
  height: 250px;
  padding: 0px 0px;
}

.image-container > img {
  object-fit: cover;
  width:100%;
  height: 100%;
}
</style>

<script>
export default {
  name: "CardItineraries",
  props: {
    heading: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: false,
    },
  },
  data(){
    return{
      finalCardDescription: ''
    }
  },
/*
  mounted() {
      
      const num = 60;
      if (this.description.length >= num) {
        this.finalCardDescription = this.description.slice(0, num) + '...'
      } else {
        this.finalCardDescription = this.description
      }
  },*/

  methods:{
   discover(){
   this.$router.push({name:'all-itineraries-itinerary', params: {id: this.id}}); //Define id
   
      }
  }

  // methods:{
  //   cursorOver(){
  //     console.log("Over")
  //   },
  //   cursorOut(){
  //     console.log("Out")
  //   }
  // }
};
</script>
