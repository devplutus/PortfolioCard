<template>
  <svg
    ref="checkCircle"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 130.2 130.2"
  >
    <circle
      class="path circle"
      fill="none"
      :stroke="color || '#4cac83'"
      stroke-width="6"
      stroke-miterlimit="10"
      cx="65.1"
      cy="65.1"
      r="62.1"
    />
    <polyline
      class="path check"
      fill="none"
      :stroke="color || '#4cac83'"
      stroke-width="6"
      stroke-linecap="round"
      stroke-miterlimit="10"
      points="100.2,40.2 51.5,88.8 29.8,67.5 "
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    color: String,
    size: String,
  },
  mounted() {
    const svg = this.$refs.checkCircle as HTMLElement;
    if (this.size) {
      svg.style.width = this.size;
    }
  },
});
</script>

<style lang="scss" scoped>
svg {
  width: 100px;
  display: block;
}
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  &.circle {
    animation: dash 0.9s ease-in-out;
  }
  &.line {
    stroke-dashoffset: 1000;
    animation: dash 0.9s 0.35s ease-in-out forwards;
  }
  &.check {
    stroke-dashoffset: -100;
    animation: dash-check 0.9s 0.35s ease-in-out forwards;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}
</style>
