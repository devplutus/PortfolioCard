<template>
  <div ref="devtoolForm" class="devtool-form"></div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      devtoolInfos: [
        { title: "Microsoft Azure", value: 70 },
        { title: "Notion", value: 100 },
        { title: "MS Office", value: 80 },
        { title: "Adobe Photoshop", value: 70 },
        { title: "Adobe XD", value: 70 },
      ],
    };
  },
});
</script>
<style lang="scss">
.devtool-form {
  padding: 30px 30px 0 30px;
}
</style>
