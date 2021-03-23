<template>
  <div class="profile-card">
    <div class="profile-image">
      <div class="wave"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
.profile-card {
  height: 650px;
  width: 450px;
  background: white;
  border-radius: 5px;
  margin-left: 10px;
}
.profile-image {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 50%;
  background-image: url("https://i.pinimg.com/236x/ca/1f/74/ca1f746d6f232f87fca4e4d94ef6f3ab--app-technology.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: #eee;
}
.wave {
  position: absolute;
  width: 100%;
  bottom: 0;
  background: url("~@/assets/wave.svg");
}

@media screen and (max-height: 800px) {
  .profile-card {
    height: 80vh;
  }
}
</style>
