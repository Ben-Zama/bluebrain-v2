<template>
  <div class="about">

    <!-- Page Header -->

    <div class="page-header-image">
      <img src="../assets/header-image.jpg" />
      <div class="tint">
        <h2>About us</h2>
      </div>
    </div>

    <!-- Company Profile -->

    <div class="profile" v-motion-slide-visible-once-bottom>
      <div class="header">
        <h2>Company</h2>
        <h2>Profile</h2>
      </div>
      <div class="text">
        <p>
          BlueBrain Agro and Allied Services Ltd is a corporate entity that
          delivers high-quality services across the agricultural value chain
          with a special focus on primary production, aggregation, processing,
          and market linkages. Blue-Brain Agro and Allied Services Ltd is a
          creation of professionals experienced in the agricultural value chain,
          Micro and small enterprise development, banking and finance, Agtech,
          Monitoring and evaluation and project management.
        </p>
        <br />
        <p>
          Our services include mechanisation, processing, warehousing and
          marketing of farm produce. In doing this, we provide small holder
          out-growers access to financial services, extension and advisory
          services, training and capacity building, business incubation, digital
          farmer registration, farm mapping, risk management, insurance and
          pensions, advocacy, research, monitoring evaluation and learning. We
          offer bespoke financial management solutions to enable our clients
          manage their cost of capital well into the future.
        </p>
        <br />
        <ul>
          <li>
            We have also developed yield improvement training for participating,
            and start-up farmers most especially our agribusiness advisory at
            rural community levels.
          </li>
          <li>
            Our trainings aim at developing sustainable agribusiness value
            chains in all LGCs to encourage group formation, aggregation and
            off- taking of produce and creating work opportunities.
          </li>
        </ul>
        <br />
        <p>
          Our stake in the Nigerian economic value add is evidenced by patronage
          from private, public and donor organisation. We maintain partnerships
          with representatives in the United Kingdom, Asia and the United States
          that greatly enhances our capacity to provide a wide spectrum of
          services to the informal sector especially agriculture.
        </p>
      </div>
      <div class="button">
        <button @click="toggleText">
          {{ isExpanded ? "Read less" : "Read more" }}
        </button>
      </div>
    </div>

    <!-- Management team -->

    <div class="management" v-motion-slide-visible-once-bottom>
      <div class="header">
        <h2>Management</h2>
        <h2>Team</h2>
      </div>
      <div class="team-carousel">
        <div
          class="team-track"
          :style="{ transform: `translateX(-${currentManagementIndex * 100}%)` }"
        >
          <div
            v-for="(item, index) in managementTeam"
            :key="index"
            class="member"
          >
            <img :src="item.image" />
            <div class="banner">
              <p>{{ item.name }}</p>
              <p>{{ item.role }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="team-dots-container">
        <span
          v-for="(item, index) in managementTeam"
          :key="index"
          class="dot"
          :class="{ active: index === currentManagementIndex }"
          @click="goToTeamSlide(index)"
        ></span>
      </div>
      <div class="manual-nav">
        <button @click="scrollManagementLeft">
            <i class="bi bi-chevron-left"></i>
        </button>
        <button @click="scrollManagementRight">
            <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>

    <!-- Board team -->

    <div class="board" v-motion-slide-visible-once-bottom>
      <div class="header">
        <h2>Board</h2>
        <h2>Team</h2>
      </div>
      <div class="team-carousel">
        <div
          class="team-track"
          :style="{ transform: `translateX(-${currentBoardIndex * 100}%)` }"
        >
          <div v-for="(item, index) in boardTeam" :key="index" class="member">
            <img :src="item.image" />
            <div class="banner">
              <p>{{ item.name }}</p>
              <p>{{ item.role }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="team-dots-container">
        <span
          v-for="(item, index) in boardTeam"
          :key="index"
          class="dot"
          :class="{ active: index === currentBoardIndex }"
          @click="goToTeamSlide(index)"
        ></span>
      </div>
      <div class="manual-nav">
        <button @click="scrollBoardLeft">
            <i class="bi bi-chevron-left"></i>
        </button>
        <button @click="scrollBoardRight">
            <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      managementTeam: [
        {
          image: require("../assets/management/lois.jpg"),
          name: "Lois Sankey",
          role: "CEO",
        },
        {
          image: require("../assets/management/godswill.jpg"),
          name: "Godswill Egbe",
          role: "Executive Director - Finance & Operations",
        },
        {
          image: require("../assets/management/gerald.jpg"),
          name: "Gerald Umeze",
          role: "MEL Specialists",
        },
        {
          image: require("../assets/management/abubakar_ndakpoto.png"),
          name: "Abubakar Kolo Ndakpoto",
          role: "Finance & Marketing Specialist",
        },
        {
          image: require("../assets/management/stanley.png"),
          name: "Stanley Nwachukwu",
          role: "Project Management Expert",
        },
      ],
      boardTeam: [
        {
          image: require("../assets/management/lois.jpg"),
          name: "Lois Sankey",
          role: "CEO",
        },
        {
          image: require("../assets/management/godswill.jpg"),
          name: "Godswill Egbe",
          role: "Executive Director - Finance & Operations",
        },
        {
          image: require("../assets/management/nonso.jpg"),
          name: "Nonso Ogbunamiri",
          role: "Member",
        },
        {
          image: require("../assets/management/shayet.jpg"),
          name: "Shayet Gani-Ikilama",
          role: "Member",
        },
        {
          image: require("../assets/management/stephanie.jpg"),
          name: "Stephanie Ugochukwu",
          role: "Company Secretary/Legal Adviser",
        },
        {
          image: require("../assets/management/nkechi.jpg"),
          name: "Nkechi M. Chinke",
          role: "Member",
        },
      ],
      isExpanded: false,
      currentManagementIndex: 0,
      currentBoardIndex: 0,
      managementAutoScrollInterval: null,
      boardAutoScrollInterval: null,
    };
  },
  mounted() {
    this.startManagementAutoScroll();
    this.startBoardAutoScroll();
  },
  beforeDestroy() {
    this.stopManagementAutoScroll();
    this.stopBoardAutoScroll();
  },
  methods: {
    toggleText() {
      this.isExpanded = !this.isExpanded;
      const textElement = this.$el.querySelector(".text");
      if (this.isExpanded) {
        textElement.classList.add("expanded");
      } else {
        textElement.classList.remove("expanded");
      }
    },

    // Management Team

    goToManagementSlide(index) {
      this.currentManagementIndex = index;
      this.restartManagementAutoScroll();
    },
    nextManagementSlide() {
      this.currentManagementIndex =
        (this.currentManagementIndex + 1) % this.managementTeam.length;
    },
    startManagementAutoScroll() {
      if (window.innerWidth < 668) {
        this.managementAutoScrollInterval = setInterval(this.nextManagementSlide, 5000);
      }
    },
    stopManagementAutoScroll() {
      clearInterval(this.managementAutoScrollInterval);
    },
    restartManagementAutoScroll() {
      this.stopManagementAutoScroll();
      this.startManagementAutoScroll();
    },

    // Board Team

    goToBoardSlide(index) {
      this.currentBoardIndex = index;
      this.restartBoardAutoScroll();
    },
    nextBoardSlide() {
      this.currentBoardIndex = (this.currentBoardIndex + 1) % this.boardTeam.length;
    },
    startBoardAutoScroll() {
      if (window.innerWidth < 668) {
        this.boardAutoScrollInterval = setInterval(this.nextBoardSlide, 5000);
      }
    },
    stopBoardAutoScroll() {
      clearInterval(this.boardAutoScrollInterval);
    },
    restartBoardAutoScroll() {
      this.stopBoardAutoScroll();
      this.startBoardAutoScroll();
    },

    // Management Team Desktop Navigation

    scrollManagementLeft() {
      this.$el.querySelector(".management .team-track").scrollBy({
        left: -100,
        behavior: "smooth",
      })
    },

    scrollManagementRight() {
      this.$el.querySelector(".management .team-track").scrollBy({
        left: 100,
        behavior: "smooth",
      })
    },

    // Board Team Desktop Navigation

    scrollBoardLeft() {
      this.$el.querySelector(".board .team-track").scrollBy({
        left: -100,
        behavior: "smooth",
      })
    },
    scrollBoardRight() {
      this.$el.querySelector(".board .team-track").scrollBy({
        left: 100,
        behavior: "smooth",
      })
    },

  },
};
</script>

<style lang="scss">
@import "../assets/main.scss";

/* Company Profile */

.about {
  .profile {
    margin-top: 50px;
    width: 100%;
    padding: 0 10%;
    .header {
      text-align: center;
      font-family: $header-font;
      font-size: 17.5px;
      :first-child {
        color: $accent-color;
      }
      :last-child {
        color: $primary-color;
      }
    }
    .text {
      margin-top: 50px;
      font-family: $body-font;
      max-height: 250px;
      overflow: hidden;
      position: relative;
      transition: 0.5s;
      ul {
        padding-left: 5%;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        );
      }
      &.expanded {
        max-height: none;
        &:after {
          display: none;
        }
      }
    }
    .button {
      margin: 25px 0;
      display: flex;
      justify-content: center;
      button {
        padding: 7.5px 20px;
        border: 1px solid $accent-color;
        border-radius: 5px;
        color: $accent-color;
        transition: 0.25s;
        &:hover {
          background-color: $accent-color;
          color: $white-text-color;
        }
      }
    }
  }
}

@include lg {
  .about {
    .profile {
      padding: 0 20%;
      .text {
        font-size: 15px;
      }
    }
  }
}

/* Management & Board Team */

.about {
  .management,
  .board {
    margin: 50px 0;
    width: 100%;
    .header {
      text-align: center;
      font-family: $header-font;
      font-size: 17.5px;
      :first-child {
        color: $accent-color;
      }
      :last-child {
        color: $primary-color;
      }
    }
    .team-carousel {
      overflow: hidden;
      width: 100%;
      .team-track {
        margin-top: 25px;
        width: 100%;
        display: flex;
        transition: transform 0.5s ease-in-out;
        &::-webkit-scrollbar {
            display: none;
        }
        .member {
          min-width: 80%;
          margin: 0 10%;
          height: 300px;
          border: 1px solid rgba(0, 0, 0, 0.25);
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
          }
          .banner {
            width: 100%;
            height: auto;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            text-align: center;
            padding: 5px;
            color: $white-text-color;
            font-family: $alternate-font;
            :first-child {
              font-size: 15px;
            }
            :last-child {
              font-size: 10px;
            }
          }
        }
      }
    }
    .team-dots-container {
      margin: 25px;
      display: flex;
      justify-content: center;
      gap: 10px;
      span {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: $accent-color;
        opacity: 0.25;
        transition: 0.25s;
        &.active {
          opacity: 1;
        }
      }
    }
    .manual-nav {
        display: none;
        width: 100%;
        justify-content: center;
        gap: 25px;
        button {
            border: 1px solid $accent-color;
            border-radius: 5px;
            transition: .25s;
            color: $accent-color;
            padding: 5px 10px;
            &:hover {
                background-color: $accent-color;
                color: $white-text-color;
            }
        }
    }
  }
}

@include md {
  .about {
    .management,
    .board {
      .team-carousel {
        padding: 0 10%;
        .team-track {
          gap: 20px;
          overflow: scroll hidden;
          .member {
            min-width: calc((100% - (2 * 20px)) / 3);
            height: 200px;
            margin: 0;
          }
        }
      }
      .team-dots-container {
        display: none;
      }
      .manual-nav {
        margin-top: 25px;
        display: flex;
      }
    }
  }
}

@include lg {
  .about {
    .management,
    .board {
      .team-carousel {
        .team-track {
          gap: 10px;
          .member {
            min-width: calc((100% - (4 * 10px)) / 4);
            height: 300px;
          }
        }
      }
    }
  }
}

</style>