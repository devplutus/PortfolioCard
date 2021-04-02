<template>
  <div>
    <div ref="progressCircle" class="progress-circle">
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
    thickness: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    const progressCircle = this.$refs.progressCircle as HTMLDivElement;
    progressCircle.style.setProperty(
      "--progress-circle-size",
      `${this.size}px`
    );
    progressCircle.style.setProperty(
      "--progress-circle-border",
      `${this.thickness}px`
    );
  },
  methods: {
    animate() {
      const chart = this.$refs.progressCircle as HTMLDivElement;
      const percentage = this.value;
      const count = setInterval(() => {
        // Count Up
        const span = chart.getElementsByTagName("span")[0] as HTMLSpanElement;
        const nextPercentage = parseInt(span.innerText.replace("%", "")) + 1;
        span.innerText = `${nextPercentage}%`;

        // Aniamtion
        chart.style.background = `conic-gradient(#4cac83 ${nextPercentage}%, #eaeaea 0)`;

        if (nextPercentage === percentage) {
          clearInterval(count);
        }
      }, Math.floor(1000 / percentage));
    },
  },
});
</script>

<style lang="scss">
:root {
  --progress-circle-size: 110px;
  --progress-circle-border: 15px;
}

.progress-circle {
  width: var(--progress-circle-size);
  height: var(--progress-circle-size);
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
    width: calc(100% - var(--progress-circle-border));
    height: calc(100% - var(--progress-circle-border));
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
