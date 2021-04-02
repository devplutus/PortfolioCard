<template>
  <div>
    <div class="content-title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.content-title {
  display: block;
  text-align: left;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  span {
    font-size: 1.5em;
    font-weight: bold;
    position: relative;
    color: transparent;
    background: linear-gradient(
      90deg,
      $main-color,
      $main-color 50%,
      $text-color 50%
    );
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    animation-name: title-left-to-right;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
}

/* Aniamtion */
@keyframes title-left-to-right {
  0% {
    background-position-x: 100%;
  }
  50%,
  100% {
    background-position-x: -100%;
  }
}
</style>
