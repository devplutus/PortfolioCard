<template>
  <div id="app">
    <MovingBackground />
    <div class="container">
      <div ref="containerSub" class="container-sub">
        <Nav />
        <ProfileCard />
      </div>
      <div
        v-if="currentRoute !== 'Profile'"
        ref="containerMain"
        class="container-main"
      >
        <Resume ref="resume" v-if="currentRoute === 'Resume'" />
        <Portfolio ref="portfolio" v-if="currentRoute === 'Portfolio'" />
        <Contact ref="contact" v-if="currentRoute === 'Contact'" />
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
    return {
      menuItems: ["Profile", "Resume", "Portfolio", "Contact"],
    };
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
      currentRoute: function (state: any) {
        const current = state.route.current;
        const prev = state.route.prev;
        return current;
      },
    }),
  },
  methods: {
    openMainConatiner(current: string, prev: string) {
      const conatinerMain = this.$refs.containerMain as HTMLDivElement;
      if (current === "Profile") {
        conatinerMain.style.animation = "close-main-container 1s";
      } else if (prev === "Profile") {
        conatinerMain.style.animation = "open-main-container 1s";
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
.container-sub {
  transition: all 1s;
}

.container-main {
  z-index: 0;
  width: 800px;
}

/* Animation */
@keyframes open-main-conatiner {
  from {
    width: 0px;
  }
  to {
    width: 800px;
  }
}
@keyframes close-main-container {
  to {
    width: 0px;
  }
}
@keyframes bottomToTop {
  0% {
    width: 0px;
    opacity: 0;
  }
  50% {
    width: 800px;
    opacity: 0;
  }
  75% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
