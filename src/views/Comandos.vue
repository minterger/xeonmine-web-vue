<template>
  <div class="comandos">
    <ContentHeader :msg="msg" />
    <div class="container" id="informacion">
      <h1>This is an command page</h1>
    </div>
  </div>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'

export default {
  components: {
    ContentHeader
  },
  data() {
    return {
      msg: {
        text: 'Comandos Con Los Que Puedes Administrar o Entretenerte De Nuestro Bot'
      }
    }
  }
}
</script>