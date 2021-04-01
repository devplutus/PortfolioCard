<template>
  <div ref="pieChartForm" class="pie-chart-form">
    <div
      ref="pieCharts"
      v-for="info in pieChartInfos"
      :key="info.title"
      :percentage="info.value"
    >
      <div class="pie-chart">
        <span class="percentage">0%</span>
      </div>
      <span class="title">{{ info.title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      pieChartInfos: [
        {
          title: "HTML & CSS",
          value: 100,
        },
        {
          title: "Express.js",
          value: 85,
        },
        {
          title: "Vue.js & Nuxt.js",
          value: 90,
        },
        {
          title: ".Net Core\r\nRazor Pages",
          value: 60,
        },
      ],
    };
  },
  methods: {
    startAnimation() {
      const pieCharts = this.$refs.pieCharts as HTMLDivElement[];
      pieCharts.forEach((chart: HTMLDivElement) => {
        const percentage = parseInt(chart.getAttribute("percentage") || "0");
        this.countUp(chart, percentage);
      });
    },
    countUp(chart: HTMLDivElement, percentage: number) {
      const count = setInterval(() => {
        // Count Up
        const span = chart.getElementsByTagName("span")[0] as HTMLSpanElement;
        const nextPercentage = parseInt(span.innerText.replace("%", "")) + 1;
        span.innerText = `${nextPercentage}%`;

        // Pie Chart Aniamtion
        const pieChart = chart.getElementsByClassName(
          "pie-chart"
        )[0] as HTMLDivElement;
        pieChart.style.background = `conic-gradient(#4cac83 ${nextPercentage}%, #eaeaea 0)`;

        if (nextPercentage === percentage) {
          clearInterval(count);
        }
      }, Math.floor(1000 / percentage));
    },
  },
});
</script>

<style lang="scss">
$pie-chart-size: 110px;
$pie-chart-border: 15px;

.pie-chart-form {
  padding: 30px 30px 0 30px;
  display: flex;
  flex-wrap: wrap;
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
