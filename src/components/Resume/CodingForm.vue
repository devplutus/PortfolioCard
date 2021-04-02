<template>
  <div ref="pieChartForm" class="pie-chart-form">
    <ProgressCircle
      ref="progressCircles"
      v-for="info in pieChartInfos"
      :key="info.title"
      :title="info.title"
      :value="info.value"
      :size="110"
      :thickness="15"
    >
    </ProgressCircle>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProgressCircle from "../Progress/ProgressCircle.vue";

export default Vue.extend({
  components: {
    ProgressCircle,
  },
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
      const progressCircles = this.$refs.progressCircles as HTMLDivElement[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      progressCircles.forEach((chart: any) => {
        chart.animate();
      });
    },
  },
});
</script>

<style lang="scss">
.pie-chart-form {
  padding: 30px 30px 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
