<template>
  <button class="change-theme" @click="changeTheme">
    <i class="bx bxs-sun" v-if=" (theme == 'dark' || theme == null) &&  darkMode.matches == true " ></i>
    <i class="bx bxs-moon" v-else-if=" (theme == 'white' || theme == null) && darkMode.matches == false " ></i>
    <i class="bx bxs-moon" v-else-if="theme == 'white'" ></i>
    <i class="bx bxs-sun" v-else-if="theme == 'dark'" ></i>
  </button>
</template>

<script>
export default {
  name: 'ChangeTheme',
  data() {
    return {
      darkMode: window.matchMedia('(prefers-color-scheme: dark)'),
      theme: ''
    }
  },
  methods: {
    changeTheme() {
      if (this.darkMode.matches) {
        document.body.classList.toggle('white-theme')
        this.theme = document.body.classList.contains('white-theme')  ? 'white' : 'dark';  

      } else {
        document.body.classList.toggle('dark-theme')
        this.theme = document.body.classList.contains('dark-theme') ? 'dark' : 'white';
      }
      localStorage.setItem('theme', this.theme)
    }
  },
  created() {
    this.theme = localStorage.getItem('theme');
    if (this.theme === 'dark') {
        document.body.classList.toggle('dark-theme');
    } else if (this.theme === 'white') {
        document.body.classList.toggle('white-theme');
    }
  }

}
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
    transition: background-color .3s;
}
.change-theme .bx {
    font-size: 1.5rem;
    transition: font-size .5s ease-in-out;
    color: var(--text-color);
    transition: color .3s;
}
.change-theme:hover .bx{
    transition: font-size .5s ease-in-out;
    font-size: 1.7rem;
}
</style>