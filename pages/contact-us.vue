<template>
  <div
    style="background-color: #042a2b"
    class="container-lg container-fluid-sm my-2 pt-3 pb-5"
  >
    <h1 class="lead py-3 px-5 text-light" id="caption">
      We'd love to hear from you
    </h1>
    <div class="row mb-5 d-flex justify-content-between px-5">
      <div class="col-sm-5 text-sm-start">
        <p class="text-light">
          Questions, sad or happy stories, or even just a quick howdy, send us a
          note. We'll read every word.
        </p>
      </div>
      <div class="col-sm-5">
        <input
          class="mb-3"
          placeholder="Name"
          style="display: inline; width: 100%"
        />
        <input
          class="mb-3"
          placeholder="Email"
          style="display: inline; width: 100%"
        />
        <textarea
          class="mb-3"
          placeholder="Comments"
          style="display: inline; width: 100%; height: 40%"
        ></textarea>
        <div class="d-flex justify-content-end mb-5">
          <button @click="reloadPage" class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
    <div class="row justify-content-between mx-auto container-fluid px-5">
      <div class="col-md-3 d-flex flex-column flex-wrap">
        <div class="container contact">
          <a href="mailto: abc@example.com">contact@imaje.com</a>
        </div>

        <div>
          <p class="contact-below">Email</p>
        </div>
      </div>

      <div class="col-md-3 d-flex flex-column flex-wrap">
        <div class="container contact">
          <a href="#">+39 123-456-7</a>
        </div>

        <div>
          <p class="contact-below">Phone</p>
        </div>
      </div>

      <div class="col-md-3 d-flex flex-column flex-wrap">
        <div class="container contact">
          <a href="https://twitter.com/">@imaje</a>
        </div>

        <div>
          <p class="contact-below">twitter</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",

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

.contact-below {
  color: black;
  border: 1px solid white;
  background-color: white;
  text-align: center;
  height: 30px;
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