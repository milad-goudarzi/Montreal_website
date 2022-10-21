<template>
  <div>
    <!-- top section -->
    <div
      style="background-color: #042a2b"
      class="container-lg container-fluid-sm my-2 pt-3 pb-3"
    >
      <h1 class="lead py-3 px-5 text-light" id="caption">Points of interest</h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-4 col-sm-3 col-12">
          <img
            class="img-header img-fluid"
            src="https://media.timeout.com/images/105890847/750/422/image.jpg"
          />
        </div>
        <div
          class="col-md-8 col-9 col-sm-9 my-sm-auto text-center text-sm-start"
        >
          <p class="text-light">
            We are proud to say that Montreal has an ever changing selection of
            art and music venues. So many that we could never list them all
            here! Thankfully, some places are timeless, evergreens that we can
            return to time ad time again and never be disappointed. Here are a
            few of our favourites - some old and some new. Find galleries,
            museums, music halls, and architectural wonders below. And then,
            find your own favourite places as you explore! We can't wait to hear
            about it.
          </p>
        </div>
      </div>

      <h2 class="lead py-3 px-5 text-light">Find your place</h2>
      <div class="row my-2 justify-content-between px-5">
        <div class="col-md-5 col-sm-6 my-1">
          <!-- <label for="categoryList1" class="form-label"></label> -->
          <select class="form-select" name="categoryList" id="categoryList1">
            <option selected disabled hidden>Category</option>
            <option value="churches">Churches</option>
            <option value="museums">Museums</option>
            <option value="music">Music</option>
            <option value="markets">Markets</option>
            <option value="galleries">Galleries</option>
            <option value="outdoor">Outdoor</option>
            <option value="immersive">Immersive</option>
            <option value="All">All</option>
          </select>
        </div>
        <div class="col-md-5 col-sm-6 my-1">
          <!-- <label for="categoryList2" class="form-label"></label> -->
          <select class="form-select" name="categoryList" id="categoryList2">
            <option selected disabled hidden>Neighbourhood</option>
            <option value="East">East</option>
            <option value="South">South</option>
            <option value="West">West</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>
      <div class="row my-2 justify-content-end px-5">
        <div class="col-lg-2 col-md-2 d-grid my-1">
          <button @click="searchFunction" class="btn btn-primary rounded">
            Search
          </button>
        </div>
      </div>
    </div>
    <!-- end of top section -->

    <!-- bottom section -->

    <pointOfInterest
      v-for="(poi, poiIndex) of data"
      :key="`poi-index-${poiIndex}`"
      :imgPath="poi.imgPathMain"
      :descripton="poi.descriptionMain"
      :heading="poi.heading"
      :id="poi.id"
    />

    <!-- end of bottom section -->
  </div>
</template>

<style scoped>
h1 {
  font-family: "Belleza", sans-serif;
}

.img-header {
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
import pointOfInterest from "~/components/pointOfInterest.vue";

import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "PoiPage",
  computed: mapState(["listOrMap"]),
  components: {
    pointOfInterest,
  },
  methods: {
    async searchFunction() {
      let selectTag = document.getElementById("categoryList1"); //Category
      const filter1 = selectTag.options[selectTag.selectedIndex].value;
      selectTag = document.getElementById("categoryList2"); //neighbourhood
      const filter2 = selectTag.options[selectTag.selectedIndex].value;
      const { data } = await axios.get("/api/pois");
      let filtered = [];
      if (filter1 == "Category" || filter2 == "Neighbourhood") {
        alert("Please choose a neighbourhood and a category.");
      } else {
        for (let i = 0; i < data.length; i++) {
          if (filter1 != "All" && filter2 != "All") {
            if (
              data[i].Neighbourhood == filter2 &&
              data[i].category == filter1
            ) {
              filtered.push({
                imgPathMain: data[i].imgPathMain,
                descriptionMain: data[i].descriptionMain,
                heading: data[i].heading,
                id: data[i].id,
                Neighbourhood: data[i].Neighbourhood,
              });
            }
          } else if (filter1 == "All" && filter2 == "All") {
            filtered.push({
              imgPathMain: data[i].imgPathMain,
              descriptionMain: data[i].descriptionMain,
              heading: data[i].heading,
              id: data[i].id,
              Neighbourhood: data[i].Neighbourhood,
            });
          } else if (filter1 == "All") {
            if (data[i].Neighbourhood == filter2) {
              filtered.push({
                imgPathMain: data[i].imgPathMain,
                descriptionMain: data[i].descriptionMain,
                heading: data[i].heading,
                id: data[i].id,
                Neighbourhood: data[i].Neighbourhood,
              });
            }
          } else if (filter2 == "All") {
            if (data[i].category == filter1) {
              filtered.push({
                imgPathMain: data[i].imgPathMain,
                descriptionMain: data[i].descriptionMain,
                heading: data[i].heading,
                id: data[i].id,
                Neighbourhood: data[i].Neighbourhood,
              });
            }
          }
        }
        this.data = filtered;

        if (filtered.length == 0) {
          alert("there was no result for your search!");
        }
      }
    },
  },

  async asyncData({ $axios }) {
    const { data } = await $axios.get("/api/pois");
    return {
      data,
    };
  },
};
</script>
