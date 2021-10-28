<template>
  <div class="comandos">
    <metainfo />
    <ContentHeader :msg="msg" />
    <section id="informacion" class="container">
      <h1 class="title-text-right">
        Comandos del Bot de Discord para Minecraft
      </h1>
      <div>
        <h2 class="margin deco"><i class='bx bx-right-arrow'></i><span>Comandos Generales</span></h2>
        <p class="text-right" v-for="command in usuarios" :key="command.name">
          <strong>{{ command.name }}</strong
          ><br />
          {{ command.command }} - <strong>{{ command.desc }}</strong>
        </p>
      </div>
      <div>
        <h2 class="margin deco"><i class='bx bx-right-arrow'></i><span>Comandos Administrador</span></h2>
        <p
          class="text-right"
          v-for="command in administradores"
          :key="command.name"
        >
          <strong>{{ command.name }}</strong
          ><br />
          {{ command.command }} - <strong>{{ command.desc }}</strong>
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
          "Comandos Con Los Que Puedes Manejar Y Configurar Nuestro Bot Para Discord",
      },
      usuarios: [
        {
          name: "Ayuda",
          command: "z!help o z!comandos",
          desc: "muestra estos comandos!",
        },
        {
          name: "Comandos Admin",
          command: "z!admincmds",
          desc: "muestra los comandos para administradores",
        },
        {
          name: "Ip",
          command: "z!ip",
          desc: "ver la ip y version del servidor de minecraft!",
        },
        {
          name: "Server Status",
          command: "z!status",
          desc: "ver cantidad de usuarios y el estado del servidor",
        },
        {
          name: "Players Online",
          command: "z!players",
          desc: "ver el nick de los jugadores conectados al servidor",
        },
      ],
      administradores: [
        {
          name: "Configurar Nombre",
          command: "z!setname",
          desc: "configurar nombre del servidor de minecraft",
        },
        {
          name: "Configurar IP",
          command: "z!setip o z!setips",
          desc:
            "configurar ip, mas de 1 separar por ',' ej: z!setips 185.249.218.48:25577, play.xeonmine.me",
        },
        {
          name: "Configurar Version",
          command: "z!setversion",
          desc: "configurar version del servidor",
        },
        {
          name: "Alternar Peticiones",
          command: "z!toggle",
          desc: "Desactiva las peticiones para el comando players y status",
        },
        {
          name: "Server Status Otros Servidores",
          command: "z!server 'ip'",
          desc: "ver cantidad de usuarios y el estado de cualquier servidor",
        },
        {
          name: "Anuncio",
          command: "z!anuncio",
          desc: "crear un embed para anunciar en el servidor",
        },
        {
          name: "Anuncio Importante",
          command: "z!imporntante",
          desc: "crear un embed para anunciar con enfasis en el servidor",
        },
        {
          name: "Encuesta",
          command: "z!encuesta",
          desc: "crear encuesta de si o no",
        },
        {
          name: "Ping",
          command: "z!ping",
          desc: "ver la latencia del servidor del bot y la api de discord",
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: "Xeonmine Bot - Comandos XeonMine Minecraft Bot",
      description:
        "En esta pagina veras todos los comandos de este bot un bot de discord que te ayuda a ver si tus amigos estan conectados en el servidor de minecraft o ver el estado del servidor si es que esta online o no",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96vw;
  margin: 100px auto 50px auto;
}

.title-text-right {
  margin: 30px 0 70px 0;
  font-size: 32px;
  text-align: center;
}

.text-right {
  margin: 20px 0;
  width: 65vw;
}

.margin {
  padding-top: 30px;
}

.deco span {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

@media screen and (max-width: 924px) {
  .text-right {
    width: 85vw;
  }
}

@media screen and (max-width: 545px) {
  .text-right {
    width: 100%;
  }
}
</style>
