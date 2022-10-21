<template>
  <div>
    <div
      style="background-color: #042a2b"
      class="container-lg container-fluid-sm mt-2 mb-3 pt-3 pb-5"
    >
      <h1 class="lead py-3 px-5 text-light" id="caption">Events</h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-4 col-sm-3 col-12">
          <img
            class="img-header img-fluid"
            src="https://travelmamas.com/wp-content/uploads/2021/07/montreal-kids-see-saws.jpg"
          />
        </div>
        <div
          class="col-md-8 col-9 col-sm-9 my-sm-auto text-center text-sm-start"
        >
          <p class="text-light">
            It isn't difficult to understand why Montreal is named the cultural
            capital of Canada. Even plunging temperatures can't stop outdoor
            music festivals and art installations! Montreal is lucky to host a
            variety of communities and cultures, and we encourage you to visit
            some of these markets while you're in town. Whether you like music,
            visual art, or the art of good food, we're confident you'll find
            you're own favourite spot in our city.
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid container-lg">
      <div class="row text-center text-sm-start">
        <div class="col-1">
          <p class="lead fw-bold">Filter</p>
        </div>
        <div class="col-11 px-md-0 px-sm-5">
          <!-- if the user clicks on the same button, all events should show up again -->
          <button
            @click="changeToSun2"
            v-if="sumOrSn === 'both'"
            class="btn btn-primary rounded"
          >
            Love sun
          </button>
          <button
            @click="changeToSnow2"
            v-if="sumOrSn === 'both'"
            class="btn btn-primary rounded"
          >
            Love snow
          </button>
          <button
            @click="selfClick2"
            v-if="sumOrSn === 'sun'"
            class="btn btn-primary rounded bg-dark"
          >
            Love sun
          </button>
          <button
            @click="changeToSnow2"
            v-if="sumOrSn === 'sun'"
            class="btn btn-primary rounded"
          >
            Love snow
          </button>
          <button
            @click="changeToSun2"
            v-if="sumOrSn === 'snow'"
            class="btn btn-primary rounded"
          >
            Love sun
          </button>
          <button
            @click="selfClick2"
            v-if="sumOrSn === 'snow'"
            class="btn btn-primary rounded bg-dark"
          >
            Love snow
          </button>
        </div>
      </div>
    </div>
    <!-- lower section -->

    <!-- md+ screens carousel -->

    <div class="container-lg container-fluid text-center d-md-block d-none">
      <div class="row mb-4 mt-2" style="height: 490px">
        <div
          class="col-1 text-light rounded-2"
          style="background-color: rgb(4, 42, 43)"
        >
          <svg
            @click="clickLeft"
            style="
              cursor: pointer;
              transition: 0.5s ease;
              position: relative;
              z-index: 1000;
            "
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            fill="currentColor"
            class="bi bi-chevron-compact-up timelineArrows"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
            />
          </svg>
          <h1
            id="current"
            style="
              position: relative;
              top: calc((100% - 150px) / 2);
              transition: 0.5s ease;
            "
            class="timelineMonth lead align-items-center"
          >
            <!-- h1 -->
            Jan. & Feb.
          </h1>
          <h1
            style="
              position: relative;
              opacity: 1;
              transition: 0.5s ease;
              top: calc((100% - 10px) / 2);
            "
            class="timelineMonth lead align-items-center visually-hidden"
          >
            Mar. & Apr.
          </h1>
          <h1
            style="
              position: relative;
              opacity: 1;
              transition: 0.5s ease;
              top: calc((100% - 10px) / 2);
            "
            class="timelineMonth lead align-items-center visually-hidden"
          >
            May & Jun.
          </h1>
          <h1
            style="
              position: relative;
              opacity: 1;
              transition: 0.5s ease;
              top: calc((100% - 10px) / 2);
            "
            class="timelineMonth lead align-items-center visually-hidden"
          >
            Jul. & Aug.
          </h1>
          <h1
            style="
              position: relative;
              opacity: 1;
              transition: 0.5s ease;
              top: calc((100% - 10px) / 2);
            "
            class="timelineMonth lead align-items-center visually-hidden"
          >
            Sep. & Oct.
          </h1>
          <h1
            style="
              position: relative;
              opacity: 1;
              transition: 0.5s ease;
              top: calc((100% - 10px) / 2);
            "
            class="timelineMonth lead align-items-center visually-hidden"
          >
            Nov. & Dec.
          </h1>
          <svg
            @click="clickRight"
            style="
              position: relative;
              top: 70%;
              cursor: pointer;
              transition: 0.5s ease;
            "
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            fill="currentColor"
            class="bi bi-chevron-compact-down timelineArrows"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
            />
          </svg>
        </div>
        <div
          class="carousel carousel-dark slide col-11"
          id="carouselExampleControls"
          data-ride="carousel"
        >
          <div class="carousel-inner" id="carouselInner1">
            <div
              class="carousel-item"
              v-for="cardData in carouselData"
              :key="cardData.id"
            >
              <card
                v-for="data in cardData"
                :key="data.id"
                :cardTitle="data.eventTitle"
                :imgPath="data.imgPath"
                :cardDescription="data.eventDescription"
                :season="data.season"
                :month="data.month"
                :id="data.id"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <!-- small and xs screens carousel  -->
    <div class="container-lg container-fluid text-center d-block d-md-none">
      <div class="row" style="height: 500px">
        <div
          class="carousel carousel-light slide"
          id="carouselExampleControls3"
        >
          <div
            style="background-color: rgb(4, 42, 43); height: 40px"
            class="carousel-inner rounded-2 text-light text-center my-2"
            id="smallCarouselTimeLine"
          >
            <div class="carousel-item active py-2">
              <div>Jan. & Feb.</div>
            </div>
            <div class="carousel-item py-2">
              <div>Mar. & Apr.</div>
            </div>
            <div class="carousel-item py-2">
              <div>May & Jun.</div>
            </div>
            <div class="carousel-item py-2">
              <div>Jul. & Aug.</div>
            </div>
            <div class="carousel-item py-2">
              <div>Sept. & Oct.</div>
            </div>
            <div class="carousel-item py-2">
              <div>Nov. & Dec.</div>
            </div>
          </div>
          <button
            id="leftButtonSmallCarousel"
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls3"
            data-bs-slide="prev"
            @click="moveDown"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            id="rightButtonSmallCarousel"
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls3"
            data-bs-slide="next"
            @click="moveUp"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="carousel slide" id="carouselExampleControls2">
          <div class="carousel-inner smallCarouselItem" id="carouselInner2">
            <div v-for="cardData in carouselData" :key="cardData.id">
              <div
                class="carousel-item"
                v-for="data in cardData"
                :key="data.id"
              >
                <card
                  :cardTitle="data.eventTitle"
                  :imgPath="data.imgPath"
                  :cardDescription="data.eventDescription"
                  :season="data.season"
                  :month="data.month"
                  :id="data.id"
                />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <!-- end of carousel -->
  </div>
</template>

<style scoped>
/* @import "~/assets/style.css"; */
#carouselInner1,
#carouselInner2,
.carousel-control-next,
.carousel-control-prev {
  transition: 0.5s ease;
}
/* .smallCarouselItem {
  transition: 0.5s ease;
} */

.img-header {
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
import Card from "~/components/Card.vue";
import axios from "axios";

export default {
  name: "eventsPage",
  computed: { ...mapState(["sumOrSn"]) },
  components: { Card },
  methods: {
    ...mapMutations(["changeToSun", "changeToSnow", "selfClick"]),

    changeToSun2() {
      this.changeToSun();
      let winterCards = document.getElementsByClassName("winter");
      let summerCards = document.getElementsByClassName("summer");

      for (let i = 0; i < summerCards.length; i++) {
        // disable winter cards buttons
        summerCards[i].children[1].children[2].disabled = false;
        summerCards[i].style.opacity = 1;
      }

      for (let i = 0; i < winterCards.length; i++) {
        // disable winter cards buttons
        winterCards[i].children[1].children[2].disabled = true;
        winterCards[i].style.opacity = 0.3;
      }
    },

    changeToSnow2() {
      this.changeToSnow();
      let winterCards = document.getElementsByClassName("winter");
      let summerCards = document.getElementsByClassName("summer");

      for (let i = 0; i < winterCards.length; i++) {
        // disable winter cards buttons
        winterCards[i].children[1].children[2].disabled = false;
        winterCards[i].style.opacity = 1;
      }

      for (let i = 0; i < summerCards.length; i++) {
        // disable winter cards buttons
        summerCards[i].children[1].children[2].disabled = true;
        summerCards[i].style.opacity = 0.3;
      }
    },

    selfClick2() {
      this.selfClick();
      const cards = document.getElementsByClassName("card");
      for (let i = 0; i < cards.length; i++) {
        cards[i].children[1].children[2].disabled = false;
        cards[i].style.opacity = 1;
      }
    },

    async moveUp() {
      let timelineMonths = document.getElementsByClassName("timelineMonth");
      let cur = document.getElementById("current");
      const arrows = document.getElementsByClassName("timelineArrows");

      arrows[0].style.opacity = "0";
      arrows[1].style.opacity = "0";
      //moving cur up
      cur.style.top = "calc((100% - 350px)/2)";
      cur.style.opacity = "0";
      setTimeout(function () {
        cur.classList.add("visually-hidden");
        cur.style.top = "calc((100% - 200px)/2)";
      }, 500);

      if (
        cur.innerText.trim() == "Nov.\n&\nDec." ||
        cur.innerText.trim() == "Nov. & Dec."
      ) {
        var nextElement = timelineMonths[0];
        for (let i = 0; i < timelineMonths.length; i++) {
          if (i == 5) {
            setTimeout(function () {
              timelineMonths[i].style.top = "calc((100% - 10px)/2)";
            }, 1000);
          } else {
            timelineMonths[i].style.top = "calc((100% - 10px)/2)";
          }
        }
      } else {
        nextElement = cur.nextElementSibling;
      }

      document.getElementById("carouselInner1").style.opacity = 0; //takes 500ms
      document.getElementById("carouselInner2").style.opacity = 0; //takes 500ms
      const carouselControlNext = document.getElementsByClassName(
        "carousel-control-next"
      ); //takes 500ms
      const carouselControlPrev = document.getElementsByClassName(
        "carousel-control-prev"
      ); //takes 500ms
      for (let i = 0; i < carouselControlNext.length; i++) {
        carouselControlNext[i].style.opacity = 0;
        carouselControlPrev[i].style.opacity = 0;
      }
      const month = nextElement.innerText.trim();
      const { data } = await axios.get("/api/getEvents/" + month);
      setTimeout(() => (this.carouselData = data), 550); // to wait for carouselInner1 and 2 to finish
      setTimeout(() => {
        nextElement.classList.remove("visually-hidden");
        arrows[0].style.opacity = "1";
        arrows[1].style.opacity = "1";
        nextElement.style.opacity = "1";
        nextElement.style.top = "calc((100% - 150px)/2)";
        cur.removeAttribute("id");
        nextElement.setAttribute("id", "current");

        if (this.sumOrSn == "snow") {
          this.changeToSnow2();
        } else if (this.sumOrSn == "sun") {
          this.changeToSun2();
        }

        document
          .getElementById("carouselInner1")
          .firstElementChild.classList.add("active");
        document
          .getElementById("carouselInner2")
          .children[0].firstElementChild.classList.add("active");

        document.getElementById("carouselInner1").style.opacity = 1;
        document.getElementById("carouselInner2").style.opacity = 1;
        for (let i = 0; i < carouselControlNext.length; i++) {
          carouselControlNext[i].style.opacity = 1;
          carouselControlPrev[i].style.opacity = 1;
        }
      }, 1000);
    },

    async moveDown() {
      let timelineMonths = document.getElementsByClassName("timelineMonth");
      // for(let i=0; i<timelineMonths.length; i++){
      //   timelineMonths[i].style.position = 'relative';
      // }

      let cur = document.getElementById("current");
      const arrows = document.getElementsByClassName("timelineArrows");

      arrows[0].style.opacity = "0";
      arrows[1].style.opacity = "0";
      //moving cur down
      cur.style.top = "calc((100% + 50px)/2)";
      cur.style.opacity = "0";
      setTimeout(function () {
        // cur.style.position = "fixed";
        cur.classList.add("visually-hidden");
        cur.style.top = "calc((100% - 10px)/2)";
      }, 500);

      if (
        cur.innerText.trim() == "Jan. & Feb." ||
        cur.innerText.trim() == "Jan.\n&\nFeb."
      ) {
        // alert("here2")

        var nextElement = timelineMonths[5];
        for (let i = 0; i < timelineMonths.length; i++) {
          if (i == 0) {
            setTimeout(function () {
              timelineMonths[i].style.top = "calc((100% - 250px)/2)";
            }, 1000);
          } else {
            timelineMonths[i].style.top = "calc((100% - 250px)/2)";
          }
        }
      } else {
        // alert("here3")
        nextElement = cur.previousElementSibling;
      }

      document.getElementById("carouselInner1").style.opacity = 0; //takes 500ms
      document.getElementById("carouselInner2").style.opacity = 0; //takes 500ms
      const carouselControlNext = document.getElementsByClassName(
        "carousel-control-next"
      ); //takes 500ms
      const carouselControlPrev = document.getElementsByClassName(
        "carousel-control-prev"
      ); //takes 500ms
      for (let i = 0; i < carouselControlNext.length; i++) {
        carouselControlNext[i].style.opacity = 0;
        carouselControlPrev[i].style.opacity = 0;
      }
      const month = nextElement.innerText.trim();
      const { data } = await axios.get("/api/getEvents/" + month);
      setTimeout(() => (this.carouselData = data), 550); // to wait for carouselInner1 and 2 to finish
      setTimeout(() => {
        nextElement.classList.remove("visually-hidden");
        arrows[0].style.opacity = "1";
        arrows[1].style.opacity = "1";
        nextElement.style.opacity = "1";
        nextElement.style.top = "calc((100% - 150px)/2)";
        cur.removeAttribute("id");
        nextElement.setAttribute("id", "current");

        if (this.sumOrSn == "snow") {
          this.changeToSnow2();
        } else if (this.sumOrSn == "sun") {
          this.changeToSun2();
        }

        document
          .getElementById("carouselInner1")
          .firstElementChild.classList.add("active");
        document
          .getElementById("carouselInner2")
          .children[0].firstElementChild.classList.add("active");

        document.getElementById("carouselInner1").style.opacity = 1;
        document.getElementById("carouselInner2").style.opacity = 1;
        for (let i = 0; i < carouselControlNext.length; i++) {
          carouselControlNext[i].style.opacity = 1;
          carouselControlPrev[i].style.opacity = 1;
        }
      }, 1000);
    },
    clickLeft() {
      document.getElementById("leftButtonSmallCarousel").click();
    },
    clickRight() {
      document.getElementById("rightButtonSmallCarousel").click();
    },
  },

  mounted() {
    const cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.opacity = "1";
    }
    // add class "active" to the first element of both carousels
    const carouselInner1 = document.getElementById("carouselInner1");
    carouselInner1.firstElementChild.classList.add("active");
    const carouselInner2 = document.getElementById("carouselInner2");
    const card_item = carouselInner2.children[0].firstElementChild;
    card_item.classList.add("active");
    // to make the summer/winter toggle back into inital position upon page load
    this.selfClick();
    // get the month from currently showing h1
    // const cur = document.getElementById("current");
    // var month = cur.innerText;
    // console.log(month)
  },
  data() {
    return {
      carouselData: "",
    };
  },

  async asyncData({ $axios }) {
    // const month = document.getElementById("current").innerText
    const month = "Jan.\n&\nFeb.";
    const { data } = await $axios.get("/api/getEvents/" + month);
    return {
      carouselData: data,
    };
  },
};

// card buttons don't lead to anywhere
</script>
