<template>
  <div class="container-lg container-fluid-sm my-2 pt-3 pb-4">
    <h1 class="py-3 px-5 text">Welcome in Montreal!</h1>
    <div class="row mb-3 d-flex justify-content-around">
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://m1.quebecormedia.com/emp/emp/51b1d750-db9d-11eb-83fe-95cf63da6fc8_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=1200&h=799&width=968"
        />
      </div>
      <div class="col-sm-5 text-sm-start">
        <p class="text">
          Perhaps you’re curious to visit a city on an island (with a mountain,
          too!). Or perhaps you’ve heard that Montreal was declared a UNESCO
          city of Design. Maybe you’ve heard about the signature dish poutine,
          or you’d like to test yourself with an outdoor music festival in
          winter. And when Montreal does winter, you can expect a winter
          wonderland and real winter temperatures! Monocle magazine calls
          Montreal “Canada’s Cultural Capital”. We call it home. Come visit our
          vibrant hometown and tour our best galleries, an everchanging line-up
          of creative exhibits, and take in the sights as you discover one of
          the most liveable cities in the world (it’s official! Thanks,
          Economist Magazine).
        </p>
      </div>
    </div>

    <div class="row mb-5">
       <h2 class="py-3 px-5 text">Ready for adventure?</h2>
    <div class="row row-card">
      <div class="col-sm col-poi shadow btn-home">
        <NuxtLink to="/all-pois"
          ><button type="button" class="btn btn-custom">
            Discover POI
          </button></NuxtLink
        >
      </div>
      <div class="col-sm col-event shadow btn-home">
        <NuxtLink to="/all-events"
          ><button type="button" class="btn btn-custom">
            Discover Events
          </button></NuxtLink
        >
      </div>
      <div class="col-sm col-service shadow btn-home">
        <NuxtLink to="/all-services"
          ><button type="button" class="btn btn-custom">
            Discover Services
          </button></NuxtLink
        >
      </div>
      <div class="col-sm col-itinerary shadow btn-home">
        <NuxtLink to="/all-itineraries"
          ><button type="button" class="btn btn-custom">
            Discover Itineraries
          </button></NuxtLink
        >
      </div>
    </div>
    </div>

    <div class="row mb-5 d-flex justify-content-around">
      <div class="col-sm-5 d-flex flex-column">
        <p class="text">
          Perhaps you’re curious to visit a city on an island (with a mountain,
          too!). Or perhaps you’ve heard that Montreal was declared a UNESCO
          city of Design. Maybe you’ve heard about the signature dish poutine,
          or you’d like to test yourself with an outdoor music festival in
          winter. And when Montreal does winter, you can expect a winter
          wonderland and real winter temperatures! Monocle magazine calls
          Montreal “Canada’s Cultural Capital”. We call it home. Come visit our
          vibrant hometown and tour our best galleries, an everchanging line-up
          of creative exhibits, and take in the sights as you discover one of
          the most liveable cities in the world (it’s official! Thanks,
          Economist Magazine).
        </p>
      </div>
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="http://avenues.ca/wp-content/uploads/2018/09/37798868_1887346064645837_7206099852965445632_o.jpg"
        />
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.col-sm {
  margin: 5px;
}

.row-card {
  height: 400px;
}

.btn-home {
  display: flex;
  align-items: end;
  justify-content: center;
  margin: 5px;
}

.btn-custom {
  color: white;
  background-color: #0000005c;
  border-color: white;
  font-size: larger;
  border-width: 2px;
  font-weight: 600;
}

.btn-custom:hover {
  background-color: #0e7679;
}

.btn {
  margin: 20px;
}

.col-poi {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://www.bonjourquebec.com/fiche/images/crop-1200x1200/3c34816c-9a22-4520-a983-4d9ff11cc2ee/la-tour-de-montreal-la-tour-de-montreal.jpg);
}

.col-event {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://images.squarespace-cdn.com/content/v1/570289bb62cd94d3a2b5d821/1565195498069-STJONVPZEEAZUHPQ4D0T/RAINBOWMTL.jpg);
}

.col-service {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/1/1d/Station_BIXI_-_Parc_Jeanne_Mance.jpg);
}
.col-itinerary {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://web-assets.bcg.com/dims4/default/9acccb9/2147483647/strip/true/crop/1049x590+1+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F11%2F02%2F1f98b57f33d4d2a37fb4797af8f8%2Fmontreal-49246132-1050x590-tcm9-33800.jpg);
}

.img-fluid {
  height: 100%;
  object-fit: cover;
}
</style>

<script>
export default {
  name: "IndexPage",
};
</script>
