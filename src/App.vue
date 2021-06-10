<template>
  <Header />
  <div class="container-all">
    <router-view/>
    <Footer/>
  </div>
  <ChangeTheme />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ChangeTheme from "@/components/ChangeTheme.vue";

export default {
  components: {
    Header,
    Footer,
    ChangeTheme
  }
}
</script>

<style>
:root {
  --nor-query-width: 924px;
  --mid-query-width: 545px;
  --min-query-width: 400px;
}
body {
  --color-text: #000000;
  --color-items: #131313;
  --color-bg-content: #FEFEFE;
  --btn-active: #0000006b;
  --btn-change: #8f8d8da6;
  --color-bg: #ffffff;
  --menu-dark: #5c6979;
}

body.dark-theme {
  --color-text: #ffffff;
  --color-items: #fcfbfb;
  --color-bg-content: #1d232b;
  --btn-active: #0000006b;
  --btn-change: #0000006b;
  --color-bg: #1d232b;
  --menu-dark: #353e49;
}


@media (prefers-color-scheme: dark) {
  body {
    --color-text: #ffffff;
    --color-items: #fcfbfb;
    --color-bg-content: #1d232b;
    --btn-active: #0000006b;
    --btn-change: #0000006b;
    --color-bg: #1d232b;
    --menu-dark: #353e49;
  }
  
  body.white-theme {
    --color-text: #000000;
    --color-items: #131313;
    --color-bg-content: #FEFEFE;
    --btn-active: #0000006b;
    --btn-change: #8f8d8da6;
    --color-bg: #ffffff;
    --menu-dark: #5c6979;
  }
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: var(--color-text);
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  min-height: calc(100vh - 45px);
  position: relative;
  padding-bottom: 45px;
}

.container {
  margin:auto;
  width: 90%;
}

#informacion {
  height: 100vh;
}

.show {
  padding-top: 3em;
}
</style>
