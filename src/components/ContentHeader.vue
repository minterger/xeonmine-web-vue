<template>
  <main
    id="content"
    class="content-invite"
    style="background-image: url(/img/bokeh-min.jpg);"
  >
    <div class="container">
      <img class="logo" src="/img/logo.png" alt="" />
      <p class="logo-text">{{ msg.text }}</p>
      <div>
        <router-link to="/invite" v-if="!disableInvite" class="boton"
          >Invitar</router-link
        >
        <a href="#informacion" class="boton"
          >Ir Abajo<i class="bx bxs-down-arrow-alt"></i
        ></a>
      </div>
    </div>

    <div class="sesgoabajo"></div>
  </main>
</template>

<script>
export default {
  name: "ContentHeader",
  props: ["msg", "disableInvite"],
};
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
  font-size: 1.1em;
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
  transition: border-color 0.3s;
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
  transition: transform 0.3s;
}

.boton:active {
  transform: scale(1.1);
  transition: transform 0.3s;
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
