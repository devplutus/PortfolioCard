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
        <div class="thumbnail" v-for="(p, i) in portfolio" :key="i">
          <div
            class="image-conatiner"
            :style="{ backgroundImage: `url(${p.img})` }"
          ></div>
          <span class="title"> {{ p.title }} </span>
          <span class="type"> {{ p.type }} </span>
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
      current: 0,
      portfolio: [
        {
          title: "Prescription Management Solution",
          img: require("../../assets/portfolio/mrbot.png"),
          type: "Web",
          keywords: ["C#", "Company"],
        },
        {
          title: "Scholarship Management System",
          img: require("../../assets/portfolio/mirae.png"),
          type: "Web",
          keywords: ["C#", "Company"],
        },
      ],
    };
  },
  mounted() {
    this.rotate();
  },
  methods: {
    move(isNext: boolean) {
      const d: number = 360 / this.portfolio.length;
      if (isNext) {
        this.degree = d * 1;
        this.current -= 1;
        if (this.current === -1) this.current = this.portfolio.length - 1;
      } else {
        this.degree = d * -1;
        this.current += 1;
        if (this.current === this.portfolio.length) this.current = 0;
      }

      this.rotate();
    },
    rotate() {
      // const portfolioList = this.$refs.PortfolioList as HTMLDivElement;
      // const w = portfolioList.offsetWidth / 2;
      // const r = Math.round(w / Math.tan(Math.PI / total));
      const total = this.portfolio.length;
      const d = 360 / total;
      const r = 400;
      const thumbnailList = document.getElementsByClassName("thumbnail");

      for (let i = 0; i < thumbnailList.length; i++) {
        const thumbnail = thumbnailList[i] as HTMLDivElement;
        const rotateY: string = thumbnail.style.transform;
        const nextRotateY: number = rotateY
          ? parseInt(rotateY.split("rotateY(")[1].split("deg")[0]) + this.degree
          : d * i;

        thumbnail.style.transform = `rotateY(${nextRotateY}deg) translateZ(${r}px)`;

        // Hover
        if (this.current === i) thumbnail.classList.add("main");
        else thumbnail.classList.remove("main");
      }
    },
    push() {
      this.$nextTick(() => {
        this.degree = 0;
        this.rotate();
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 480px;
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
  top: -20px;
  transform-style: preserve-3d;
  transition: 1s;
}

%thumbnail {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  transition: 1s;
  .image-conatiner {
    width: 160px;
    height: 80px;
    padding-bottom: 25px;
    margin-bottom: 10px;
    background-repeat: no-repeat;
    background-size: contain;
    border-bottom: 1px solid #eee;
  }
  .title {
    padding: 20px 20px 10px 20px;
    font-weight: bold;
    font-size: 12px;
  }
  .type {
    color: #999999;
    font-size: 10px;
  }
  &.main {
    &:hover {
      cursor: pointer;
      transform: translateZ(440px) !important;
    }
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
