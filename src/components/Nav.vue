<template>
  <div>
    <div class="nav">
      <router-link
        class="nav-item"
        v-for="item in menuItems"
        :key="item.key"
        :to="item.title.toLowerCase()"
      >
        <i :class="`fas ${item.icon}`"></i>
        {{ item.title.toUpperCase() }}
      </router-link>
      <!-- Current Position -->
      <div ref="navSelect" class="nav-select">
        <div ref="navSelectItems" class="nav-select-items">
          <div class="nav-item" v-for="item in menuItems" :key="item.key">
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
  watch: {
    $route: "moveNavSelect",
  },
  methods: {
    moveNavSelect() {
      const routeName: string = this.$route.name || "Profile";
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
.test {
  overflow: initial !important;
  left: 110px !important;
}
.nav {
  position: relative;
  background-color: white;
  border-radius: 5px;
  color: inherit;
  box-shadow: 2px 4px 15px 3px rgba(0, 0, 0, 0.42);
}

.nav-item {
  height: 65px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  font-size: 0.85em;
  text-decoration: none;
  color: inherit;
  justify-content: center;
}

.nav-item i {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.nav-select {
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: -1px;
  overflow: hidden;
  height: 65px;
  width: 100px;
  background: rgb(76, 172, 131);
  color: white;
  transition: all 1s;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.42);
}

.nav-select-items {
  position: relative;
  top: 0px;
  transition: all 1s;
}
</style>
