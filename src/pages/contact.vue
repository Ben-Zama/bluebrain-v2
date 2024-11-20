<template>
  <div class="contact">
    <!-- Page Header -->

    <div class="page-header-image">
      <img src="../assets/header-image.jpg" />
      <div class="tint">
        <h2>Contact us</h2>
      </div>
    </div>

    <div class="container">
      <!-- Card -->

      <div class="card" v-motion-slide-visible-once-bottom>
        <h2>Get in touch</h2>

        <div>
          <h3>Send us a mail</h3>
          <a href="mailto:naryilosi@gmail.com">naryilosi@gmail.com</a>
        </div>
        <div>
          <h3>Call us</h3>
          <a href="tel:+2349029323579">+234 902 9323 579</a>
          <a href="tel:+2347064053899">+234 706 4053 899</a>
        </div>
        <div>
          <h3>Social media</h3>
          <div>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-linkedin"></i>
          </div>
        </div>
      </div>

      <!-- Form -->

      <div class="form">
        <h2 v-motion-slide-visible-once-bottom>Send us mail</h2>
        <form @submit.prevent v-motion-slide-visible-once-bottom>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/main.scss";

.contact {
  .container {
    margin-top: 50px;
    padding: 0 5%;
    .card {
      width: 100%;
      background: linear-gradient(60deg, $primary-color, $accent-color);
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10% 5%;
      color: $white-text-color;
      border-radius: 10px;
      h2 {
        font-family: $header-font;
      }
      > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        h3 {
          font-family: $alternate-font;
        }
        a {
          color: $white-text-color;
          font-family: $body-font;
          &:hover {
            color: $accent-color;
          }
        }
      }
      :last-child {
        div {
          display: flex;
          gap: 10px;
          i {
            cursor: pointer;
            &:hover {
              color: $accent-color;
            }
          }
        }
      }
    }
    .form {
      margin-top: 50px;
      width: 100%;
      > h2 {
        font-family: $header-font;
        color: $primary-color;
      }
      form {
        margin-top: 25px;
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
}

@include md {
  .contact {
    .container {
      padding: 0 20%;
    }
  }
}

@include lg {
  .contact {
    .container {
      display: flex;
      align-items: center;
      gap: 50px;
      padding: 0 20%;
      .card {
        height: 500px;
      }
      .form {
        h2 {
          margin-top: 0;
        }
        form {
          .input-control {
            input {
              padding: 10px;
            }
          }
        }
      }
    }
  }
}
</style>