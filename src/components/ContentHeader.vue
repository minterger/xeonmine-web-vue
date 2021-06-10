<template>
  <main id="content" class="content-invite" style="background-image: url(/img/bokeh.jpg);">
    <div class="container">
      <img class="logo" src="/img/logo.jpeg" alt="">
      <p class="logo-text">{{msg.text}}</p>
      <div>
        <a href="https://discord.com/oauth2/authorize?client_id=720774737181278280&permissions=8&scope=bot" class="boton">Invitar</a>
        <a href="#informacion" class="boton" >Ir Abajo<i class='bx bxs-down-arrow-alt'></i></a>
      </div>
    </div>

    <div class="sesgoabajo"></div>
  </main>
</template>

<script>
export default {
  name: 'ContentHeader',
  props: ['msg']
}
</script>

<style scoped>
  main {
    height: calc(100vh - 3em);
    min-height: 450px;
    position: relative;
    background-color: var(--color-bg-content);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    overflow: hidden;
  }

  .container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    height: 6em;
    width: 6em;
    border-radius: 5px;
  }
  .logo-text {
    margin: 30px auto 10px auto;
    font-size: 1.10em;
    max-width: 550px;
    color: #fff;
    text-align: center;
  }

  .sesgoabajo {
    z-index: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    border-width: 0 0 10vh 100vw;
    border-style: solid;
    border-color: transparent transparent var(--color-bg-content) transparent;
  }
  
  .boton {
    display: inline-block;
    padding: 6px;
    width: 128px;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;
    font-size: 19px;
    text-decoration: none;
    border-radius: 16px;
    margin: 10px 10px;
  }

  .bx {
    color: #fff;
  }

  @media screen and (max-width: 331px) {
    .container > div {
      display: flex;
      flex-direction: column;
    }
  }
</style>