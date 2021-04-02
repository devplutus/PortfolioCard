<template>
  <div>
    <div class="pie-chart">
      <span class="percentage">0%</span>
    </div>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: {
      type: Number,
      required: true,
    },
    title: String,
    size: {
      type: Number,
      required: true,
    },
    
  }
});
</script>

<style lang="scss">
.pie-chart {
  width: $pie-chart-size;
  height: $pie-chart-size;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: conic-gradient($main-color 0%, #eaeaea 0);
  .percentage {
    color: $text-color;
    z-index: 1;
    font-size: 1.3em;
    font-weight: 600;
  }
  &:after {
    content: "";
    position: absolute;
    background: white;
    left: 50%;
    top: 50%;
    width: calc(100% - #{$pie-chart-border});
    height: calc(100% - #{$pie-chart-border});
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
}
.title {
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 500;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}
</style>
