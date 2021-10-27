<template>
  <button class="change-theme" aria-label="Cambiar Tema" @click="changeTheme">
    <i
      class="bx bxs-sun"
      v-if="(theme == 'dark' || theme == null) && darkMode.matches == true"
    ></i>
    <i
      class="bx bxs-moon"
      v-else-if="
        (theme == 'white' || theme == null) && darkMode.matches == false
      "
    ></i>
    <i class="bx bxs-moon" v-else-if="theme == 'white'"></i>
    <i class="bx bxs-sun" v-else-if="theme == 'dark'"></i>
  </button>
</template>

<script>
export default {
  name: "ChangeTheme",
  data() {
    return {
      darkMode: window.matchMedia("(prefers-color-scheme: dark)"),
      theme: "",
    };
  },
  methods: {
    changeTheme() {
      if (this.darkMode.matches) {
        document.body.classList.toggle("white-theme");
        this.theme = document.body.classList.contains("white-theme")
          ? "white"
          : "dark";
      } else {
        document.body.classList.toggle("dark-theme");
        this.theme = document.body.classList.contains("dark-theme")
          ? "dark"
          : "white";
      }
      localStorage.setItem("theme", this.theme);
    },
  },
  created() {
    this.theme = localStorage.getItem("theme");
    if (this.theme === "dark") {
      document.body.classList.toggle("dark-theme");
    } else if (this.theme === "white") {
      document.body.classList.toggle("white-theme");
    }
  },
};
</script>

<style scoped>
.change-theme {
  position: fixed;
  background-color: var(--btn-change);
  width: 50px;
  height: 50px;
  cursor: pointer;
  right: 15px;
  bottom: 15px;
  border: none;
  border-radius: 100px;
  transition: transform 0.3s, background-color 0.3s;
}

.change-theme:active {
  transform: scale(1.1);
  transition: transform 0.3s;
}

.change-theme .bx {
  font-size: 1.5rem;
  color: var(--text-color);
  transition: color 0.3s, transform 0.3s ease-in-out;
}
.change-theme:hover .bx {
  transition: transform 0.3s ease-in-out;
  transform: scale(1.2);
}
</style>
