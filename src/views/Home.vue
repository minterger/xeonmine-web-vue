<template>
  <div>
    <metainfo />
    <ContentHeader :msg="msg" />
    <section id="informacion" class="container">
      <img class="img-svg" src="img/chat_bot-min.svg" alt="" />
      <div>
        <h3 class="title-text-right">Sobre Nuestro Bot</h3>
        <p class="text-right">
          Contamos con dos Bots uno para moderación y entretenimiento y otro
          para ver estado y jugadores online en servidores de minecraft aparte
          de unos comandos extras
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  name: "Home",
  components: {
    ContentHeader,
  },
  data() {
    return {
      msg: {
        text:
          "Invita alguno de nuestros bots a tu discord para que te ayude a administrarlo o ver el estado de tu servidor de minecraft",
      },
    };
  },
  metaInfo() {
    return {
      title: "Xeonmine Bot - Home",
      description:
        "Estas buscando un bot de discord que te ayude a administrar tu server y a la vez tener un poco de diversion, invita a nuestro bot",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 950px;
}

.container > div {
  margin-left: 20px;
}

.title-text-right {
  margin-bottom: 10px;
}

.img-svg {
  height: 15em;
}

@media screen and (max-width: 924px) {
  .img-svg {
    height: 11em;
  }
}

@media screen and (max-width: 545px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .title-text-right {
    margin-bottom: 15px;
  }

  .img-svg {
    height: 9em;
    margin: 20px 0;
  }

  .container > div {
    margin-left: 0;
  }
}
</style>
