<template>
  <div class="main-page">
    <the-header />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
  },
}
</script>