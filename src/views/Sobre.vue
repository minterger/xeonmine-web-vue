<template>
  <div class="sobre">
    <ContentHeader :msg="msg" />
    <div class="container" id="informacion">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  components: {
    ContentHeader
  },
  data() {
    return {
      msg: {
        text: 'En esta seccion te comentamos un poco sobre nosotros y nuestro bot'
      }
    }
  }
}
</script>
