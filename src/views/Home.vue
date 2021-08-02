<template>
  <div>
    <metainfo />
    <ContentHeader :msg="msg"/>
    <section id="informacion" class="container">
      <img class="img-svg" src="img/chat_bot-min.svg" alt="">
      <div>
        <h3 class="title-text-right">Sobre Nuestro Bot</h3>
        <p class="text-right">Necesitas un bot de moderación y entretenimiento? Te presentó  a Xeonmine</p>
      </div>
    </section>
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
  },
  metaInfo() {
    return {
      title: 'Xeonmine Bot - Home',
      description: 'Estas buscando un bot de discord que te ayude a administrar tu server y a la vez tener un poco de diversion, invita a nuestro bot',
    }
  }
}
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