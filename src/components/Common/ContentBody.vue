<template>
  <div>
    <div class="content-body">
      <div class="content-body-col" v-if="col === 2">
        <div class="content-body-child">
          <slot name="left"></slot>
        </div>
        <div class="content-body-child">
          <slot name="right"></slot>
        </div>
      </div>
      <slot name="center" v-else></slot>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    col: {
      type: Number,
      default: 2,
    },
  },
});
</script>

<style lang="scss">
.content-body {
  height: 100%;
  .content-body-col {
    display: flex;
    justify-content: space-around;
  }
  .content-body-child {
    width: 50%;
    &:first-child {
      border-right: 1px solid #eee;
    }
  }
}
</style>
