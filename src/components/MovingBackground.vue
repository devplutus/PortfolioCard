<template>
  <div ref="background" class="background"></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      /* OPTION */
      // Unit : pixel
      RECT_MIN_SIZE: 20,
      RECT_MAX_SIZE: 40,
      // Unit : s
      RECT_MIN_ROTATE_TIME: 15,
      RECT_MAX_ROTATE_TIME: 25,
      // Unit : ms
      RECT_MIN_MOVE_TIME: 5,
      RECT_MAX_MOVE_TIME: 50,
      RECT_ROUTIN_TIME: 100,
      // Unit : pixel
      RECT_MOVE_STEP: 1,
      // Unit : ea
      RECT_MAX_TOTAL: 50,
      /* Variable */
      totalRect: 0,
    };
  },
  mounted() {
    this.createRectRoutin();
  },
  methods: {
    createRectRoutin() {
      setInterval(() => {
        if (Math.random() * 10 < 5 && this.totalRect < this.RECT_MAX_TOTAL) {
          this.createRect();
        }
      }, this.RECT_ROUTIN_TIME);
    },
    createRect() {
      const background = this.$refs.background as Element;
      const rect: HTMLDivElement = document.createElement("div");
      rect.className = "background-rect rect-rotate";
      rect.id = Date.now().toString();

      this.setRectSizeAndPos(rect);
      this.setRectRotateTiming(rect);
      this.setRectMoveTiming(rect);

      this.totalRect += 1;

      background && background.appendChild(rect);
    },
    setRectSizeAndPos(rect: HTMLDivElement) {
      const size = this.getRandomValue(this.RECT_MIN_SIZE, this.RECT_MAX_SIZE);
      const leftPos = Math.random() * 100;
      rect.style.width = rect.style.height = `${size}px`;
      rect.style.left = `${leftPos}%`;
      rect.style.bottom = "-200px";
    },
    setRectRotateTiming(rect: HTMLDivElement) {
      const timing = this.getRandomValue(
        this.RECT_MIN_ROTATE_TIME,
        this.RECT_MAX_ROTATE_TIME
      );
      rect.style.animationDuration = `${timing}s`;
    },
    setRectMoveTiming(rect: HTMLDivElement) {
      const timing = this.getRandomValue(
        this.RECT_MIN_MOVE_TIME,
        this.RECT_MAX_MOVE_TIME
      );

      const loop = setInterval(() => {
        const nextPos: number =
          parseInt(rect.style.bottom.replace("px", "")) + this.RECT_MOVE_STEP;
        rect.style.bottom = `${nextPos}px`;
        if (screen.height < nextPos) {
          clearInterval(loop);
          this.clearRect(rect.id);
        }
      }, timing);
    },
    getRandomValue(min: number, max: number): number {
      return max > min ? Math.random() * (max - min) + min : 0;
    },
    clearRect(id: string) {
      this.totalRect -= 1;
      document.getElementById(id)?.remove();
    },
  },
});
</script>

<style lang="scss">
.background {
  z-index: -1;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  background: linear-gradient(155deg, $main-color, #b0fbdb);
}

.background-rect {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.rect-rotate {
  animation-name: rotating;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

/* Animation */
@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
