<template>
  <div ref="resume">
    <!-- Resume -->
    <div class="content" style="overflow-x: hidden">
      <ContentTitle title="Portfolio" />
      <ContentBody :col="1">
        <template slot="center">
          <div class="tagList">
            <TagList :tagList="tagList" />
          </div>
          <PortfolioList />
        </template>
      </ContentBody>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import ContentTitle from "@/components/Common/ContentTitle.vue";
import ContentBody from "@/components/Common/ContentBody.vue";

import TagList from "@/components/Portfolio/TagList.vue";
import PortfolioList from "@/components/Portfolio/PortfolioList.vue";

export default Vue.extend({
  components: {
    ContentTitle,
    ContentBody,
    TagList,
    PortfolioList,
  },
  data() {
    return {
      tagList: [
        "C#",
        "Javascript",
        "Flutter",
        "Canvas",
        "Personal",
        "Company",
      ].map((name) => ({
        name,
        checked: true,
      })),
    };
  },
});
</script>

<style lang="scss" scoped>
.tagList {
  display: block;
  width: 100%;
  height: 60px;
  text-align: right;
}
</style>
