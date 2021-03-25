<template>
  <div id="app">
    <MovingBackground />
    <div class="container">
      <div ref="containerSub" class="container-sub">
        <Nav />
        <ProfileCard />
      </div>
      <div ref="containerMain" class="container-main">
        <transition @enter="enter" @beforeLeave="leave">
          <Resume
            v-if="currentRoute === 'Resume'"
            id="resume"
            class="container-main-content"
          />
        </transition>
        <transition @enter="enter" @beforeLeave="leave">
          <Portfolio
            v-if="currentRoute === 'Portfolio'"
            id="portfolio"
            class="container-main-content"
          />
        </transition>
        <transition @enter="enter" @beforeLeave="leave">
          <Contact
            v-if="currentRoute === 'Contact'"
            id="contact"
            class="container-main-content"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

import Vue from "vue";
import { mapState } from "vuex";
// Sub Components
import MovingBackground from "@/components/MovingBackground.vue";
import Nav from "@/components/Nav.vue";
import ProfileCard from "@/components/ProfileCard.vue";
// Main Views
import Resume from "@/views/Resume.vue";
import Portfolio from "@/views/Portfolio.vue";
import Contact from "@/views/Contact.vue";

export default Vue.extend({
  data() {
    type StateType = {
      animationDelay: number;
      menuItems: string[];
    };

    const state: StateType = {
      // Unit: ms
      animationDelay: 500 / 1000,
      menuItems: ["Profile", "Resume", "Portfolio", "Contact"],
    };
    return state;
  },
  components: {
    MovingBackground,
    Nav,
    ProfileCard,
    Resume,
    Portfolio,
    Contact,
  },
  computed: {
    ...mapState({
      currentRoute: (state: any) => state.route.current,
      prevRoute: (state: any) => state.route.prev,
    }),
    gap(): number {
      const currentRouteIndex = this.menuItems.indexOf(this.currentRoute);
      const prevRouteIndex = this.menuItems.indexOf(this.prevRoute);
      return currentRouteIndex - prevRouteIndex;
    },
  },
  watch: {
    async currentRoute(to, from) {
      this.showMainConatiner(to, from);
    },
  },
  methods: {
    delay(ms: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    async enter(_: Element, done: any) {
      const currentDOM = document.getElementById(
        this.currentRoute.toLowerCase()
      ) as HTMLDivElement;

      if (this.currentRoute !== "Profile") {
        const animationName = this.gap >= 0 ? "open-to-top" : "open-to-bottom";
        currentDOM.style.animation = `${animationName} ${this.animationDelay}s ease-in-out`;
        currentDOM.style.animationDelay = `${this.animationDelay}s`;
        currentDOM.style.opacity = "0";
        await this.delay(this.animationDelay * 1000);
        currentDOM.style.opacity = "1";
      }
      done();
    },
    async leave() {
      await this.delay(this.animationDelay)
      const prevDOM = document.getElementById(
        this.prevRoute.toLowerCase()
      ) as HTMLDivElement;

      if (this.prevRoute !== "Profile") {
        const animationName =
          this.gap >= 0 ? "close-to-top" : "close-to-bottom";
        prevDOM.style.animation = `${animationName} ${this.animationDelay}s ease-in-out`;
      }
    },
    async showMainConatiner(to: string, from: string) {
      const containerMain = this.$refs.containerMain as HTMLDivElement;
      if (to === "Profile") {
        containerMain.classList.remove("open");
        containerMain.classList.add("close");
        await this.delay(1000);
      } else if (from === "Profile") {
        containerMain.classList.remove("close");
        containerMain.classList.add("open");
        await this.delay(1000);
      }
    },
  },
});
</script>

<style lang="scss">
@import "@/scss/app.scss";
</style>
