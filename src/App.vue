<template>
  <div id="app">
    <MovingBackground />
    <div class="container">
      <Nav />
      <ProfileCard />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MovingBackground from "@/components/MovingBackground.vue";
import Nav from "@/components/Nav.vue";
import ProfileCard from "@/components/ProfileCard.vue";
export default Vue.extend({
  components: {
    MovingBackground,
    Nav,
    ProfileCard,
  },
});
</script>

<style>
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
.container {
  display: flex;
  flex-direction: row;
}
</style>
