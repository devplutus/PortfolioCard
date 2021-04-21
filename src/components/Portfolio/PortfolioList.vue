<template>
  <div ref="PortfolioContainer" class="container">
    <div class="slide-button prev" @click="move(false)">
      <i class="fas fa-arrow-circle-left"></i>
    </div>
    <div class="slide-button next" @click="move(true)">
      <i class="fas fa-arrow-circle-right"></i>
    </div>
    <div ref="PortfolioList" class="portfolio-list">
      <div ref="ThumbnailList" class="thumbnail-list">
        <div class="thumbnail" v-for="(_, i) in portfolio" :key="i">
          <img draggable="false" src="~@/assets/portfolio/MrBot.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      degree: 0,
      portfolio: [0, 1, 2, 3, 4, 5],
    };
  },
  mounted() {
    this.calDegree();
  },
  methods: {
    move(isNext: boolean) {
      const d = 360 / this.portfolio.length;
      this.degree += isNext ? d : -d;
      this.rotate();
    },
    rotate() {
      const thumbnailList = this.$refs.ThumbnailList as HTMLDivElement;
      thumbnailList.style.transform = `rotateY(${this.degree}deg)`;
    },
    push() {
      this.portfolio.push(0);
      this.$nextTick(() => {
        this.calDegree();
        this.degree = 0;
        this.rotate();
      });
    },
    calDegree() {
      const total = this.portfolio.length;
      const d = 360 / total;
      // const portfolioList = this.$refs.PortfolioList as HTMLDivElement;
      // const w = portfolioList.offsetWidth / 2;
      // const r = Math.round(w / Math.tan(Math.PI / total));
      const r = 400;

      const thumbnailList = document.getElementsByClassName("thumbnail");
      for (let i = 0; i < thumbnailList.length; i++) {
        (thumbnailList[i] as HTMLDivElement).style.transform = `rotateY(${
          d * i
        }deg) translateZ(${r}px)`;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.portfolio-list {
  margin: 0 auto;
  width: 210px;
  height: 200px;
  position: relative;
  perspective: 1000px;
}

.thumbnail-list {
  height: 100%;
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: 1s;
}

%thumbnail {
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 250px;
  border-radius: 20px;
  box-shadow: 5px 5px 15px 5px rgba(34, 33, 81, 0.5);
  background: white;
  opacity: 0.9;
  animation: add 1s;
}

.thumbnail {
  @extend %thumbnail;
  img {
    width: 200px;
    height: 200px;
  }
}

.slide-button {
  position: absolute;
  z-index: 10;
  font-size: 50px;
  cursor: pointer;
  animation-name: cloud;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-play-state: running;
  &.prev {
    left: 10px;
  }
  &.next {
    right: 10px;
  }
  &:hover {
    animation-play-state: paused;
  }
  &.test {
    top: 10px;
  }
}

@keyframes cloud {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes add {
  from {
    transform: rotateY(359deg);
  }
}
</style>
