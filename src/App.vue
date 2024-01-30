<template>
  <!-- HEADER -->
  <TheHeader></TheHeader>
  <!-- HERO -->
  <TheHero></TheHero>
  <!-- SCROLL BUTTON -->
  <TheScroll></TheScroll>
  <!-- BRIEF INTRO -->
  <TheIntro></TheIntro>
  <!-- HEADING PER SECTION (ABOUT) -->
  <section class="px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 text-gray-900 dark:text-dmWhite mb-[2rem] mt-[8rem] container mx-auto">
    <h3 class="leading-none font-medium  flex items-center justify-center
    text-[3.2rem]
    xxs:text-[4.2rem]
    xs:text-[5.5rem]
    sm:text-[7.2rem]
    md:text-[8.6rem]
    lg:text-[10.2rem]
    xl:text-[14.72rem]
    2xl:text-[17.6rem]
    gap-4
    relative
    ">
    <span class=" bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-white dark:from-dmGray dark:to-dmBlack
         absolute top-0 left-[3%] text-gray-200  z-[-1] translate-y-[-50%]  font-normal inline-block p-1 
         text-[2.4rem]
         xxs:text-[3.4rem]
         xs:text-[4.4rem] 
         sm:text-[4.9rem]
         lg:text-[6.1rem] 
         xl:text-[7.5rem] 
         xs:left-[3.6%]
         lg:left-[8%]
         xl:left-[2%]
         
        
        ">/02</span>
      <span class=" ">ABOUT</span>
      <span class="italic">ME</span>
    </h3>
  </section>


  <!-- ABOUT -->
  <TheAbout></TheAbout>

  <!-- HEADING PER SECTION (PROJECTS) -->
  <section ref="projects" class="mb-[2rem] mt-[8rem] px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 text-gray-900 dark:text-dmWhite  container mx-auto">
    <h3 class="uppercase leading-none font-medium  flex items-center justify-center
    text-[2.4rem]
    xxs:text-[3.1rem]
    xs:text-[4.1rem]
    sm:text-[5.3rem]
    md:text-[6.3rem]
    lg:text-[8.6rem]
    xl:text-[10.8rem]
    2xl:text-[13rem]
    gap-4
    relative
    ">
    <span class=" bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-white dark:from-dmGray dark:to-dmBlack
         absolute top-0 left-0 text-gray-200 z-[-1] translate-y-[-50%] font-normal inline-block p-1
         text-[2.4rem]
         xxs:text-[3.4rem]
         xs:text-[4.4rem] 
         sm:text-[4.9rem]
         lg:text-[6.1rem] 
         xl:text-[7.5rem] 
         md:left-[2%]
 
 
        
        ">/03</span>
      <span class=" ">my</span>
      <span class="italic">projects</span>
    </h3>
  </section>

  <!-- PROJECT -->
  <TheProjects></TheProjects>

  <!-- HEADING PER SECTION (CONTACTS) -->
  <section class="mb-[2rem] mt-[8rem] px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 text-gray-900 dark:text-dmWhite  container mx-auto">
    <h3 class="uppercase leading-none font-medium  flex items-center justify-center
    text-[2.6rem]
    xxs:text-[3.3rem]
    xs:text-[4.3rem]
    sm:text-[5.6rem]
    md:text-[6.65rem]
    lg:text-[9.1rem]
    xl:text-[11.4rem]
    2xl:text-[13.67rem]
    gap-4
    relative
    ">
    <span class=" bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-white dark:from-dmGray dark:to-dmBlack
         absolute top-0 left-0 text-gray-200 z-[-1] translate-y-[-50%] font-normal inline-block p-1
         text-[2.4rem]
         xxs:text-[3.4rem]
         xs:text-[4.4rem] 
         sm:text-[4.9rem]
         lg:text-[6.1rem] 
         xl:text-[7.5rem] 
         md:left-[2%]
     
        
        ">/04</span>
      <span class=" ">contact</span>
      <span class="italic">me</span>
    </h3>
  </section>

  <!-- CONTACT -->
  <TheContacts></TheContacts>

  <!-- FOOTER -->
  <TheFooter></TheFooter>


</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheHero from './components/layout/TheHero.vue';
import TheScroll from './components/layout/TheScroll.vue';
import TheIntro from './components/layout/TheIntro.vue';
import TheAbout from './components/layout/TheAbout.vue';
import TheProjects from './components/layout/TheProjects.vue';
import TheContacts from './components/layout/TheContacts.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  name: "PauliversoncApp",
  components: {
    TheHeader,
    TheHero,
    TheScroll,
    TheIntro,
    TheAbout,
    TheProjects,
    TheContacts,
    TheFooter,
  },

};
</script>

<style scoped>
  @keyframes bounce {
    0%, 100%, 20%, 50%, 80% {
      -webkit-transform: translateY(0);
      -ms-transform:     translateY(0);
      transform:         translateY(0)
    }
    40% {
      -webkit-transform: translateY(-20%);
      -ms-transform:     translateY(-20%);
      transform:         translateY(-20%)
    }
    60% {
      -webkit-transform: translateY(-10%);
      -ms-transform:     translateY(-10%);
      transform:         translateY(-10%)
    }
  }

  .icon-link {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;

  }

  .icon-link:hover {
    cursor: pointer;
    animation-name: bounce;
    -moz-animation-name: bounce;
  }
</style>