<template>
  <div id="app">
    <MovingBackground />
    <div class="container">
      <div ref="containerSub" class="container-sub">
        <Nav />
        <ProfileCard />
      </div>
      <router-view ref="containerMain" class="container-main" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MovingBackground from "@/components/MovingBackground.vue";
import Nav from "@/components/Nav.vue";
import ProfileCard from "@/components/ProfileCard.vue";
export default Vue.extend({
  data() {
    return {
      menuItems: ["Profile", "Resume", "Portfolio", "Contact"],
    };
  },
  components: {
    MovingBackground,
    Nav,
    ProfileCard,
  },
});
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css");
body {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: rgb(50, 50, 50);
}
.container,
.container-sub {
  display: flex;
  flex-direction: row;
}
.container-sub {
  transition: all 1s;
}

.container-main {
  z-index: 0;
  width: 800px;
  border-radius: 10px;
  padding: 5px;
  background: white;
  animation: bottomToTop 2s;
}

/* Animation */
@keyframes bottomToTop {
  0% {
    width: 0px;
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
