<template>
  <div id="app">
    <MovingBackground />
    <div class="container">
      <div ref="containerSub" class="container-sub">
        <Nav />
        <ProfileCard />
      </div>
      <div ref="containerMain" class="container-main">
        <transition
          :enter-active-class="contentTransitions.Resume.enter"
          :leave-active-class="contentTransitions.Resume.leave"
          @beforeEnter="beforeEnter"
          @beforeLeave="beforeLeave"
        >
          <Resume
            v-if="currentRoute === 'Resume'"
            id="resume"
            class="container-main-content"
          />
        </transition>
        <transition
          :enter-active-class="contentTransitions.Portfolio.enter"
          :leave-active-class="contentTransitions.Portfolio.leave"
          @beforeEnter="beforeEnter"
          @beforeLeave="beforeLeave"
        >
          <Portfolio
            v-if="currentRoute === 'Portfolio'"
            id="portfolio"
            class="container-main-content"
          />
        </transition>
        <transition
          :enter-active-class="contentTransitions.Contact.enter"
          :leave-active-class="contentTransitions.Contact.leave"
          @beforeEnter="beforeEnter"
          @beforeLeave="beforeLeave"
        >
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
    interface Transtions {
      enter: string;
      leave: string;
    }

    interface ContentTransitions {
      [key: string]: Transtions;
    }

    type StateType = {
      menuItems: string[];
      contentTransitions: ContentTransitions;
    };

    const state: StateType = {
      // Unit: Pixel
      menuItems: ["Profile", "Resume", "Portfolio", "Contact"],
      contentTransitions: {
        Resume: {
          enter: "bottom-to-top-enter",
          leave: "bottom-to-top-leave",
        },
        Portfolio: {
          enter: "bottom-to-top-enter",
          leave: "bottom-to-top-leave",
        },
        Contact: {
          enter: "bottom-to-top-enter",
          leave: "top-to-bottom-leave",
        },
      },
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
  },
  watch: {
    async currentRoute(to, from) {
      this.showMainConatiner(to, from);
    },
  },
  methods: {
    beforeEnter() {
      console.log(this.prevRoute, this.currentRoute, "Enter");
      if (![this.currentRoute, this.prevRoute].includes("Profile")) {
        const gap =
          this.menuItems.indexOf(this.currentRoute) -
          this.menuItems.indexOf(this.prevRoute);
        console.log(gap);
        this.contentTransitions[this.currentRoute].enter =
          gap >= 0 ? "bottom-to-top-enter" : "top-to-bottom-enter";
        console.log(this.contentTransitions[this.currentRoute].enter);
      }
    },
    beforeLeave() {
      console.log(this.prevRoute, this.currentRoute, "Leave");
      if (![this.currentRoute, this.prevRoute].includes("Profile")) {
        const gap =
          this.menuItems.indexOf(this.currentRoute) -
          this.menuItems.indexOf(this.prevRoute);
        this.contentTransitions[this.prevRoute].leave =
          gap > 0 ? "bottom-to-top-leave" : "top-to-bottom-leave";
      } else if (this.currentRoute === "Profile") {
        this.contentTransitions[this.prevRoute].enter = "bottom-to-top-enter";
      }
    },
    delay(ms: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css");
body {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: rgb(50, 50, 50);
}
.container,
.container-sub {
  display: flex;
  flex-direction: row;
}

.container-main {
  margin-left: 10px;
  z-index: 0;
  transition: all 0.7s;
  width: 0px;
  position: relative;
  &.open {
    width: 600px;
  }
  &.close {
    width: 0px;
  }
  .container-main-content {
    position: absolute;
    width: 100%;
    height: 120%;
    background: white;
    border-radius: 5px;
  }
}

/* Vue Transition */
.top-to-bottom-enter {
  opacity: 0;
  animation: open-to-bottom 0.5s ease-in-out;
  animation-delay: 0.6s;
}
.bottom-to-top-enter {
  opacity: 0;
  animation: open-to-top 0.5s ease-in-out;
  animation-delay: 0.6s;
}

.top-to-bottom-leave {
  animation: close-to-bottom 0.5s ease-in-out;
}
.bottom-to-top-leave {
  animation: close-to-top 0.5s ease-in-out;
}

/* Animation */
@keyframes close-to-bottom {
  to {
    opacity: 0;
    transform: translateY(70%);
  }
}
@keyframes close-to-top {
  to {
    opacity: 0;
    transform: translateY(-70%);
  }
}

@keyframes open-to-top {
  from {
    opacity: 0;
    transform: translateY(70%);
  }
  to {
    opacity: 1;
  }
}
@keyframes open-to-bottom {
  from {
    opacity: 0;
    transform: translateY(-70%);
  }
  to {
    opacity: 1;
  }
}
</style>
