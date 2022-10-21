<template>
  <div>
    <!-- top section -->
    <div
      style="background-color: #042a2b"
      class="container-lg container-fluid-sm my-2 pt-3 pb-5"
    >
      <h1 class="lead py-3 px-5 text-light" id="caption">All Services</h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-4 col-sm-3 col-12">
          <img
            class="img-fluid shadow img-header"
            src="https://www.tripsavvy.com/thmb/0lQKWxZ0ZzKEi9cpnabX85PLSo0=/3709x3709/smart/filters:no_upscale()/canada-quebec-montreal-place-du-canada-and-dorchester-square-cathedral-basilica-of-mary-156848501-5915e3e55f9b58647087f371.jpg"
          />
        </div>
        <div class="col-md-8 col-9 col-sm-9 my-auto text-center text-sm-start">
          <p class="text-light">
            While Montrealers love to have fun, they're also very serious about
            health, the environment, and taking care of their fellow citizens.
            The city boasts fantastic outdoor activities, eco-friendly (and
            budget friendly) travel options, and internationally ranked
            hospitals. The bilingual nature of the city means all of these
            services, including banks, emergency services, and ameneties are
            available in English or French. Canadians do love to help, but you
            can start here for the basics of where to manage your money, pay for
            parking, and where to rest your head at night. Have fun and be safe!
          </p>
        </div>
      </div>
    </div>

    <card-service
      v-for="(service, index) of services"
      :key="`card-service${index}`"
      :description="service.description"
      :type="service.type"
      :imgPath="service.imgPath"
    />

    <!-- <div class="container-lg d-flex justify-content-center">
      <nav aria-label="ServiceList">
        <ul class="pagination">
          <li :class="checkIfClassActive(n)" v-for="n in pages" v-bind:key="n">
            <a class="page-link" @click="goToPage(n)" v-scroll-to="'#listServices'">{{ n }} </a>
          </li>
        </ul>
      </nav>
    </div> -->
  </div>
</template>

<style scoped>
.img-header {
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
//import listOfServices from "~/components/listOfServices.vue";
import CardService from "~/components/CardService.vue";
//import axios from "axios";

export default {
  name: "AllService",

  components: {
    CardService,
  },
  created() {
    console.log(window.location.pathname);
  },
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get("/api/all-services");
    return {
      services: data,
    };
  },
};
</script>
