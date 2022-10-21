<template>
  <div :class="season" class="card col-md-3 d-inline-block mx-1 shadow">
    <div class="image-container">
      <img
      class="img-fluid"
      :src="imgPath"
      alt="..."
      />
    </div>
      
      <div class="card-body">
        <h5 class="card-title ellipsis">{{cardTitle}}</h5>
        <p class="card-text text-start ellipsis">
          
          <b>Hours:&nbsp;</b>{{month}}<br>
          <b>Description:&nbsp;</b>{{cardDescription}}
        </p>
        <button @click="discover()" class="btn btn-primary card-button">Discover</button>
    </div>
  </div>
</template>
<style scoped>
.card {
  transition: 1s ease;
  opacity:1;
}

.image-container {
  height: 250px;
  padding: 1% 0px;
}

.image-container > img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
<script>
export default {
  name: "PoiItineraryCard",
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
      required: true,
    },
    cardDescription: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: false,
    },
    month: {
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
      if (this.cardDescription.length >= num) {
        this.finalCardDescription = this.cardDescription.slice(0, num) + '...'
      } else {
        this.finalCardDescription = this.cardDescription
      }
      console.log("params", this.id);
  },*/

  methods:{
   discover(){
    this.$router.push({name:'all-pois-poi', query: {id: this.id}}); //Define id
      console.log("poi/", this.id);
      // setTimeout(()=>window.location.reload(), 100)
      // console.log("Here");
    }
  }
  
};

 
</script>
