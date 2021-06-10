<template>
  <footer class="footer">
      <span class="span-footer">© Xeonmine - Made By Minterger</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 45px;
    background-color: #191E34;
    font-size: 0.90em;
    overflow: hidden;
    bottom: 0;
    position: absolute;
  }
  span {
    color: #fff;
  }
</style>
