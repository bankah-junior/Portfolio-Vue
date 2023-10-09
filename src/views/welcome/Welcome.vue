<template>
  <div class="h-screen">
    <div class="flex flex-row mb-6 sm:mb-12">
      <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">1</p>
      <h1 class="user__name relative text-xl sm:text-4xl font-bold">ANTHONY BEKOE BANKAH</h1>
    </div>
    <div class="flex flex-row mb-6 sm:mb-12">
      <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">2</p>
      <p class="relative text-lg sm:text-2xl font-semibold text-left">
        Welcome to the official portfolio website of <i><u>ANTHONY BEKOE BANKAH</u></i> 🤝🏾
      </p>
    </div>
    <div class="flex flex-row mb-6 sm:mb-12">
      <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">3</p>
      <p class="relative text-lg sm:text-2xl font-semibold text-left">
        On your left is the side menu to navigate to different pages 📟
      </p>
    </div>
    <div class="flex flex-row mb-6 sm:mb-12">
      <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">4</p>
      <p class="relative text-lg sm:text-2xl font-semibold text-left">
        To your top right is the control box 🎛️
      </p>
    </div>
    <div class="flex flex-row mb-6 sm:mb-12">
      <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">5</p>
      <p class="relative text-lg sm:text-2xl font-semibold text-left">
        Have a nice experience 😊
      </p>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    // IconTextCard
  }
}
</script>

<style scoped>

  h1.user__name::before {
    content: '{ An Engineer / Full Stack Developer }';
    position: absolute;
    bottom: 1.4rem;
    font-size: .8rem;
    margin-bottom: 0.4rem;
  }
  

  /* Small (sm) */
  @media (min-width: 640px) { 
    h1.user__name::before {
      content: '{ An Engineer / Full Stack Developer }';
      position: absolute;
      bottom: 1.4rem;
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
   }

  /* Medium (md) */
  @media (min-width: 768px) { /* ... */ }

  /* Large (lg) */
  @media (min-width: 1024px) { /* ... */ }

  /* Extra Large (xl) */
  @media (min-width: 1280px) { /* ... */ }
</style>
