<template>
  <div class="pr-2 sm:h-screen">
    <div class="flex flex-row mb-4 sm:mb-4">
      <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">1</p>
      <h1 class="user__about1 relative text-xl sm:text-4xl font-bold">ABOUT</h1>
    </div>
    <div class="flex flex-row mb-16 sm:mb-[4.5rem]">
      <p class="sm:mr-10 mr-4 text-lg sm:text-2xl">2</p>
      <p class="relative text-lg sm:text-2xl font-medium text-left opacity-70 italic">
        A passionate Computer Science and Engineering student with a love for technology and innovation. 
        I chose this field because of its dynamic nature and the constant evolution of technology. 
        C++ is my mother tongue programming language. Beyond technical skills, I value soft skills like 
        communication, adaptability and teamwork. I thrive in collaborative environments, bridging the gap 
        between technology and end-users. My determination, curiosity, and drive for continuous improvement 
        set me apart. My portfolio showcases diverse projects, where I seek to make a positive impact. Outside 
        of tech, I find inspiration in nature and enjoy reading and sketching. I'm excited about the future and 
        open to collaborations. Thank you for visiting my portfolio. Let's create something incredible together!
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
h1.user__about1::before {
    content: '{ An Engineer 💻}';
    width: 160%;
    position: absolute;
    bottom: 1.4rem;
    font-size: .8rem;
    margin-bottom: 0.4rem;
  }
  h1.user__about2::before {
    content: '{ Forex Trader 📈}';
    width: 160%;
    position: absolute;
    bottom: 1.4rem;
    font-size: .8rem;
    margin-bottom: 0.4rem;
  }
  

  /* Small (sm) */
  @media (min-width: 640px) { 
    h1.user__about1::before {
      content: '{ An Engineer 💻}';
      width: 110%;
      position: absolute;
      bottom: 1.4rem;
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
    h1.user__about2::before {
      content: '{ Forex Trader 📈}';
      width: 110%;
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