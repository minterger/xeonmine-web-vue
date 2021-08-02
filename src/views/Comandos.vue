<template>
  <div class="comandos">
    <metainfo />
    <ContentHeader :msg="msg" />
    <section id="informacion" class="container">
      <h1 class="title-text-right">Comandos del Bot</h1>
      <div>
        <p class="text-right" v-for="command in commands" :key="command.name">
          <strong>{{command.name}}</strong><br/>
          {{command.command}}-<strong>{{command.desc}}</strong>
        </p>
      </div>
    </section>
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
        text: 'Comandos Con Los Que Puedes Administrar o Entretenerte De Nuestro Bot',
      },
      commands: [
        {
          name: 'Ping',
          command: 'x!ping',
          desc: 'El bot responde con su ping!'
        },
        {
          name: 'Comandos',
          command: 'x!comandos',
          desc: 'El bot te muestra una guia de comandos'
        },
        {
          name: 'Creador',
          command: 'x!creador',
          desc: 'Muestra a los creadores del bot!'
        },
        {
          name: 'Invite',
          command: 'x!invite',
          desc: 'Muestra el link de Invite para el bot'
        },
        {
          name: 'Help',
          command: 'x!help',
          desc: 'Muestra un mensaje de ayuda con novedades y cosas que te pueden ayudar!'
        },
        {
          name: 'Contacto',
          command: 'x!contacto',
          desc: 'Contacto de ayuda sobre el bot'
        },
        {
          name: 'Afk',
          command: 'x!afk',
          desc: 'El bot te pone en estado AFK'
        },
        {
          name: 'Kick',
          command: 'x!kick',
          desc: 'El bot kickea al usuario'
        },
        {
          name: 'Ban',
          command: 'x!ban',
          desc: 'El bot banea al usuario'
        },
        {
          name: 'Mute',
          command: 'x!mute',
          desc: 'El bot mutea al usuario'
        },
        {
          name: 'Server Info',
          command: 'x!serverinfo',
          desc: 'Muestra la informacion del bot'
        },
        {
          name: 'Calculadora',
          command: 'x!calculadora',
          desc: 'Resuelve una cuenta!'
        },
        {
          name: '8Ball',
          command: 'x!8ball',
          desc: 'Respuesta random!'
        },
        {
          name: 'Colaboradores',
          command: 'x!colaboradores',
          desc: 'Este comando te enseña la gente que colabora para mejorar el bot'
        },
        {
          name: 'Say',
          command: 'x!say',
          desc: 'El bot dice lo que le escribas'
        },
        {
          name: 'Enviar',
          command: 'x!enviar',
          desc: 'El bot le envia un mensaje a el usuario mencionado'
        },
        {
          name: 'Stats',
          command: 'x!stats',
          desc: 'El bot te muestra sus estadisticas'
        },
        {
          name: 'FakeBan',
          command: 'x!fban',
          desc: 'El bot hace un Fake ban'
        },
        {
          name: 'Avatar',
          command: 'x!avatar',
          desc: 'El bot te muestra el avatar del que quieras'
        },
        {
          name: 'Encuesta',
          command: 'x!encuesta',
          desc: 'El bot hace una encuesta de Si o no'
        },
        {
          name: 'Pagina',
          command: 'x!pagina',
          desc: 'El bot te da el link de su pagina'
        },
      ]
    }
  },
  metaInfo() {
      return {
        title: 'Xeonmine Bot - Comandos',
        description: 'En esta pagina veras todos los comandos de este bot un bot de discord que te ayudA a administrar tu server y a la vez tener un poco de diversion, invita a nuestro bot',
      }
    }
}
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