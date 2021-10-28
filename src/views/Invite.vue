<template>
  <div>
    <metainfo />
    <ContentHeader :msg="msg" disableInvite="true" />
    <section id="informacion" class="container">
      <h1 class="title-text-right">Invita alguno de nuestros Bots</h1>
      <div class="div">
        <span>Bot XeonMine Moderación:</span>
        <a class="link" href="https://discord.com/oauth2/authorize?client_id=720774737181278280&permissions=8&scope=bot" target="_blank" rel="noopener noreferrer">Invitar</a>
      </div>
      <div class="div">
        <span>Bot XeonMine Minecraft:</span>
        <a class="link" href="https://discord.com/oauth2/authorize?client_id=795748469264351313&scope=bot&permissions=1345611902" target="_blank" rel="noopener noreferrer">Invitar</a>
      </div>
    </section>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  data() {
    return {
      msg: {
        text:
          "Aca podes invitar a nuestros bots para que entren a tu servidor de discord",
      },
    };
  },
  components: {
    ContentHeader,
  },
  metaInfo() {
    return {
      title: "Xeonmine Bot - Invitar",
      description:
        "En esta página te mostramos los links de invitacion de nuestros bots para que asi puedan llegar hasta tu servidor de discord",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
}

.div {
  margin: 30px 10px;
}

.title-text-right {
  margin: 0px 0 50px 0;
  font-size: 32px;
  text-align: center;
}

span {
  font-weight: 500;
  font-size: 1.5rem;
}

.link {
  color: #ffffff;
  text-decoration: none;
  border-radius: 15px;
  margin-left: 10px;
  font-size: 1.3rem;
  padding: 7px 23px;
  background: rgb(214, 29, 66);
  cursor: pointer;
  transition: background .5s ease;
}

.link:hover {
  background: rgb(221, 49, 84);
  transition: background .5s ease;
}
</style>
