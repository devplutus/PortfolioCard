<template>
  <div class="knowledge-form">
    <div class="knowledge" v-for="(knowledge, i) in knowledgeList" :key="i">
      <CheckCircle class="check-circle" size="10%" />
      <div class="knowledge-content">
        <span class="title">
          {{ knowledge.title }}
        </span>
        <span v-if="knowledge.subTitle" class="sub-title">{{
          knowledge.subTitle && ` - ${knowledge.subTitle} -`
        }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CheckCircle from "@/components/Common/CheckCircle.vue";
export default Vue.extend({
  components: {
    CheckCircle,
  },
  data() {
    return {
      knowledgeList: [
        {
          title: "Object Oriented Programming",
          subTitle: "C#",
        },
        {
          title: "Data Structure",
          subTitle: "Programming Langauges",
        },
        {
          title: "Execution Context, ES6, DOM",
          subTitle: "Javascript",
        },
        {
          title: "DP, Recursion, Greedy, DFS, BFS",
          subTitle: "Algorithm",
        },
        {
          title: "HTTP(S), TCP/UDP, Socket, RESTful",
          subTitle: "Network",
        },
        {
          title: "Compare SSR And SPA",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.knowledge-form {
  padding: 30px 30px 0 30px;
}

.knowledge {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  .check-circle {
    display: inline-block;
  }
}

.knowledge-content {
  width: 100%;
  font-size: 0.9em;
  padding-left: 10px;
  .title,
  .sub-title {
    display: block;
    margin: 0;
  }
  .title {
    font-weight: 600;
    padding-bottom: 5px;
  }
}
</style>
