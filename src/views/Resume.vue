<template>
  <div>
    <div class="content">
      <ContentTitle title="Resume" />
      <ContentBody>
        <template slot="left">
          <h1>Left</h1>
        </template>
        <template slot="right">
          <h1>Right</h1>
        </template>
      </ContentBody>
    </div>
  </div>
</template>

<script lang="ts">
import ContentTitle from "@/components/ContentTitle.vue";
import ContentBody from "@/components/ContentBody.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    ContentTitle,
    ContentBody,
  }
});
</script>
