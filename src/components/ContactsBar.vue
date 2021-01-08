<template>
  <div class="icons">
    <ul>
      <li>
        <a :href="socialInfo.instagram"
          ><img src="../assets/logos/instagram (1).svg" alt="instagram"
        /></a>
      </li>
      <li>
        <a :href="socialInfo.twitter"></a
        ><img src="../assets/logos/twitter-sign.svg" alt="twitter" />
      </li>
      <li>
        <a :href="socialInfo.snapchat"></a
        ><img src="../assets/logos/snapchat.svg" alt="snapchat" />
      </li>
      <li>
        <a :href="socialInfo.email"></a
        ><img src="../assets/logos/email.svg" alt="email" />
      </li>
    </ul>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  data() {
    return {
      socialInfo: {},
    };
  },
  mounted() {
    EventService.getContactInfo().then((response) => {
      this.socialInfo = response.data.social_media;
      console.log(this.socialInfo);
    });
  },
};
</script>

<style scoped>
.icons {
  width: 200px;
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 20;
}
img {
  width: 20px;
  height: 20px;
}
ul {
  display: flex;
  flex-direction: column;
}
li {
  list-style: none;
  margin-left: 1.8em;
}
</style>