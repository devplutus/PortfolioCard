<template>
  <div class="profile-card">
    <div class="profile-image">
      <div class="wave"></div>
    </div>
    <span class="profile-name">JUNG BYEONG MAN</span>
    <span ref="profileJob" class="profile-job"></span>
    <div ref="profileDevIcons" class="profile-dev-icons">
      <i
        v-for="icon in currentIcons"
        :key="icon"
        :class="`devicon-${icon}`"
      ></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      // Unit : ms
      TYPING_DELAY: 100,
      TYPING_WAIT: 6000,
      /* Variables */
      currentIcons: [],
      jobs: ["Programmer", "Front-End", "Back-End"],
      icons: [
        [
          "javascript-plain",
          "typescript-plain",
          "html5-plain-wordmark",
          "css3-plain-wordmark",
          "go-line",
          "nodejs-plain-wordmark",
          "python-plain",
          "xd-line",
          "photoshop-line",
          "github-original-wordmark",
        ],
        [
          "javascript-plain",
          "typescript-plain",
          "vuejs-plain-wordmark",
          "electron-original",
          "flutter-plain",
          "html5-plain-wordmark",
          "css3-plain-wordmark",
          "jquery-plain-wordmark",
          "babel-plain",
          "yarn-plain-wordmark",
          "photoshop-line",
          "xd-line",
        ],
        [
          "javascript-plain",
          "typescript-plain",
          "express-original-wordmark",
          "nodejs-plain-wordmark",
          "go-line",
          "linux-plain",
          "microsoftsqlserver-plain-wordmark",
          "mysql-plain-wordmark",
          "nginx-original",
        ],
      ],
    };
  },
  mounted() {
    this.typingJob();
  },
  methods: {
    delay(ms: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    async typingJob() {
      const jobSpan = this.$refs.profileJob as HTMLSpanElement;
      jobSpan.innerText = "";

      for (const [index, job] of this.jobs.entries()) {
        // Typing
        await this.typeTextToSpan(job, jobSpan);

        // Show Icons
        this.currentIcons = [...this.icons[index]] as never[];
        this.isShowIcons(true);

        // Wait
        await this.delay(this.TYPING_WAIT);

        // Removing
        await this.removeTextToSpan(job, jobSpan);

        // Hide Icons
        this.isShowIcons(false);
        await this.delay(1000);
        this.currentIcons = [];
      }
      this.typingJob();
    },
    async typeTextToSpan(job: string, jobSpan: HTMLSpanElement) {
      for (let i = 0; i < job.length; i++) {
        jobSpan.innerHTML = job.slice(0, i + 1);
        await this.delay(this.TYPING_DELAY);
      }
    },
    async removeTextToSpan(job: string, jobSpan: HTMLSpanElement) {
      for (let i = 0; i < job.length; i++) {
        jobSpan.innerHTML = job.slice(0, job.length - (i + 1));
        await this.delay(this.TYPING_DELAY);
      }
    },
    isShowIcons(isShow: boolean) {
      const jobSpan = this.$refs.profileDevIcons as HTMLDivElement;
      if (jobSpan) {
        jobSpan.classList.add(isShow ? "show" : "hide");
        jobSpan.classList.remove(isShow ? "hide" : "show");
      }
    },
  },
});
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css");

.profile-card {
  z-index: 10;
  height: 650px;
  width: 450px;
  background: white;
  border-radius: 5px;
  margin-left: 10px;
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.55);
  span {
    font-family: Montserrat;
    display: block;
    margin: 10px 0;
  }
}
.profile-image {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 60%;
  background-image: url("https://i.pinimg.com/236x/ca/1f/74/ca1f746d6f232f87fca4e4d94ef6f3ab--app-technology.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: #eee;
  margin-bottom: 20px;
  border-radius: 5px 5px 0 0;
}
.wave {
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  background: url("~@/assets/wave.png") repeat;
  background-size: 200% 100%;
  animation: wave 10s linear infinite;
}

.profile-name {
  font-size: 34px;
  font-weight: 500;
  display: block;
}

.profile-job {
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 500;
  height: 30px;
  color: #008a4f;
}

.profile-dev-icons {
  display: inline-flex;
  width: 80%;
  flex-wrap: wrap;
  i {
    font-size: 40px;
    margin: 5px;
  }
}

.show {
  animation: enter-icon 1s;
}
.hide {
  animation: leave-icon 1s;
}

/* ANIMATION */
@keyframes wave {
  to {
    background-position-x: 0%;
  }
  from {
    background-position-x: 200%;
  }
}

@keyframes enter-icon {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes leave-icon {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(30px);
    opacity: 0;
  }
}

@media screen and (max-height: 800px) {
  .profile-card {
    height: 80vh;
  }
}
</style>
