<template>
  <div>
    <span class="content-title">{{ title }}</span>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.content-title {
  display: block;
  font-size: 1.5em;
  font-weight: 600;
  text-align: left;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
</style>
