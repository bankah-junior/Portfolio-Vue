<template>
    <div class="pr-2 h-screen">
      <div class="flex flex-row mb-4 sm:mb-4">
        <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">1</p>
        <h1 class="user__tech1 relative text-xl sm:text-4xl font-bold">TECHNOLOGY</h1>
      </div>
      <div class="flex flex-row mb-16 sm:mb-[4.5rem]">
        <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">2</p>
        <p class="relative text-lg sm:text-2xl font-medium text-left opacity-70 italic">#React Js   #Vue Js   #SASS   #TailwindCSS</p>
      </div>
      <div class="flex flex-row mb-4 sm:mb-4">
        <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">3</p>
        <h1 class="user__tech2 relative text-xl sm:text-4xl font-bold">TECHNOLOGY</h1>
      </div>
      <div class="flex flex-row mb-16 sm:mb-[4.5rem]">
        <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">4</p>
        <p class="relative text-lg sm:text-2xl font-medium text-left opacity-70 italic">#Node Js   #MongoDB   #SQL</p>
      </div>
      <div class="flex flex-row mb-4 sm:mb-4">
        <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">3</p>
        <h1 class="user__tech3 relative text-xl sm:text-4xl font-bold">TECHNOLOGY</h1>
      </div>
      <div class="flex flex-row mb-16 sm:mb-[4.5rem]">
        <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">4</p>
        <p class="relative text-lg sm:text-2xl font-medium text-left opacity-70 italic">#Photoshop   #Figma</p>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  h1.user__tech1::before {
    content: '{ Frontend 💻}';
    width: 65%;
    position: absolute;
    bottom: 1.4rem;
    font-size: .8rem;
    margin-bottom: 0.4rem;
  }
  h1.user__tech2::before {
    content: '{ Backend 🖥️}';
    width: 65%;
    position: absolute;
    bottom: 1.4rem;
    font-size: .8rem;
    margin-bottom: 0.4rem;
  }
  h1.user__tech3::before {
    content: '{ UI/UX 🖼️}';
    width: 50%;
    position: absolute;
    bottom: 1.4rem;
    font-size: .8rem;
    margin-bottom: 0.4rem;
  }
  

  /* Small (sm) */
  @media (min-width: 640px) { 
    h1.user__tech1::before {
      content: '{ Frontend 💻}';
      width: 45%;
      position: absolute;
      bottom: 1.4rem;
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
    h1.user__tech2::before {
      content: '{ Backend 🖥️}';
      width: 45%;
      position: absolute;
      bottom: 1.4rem;
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
    h1.user__tech3::before {
      content: '{ UI/UX 🖼️}';
      width: 35%;
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