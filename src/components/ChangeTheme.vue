<template>
  <button class="change-theme" @click="changeTheme"><i class='bx bx-brush' ></i></button>
</template>

<script>
export default {
  name: 'ChangeTheme',
  data() {
    return {
      darkMode: '',
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
  mounted() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.toggle('dark-theme');
    } else if (currentTheme === 'white') {
        document.body.classList.toggle('white-theme');
    }
    this.darkMode = window.matchMedia("(prefers-color-scheme: dark)")
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
}
.change-theme .bx {
    font-size: 1.5rem;
    transition: font-size .5s ease-in-out;
}
.change-theme:hover .bx{
    transition: font-size .5s ease-in-out;
    font-size: 1.7rem;
}
</style>