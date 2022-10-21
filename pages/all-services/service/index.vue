<template>
  <div>
    <!-- top section -->
    <div
      style="background-color: #042a2b"
      class="container-lg container-fluid-md my-3 pb-2"
    >
      <h1 class="lead py-3 px-5 text-light" id="caption">
        Services: {{ type }}
      </h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-4 col-sm-3 col-12">
          <img
            class="img-fluid img-header"
            src="https://www.mtl.org/sites/default/files/styles/playlist_banner_big/public/2020-11/44766.jpg?itok=_XT3mMhv"
          />
        </div>
        <div
          class="col-md-8 col-9 col-sm-9 my-sm-auto text-center text-sm-start"
        >
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
      <div class="row my-2 justify-content-end px-5">
        <div class="col-md-5 col-sm-6 my-1">
          <!-- <label for="categoryList2" class="form-label"></label> -->
          <select
            class="form-select"
            name="categoryList"
            id="categoryList"
            @change="selectCategory($event)"
          >
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
          <button @click="searchFunction()" class="btn btn-primary rounded">
            Filter
          </button>
        </div>
      </div>
    </div>

    <div class="container-lg container-fluid" id="listServices">
      <list-of-services
        v-for="(service, serviceIndex) of showedServices"
        :key="`list-of-services${serviceIndex}`"
        :Neighbourhood="service.Neighbourhood"
        :heading="service.heading"
        :type="service.type"
        :location="service.location"
        :hours="service.hours"
        :url="service.url"
      />
    </div>

    <div class="container-lg d-flex justify-content-center">
      <nav aria-label="ServiceList">
        <ul class="pagination">
          <li :class="checkIfClassActive(n)" v-for="n in pages" v-bind:key="n">
            <a
              class="page-link"
              @click="goToPage(n)"
              v-scroll-to="'#listServices'"
              >{{ n }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.page-link {
  background: #0e7679;
  color: white;
}

.page-item.active .page-link {
  color: #fff;
  background-color: #042a2b !important;
  border-color: #7cc;
}

.page-link:hover {
  color: #fff !important;
  text-decoration: none;
  background-color: #2fadc5 !important;
  border-color: #7cc;
}

.img-header {
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
import listOfServices from "~/components/listOfServices.vue";
//import axios from "axios";

export default {
  name: "ServicesPage",

  components: {
    listOfServices,
  },
  // created() {
  //   console.log("TES " + window.location.pathname)
  // },
  methods: {
    searchFunction() {
      if (this.selectedCategory == "All") {
        this.services = this.pagingData(this.pureData);
        this.pages = Math.ceil(this.pureData.length / 5);
        //console.log("here");
        return (this.showedServices = this.services[0]);
      }
      if (this.selectedCategory != "") {
        const filteredData = this.pureData.filter(
          (el) => el.Neighbourhood == this.selectedCategory
        );
        this.services = this.pagingData(filteredData);
        this.pages = Math.ceil(filteredData.length / 5);
        //console.log(this.pureData);
        return (this.showedServices = this.services[0]);
      }
    },
    goToPage(n) {
      this.showedServices = this.services[n - 1];
      this.selectedIndex = n;
    },
    checkIfClassActive(n) {
      if (n == this.selectedIndex) return "page-item active";
      return "page-item";
    },
    selectCategory(event) {
      this.selectedCategory = event.target.value;
    },
    pagingData(data) {
      let datas = [];
      let pageService = [];
      let page = 0;
      data.forEach((element, index) => {
        pageService.push(element);
        //console.log(index, element)
        if ((index + 1) % 5 == 0 && index > 0) {
          datas[page] = pageService;
          pageService = [];
          page++;
          // console.log(page);
        }
      });

      if (pageService.length != 0) {
        datas[page] = pageService;
      }
      return datas;
    },
  },
  async asyncData({ route, $axios }) {
    const type = route.query.type;
    const { data } = await $axios.get("/api/services/" + type);
    let datas = [];
    let pageService = [];
    let page = 0;
    console.log(type);
    data.forEach((element, index) => {
      pageService.push(element);
      //console.log(index, element)
      if ((index + 1) % 5 == 0 && index > 0) {
        datas[page] = pageService;
        pageService = [];
        page++;
        //console.log(page);
      }
    });

    if (pageService.length != 0) {
      datas[page] = pageService;
    }

    return {
      pureData: data,
      selectedIndex: 0,
      services: datas,
      pages: Math.ceil(data.length / 5),
      showedServices: datas[0],
      selectedCategory: "",
      type,
    };
  },

  // data(){
  //   return{

  //   }
  // },

  computed: {},
};
</script>
