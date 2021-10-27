<template>
  <div class="sobre">
    <metainfo />
    <ContentHeader :msg="msg" />
    <section id="informacion" class="container">
      <h1 class="title-text-right">Sobre Nosotros</h1>
      <div>
        <p class="text-right">
          Los Bots fueron creados principalmente para la comunidad de Xeonmine,
          pero se abrieron al público para que mas gente lso pudiera usar
        </p>
        <p class="text-right">
          El creador del Bot de moderación es <strong>𝑅𝒶𝒾𝓃#5009</strong>, el del
          Bot relacionado con Minecraft y la página
          <strong>Minterger#5226</strong>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  components: {
    ContentHeader,
  },
  data() {
    return {
      msg: {
        text:
          "En esta seccion te comentamos un poco sobre nosotros y nuestro bot",
      },
    };
  },
  metaInfo() {
    return {
      title: "Xeonmine Bot - Sobre Nosotros",
      description:
        "En esta pagina veras lo relacionado con nosotros y el bot, un bot de discord que te ayuda a administrar tu server y a la vez tener un poco de diversion, invita a nuestro bot",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 96vw;
  align-items: center;
}

.title-text-right {
  margin: 30px 0;
  font-size: 32px;
  text-align: center;
}

.text-right {
  margin: 20px 0;
}
</style>
