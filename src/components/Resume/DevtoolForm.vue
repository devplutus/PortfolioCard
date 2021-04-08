<template>
  <div class="devtool-form">
    <ProgressDot
      ref="devtoolForm"
      v-for="info in devtoolInfos"
      :key="info.title"
      :title="info.title"
      :value="info.value"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import ProgressDot from "@/components/Progress/ProgressDot.vue";
export default Vue.extend({
  components: {
    ProgressDot,
  },
  data() {
    return {
      devtoolInfos: [
        { title: "Git", value: 70 },
        { title: "Microsoft Azure", value: 60 },
        { title: "Notion", value: 100 },
        { title: "MS Office", value: 80 },
        { title: "Adobe Photoshop", value: 70 },
        { title: "Adobe XD", value: 70 },
      ],
    };
  },
  methods: {
    startAnimation() {
      const devtoolForm = this.$refs.devtoolForm as HTMLDivElement[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      devtoolForm.forEach((chart: any) => {
        chart.animate();
      });
    },
  },
});
</script>
<style lang="scss">
.devtool-form {
  padding: 30px 30px 0 30px;
}
</style>
