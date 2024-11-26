<template>
  <div class="home">
    <!-- Carousel -->

    <div class="carousel">
      <div class="tint"></div>
      <div
        v-for="(item, index) in carousel"
        :key="index"
        class="slide"
        :class="{ active: index === currentIndex }"
      >
        <div class="image">
          <img :src="item.image" />
        </div>
      </div>
      <div class="box">
        <span class="letter">B</span>
        <span class="letter">l</span>
        <span class="letter">u</span>
        <span class="letter">e</span>
        <span class="letter">B</span>
        <span class="letter">r</span>
        <span class="letter">a</span>
        <span class="letter">i</span>
        <span class="letter">n</span>
        <img src="../assets/svg-underline.svg" />
      </div>
      <div class="dots-container">
        <span
          v-for="(item, index) in carousel"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <!-- Company Profile -->

    <div class="companyProfile" v-motion-slide-visible-once-bottom>
      <div class="header">
        <h2>Company</h2>
        <h2>Profile</h2>
      </div>
      <div class="text">
        <br />
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
      </div>
      <div class="button">
        <button><router-link to="/about">Read more</router-link></button>
      </div>
    </div>

    <!-- Vision & Mission -->

    <div class="vision-mission" v-motion-slide-visible-once-bottom>
      <div class="vision">
        <div class="border">
          <i class="bi bi-lightbulb"></i>
        </div>
        <h2><span>Our</span>Vision</h2>
        <div class="line">
          <span></span>
          <i class="bi bi-dot"></i>
          <span></span>
        </div>
        <i class="bi bi-lightbulb"></i>
        <p>
          To achieve sustainable development in agriculture in the next 10
          years, through end-to-end value chain approach.
        </p>
      </div>

      <div class="middle-line"></div>

      <div class="mission">
        <div class="border">
          <i class="bi bi-rocket-takeoff"></i>
        </div>
        <h2><span>Our</span>Mission</h2>
        <div class="line">
          <span></span>
          <i class="bi bi-dot"></i>
          <span></span>
        </div>
        <i class="bi bi-rocket-takeoff"></i>
        <p>
          To empower and sustain good agronomic practices amongst small holder
          farmers through provision of the best agricultural services in the
          communities we serve.
        </p>
      </div>
    </div>

    <!-- Management Team -->

    <div class="management" v-motion-slide-visible-once-bottom>
      <div class="header">
        <h2>Management</h2>
        <h2>Team</h2>
      </div>
      <div class="team-carousel">
        <div
          class="team-track"
          :style="{ transform: `translateX(-${currentTeamIndex * 100}%)` }"
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
          :class="{ active: index === currentTeamIndex }"
          @click="goToTeamSlide(index)"
        ></span>
      </div>
      <div class="button">
        <router-link to="/about"><button>View more</button></router-link>
      </div>
    </div>

    <!-- Company highlights -->

    <div class="companyHighlights" v-motion-slide-visible-once-bottom>
      <div class="header">
        <h2>What we do</h2>
        <h2>Company Highlights</h2>
      </div>
      <div class="grid">
        <div v-for="item in companyHighlight" :key="item" class="highlight">
          <img :src="item.image" />
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>

    <!-- pastwork modal -->

    <div ref="modal" class="backdrop">
      <div class="modal">
        <div class="header">
          <h2>Info</h2>
          <i @click="closeModal">&times;</i>
        </div>
        <div class="text">
          <p>{{ modalText }}</p>
        </div>
      </div>
    </div>

    <!-- Past work -->

    <div class="pastwork" v-motion-slide-visible-once-bottom>
      <div class="header">
        <h2>Our past work</h2>
        <div class="sub">
          <p>
            BlueBrain Agro & Allied Services has provided various services to
            different clients in various ways.
          </p>
          <p>The scope of work includes the following components:</p>
        </div>
      </div>
      <div class="slide">
        <div
          class="card-container"
          :style="{ transform: `translateX(-${pastworkCurrentSlide * 100}%)` }"
        >
          <div v-for="(item, index) in pastwork" :key="index" class="card">
            <div class="image">
              <img :src="item.image" />
            </div>
            <div class="text">{{ item.text }}</div>
            <button @click="openModal(item.modaltext)">View</button>
          </div>
        </div>
      </div>
      <div class="button">
        <router-link to="/services"><button>See all</button></router-link>
      </div>
    </div>

    <!-- Contact form -->

    <div class="form" v-motion-slide-visible-once-bottom>
      <form @submit.prevent>
        <div class="span">
          <div class="input-control">
            <label>First name</label>
            <input type="text" placeholder="Enter first name" required />
          </div>
          <div class="input-control">
            <label>Last name</label>
            <input type="text" placeholder="Enter last name" required />
          </div>
        </div>
        <div class="input-control">
          <label>Email</label>
          <input type="email" placeholder="e.g someone@gmail.com" required />
        </div>
        <div class="input-control">
          <label>Subject</label>
          <input type="text" placeholder="Enter email's subject" />
        </div>
        <div class="input-control">
          <label>Message</label>
          <textarea placeholder="Enter message"></textarea>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousel: [
        { image: require("../assets/carousel/cs-1.jpg") },
        { image: require("../assets/carousel/cs-2.jpg") },
        { image: require("../assets/carousel/cs-3.jpg") },
        { image: require("../assets/carousel/cs-4.jpg") },
      ],
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
      ],
      companyHighlight: [
        {
          image: require("../assets/highlights/highlight1.png"),
          text: "Agricultural project management and institutional capacity development",
        },
        {
          image: require("../assets/highlights/highlight2.png"),
          text: "Small holder farmer aggregation",
        },
        {
          image: require("../assets/highlights/highlight3.png"),
          text: "Production, aggregation, processing, storage and marketing",
        },
        {
          image: require("../assets/highlights/highlight4.png"),
          text: "Agricultural value chain Technical Assistance",
        },
        {
          image: require("../assets/highlights/highlight5.png"),
          text: "Agribusiness Incubation and Mentorship",
        },
        {
          image: require("../assets/highlights/highlight6.png"),
          text: "Agricultural Finance consultancy and training",
        },
        {
          image: require("../assets/highlights/highlight7.png"),
          text: "Agricultural mechanisation services",
        },
        {
          image: require("../assets/highlights/highlight8.png"),
          text: "Farm mapping and data management",
        },
        {
          image: require("../assets/highlights/highlight9.png"),
          text: "Advocacy",
        },
        {
          image: require("../assets/highlights/highlight10.png"),
          text: "Research, Monitoring and Evaluation",
        },
      ],
      pastwork: [
        {
          image: require("../assets/pastwork/pw1.jpg"),
          text: "Delivery of fertilizers and pesticides to farmers to prevent the destruction of plants from pests & parasites",
          modaltext:
            "BlueBrain Agro & Allied Services as a grass root Agro-allied company, supports farmers with agricultural inputs (fertilizer, herbicides, pesticides, aflasafe to deal with Aflatoxin) and extension service delivery both onsite and off-sight through our seasoned extension, agents, to consistently have a maximum yield in every cropping season. We have provided these services in Kaduna, Benue, Abuja, etc. in our various projects.",
        },
        {
          image: require("../assets/pastwork/pw2.jpg"),
          text: "We provide Monitoring, Evaluation, and Learning Services",
          modaltext:
            "We design and implement gender-sensitive, results-based, and digital-driven MEL systems that ensure vital feedback routes and learning mechanisms. Our MEL services are driven by innovation and technological tools to ensure high-quality of data, optimum efficiency, and evidence-based impact/result. We have provided evidence-based Mel services for various projects funded by NGOs, and the government. These projects include the WOFAN ICON 2 project, SCL Project Juriya, etc.",
        },
        {
          image: require("../assets/pastwork/pw3.jpg"),
          text: "We support and guide farmers through Good Agronomic Practice (GAP) of Agricultural Value Chain products",
          modaltext:
            "Our support to farmers includes the provision of innovative techniques, strategies, and practices for farm management, such as planting, fertilization, pest control, irrigation, and harvest. Our GAP services promote the safe and sustainable production of crops and livestock and improve food safety and quality, environmental sustainability, and social welfare. This helps farm owners to maximize yields, optimize business operations, and minimize production costs and environmental impact. We have provided these services in our Agrolog project and supported other projects in this regard as service providers.",
        },
        {
          image: require("../assets/pastwork/pw4.jpg"),
          text: "Agricultural extension services, training, and cooperative development support",
          modaltext:
            "BlueBrain Agro & Allied Services will work with the state and select experienced ecosystem actors in the identified focus value chains to co-create intervention proposals for partnerships with leading donor agencies and/or co-funding with the government as well as prepare farmers to secure loan.",
        },
        {
          image: require("../assets/pastwork/pw5.jpg"),
          text: "Co-create funding interventions",
          modaltext:
            "We are also inclined to the business of trading, marketing, sales, and distribution of agricultural goods, commission agents, manufacturer’s representatives, general suppliers, and contractors. We are reputed for the exportation of agricultural produce from our farmers, suppliers, processors, and marketers in the Agricultural Commodity Value Chain.",
        },
        {
          image: require("../assets/pastwork/pw6.jpg"),
          text: "Agricultural product aggregation, haulage & transportation, trading, and market development",
          modaltext:
            "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: require("../assets/pastwork/pw7.jpg"),
          text: "Institutional Capacity Development & Enhancement",
          modaltext:
            "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: require("../assets/pastwork/pw8.jpg"),
          text: "Research, Business incubation and technology solutions",
          modaltext:
            "BlueBrain Agro & Allied Services will ensure full technology deployment as an enabler to efficient and effective project management that enables transparency, and high-quality data for monitoring, evaluation, reporting and development planning. BlueBrain Agro & Allied Services will carry out additional on-site and off-site activities (where required) to produce real-time and human-specific results. In addition, BlueBrain Agro & Allied Services will hold focus groups for data collection, formative assessments, and commentaries from a selected group of rural dwellers from the three zones who will provide feedback on the status, challenges, and potential solutions in the livestock sub-sector. Summative evaluations will be further developed to determine the components that BlueBrain Agro & Allied Services thinks will enhance livestock development in Kaduna state.",
        },
      ],
      currentIndex: 0,
      interval: null,
      currentTeamIndex: 0,
      teamInterval: null,
      pastworkCurrentSlide: 0,
      pastworkInterval: null,
      modalText: "",
    };
  },
  methods: {
    // Carousel Methods
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 7500);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.carousel.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.restartAutoSlide();
    },
    restartAutoSlide() {
      this.stopAutoSlide();
      this.startAutoSlide();
    },

    // Management Team Carousel Methods
    startTeamAutoSlide() {
      if (window.innerWidth < 668) {
        this.teamInterval = setInterval(() => {
          this.nextTeamSlide();
        }, 5000);
      }
    },
    stopTeamAutoSlide() {
      clearInterval(this.teamInterval);
    },
    nextTeamSlide() {
      this.currentTeamIndex =
        (this.currentTeamIndex + 1) % this.managementTeam.length;
    },
    goToTeamSlide(index) {
      this.currentTeamIndex = index;
      this.restartTeamAutoSlide();
    },
    restartTeamAutoSlide() {
      this.stopTeamAutoSlide();
      this.startTeamAutoSlide();
    },

    // Pastwork Carousel
    startPastworkAutoSlide() {
      this.pastworkInterval = setInterval(() => {
        this.nextPastworkSlide();
      }, 5000);
    },
    stopPastworkAutoSlide() {
      clearInterval(this.pastworkInterval);
    },
    restartPastworkAutoSlide() {
      this.stopPastworkAutoSlide();
      this.startPastworkAutoSlide();
    },
    nextPastworkSlide() {
      const visibleSlides = this.getVisibleSlides();
      const totalSlides = Math.ceil(this.pastwork.length / visibleSlides);
      this.pastworkCurrentSlide = (this.pastworkCurrentSlide + 1) % totalSlides;
    },
    getVisibleSlides() {
      if (window.innerWidth >= 1200) return 4;
      if (window.innerWidth >= 768) return 2;
      return 1;
    },

    /* Modal */
    openModal(modaltext) {
      this.$refs.modal.classList.add("active");
      this.modalText = modaltext;
    },
    closeModal() {
      this.$refs.modal.classList.remove("active");
    },
  },
  mounted() {
    this.startAutoSlide();
    this.startTeamAutoSlide();
    this.startPastworkAutoSlide();
    window.addEventListener("resize", this.restartPastworkAutoSlide);
  },
  beforeDestroy() {
    this.stopAutoSlide();
    this.stopTeamAutoSlide();
    this.stopPastworkAutoSlide();
    window.removeEventListener("resize", this.restartPastworkAutoSlide);
  },
};
</script>

<style lang="scss">
@import "../assets/main.scss";

/* Carousel */

.home {
  .carousel {
    width: 100%;
    height: 50vh;
    position: relative;
    display: flex;
    overflow: hidden;

    .tint {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      z-index: 2;
    }
    .slide {
      min-width: 100%;
      height: 100%;
      position: absolute;
      transition: transform 0.5s ease-in-out;
      transform: translateX(100%);
      &.active {
        transform: translateX(0);
      }
      .image {
        position: absolute;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid $white-text-color;
      border-radius: 10px;
      font-family: $logo-font;
      color: $white-text-color;
      letter-spacing: 1px;
      font-size: 25px;
      padding: 20px 25px;
      text-align: center;
      z-index: 2;
      img {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 100px;
        height: auto;
      }
    }
    .dots-container {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      z-index: 2;
      .dot {
        height: 10px;
        width: 10px;
        border-radius: 10px;
        background: $white-text-color;
        opacity: 0.75;
        transition: width 0.25s, opacity 0.25s;
        cursor: pointer;
        &.active {
          width: 30px;
          opacity: 1;
        }
      }
    }
  }
}

@include md {
  .home {
    .carousel {
      height: 60vh;
      .box {
        transform: translateX(-50%) translateY(-50%) scale(1.5);
      }
      .dots-container {
        gap: 15px;
      }
    }
  }
}

@include lg {
  .home {
    .carousel {
      height: 70vh;
    }
  }
}

/* Company Profile */

.home {
  .companyProfile {
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
      font-family: $body-font;
    }
    .button {
      margin-top: 25px;
      width: 100%;
      display: flex;
      justify-content: center;
      button {
        padding: 7.5px 20px;
        border: 1px solid $accent-color;
        border-radius: 5px;
        transition: 0.25s;
        &:hover {
          background-color: $accent-color;
          border-color: $accent-color;
          a {
            color: $white-text-color;
          }
        }
        a {
          color: $accent-color;
        }
      }
    }
  }
}

@include lg {
  .home {
    .companyProfile {
      padding: 0 20%;
      .header {
        font-size: 20px;
      }
      .text {
        font-size: 15px;
      }
    }
  }
}

/* vision  & Mission */

.home {
  .vision-mission {
    margin-top: 50px;
    padding: 25px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    background-color: $alternate-background-color;
    position: relative;
    .middle-line {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 2.5px;
      height: 75%;
      background-color: $primary-color;
      opacity: 0.5;
      border-radius: 5px;
    }
    .vision,
    .mission {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .border {
        width: 75px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        border: 2.5px solid $primary-color;
        border-style: dashed dashed solid solid;
        border-radius: 50%;
        color: $primary-color;
      }
      h2 {
        display: flex;
        gap: 5px;
        font-family: $header-font;
        color: $primary-color;
        span {
          color: $accent-color;
        }
      }
      .line {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        span {
          width: 25%;
          height: 2.5px;
          border-radius: 5px;
          background-color: $primary-color;
        }
        i {
          font-size: 25px;
          color: $primary-color;
        }
        + i {
          color: $accent-color;
        }
      }
      p {
        padding: 0 10%;
        font-family: $body-font;
        text-align: center;
      }
    }
  }
}

@include md {
  .home {
    .vision-mission {
      flex-direction: row;
      padding: 50px 5%;
      .middle-line {
        display: block;
      }
      .vision,
      .mission {
        width: 50%;
      }
    }
  }
}

@include lg {
  .home {
    .vision-mission {
      padding: 75px 10%;
      .vision,
      .mission {
        padding: 0 5%;
        h2 {
          font-size: 20px;
        }
      }
    }
  }
}

/* Management Team */

.home {
  .management {
    margin-top: 50px;
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
        margin-top: 50px;
        width: 100%;
        display: flex;
        transition: transform 0.5s ease-in-out;
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
            display: flex;
            flex-direction: column;
            gap: 5px;
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
    .button {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      button {
        border: 1px solid $accent-color;
        border-radius: 5px;
        color: $accent-color;
        padding: 7.5px 20px;
        &:hover {
          background-color: $accent-color;
          color: $white-text-color;
          transition: 0.25s;
        }
      }
    }
  }
}

@include md {
  .home {
    .management {
      .team-carousel {
        .team-track {
          gap: 20px;
          padding: 0 20px;
          .member {
            min-width: 30%;
            width: 100%;
            height: 250px;
            margin: 0;
          }
        }
      }
      .team-dots-container {
        display: none;
      }
      .button {
        margin-top: 50px;
      }
    }
  }
}

@include lg {
  .home {
    .management {
      .team-carousel {
        .team-track {
          gap: 20px;
          padding: 0 100px;
          justify-content: center;
          .member {
            min-width: 150px;
            width: 250px;
            margin: 0;
          }
        }
      }
      .team-dots-container {
        display: none;
      }
    }
  }
}

/* company Highlights */

.home {
  .companyHighlights {
    margin-top: 50px;
    width: 100%;
    background-color: $alternate-background-color;
    padding: 25px 0;
    .header {
      text-align: center;
      font-family: $header-font;
      display: flex;
      flex-direction: column;
      gap: 10px;
      :first-child {
        color: $accent-color;
        font-size: 12.5px;
        position: relative;
        display: flex;
        justify-content: center;
        gap: 25px;
        align-items: center;
        &::before,
        &::after {
          content: "";
          width: 25%;
          height: 1px;
          background-color: $accent-color;
          border-radius: 5px;
        }
      }
      :last-child {
        color: $primary-color;
        font-size: 20px;
      }
    }
    .grid {
      margin-top: 50px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 25px;
      .highlight {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
        img {
          width: 50px;
          height: 50px;
        }
        p {
          font-family: $alternate-font;
          padding: 0 25%;
        }
      }
    }
  }
}

@include md {
  .home {
    .companyHighlights {
      .grid {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 0;
      }
    }
  }
}

@include lg {
  .home {
    .companyHighlights {
      padding: 50px 10%;
      .grid {
        grid-template-columns: repeat(5, 1fr);
        column-gap: 0;
        row-gap: 50px;
        .highlight {
          p {
            padding: 0 10%;
          }
        }
      }
    }
  }
}

/* Modal */

.home {
  .backdrop {
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.25s height;
    overflow: hidden;
    &.active {
      width: 100%;
      height: 100%;
    }
    .modal {
      width: 80%;
      height: 80%;
      background-color: $background-color;
      border-radius: 8px;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 50px;
        h2 {
          color: $primary-color;
          font-family: $header-font;
        }
        i {
          font-size: 25px;
          color: red;
          cursor: pointer;
        }
      }
      .text {
        margin-top: 25px;
        padding: 0 5%;
        overflow-y: auto;
        font-family: $body-font;
      }
    }
  }
}

@include md {
  .home {
    .backdrop {
      .modal {
        width: 50%;
        height: 500px;
      }
    }
  }
}

/* Pastwork */

.home {
  .pastwork {
    width: 100%;
    background-color: $primary-color;
    padding: 25px 5%;
    .header {
      color: $white-text-color;
      display: flex;
      flex-direction: column;
      gap: 10px;
      h2 {
        font-family: $header-font;
        text-align: center;
      }
      p {
        font-family: $alternate-font;
      }
    }
    .slide {
      margin-top: 25px;
      position: relative;
      overflow: hidden;
      width: 100%;
      .card-container {
        width: 100%;
        display: flex;
        transition: transform 0.5s ease;
        .card {
          flex: 0 0 100%;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          background-color: $background-color;
          padding: 10px;
          .image {
            width: 100%;
            height: 200px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .text {
            text-align: center;
            font-family: $alternate-font;
          }
          button {
            border: 1px solid $accent-color;
            border-radius: 5px;
            color: $accent-color;
            width: max-content;
            padding: 5px 20px;
            transition: 0.25s;
            &:hover {
              background-color: $accent-color;
              color: $white-text-color;
            }
          }
        }
      }
    }
    .button {
      margin-top: 25px;
      width: 100%;
      display: flex;
      justify-content: center;
      button {
        border: 1px solid $white-text-color;
        border-radius: 5px;
        color: $white-text-color;
        width: max-content;
        padding: 7.5px 20px;
        transition: 0.25s;
        &:hover {
          background-color: $white-text-color;
          color: $accent-color;
        }
      }
    }
  }
}

@include md {
  .home {
    .pastwork {
      .slide {
        .card-container {
          .card {
            flex: 0 0 49%;
            max-width: 49%;
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(7) {
              margin: 0 1.33% 0 0;
            }
          }
        }
      }
    }
  }
}

@include lg {
  .home {
    .pastwork {
      .header {
        text-align: center;
      }
      .slide {
        .card-container {
          .card {
            flex: 0 0 24%;
            max-width: 24%;
          }
        }
      }
    }
  }
}

/* Form */

.home {
  .form {
    margin-top: 50px;
    width: 100%;
    padding: 0 5%;
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      .span {
        width: 100%;
        display: flex;
        gap: 10px;
      }
      .input-control {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        label {
          font-family: $alternate-font;
        }
        input,
        textarea {
          width: 100%;
          border: 1px solid;
          border-radius: 5px;
          padding: 7.5px 10px;
          font-family: $body-font;
          &:focus {
            outline: 1px solid;
          }
        }
        textarea {
          height: 250px;
        }
      }
      input[type="submit"] {
        margin: 25px 0;
        border: 1px solid $accent-color;
        border-radius: 5px;
        color: $accent-color;
        padding: 7.5px 20px;
        transition: 0.25s;
        font-family: $alternate-font;
        &:hover {
          background-color: $accent-color;
          color: $white-text-color;
        }
      }
    }
  }
}

@include md {
  .home {
    .form {
      padding: 0 10%;
    }
  }
}

@include lg {
  .home {
    .form {
      padding: 0 10%;
      form {
        width: 80%;
        .input-control {
          input {
            padding: 10px;
          }
        }
      }
    }
  }
}
</style>
