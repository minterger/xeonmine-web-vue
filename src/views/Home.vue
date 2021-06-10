<template>
  <div>
    <ContentHeader :msg="msg"/>
    <div class="container" id="informacion">
      <img alt="Vue logo" src="img/logo.jpeg">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  name: 'Home',
  components: {
    ContentHeader
  },
  data() {
    return {
      msg: {
        text: 'Invita nuestro bot a tu discord para que te ayude a administrarlo de la forma correcta'
      }
    }
  }
}
</script>

<style scoped>
  img {
    width: 10%;
    height: auto;
  }
</style>