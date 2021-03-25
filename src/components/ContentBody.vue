<template>
  <div>
    <div class="content-body">
      <div class="content-body-child">
        <slot name="left"></slot>
      </div>
      <div class="content-body-child">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
.content-body {
  display: flex;
  justify-content: space-around;
  height: 100%;
  .content-body-child {
    width: 50%;
    &:first-child {
      border-right: 1px solid #eee;
    }
  }
}
</style>
