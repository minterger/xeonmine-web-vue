<template>
  <Header />
  <div class="container-all">
    <router-view />
    <Footer />
  </div>
  <ChangeTheme />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ChangeTheme from "@/components/ChangeTheme.vue";

export default {
  components: {
    Header,
    Footer,
    ChangeTheme,
  },
};
</script>

<style>
body {
  --color-text: #000000;
  --color-items: #131313;
  --color-bg-content: #fefefe;
  --btn-active: #0000006b;
  --btn-change: #8f8d8da6;
  --color-bg: #ffffff;
  --menu-dark: #5c6979;
  --shadow-color: #11161c2a;
}

body.dark-theme {
  --color-text: #ffffff;
  --color-items: #fcfbfb;
  --color-bg-content: #1d232b;
  --btn-active: #0000006b;
  --btn-change: #0000006b;
  --color-bg: #1d232b;
  --menu-dark: #353e49;
  --shadow-color: #11161c;
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
    --shadow-color: #11161c;
  }

  body.white-theme {
    --color-text: #000000;
    --color-items: #131313;
    --color-bg-content: #fefefe;
    --btn-active: #0000006b;
    --btn-change: #8f8d8da6;
    --color-bg: #ffffff;
    --menu-dark: #5c6979;
    --shadow-color: #11161c2a;
  }
}

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: var(--color-text);
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  min-height: calc(100vh - 45px);
  position: relative;
  padding-bottom: 45px;
  transition: background-color 0.3s;
}

.container {
  margin: auto;
  width: 90%;
}
.container * {
  transition: color 0.3s, background-color 0.3s;
}

#informacion {
  min-height: 500px;
}

.show {
  padding-top: 3em;
}

@media screen and (max-width: 924px) {
  .container {
    width: 95%;
  }
}

@media screen and (max-width: 545px) {
  .container {
    width: 98%;
  }
}
</style>
