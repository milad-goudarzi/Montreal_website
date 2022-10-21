<template>
  <div>
    <div
      style="background-color: #042a2b"
      class="container-lg container-fluid-md my-3 pb-3"
    >
      <h1 class="lead py-3 px-5 text-light" id="caption">
        Itinerary - Information: {{ heading }}
      </h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-4 col-sm-3 col-12 header">
          <img class="img-header" :src="imgPath" />
        </div>
        <div
          class="
            col-md-8 col-9 col-sm-9
            my-sm-auto
            text-center text-sm-start
            header
          "
        >
          <tr>
            <p class="text-light tab">{{ duration }}</p>
          </tr>
          <tr>
            <p class="text-light tab">{{ description }}</p>
          </tr>
        </div>
      </div>
    </div>
    <div class="container-lg container-fluid-md my-3 pb-3">
      <div class="row my-2 px-5 d-flex justify-content-center">
        <h2 class="lead text-poi text-dark">Included in the tour:</h2>
        <div
          class="col-md-4 col-sm-3 col-12"
          v-for="(pois, index) of get_all_pois"
          :key="`card-pois${index}`"
        >
          <itinCard
            class="card-poi"
            :cardTitle="pois.heading"
            :imgPath="pois.imgPathMain"
            :cardDescription="pois.descriptionMain"
            :month="pois.hours"
            :id="pois.id"
          />
        </div>
      </div>

      <div class="row my-2 px-5 d-flex justify-content-center">
        <!-- <img class="img-banner" :src="imgPathMap"/>-->
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              class="map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=montr%C3%A9al&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
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

.tab {
  border-bottom: 1px solid white;
  padding: 20px;
  margin-bottom: 0;
  text-align: center;
}

.header {
  width: 50%;
  display: grid;
}

.text-poi {
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.img-header {
  width: 500px;
  height: 400px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.img-banner {
  height: 400px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card-poi {
  width: 100%;
  margin-bottom: 20px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.mapouter {
  position: relative;
  text-align: right;
}

.map {
  height: 400px;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media only screen and (max-width: 1200px) {
  .img-header {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
  }

  .header {
    width: 100%;
  }
}
</style>


<script>
import CommonMixin from "~/mixins/common";
import axios from "axios";
import itinCard from "~/components/itinCard.vue";
export default {
  name: "poinInfo",
  mixins: [CommonMixin],
  components: { itinCard },
  data: () => ({
    //first: '',
    //second: '',
    //third: '',
    //fourth: '',
    get_all_pois: "",
  }),

  mounted() {
    (async () => {
      const id = this.$route.params.id;
      await Promise.all([
        //HERE MILAD
        axios.get("/api/poisByItinerary/" + id), //Put the id dynamically from the async asyncData()'s id
        console.log("HERE"),
        
      ]).then(
        axios.spread((pois) => {
          this.get_all_pois = pois.data;
          console.log("get_all_pois" + this.get_all_pois);
        })
      );
    })();
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get("/api/itineraries/" + id); //Should be ('/api/events/' + id)
    console.log("/api/itineraries/", id);
    return {
      imgPath: data.imgPath,
      description: data.description,
      heading: data.heading,
      duration: data.duration,
      imgPathMap: data.imgPathMap,
      id: data.id,
    };
  },
};
</script>