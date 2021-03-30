<template>
  <div class="resume-form">
    <span :class="`period ${active && 'active'}`">
      {{ from }} ~ {{ convertTo }}
    </span>
    <span class="name">{{ name }}</span>
    <span class="agency">{{ agency }}</span>
    <span ref="desc" class="desc"></span>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    from: String,
    to: String,
    name: String,
    agency: String,
    description: String,
  },
  computed: {
    active() {
      return this.to === new Date().getFullYear().toString() ? true : false;
    },
    convertTo() {
      return this.to === new Date().getFullYear().toString()
        ? "Present"
        : this.to;
    },
  },
  mounted() {
    this.$refs.desc.innerHTML = this.description;
  },
});
</script>

<style lang="scss">
.resume-form {
  margin: 10px;
  padding: 10px 10px 20px 20px;
  text-align: left;
  border-left: 1px #eee solid;
  border-top: 1px #eee solid;
  border-right: 5px #eee solid;
  border-bottom: 5px #eee solid;
  border-radius: 10px;
  .period {
    padding: 2px 5px;
    border-radius: 5px;
    display: inline-block;
    font-weight: bold;
    font-size: 0.8em;
    border: 2px #eee solid;
    color: #b3b3b3;
    margin-bottom: 20px;
    &.active {
      border: 2px $hover-color solid;
      color: $main-color;
    }
  }
  .name {
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .agency {
    font-size: 1em;
    color: grey;
    margin-bottom: 15px;
  }
  .desc {
    line-height: 23px;
    font-size: 0.9em;
  }
  span {
    display: block;
    text-align: left;
  }
}
</style>
