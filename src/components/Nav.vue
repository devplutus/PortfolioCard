<template>
  <div>
    <div class="nav">
      <div
        class="nav-item"
        v-for="item in menuItems"
        :key="item.key"
        @click="moveNavSelect(item.title)"
      >
        <i :class="`fas ${item.icon}`"></i>
        {{ item.title.toUpperCase() }}
      </div>
      <!-- Current Position -->
      <div ref="navSelect" class="nav-select">
        <div ref="navSelectItems" class="nav-select-items">
          <div
            class="nav-item-select"
            v-for="item in menuItems"
            :key="item.key"
          >
            <i :class="`fas ${item.icon}`"></i>
            <span>{{ item.title.toUpperCase() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MutaitonTypes } from "../store/index";
export default Vue.extend({
  data() {
    return {
      menuItems: [
        {
          icon: "fa-address-card",
          title: "Profile",
        },
        {
          icon: "fa-file-invoice",
          title: "Resume",
        },
        {
          icon: "fa-pencil-ruler",
          title: "Portfolio",
        },
        {
          icon: "fa-mobile-alt",
          title: "Contact",
        },
      ],
      navSelectPos: [
        {
          name: "Profile",
          nav: "0",
          items: "0",
        },
        {
          name: "Resume",
          nav: "65px",
          items: "-65px",
        },
        {
          name: "Portfolio",
          nav: "130px",
          items: "-130px",
        },
        {
          name: "Contact",
          nav: "195px",
          items: "-195px",
        },
      ],
    };
  },
  methods: {
    moveNavSelect(routeName: string) {
      this.$store.commit(MutaitonTypes.SET_ROUTE, routeName);

      const navSelect = this.$refs.navSelect as HTMLDivElement;
      const navSelectItems = this.$refs.navSelectItems as HTMLDivElement;

      const { nav, items } = this.navSelectPos.filter(
        (n) => n.name === routeName
      )[0];
      navSelect.style.top = nav;
      navSelectItems.style.top = items;
    },
  },
});
</script>

<style lang="scss">
%nav-item {
  height: 65px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  font-size: 0.85em;
  text-decoration: none;
  color: inherit;
  justify-content: center;
  i {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
}
.nav {
  z-index: 11;
  position: relative;
  background-color: white;
  border-radius: 5px;
  color: inherit;
  box-shadow: 2px 4px 15px 3px rgba(0, 0, 0, 0.42);
}
.nav-item {
  @extend %nav-item;
  cursor: pointer;
  &:hover {
    background: $hover-color;
    color: white;
  }
}

.nav-select {
  position: absolute;
  border-radius: 0 5px 5px 0;
  top: 0;
  left: -1px;
  overflow: hidden;
  height: 65px;
  width: 100px;
  background: $main-color;
  color: white;
  transition: all 1s;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.42);
}

.nav-item-select {
  @extend %nav-item;
}

.nav-select-items {
  position: relative;
  top: 0px;
  transition: all 1s;
}
</style>
