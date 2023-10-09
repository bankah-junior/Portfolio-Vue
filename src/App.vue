<template>
  <div class="w-full sm:h-screen sm:overflow-hidden relative bg-[#131621]">
    <div class="control__icons bg-[#131621] text-[#cae0bf] border-b-4 border-[#1e53e5] py-4 flex justify-end items-center space-x-6 pr-6">
      <div class="cursor-pointer" @click="goBack">
        <img src="./assets/icons/backward.svg" alt="" width="20" title="Previous">
      </div>
      <div class="cursor-pointer" @click="closeTab">
        <img src="./assets/icons/full-screen.svg" alt="" width="20" title="Close">
      </div>
      <div class="cursor-pointer" @click="goForwardOrNewTab">
        <img src="./assets/icons/forward.svg" alt="" width="20" title="Next">
      </div>
    </div>
    <div class="flex flex-row h-full relative bg-[#131621]">
      <section class="w-20 sm:w-36 bg-[#131621] h-full fixed sm:static top-0 left-0 pt-10 sm:pt-2 border-r-4 border-[#1e53e5]">
        <nav class="flex flex-col items-center justify-center space-y-7">
          <!-- <router-link to="/" class="w-full grid place-content-center">
            <img src="./assets/icons/home.svg" alt="" width="25" title="Home">
          </router-link> -->
          <router-link to="/about" class="w-full grid place-content-center">
            <img src="./assets/icons/user.svg" alt="" width="25" title="About">
          </router-link>
          <router-link to="/technologies" class="w-full grid place-content-center">
            <img src="./assets/icons/shortcode.svg" alt="" width="40" title="Technologies">
          </router-link>
          <router-link to="/projects" class="w-full grid place-content-center">
            <img src="./assets/icons/microsoft.svg" alt="" width="25" title="Projects">
          </router-link>
          <router-link to="/certificates" class="w-full grid place-content-center">
            <img src="./assets/icons/certificate.svg" alt="" width="30" title="Certificates">
          </router-link>
          <router-link to="/profile" class="w-full grid place-content-center">
            <img src="./assets/icons/happy.svg" alt="" width="25" title="Profile">
          </router-link>
        </nav>
      </section>
      <div class="pt-12 sm:pt-24 pl-[5.5rem] sm:pl-24 bg-[#131621] w-full h-full text-[#cae0bf]">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
      methods: {
        closeTab() {
          window.close();
          if (window.closed) {
            alert("Closed successfully!!!")
          } else {
            let ans = confirm("Unable to close, would you like to stay?")
            if (!ans) {
              window.open('about:blank', '_blank');
            }
          }
        },
        goBack() {
          window.history.back();
        },
        goForwardOrNewTab() {
          window.history.forward()
        },
      },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.control__icons img {
  filter: invert(100%);
}

nav a img {
  filter: invert(50%);
}

nav a.router-link-exact-active {
  border-left: 6px solid #fff;
  background: rgba(255, 255, 255, 0.4);
  padding: 6px 0;
}

nav a.router-link-exact-active img {
  filter: invert(100%);
}
</style>
