<template>
  <div class="tag-list">
    <span
      v-for="(info, i) in tagList"
      :key="`tag${i}`"
      :class="`tag ${info.checked ? 'active' : ''}`"
      @click="changeCheck(i)"
    >
      {{ info.name }}
    </span>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";

export default Vue.extend({
  props: {
    tagList: {
      type: Array as () => any[],
      required: true,
    },
  },
  methods: {
    changeCheck(index: number) {
      this.tagList[index].checked = !this.tagList[index].checked;
    },
  },
});
</script>

<style lang="scss" scoped>
.tag-list {
  float: right;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 10px 0px;
  .tag {
    font-size: 0.9em;
    font-weight: 600;
    background: $disalbe-color;
    color: grey;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
    transition: 0.1s;
    &.active {
      background: $main-color;
      color: white;
    }
  }
}
</style>
