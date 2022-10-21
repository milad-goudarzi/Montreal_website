<template>
  <div>
    <div style="background-color: #042a2b" class="container-lg container-fluid-md my-3 pb-3">
        <h1 class="lead py-3 px-5 text-light" id="caption">Event - Information: {{ heading }}</h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-4 col-sm-3 col-12 header">
          <img class="img-header" :src="imgPathMain"/>
        </div>
        <div class="col-md-8 col-9 col-sm-9 my-sm-auto text-center text-sm-start header">
          <tr>
            <p class="text-light tab">{{ cost }}</p>
          </tr>
          <tr>
            <p class="text-light tab">{{ month }} - {{ dates }}</p>
          </tr>
          <tr>
            <p class="text-light tab">{{ hours }}</p>
          </tr>
          <tr>
            <p class="text-light tab"><a class= "link" :href="url">Website</a></p>
          </tr>
          <tr>
            <p @click="discover()" style="cursor: pointer; text-decoration:underline" class="text-light tab">Hosted in: {{name}} </p>
          </tr>
        </div>
      </div>
    </div>
    <div class="container-lg container-fluid-md my-3 pb-3">
    <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-8 col-9 col-sm-9 my-sm-auto text-center text-sm-start">
            <p class="text-dark text-content">{{ description }}</p>
        </div>
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
        <h2 class="lead text-event text-dark">You might also like:</h2>
        <div class="col-md-4 col-sm-3 col-12">
          <card-event class="card-event"
                :cardTitle="second.heading"
                :imgPath="second.imgPathMain"
                :cardDescription="second.description"
                :month="second.month"
                :id="second.id"
            />
        </div>
        <div class="col-md-4 col-sm-3 col-12">
          <card-event class="card-event"
                :cardTitle="third.heading"
                :imgPath="third.imgPathMain"
                :cardDescription="third.description"
                :month="third.month"
                :id="third.id"
            />
        </div>
        <div class="col-md-4 col-sm-3 col-12">
          <cardEvent class="card-event"
                :cardTitle="fourth.heading"
                :imgPath="fourth.imgPathMain"
                :cardDescription="fourth.description"
                :month="fourth.month"
                :id="fourth.id"
            />
        </div>
      </div>
    </div>
  </div>
   
</template>

<style scoped>

.tab{
    border-bottom: 1px solid white;
    padding: 20px;
    margin-bottom: 0;
    text-align: center;
}

.text-event{
    padding-top: 3rem;
    padding-bottom: 1rem;
}

.link{
    color: white;
}

.img-header{
    width: 500px;
    height: 400px;
    border-radius: 5px;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.header{
    width: 50%;
    display: grid;
}

.card-event{
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
import cardEvent from "~/components/CardEvent.vue";
export default {
  name: 'poinInfo',
  mixins: [CommonMixin],
  components: { cardEvent },
  data: () => ({
    //first: '',
    second: '',
    third: '',
    fourth: ''
  }),
  mounted() {
    (async () => { 
      const min = 1
      const max = 19
      await Promise.all([
        //axios.get('/api/events/' + id), //replace by id
        axios.get('/api/events/' + Math.floor(Math.random()*(max-min+1)+min)), //random value between 0 and 33
        axios.get('/api/events/' + Math.floor(Math.random()*(max-min+1)+min)), //random value between 0 and 33
        axios.get('/api/events/' + Math.floor(Math.random()*(max-min+1)+min)), //random value between 0 and 33
      ])
      .then(axios.spread((second_get, third_get, fourth_get) => {
        //this.first = first_get.data
        this.second = second_get.data
        this.third = third_get.data
        this.fourth = fourth_get.data
      }))
    })(); 
  },
  methods: {
    discover(){
      this.$router.push({name:'all-pois-poi', query: {id: this.poiId}});
      
    }
  },
  async asyncData({ route, $axios }) {
    const { id } = route.query
    const { data } = await $axios.get('/api/events/' + id) //Should be ('/api/events/' + id)
    console.log("/api/events/", data)
    return {
      imgPathMain: data.imgPathMain,
      imgPathMap: data.imgPathMap,
      description: data.description,
      heading: data.heading,
      season: data.season,
      month: data.month,
      dates: data.dates,
      hours: data.hours,
      cost: data.cost,
      url: data.url,
      name: data.pois[0].poiName,
      id: data.id,
      poiId: data.pois[0].id
    }
  }

}
</script>