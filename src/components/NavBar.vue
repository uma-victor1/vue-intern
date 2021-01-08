<template>
  <div>
    <nav>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
      </ul>
      <li class="nav-img-con">
        <img
          class="hero-img"
          src="../assets/max-ilienerwise-zRTpfAGJAqc-unsplash.jpg"
          alt=""
        />
      </li>
      <ul>
        <li class="m-0"><a href="#">GALLERY</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 3em auto;
}
ul {
  display: flex;
  margin-right: 2em;
}
li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 1.7em;
}
li a {
  text-decoration: none;
  color: #ffffff;
}
a:hover{
    color:pink;
}
.nav-img-con {
  display: inline-flex;
  height: 75px;
}
.hero-img {
  width: 75px;
  height: 100%;
  border-radius: 50%;
}
</style>