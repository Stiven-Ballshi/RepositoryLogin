<template>
  <div class="container">
    <div class="img-col">
      <img src="./blue.jpg"/>
      <div class="blur">
      </div>
      <i class="fab fa-github"></i>
    </div>
        <form>
          <div class="form-input">
          <h2>Github Stats</h2>
            <input v-model="username" type="text" placeholder="Insert Username..." />
          </div>
          <router-link :to="`/Repos/${this.username}`"><button>Get Started</button></router-link>
        </form>
  </div>
</template>


<script>

export default {
    name: 'Login',
    data() {
      return {
        username: ""
      }
    }
}

</script>


<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background: mediumaquamarine;
}
.container {
  width: 1100px;
  height: 700px;
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 70px auto;
}
.img-col {
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-radius: 30px;
  position: relative;
}
.img-col img {
  min-width: 100%;
  height: 100%;
}
form {
  width: 50%;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-input {
  min-width: 150px;
  max-width: 200px;
  text-align: center;
}
.form-input input {
  width: 180px;
  border-radius: 10px;
  border: 1px solid #e1e2e2;
  padding: 10px;
}
button {
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  max-width: 250px;
  min-width: 200px;
  background: linear-gradient(90deg, #009a87, #00ca75);
  color: #fff;
  height: 40px;
  box-shadow: 0 0 50px #c5faec;
}
h1 {
  margin-bottom: 130px;
  font-size: 1.8em;
  letter-spacing: 2px;
}
h2 {
  letter-spacing: 1px;
  font-size: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
}
.fab.fa-github {
  position: absolute;
  top: 15%;
  left: 20%;
  z-index: 99;
  font-size: 100px;
  background: rgba(255,255,255,0.20);
  backdrop-filter: blur(3px);
  padding: 15px;
  color: #fff;
  border-radius: 7px;
}
/* .img-col .blur {
  position: absolute;
  z-index: 9;
  top: 10%;
  left: 15%;
  background: #fff;
  filter: blur(100px);
} */
</style>