<template>
  <div>
    <div style="background-color: #042a2b" class="container-lg container-fluid-md my-3 pb-3">
      <h1 class="lead py-3 px-5 text-light" id="caption">POI - Information : {{ heading }}</h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-8 col-9 col-sm-9 my-sm-auto text-center text-sm-start header">
          <tr>
            <p class="text-light tab">{{ cost }}</p>
          </tr>
          <tr>
            <p class="text-light tab">{{ address }}</p>
          </tr>
          <tr>
            <p class="text-light tab">{{ hours }}</p>
          </tr>
          <tr>
            <p class="text-light tab"><a class="link" :href="url">Website</a></p>
          </tr>

        </div>
        <div class="col-md-4 col-sm-3 col-12 header">
          <img class="img-header" :src="imgPathMain"/>
        </div>
      </div>
    </div>
    <div class="container-lg container-fluid-md my-3 pb-3">
    <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-8 col-9 col-sm-9 my-sm-auto text-center text-sm-start">
            <p class="text-dark text-content">{{ descriptionMain }}</p>
          <p style="text-align: center;">
            <img class="img-poi" :src="imgPathText"/>
          </p>
            <p class="text-dark text-content">{{ descriptionSecond }}</p>
        </div>
      </div>
      
      <div v-if="carouselData.length > 0" class="row justify-content-center py-3">
        <h2 class="lead text-poi text-dark text-center">This point of interest is the host of following events:</h2>
              <card
                v-for="data in carouselData"
                :key="data.id"
                :cardTitle="data.heading"
                :imgPath="data.imgPathMain"
                :cardDescription="data.description"
                :season="data.season"
                :month="data.month"
                :id="data.id"
              />
           
      </div>

        <div class="row my-2 px-5  d-flex justify-content-center">
            <!-- <img class="img-banner" :src="imgPathMap"/>-->
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="map" id="gmap_canvas" src="https://maps.google.com/maps?q=montr%C3%A9al&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <h2 class="lead text-poi text-dark">You might also like:</h2>
        <div class="col-md-4 col-sm-3 col-12">
          <poiCard class="card-poi"
                :cardTitle="second.heading"
                :imgPath="second.imgPathMain"
                :cardDescription="second.descriptionMain"
                :month="second.hours"
                :id="second.id"
            />
        </div>
        <div class="col-md-4 col-sm-3 col-12">
          <poiCard class="card-poi"
                :cardTitle="third.heading"
                :imgPath="third.imgPathMain"
                :cardDescription="third.descriptionMain"
                :month="third.hours"
                :id="third.id"
            />
        </div>
        <div class="col-md-4 col-sm-3 col-12">
          <poiCard class="card-poi"
                :cardTitle="fourth.heading"
                :imgPath="fourth.imgPathMain"
                :cardDescription="fourth.descriptionMain"
                :month="fourth.hours"
                :id="fourth.id"
            />
        </div>
      </div>
    </div>
  </div>
   
</template>

<style scoped>

h1 {
  font-family: "Belleza", sans-serif;
  font-size: 1.5em;
}

.tab{
    border-bottom: 1px solid white;
    padding: 20px;
    margin-bottom: 0;
    text-align: center;
}

.header{
    width: 50%;
    display: grid;
}

.text-poi{
    padding-top: 3rem;
    padding-bottom: 1rem;
}

.img-poi{
    width: 500px;
    height: 400px;
    border-radius: 5px;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.img-header{
    width: 500px;
    height: 400px;
    border-radius: 5px;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.link{
    color: white;
}

.card-poi{
    width: 100%;
    margin-bottom: 20px;
}

.text-content{
    padding: 20px;
    text-align: justify;
}

.gmap_canvas {
    overflow:hidden;
    background:none!important;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.mapouter{
    position:relative;
    text-align:right;
}

.map{
    height: 400px;
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media only screen and (max-width: 1200px) {
  .img-poi{
    width: 100%;
    height: 100%;
  }

.img-header{
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
  }

.header{
    width: 100%;
  }

}

</style>


<script>
import CommonMixin from '~/mixins/common'
import axios from 'axios'
import poiCard from "~/components/poiCard.vue";
export default {
  name: 'poinInfo',
  mixins: [CommonMixin],
  components: { poiCard },
  data: () => ({
    //first: '',
    second: '',
    third: '',
    fourth: '',
    carouselData: '',
  }),
  mounted() {
    
    (async () => { 
      const min = 1
      const max = 33
      await Promise.all([
        //axios.get('/api/pois/' + 1), //replace by id
        axios.get('/api/pois/' + Math.floor(Math.random()*(max-min+1)+min)), //random value between 0 and 33
        axios.get('/api/pois/' + Math.floor(Math.random()*(max-min+1)+min)), //random value between 0 and 33
        axios.get('/api/pois/' + Math.floor(Math.random()*(max-min+1)+min)), //random value between 0 and 33
      ])
      .then(axios.spread((second_get, third_get, fourth_get) => {
        //this.first = first_get.data
        this.second = second_get.data
        this.third = third_get.data
        this.fourth = fourth_get.data
      }))

    })(); 
  },

  async asyncData({ route, $axios }) {
    const { id } = route.query
    console.log("sdskkdjskj ", id)
    const {data} = await $axios.get('/api/pois/' + id) //Should be ('/api/events/' + id)
    // const relatedData = data[1]
    // data = data[0]
    console.log("/api/pois/", data)
    return {
      imgPathMain: data.imgPathMain,
      descriptionMain: data.descriptionMain,
      descriptionSecond: data.descriptionSecond,
      heading: data.heading,
      address: data.address,
      hours: data.hours,
      cost: data.cost,
      imgPathText: data.imgPathText,
      imgPathMap: data.imgPathMap,
      category: data.category,
      hostedIn: data.hostedIn,
      url: data.url,
      hosts: data.hosts,
      itinerary: data.itinerary,
      id: data.id,
      carouselData: data.events,
    }
  } 

}
</script>