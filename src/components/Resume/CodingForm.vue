<template>
  <div ref="pieChartForm" class="pie-chart-form">
    <div class="pie-chart">
      <span class="pie-char percentage">50%</span>
    </div>
    <div class="pie-chart">
      <span class="pie-char percentage">40%</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
});
</script>

<style lang="scss">
$pie-chart-size: 110px;
$pie-chart-border: 15px;

.pie-chart-form {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.pie-chart {
  width: $pie-chart-size;
  height: $pie-chart-size;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: conic-gradient($main-color 60%, grey 0);
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
</style>
