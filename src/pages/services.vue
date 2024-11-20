<template>
  <div class="services">
    <!-- Page Header -->

    <div class="page-header-image">
      <img src="../assets/header-image.jpg" />
      <div class="tint">
        <h2>Services</h2>
      </div>
    </div>

    <!-- Pastwork -->

    <div class="pastwork">
      <div class="header" v-motion-slide-visible-once-bottom>
        <h2>Our Past Work</h2>
        <div class="line"></div>
        <p>
          Bluebrain Agro & Allied services Ltd. has provided various services to
          different clients in various capicities. The scope of work includes
          the following components:
        </p>
      </div>
      <div class="contents">
        <div
          v-for="item in pastwork"
          :key="item"
          class="item"
          v-motion-slide-visible-once-bottom
        >
          <div class="image">
            <img :src="item.image" />
          </div>
          <div class="text">
            <h3>{{ item.head }}</h3>
            <div class="line"></div>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pastwork: [
        {
          image: require("../assets/pastwork/pw1.jpg"),
          head: "Delivery of fertilizers and pesticides to farmers to prevent the destruction of plants from pests & parasites",
          text: "BlueBrain Agro & Allied Services as a grass root Agro-allied company, supports farmers with agricultural inputs (fertilizer, herbicides, pesticides, aflasafe to deal with Aflatoxin) and extension service delivery both onsite and off-sight through our seasoned extension, agents, to consistently have a maximum yield in every cropping season. We have provided these services in Kaduna, Benue, Abuja, etc. in our various projects.",
        },
        {
          image: require("../assets/pastwork/pw2.jpg"),
          head: "We provide Monitoring, Evaluation, and Learning Services",
          text: "We design and implement gender-sensitive, results-based, and digital-driven MEL systems that ensure vital feedback routes and learning mechanisms. Our MEL services are driven by innovation and technological tools to ensure high-quality of data, optimum efficiency, and evidence-based impact/result. We have provided evidence-based Mel services for various projects funded by NGOs, and the government. These projects include the WOFAN ICON 2 project, SCL Project Juriya, etc.",
        },
        {
          image: require("../assets/pastwork/pw3.jpg"),
          head: "We support and guide farmers through Good Agronomic Practice (GAP) of Agricultural Value Chain products",
          text: "Our support to farmers includes the provision of innovative techniques, strategies, and practices for farm management, such as planting, fertilization, pest control, irrigation, and harvest. Our GAP services promote the safe and sustainable production of crops and livestock and improve food safety and quality, environmental sustainability, and social welfare. This helps farm owners to maximize yields, optimize business operations, and minimize production costs and environmental impact. We have provided these services in our Agrolog project and supported other projects in this regard as service providers.",
        },
        {
          image: require("../assets/pastwork/pw4.jpg"),
          head: "Agricultural extension services, training, and cooperative development support",
          text: "BlueBrain Agro & Allied Services will work with the state and select experienced ecosystem actors in the identified focus value chains to co-create intervention proposals for partnerships with leading donor agencies and/or co-funding with the government as well as prepare farmers to secure loan.",
        },
        {
          image: require("../assets/pastwork/pw5.jpg"),
          head: "Co-create funding interventions",
          text: "We are also inclined to the business of trading, marketing, sales, and distribution of agricultural goods, commission agents, manufacturer’s representatives, general suppliers, and contractors. We are reputed for the exportation of agricultural produce from our farmers, suppliers, processors, and marketers in the Agricultural Commodity Value Chain.",
        },
        {
          image: require("../assets/pastwork/pw6.jpg"),
          head: "Agricultural product aggregation, haulage & transportation, trading, and market development",
          text: "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: require("../assets/pastwork/pw7.jpg"),
          head: "Institutional Capacity Development & Enhancement",
          text: "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: require("../assets/pastwork/pw8.jpg"),
          head: "Research, Business incubation and technology solutions",
          text: "BlueBrain Agro & Allied Services will ensure full technology deployment as an enabler to efficient and effective project management that enables transparency, and high-quality data for monitoring, evaluation, reporting and development planning. BlueBrain Agro & Allied Services will carry out additional on-site and off-site activities (where required) to produce real-time and human-specific results. In addition, BlueBrain Agro & Allied Services will hold focus groups for data collection, formative assessments, and commentaries from a selected group of rural dwellers from the three zones who will provide feedback on the status, challenges, and potential solutions in the livestock sub-sector. Summative evaluations will be further developed to determine the components that BlueBrain Agro & Allied Services thinks will enhance livestock development in Kaduna state.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/main.scss";

.services {
  .pastwork {
    width: 100%;
    padding: 0 5%;
    margin-bottom: 50px;
    .header {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;
      h2 {
        font-family: $header-font;
        color: $primary-color;
      }
      .line {
        width: 50%;
        height: 1px;
        background-color: $accent-color;
      }
      p {
        font-family: $body-font;
        padding: 0 5px;
      }
    }
    .contents {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      .item {
        .image {
          width: 100%;
          height: 250px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .text {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
          h3 {
            color: $primary-color;
            font-family: $alternate-font;
            font-size: 17.5px;
            padding: 0 5px;
          }
          .line {
            width: 75%;
            height: 1px;
            background-color: $accent-color;
          }
          p {
            font-family: $body-font;
            padding: 0 5px;
          }
        }
      }
    }
  }
}

@include md {
  .services {
    .pastwork {
      padding: 0 10%;
      .header {
        text-align: start;
        align-items: start;
        .line {
          width: 25%;
        }
        p {
          padding: 0;
        }
      }
      .contents {
        margin-top: 50px;
        gap: 50px;
        .item {
          display: flex;
          align-items: center;
          gap: 25px;
          .image {
            width: 40%;
            height: auto;
          }
          .text {
            margin-top: 0;
            width: 60%;
            text-align: start;
            align-items: start;
            h3, p {
                padding: 0;
            }
          }
        }
        :nth-child(even) {
          flex-direction: row-reverse;
        }
      }
    }
  }
}

@include lg {
    .services {
        .pastwork {
            padding: 0 20%;
            .contents {
                gap: 100px;
                .item {
                    gap: 50px;
                    .image {
                        height: 250px;
                        width: 50%;
                    }
                    .text {
                        width: 50%;
                        h3 {
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
}

</style>