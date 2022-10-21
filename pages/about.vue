<template>
  <div class="container-lg container-fluid-sm my-2 pt-3 pb-4">
    <h1 class="lead py-3 px-5 text">We love Montreal. And you will too!</h1>
    <div class="row mb-5 d-flex justify-content-around">
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
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://images.unsplash.com/photo-1613060688005-0bbcc1d7fbe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
      </div>
    </div>
    <div class="row mb-5 d-flex justify-content-around">
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://images.unsplash.com/photo-1519178251-5390a0fb6a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
      </div>
      <div class="col-sm-5 d-flex flex-column">
        <h1 class="lead text">Something you'd like to ask?</h1>
        <NuxtLink to="/contact-us"
          ><button type="button" class="btn btn-primary my-3">
            Contact Us
          </button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",

  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.contact {
  border: 1px solid white;
  text-align: center;
  height: 60px;
  padding: 14px 0;
}
a:link {
  color: white;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: white;
  text-decoration: underline;
}

a:visited {
  color: white;
}

/* selected link */
a:active {
  color: white;
}

a:active {
  color: white;
}
</style>