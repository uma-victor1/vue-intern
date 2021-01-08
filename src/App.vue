<template>
  <div class="app">
    <div class="left"></div>
    <div class="right"></div>
    <h1>{{ contactInfo.name }}</h1>
    <div class="img-con shadow-2xl">
      <img
        class="hero-img"
        src="./assets/internship-removebg-preview.png"
        alt="omo this is beauty"
      />
    </div>
    <NavBar />
    <ContactsBar :info="contactInfo" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ContactsBar from "@/components/ContactsBar.vue";
import EventService from "@/services/EventService.js";
export default {
  components: {
    NavBar,
    ContactsBar,
  },
  data() {
    return {
      contactInfo: {},
    };
  },
  mounted() {
    EventService.getContactInfo().then((response) => {
      this.contactInfo = response.data;
      console.log(this.contactInfo);
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 20px 20px;
  margin: 0 auto;
}
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  min-height: 100vh;
}
h1 {
  letter-spacing: 0.5em;
  font-weight: 200;
}
.app {
  width: 85%;
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
}
.left {
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: -10;
  background: #bd0f4d;
}
.right {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: -10;
  background: #cb2964;
  width: 50vw;
}
.img-con {
  width: 40%;
  margin: auto;
  background: #cb2964;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}
.hero-img {
  width: 100%;
  margin-bottom: -6px;
}
</style>