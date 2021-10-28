<template>
  <header id="head" class="head" :class="[isActiveMenu ? 'header' : '']">
    <div class="container-head">
      <router-link to="/" class="title">XeonMine Bots</router-link>
      <nav class="menu">
        <ul
          id="menu"
          class="menu-items"
          :class="[isActiveMenu ? 'menu2' : 'menu1']"
        >
          <li>
            <router-link exact-active-class="active" to="/" @click="toggleMenu"
              >Inicio</router-link
            >
          </li>
          <li>
            <router-link
              exact-active-class="active"
              to="/comandos"
              @click="toggleMenu"
              >Comandos XM</router-link
            >
          </li>
          <li>
            <router-link
              exact-active-class="active"
              to="/comandosmc"
              @click="toggleMenu"
              >Comandos XMMC</router-link
            >
          </li>
          <li>
            <router-link
              exact-active-class="active"
              to="/sobre"
              @click="toggleMenu"
              >Sobre Nosotros</router-link
            >
          </li>
          <li>
            <router-link class="invite"
              to="/invite"
              @click="toggleMenu"
              >Invitar</router-link
            >
          </li>
        </ul>
        <span class="btn-menu" @click="toggleMenu"
          ><i
            class="bx bx-menu"
            :class="[isActiveMenu ? 'bx-x' : 'bx-menu']"
          ></i
        ></span>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActiveMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      const match = window.matchMedia("(max-width: 545px)");
      if (match.matches) {
        this.isActiveMenu = !this.isActiveMenu;
        document.querySelector(".container-all").classList.toggle("show");
      }
    },
  },
};
</script>

<style scoped>
.container-head {
  display: flex;
  margin: auto;
  max-width: 1400px;
  width: 90%;
  align-items: center;
  justify-content: space-between;
}
.head {
  width: 100%;
  background-color: var(--color-bg);
  display: flex;
  height: 3em;
  box-shadow: 0px 1px 10px var(--shadow-color);
  transition: background-color 0.3s, box-shadow 0.2s;
}
.header {
  z-index: 10;
  width: 100%;
  position: fixed;
}
.title {
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.5em;
  font-weight: 500;
  transition: color 0.3s;
}
.menu-items {
  list-style: none;
  display: flex;
}
.menu-items li a {
  border-radius: 3px;
  margin: 0px 5px;
  transition: all 0.4s;
}
.menu-items li a {
  text-decoration: none;
  padding: 7px 13px;
  font-size: 0.9em;
  display: block;
  color: var(--color-items);
}
.menu-items li a:hover,
li a.active {
  background-color: var(--btn-active);
  transition: all 0.4s;
}
.btn-menu {
  color: var(--color-items);
  font-size: 2em;
  cursor: pointer;
  margin-right: 30px;
  display: none;
}

.menu-items li a.invite {
  background: crimson;
  color: #fff;
}

.menu-items li a.invite:hover {
  background: crimson;
}

@media screen and (max-width: 924px) {
  .container-head {
    width: 100%;
  }
  .title {
    margin-left: 25px;
  }
  .menu-items {
    margin-right: 30px;
  }
}

@media screen and (max-width: 800px) {
  .title {
    margin-left: 15px;
  }

  .btn-menu {
    display: inline-flex;
  }
  .menu1 {
    z-index: 10;
    position: fixed;
    width: 100vw;
    height: calc(100vh - 3em);
    background-color: var(--menu-dark);
    text-align: center;
    transition: all 0.4s;
    flex-direction: column;
    top: -100em;
    right: -30px;
    bottom: 0;
  }
  .menu2 {
    z-index: 10;
    position: fixed;
    width: 100vw;
    height: calc(100vh - 3em);
    background-color: var(--menu-dark);
    text-align: center;
    transition: all 0.4s;
    flex-direction: column;
    top: 3em;
    right: -30px;
    bottom: 0;
  }

  .menu-items {
    overflow-y: auto;
  }

  .menu-items li {
    margin: 30px 0 0 0;
    line-height: 30px;
  }
  .menu-items li a:hover {
    background-color: none;
  }
  .menu-items li a {
    color: #fff;
  }
}
</style>
