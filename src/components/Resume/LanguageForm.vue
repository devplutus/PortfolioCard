<template>
  <div class="progress-bar-form">
    <ProgressBar
      ref="progressBars"
      v-for="info in languageInfos"
      :key="info.title"
      :title="info.title"
      :value="info.value"
      :thickness="10"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProgressBar from "../Progress/ProgressBar.vue";
export default Vue.extend({
  components: {
    ProgressBar,
  },
  data() {
    return {
      languageInfos: [
        { title: "Javascript", value: 90 },
        { title: "MY-SQL&MS-SQL", value: 60 },
        { title: "Python", value: 80 },
        { title: "GO", value: 60 },
        { title: "Dart", value: 50 },
        { title: "C#", value: 50 },
      ],
    };
  },
  methods: {
    startAnimation() {
      const progressBars = this.$refs.progressBars as HTMLDivElement[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      progressBars.forEach((bar: any) => {
        bar.animate();
      });
    },
  },
});
</script>

<style lang="scss">
.progress-bar-form {
  padding: 30px 30px 0 30px;
  flex-wrap: wrap;
}
</style>
