<template>
  <div>
    <span class="title">{{ title }}</span>
    <div ref="progressBar" class="progress-bar">
      <div class="fill"></div>
    </div>
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
    thickness: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    const progressBar = this.$refs.progressBar as HTMLDivElement;
    progressBar.style.setProperty(
      "--progress-bar-thickness",
      `${this.thickness}px`
    );
    progressBar.style.setProperty("--progress-bar-width", `${this.value}%`);
  },
  methods: {
    animate() {
      const progressBar = this.$refs.progressBar as HTMLDivElement;
      const fill = progressBar.getElementsByClassName(
        "fill"
      )[0] as HTMLDivElement;
      fill.classList.add("animate");
    },
  },
});
</script>
<style lang="scss" scoped>
.progress-bar {
  --progress-bar-thickness: 5px;
  --progress-bar-width: 0%;
  width: 100%;
  height: var(--progress-bar-thickness);
  background: #eaeaea;
  border-radius: 50px;
  margin-bottom: 20px;
  .fill {
    width: 0%;
    background: $main-color;
    border-radius: 50px;
    height: var(--progress-bar-thickness);
    transition: width 1s;
    &.animate {
      width: var(--progress-bar-width);
    }
  }
}
.title {
  display: block;
  text-align: left;
  padding-bottom: 10px;
  padding-left: 5px;
  font-size: 0.9em;
  font-weight: 600;
}
</style>
