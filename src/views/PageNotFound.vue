<template>
  <section id="informacion" class="container">
    <h1 class="title-text-right">Pagina no encontrada</h1>
    <p class="text-right">Pagina no encontrada por favor vuelve a la pagina <router-link to="/" >Inicio</router-link></p>
  </section>
</template>

<script>
export default {
  
}
</script>


<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .title-text-right {
    font-size: 2rem;
  }
  .text-right {
    margin-top: 10px;
  }
</style>