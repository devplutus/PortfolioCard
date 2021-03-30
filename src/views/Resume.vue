<template>
  <div>
    <!-- Resume -->
    <div class="content">
      <ContentTitle title="Resume" />
      <ContentBody>
        <template slot="left">
          <ContentSubTitle title="EXPERIENCE" icon="briefcase" />
          <ResumeForm
            v-for="(experience, i) in experiences"
            :key="i"
            :from="experience.from"
            :to="experience.to"
            :name="experience.name"
            :agency="experience.agency"
            :description="experience.description"
          />
        </template>
        <template slot="right">
          <ContentSubTitle title="EDUCATION" icon="graduation-cap" />
          <ResumeForm
            v-for="(education, i) in educations"
            :key="i"
            :from="education.from"
            :to="education.to"
            :name="education.name"
            :agency="education.agency"
            :description="education.description"
          />
        </template>
      </ContentBody>
    </div>
    <!-- My Skills -->
    <div class="content">
      <ContentTitle title="My Skills" />
      <ContentBody>
        <template slot="left">
          <ContentSubTitle title="LANGUAGE" icon="js" prefix="fab" />
        </template>
        <template slot="right">
          <ContentSubTitle title="CODING" icon="code" />
        </template>
      </ContentBody>
      <ContentBody style="margin-top: 20px">
        <template slot="left">
          <ContentSubTitle title="DEV TOOL" icon="screwdriver" />
        </template>
        <template slot="right">
          <ContentSubTitle title="KNOWLEDGE" icon="lightbulb" prefix="far" />
        </template>
      </ContentBody>
    </div>
  </div>
</template>

<script lang="ts">
import ContentTitle from "@/components/ContentTitle.vue";
import ContentBody from "@/components/ContentBody.vue";
import ContentSubTitle from "@/components/ContentSubTitle.vue";
import ResumeForm from "@/components/Resume/ResumeForm.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    ContentTitle,
    ContentSubTitle,
    ContentBody,
    ResumeForm,
  },
  data() {
    return {
      experiences: [
        {
          from: "2020",
          to: "2021",
          name: "FullStack Developer",
          agency: "Qualisoft",
          description: `
            <b>Javascript</b> was used as the primary language. 
            Developing Dynamics CRM services and websites using the <b>Nuxt.js</b> and <b>Express.js</b> framework.
          `,
        },
        {
          from: "2018",
          to: "2019",
          name: "Software Programmer",
          agency: "TNE Tech.",
          description: `
            Develop desktop applications for solar collector panel measurements based on 
            <b>C#</b> using the <b>.Net Winforms</b> and <b>WPF</b> framework.
          `,
        },
      ],
      educations: [
        {
          from: "2020",
          to: "2021",
          name: "The Cyber University of Korea",
          agency: "Seoul",
          description: `
            Bachelor's degree in <b>computer science</b>.
          `,
        },
        {
          from: "2017",
          to: "2019",
          name: "World Cyber College",
          agency: "Gyeonggi",
          description: `
            Associate's degree in <b>computer science</b>.
          `,
        },
        {
          from: "2013",
          to: "2015",
          name: "Kyungsung University",
          agency: "Busan",
          description: `
            Bachelor's degree in <b>computer science</b>. But dropped out of college
          `,
        },
      ],
    };
  },
});
</script>
