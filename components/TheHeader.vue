<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark px-4"
      style="background-color: #042a2b"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Montreal</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ms-auto mt-2 mt-lg-0 pe-3">
            <li
              v-for="(navItem, navItemIndex) of headerList"
              :key="`navItem${navItemIndex}`"
              class="nav-item"
            >
              <nuxt-link :to="navItem.path" class="nav-link">
                {{ navItem.name }}
              </nuxt-link>
            </li>
          </ul>
          <!-- <form class="d-flex py-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form> -->
        </div>
      </div>
    </nav>
    <div class="container-md ml-5 my-2">
      <ol>
        <li
          v-for="(crumb, index) in crumbs"
          :key="index"
          property="itemListElement"
        >
          <NLink property="item" typeof="WebPage" :to="crumb.path">
            <span property="name" style="font-weight: bold">{{
              $route.fullPath === crumb.path && title !== null
                ? title
                : crumb.title
            }}</span>
          </NLink>
          <span v-if="index != crumbs.length - 1"> > </span>
          <meta property="position" :content="index + 2" />
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.breadcrumb {
  margin-left: 80dp;
}

ol {
  list-style: none;
}
li {
  display: inline;
}
li:last-child:after {
  content: "";
}
li a {
  color: black;
}
li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}
.logo {
  color: white;
  font-size: 32px;
}

.navbar .navbar-nav .nav-link {
  color: gainsboro;
  font-size: 1em;
}
.navbar .navbar-nav .nav-link:hover {
  color: #808080;
}
@media only screen and (max-width: 992px) {
  .navbar .navbar-nav .nav-item .nav-link {
    padding-top: 1px;
  }
  .navbar .navbar-nav .nav-item:first-child .nav-link {
    padding-top: 10px;
    border-top: 2px solid #fff;
  }
}

.navbar-brand {
  font-family: "Belleza", sans-serif;
  font-size: 2.7em;
}

.nav-item {
  font-family: "Belleza", sans-serif;
  font-size: 1.5em;
  color: #fff;
}
</style>

<script>
import titleCase from "ap-style-title-case";

export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  name: "TheHeader",
  computed: {
    crumbs() {
      const fullPathWithParams = this.$route.fullPath;
      const splittedFullPathWithParams = fullPathWithParams.split("?");
      const fullPath = splittedFullPathWithParams[0];
      console.log(fullPath);
      var params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      const crumbs = [];
      let path = "";
      if (params.length > 1) {
        params.forEach((param) => {
          path = `${path}/${param}`;
          const match = this.$router.match(path);
          if (match.name !== null) {
            crumbs.push({
              title: titleCase(param.replace(/-/g, " ")),
              ...match,
            });
          }
        });
      }
      return crumbs;
    },
  },
  data() {
    return {
      headerList: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "POI",
          path: "/all-pois",
        },
        {
          name: "Events",
          path: "/all-events",
        },
        {
          name: "Services",
          path: "/all-services",
        },
        {
          name: "Itineraries",
          path: "/all-itineraries",
        },
        {
          name: "About Us",
          path: "/about",
        },
        {
          name: "Contact Us",
          path: "/contact-us",
        },
        // {
        //   name: "Itineraries-info",
        //   path: "/itinerariesInfo",
        // },
      ],
    };
  },
};
</script>
