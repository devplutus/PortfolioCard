<template>
  <div class="content-sub-title">
    <i :class="`${prefix || 'fas'} fa-${icon}`"></i>
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    prefix: String,
  },
});
</script>

<style lang="scss">
.content-sub-title {
  padding: 20px 0px;
  font-size: 1.3em;
  border-bottom: 1px solid #eee;
  i {
    color: $main-color;
    font-size: 1.1em;
  }
  span {
    margin-left: 10px;
  }
}
</style>
