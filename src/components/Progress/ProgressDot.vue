<template>
  <div>
    <span class="title">{{ title }}</span>
    <div ref="progressDot" class="progress-dot">
      <div v-for="(v, i) in Array(MAX_DOT_COUNT)" :key="i" class="dot">
        <div class="fill"></div>
      </div>
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
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      MAX_DOT_COUNT: 10,
    };
  },
  methods: {
    delay(ms: number): Promise<unknown> {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    async animate() {
      const MAX = Math.floor(this.value / this.MAX_DOT_COUNT);
      const progressDot = this.$refs.progressDot as HTMLDivElement;
      for (let i = 0; i < MAX; i++) {
        const fill = progressDot.children[i].getElementsByClassName(
          "fill"
        )[0] as HTMLDivElement;
        fill.style.width = "100%";
        await this.delay(100);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.progress-dot {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 30px;
  .dot {
    border-radius: 50%;
    background: #eaeaea;
    height: 15px;
    width: 15px;
    overflow: hidden;
    .fill {
      width: 0%;
      height: 100%;
      background: $main-color;
      transition: width 0.1s;
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
