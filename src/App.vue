<template>
  <div class="div-main-page">
    <div id="nav" v-if="this.$route.name !== 'Login'">
      <ul class="ul-router">
        <li>
          <div class="div-router">
            <router-link to="/">Home</router-link>
          </div>
        </li>
        <li>
          <div class="div-router">
            <router-link to="/about">About</router-link>
          </div>
        </li>
        <li>
          <div class="div-router">
          <router-link to="/settings">Settings</router-link>
          </div>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body{
  margin :0px;
}

.div-main-page {
  display: flex;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgb(250, 250, 250);
}

#nav {
  padding: 30px;
  width: 15%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.ul-router {
  list-style-type: none;
}

.div-router {
  padding: 10px 5px 10px 5px;
  min-width: 100%;
  border: none;
  border-radius: 15px;
}

.div-router a.router-link-exact-active {
  background-color: rgb(67, 111, 233);
}
</style>
