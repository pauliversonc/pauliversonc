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
  <section class="px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 py-8 container mx-auto  flex flex-col lg:grid lg:grid-cols-2  gap-8">


    <!-- FORM INPUT (LEFT)-->
    <form action="#" class="container grid gap-6 lg:grid-cols-2  lg:self-start">

      <div class="relative 
      before:ease-out 
      before:duration-300
      before:content-['']
      before:absolute
      before:h-0.5
      before:w-0
      before:bg-gray-900
      dark:before:bg-dmWhite
      before:bottom-0
      before:left-0
      before:hover:w-full
      ">
        <label class="pb-6 font-medium"  for="firstname">Firstname</label>
        <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack dark:placeholder-dmBlackTint2" type="text" placeholder="E.g. Paul Iverson" name="firstname" id="firstname"   autocomplete="on">
      </div>

      <div class="relative 
      before:ease-out 
      before:duration-300
      before:content-['']
      before:absolute
      before:h-0.5
      before:w-0
      before:bg-gray-900
      dark:before:bg-dmWhite
      before:bottom-0
      before:left-0
      before:hover:w-full
      ">
        <label class="pb-6 font-medium"  for="lastname">Lastname</label>
        <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack dark:placeholder-dmBlackTint2" type="text" placeholder="E.g. Cortez" name="lastname" id="lastname"   autocomplete="on">
      </div>

      <div class="relative 
      before:ease-out 
      before:duration-300
      before:content-['']
      before:absolute
      before:h-0.5
      before:w-0
      before:bg-gray-900
      dark:before:bg-dmWhite
      before:bottom-0
      before:left-0
      before:hover:w-full
      ">
        <label class="pb-6 font-medium" for="email">Email Address</label>
        <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack dark:placeholder-dmBlackTint2" type="text" placeholder="E.g. paul@gmail.com" name="email" id="email"  autocomplete="on">
      </div>

      <div class="relative 
      before:ease-out 
      before:duration-300
      before:content-['']
      before:absolute
      before:h-0.5
      before:w-0
      before:bg-gray-900
      dark:before:bg-dmWhite
      before:bottom-0
      before:left-0
      before:hover:w-full
      ">
        <label class="pb-6 font-medium" for="contact">Contact Number</label>
        <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack dark:placeholder-dmBlackTint2" type="text" placeholder="E.g. 09198765432" name="contact" id="contact">
      </div>

      <div class="col-span-full relative
      after:
      after:content-['']
      after:absolute
      after:bottom-0
      after:left-0
      after:h-0.5
      after:w-full
      after:bg-gray-200
      dark:after:bg-dmBlackTint2
      
      

      before:ease-out 
      before:duration-300
      before:content-['']
      before:absolute
      before:h-0.5
      before:w-0
      before:bg-gray-900
      dark:before:bg-dmWhite
      before:bottom-0
      before:left-0
      before:hover:w-full
      before:z-40
      ">
        <label class="pb-6 font-medium"  for="purpose">Purpose</label>
        <textarea placeholder="Your inquiry here..." class="w-full focus:outline-none py-1 dark:bg-dmBlack dark:placeholder-dmBlackTint2" name="purpose" id="purpose" rows="2" ></textarea>
      </div>


    
      <button class="py-1 h-10 font-semibold col-span-full
      bg-gray-100 dark:bg-dmBlackTint2 
      hover:bg-gray-900 dark:hover:bg-dmWhite
      text-gray-600 dark:text-dmWhite 
      hover:text-gray-100 dark:hover:text-dmBlackTint1 
       ease-out duration-300
      ">Send</button>



    </form>

    <!-- CONTACT DETAILS (RIGHT)-->
    <div class="flex flex-col gap-8">

      <!-- PARAGRAPH CONTAINER -->
      <div>
        <p class="mb-4">I actively seek opportunities for personal and professional growth. Embracing new opportunities excites me, as they contribute to my continuous improvement and the formation of meaningful relationships.</p>
        <p class="">Let's connect! Whether you're seeking guidance, offering insights, or just saying hello, I'd love to hear from you.</p>
      </div>
      
      <!-- CONTACTS -->
      <div class="flex flex-col items-start gap-2">
        <h5 class=" text-2xl italic font-bold text-gray-900 dark:text-dmWhite">CONTACTS</h5>

        <!-- link -->
        <a href="#" class="inline-block relative
          before:ease-out 
          before:duration-300
          before:content-['']
          before:absolute
          before:h-0.5
          before:w-0
          before:bg-gray-900
          dark:before:bg-dmWhite
          before:bottom-0
          before:left-0
          hover:before:w-full
          group
        ">
          <div class="flex items-center gap-2">
            <div class="">
              <svg class="h-4 w-4 fill-gray-900 dark:fill-dmGray dark:group-hover:fill-dmWhite dark:ease-out dark:duration-300 ">
                <use xlink:href="/icons/sprite.svg#icon-mail"></use>
              </svg>
            </div>
            <span class="text-gray-900 dark:text-dmGray dark:group-hover:text-dmWhite font-medium dark:ease-out dark:duration-300">pauliversonc@gmail.com</span>
          </div>
        </a>

        <a href="#" class="inline-block relative
          before:ease-out 
          before:duration-300
          before:content-['']
          before:absolute
          before:h-0.5
          before:w-0
          before:bg-gray-900
          dark:before:bg-dmWhite
          before:bottom-0
          before:left-0
          hover:before:w-full
          group
        ">
          <div class="flex items-center gap-2">
            <div class="">
              <svg class="h-4 w-4 fill-gray-900 dark:fill-dmGray dark:group-hover:fill-dmWhite dark:ease-out dark:duration-300 ">
                <use xlink:href="/icons/sprite.svg#icon-phone"></use>
              </svg>
            </div>
            <span class="text-gray-900 dark:text-dmGray dark:group-hover:text-dmWhite font-medium dark:ease-out dark:duration-300">09155436882</span>
          </div>
        </a>

      </div>

      <!-- SOCIALS -->
      <div class="flex flex-col gap-2">
        <h5 class=" text-2xl italic font-bold text-gray-900 dark:text-dmWhite">SOCIALS</h5>
        <div class="flex items-center gap-4">
          <a href="#" class="icon-link group">
            <svg class="h-9 w-9 fill-gray-600 dark:fill-dmBlackTint2 group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
              <use xlink:href="/icons/sprite.svg#icon-facebook"></use>
            </svg>
          </a>

          <a href="#" class="icon-link group">
            <svg class="h-9 w-9 fill-gray-600 dark:fill-dmBlackTint2 group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
              <use xlink:href="/icons/sprite.svg#icon-instagram"></use>
            </svg>
          </a>

          <a href="#" class="icon-link group">
            <svg class="h-9 w-9 fill-gray-600 dark:fill-dmBlackTint2 group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
              <use xlink:href="/icons/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>

          <a href="#" class="icon-link group">
            <svg class="h-9 w-9 fill-gray-600 dark:fill-dmBlackTint2 group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
              <use xlink:href="/icons/sprite.svg#icon-github"></use>
            </svg>
          </a>
        </div>
    

      </div>
      
    </div>
 

  </section>

  <!-- FOOTER -->
  <footer class="px-4 text-center  xs:px-6 md:px-8 lg:px-10 xl:px-12 mt-[8rem]  2xl:px-16 py-8 container mx-auto ">

    <!-- logo -->
    <a href="#" class="inline-block" >
      <img
        class="h-12 hidden dark:block"
        src="/images/logo/icon-white.png"
        alt="Paul Iverson Cortez - PIC Logo"
      />

      <img
        class="h-12 block dark:hidden"
        src="/images/logo/icon-black.png"
        alt="Paul Iverson Cortez - PIC Logo"
      />
    </a>

    <div class="text-center dark:text-dmWhite">Paul Iverson Cortez | Portfolio</div>

    <!-- credits -->
    <div class="flex flex-col items-center">
      <span class="font-secondary font-medium">&copy; 2014 &#x2022; Paul Iverson Cortez</span>
      <span class=" text-gray-500 dark:text-dmBlackTint2 font-medium text-sm">All RIGHTS RESERVED</span>
    </div>

    <!-- THANK YOU -->
  <section class="text-gray-900 dark:text-dmWhite mt-[2rem]  container mx-auto">
    <h3 class="uppercase leading-none font-medium  flex items-center justify-center
    text-[2.6rem]
    xxs:text-[3.4rem]
    xs:text-[4.4rem]
    sm:text-[5.8rem]
    md:text-[6.9rem]
    lg:text-[9.4rem]
    xl:text-[11.8rem]
    2xl:text-[14.15rem]
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
    
        
        ">/05</span>
      <span class=" ">salamat</span>
      <span class="italic">po</span>
    </h3>
  </section>



  </footer>
</template>

<script>
import { useDark } from '@vueuse/core'
import TheHeader from './components/layout/TheHeader.vue';
import TheHero from './components/layout/TheHero.vue';
import TheScroll from './components/layout/TheScroll.vue';
import TheIntro from './components/layout/TheIntro.vue';
import TheAbout from './components/layout/TheAbout.vue';
import TheProjects from './components/layout/TheProjects.vue';

export default {
  name: "PauliversoncApp",
  components: {
    TheHeader,
    TheHero,
    TheScroll,
    TheIntro,
    TheAbout,
    TheProjects,
  },
  




  computed: {
    moveLineMenu1() {
      return (this.isNavOpen) ? "rotate-45 top-1/2 translate-y-[-50%]" : "top-0";
    },
    moveLineMenu2() {
      return (this.isNavOpen) ? "translate-x-[100%]" : "translate-x-[-20%]";
    },
    moveLineMenu3() {
      return (this.isNavOpen) ? "rotate-[135deg] top-1/2 translate-y-[-50%]" : "";
    },

    isDarkMode() {
      return (this.isDark) ? "translate-x-[100%]" : " translate-x-[0]";
    }
  },

  data() {
    return {
      // 0: meatshoppe, 1: ecobuilders, 2: notely;
      featuredProjects: ['meatshoppe', 'ecobuilders', 'notely'],
      currentPlaying: 2,
      
      observer: null,
      headingIntersected: false,
      
      
      isNavOpen: false,
      isDark: useDark({ disableTransition: false }),

      
    };
  },

 

  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },

    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },

    // action: control (you use prev or next button)
    //         set (you click on the exact proj for you to play)

    handlePlaying(action, selected, length = 3) {
      // remove interval
      clearInterval(this.intervalId);  

      // run if you select prev or next
      if(action === 'control') {
        if (selected) {
          this.currentPlaying = (this.currentPlaying + 1) % length;
        } else {
          this.currentPlaying = (this.currentPlaying - 1 + length) % length;
        }
      }

      // set either you select it on the pic
      if (action === 'set') {
        this.currentPlaying = selected;
      }

      // start interval
      this.startInterval()

      console.log(this.intervalId)
    },

    startInterval() {
      this.intervalId = setInterval(this.autoPlay, 20000);
    },

    autoPlay() {
      this.handlePlaying('control', true);
    },

    observeHeading() {
      const headingProject = this.$refs.projects;


      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.headingIntersected) {
            // Do something when heading intersects for the first time

            // Unobserve the heading
            this.observer.unobserve(headingProject);
            
            // Update the flag to prevent further observations
            this.headingIntersected = true;

            // set current playing to 0
            this.handlePlaying('set', 0)
          }
        });
      });

      this.observer.observe(headingProject)
    }



  },
};
</script>

<style scoped>
  @keyframes fade {
    to {
      opacity: 0.1;
    }
  }

  .down-fade > div{
    animation: fade .8s infinite alternate;
  }

  .down-fade > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .down-fade > div:nth-child(3) {
    animation-delay: 0.4s;
  }

  .icon-pos-a {
    transform: translateY(-27%);
    animation: rotating-a 2s linear infinite;

  }

  .icon-pos-b {
    transform: translateY(-18%);
    animation: rotating-b 2s linear infinite;

  }

  @keyframes rotating {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }


  @keyframes rotating-a {
    0% {
        transform:translateY(-27%) rotate(0deg);
    }
    100% {
        transform:translateY(-27%) rotate(360deg);
    }
  }

  @keyframes rotating-b {
    0% {
        transform:translateY(-18%) rotate(0deg);
    }
    100% {
        transform:translateY(-18%) rotate(360deg);
    }
  }

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

  .nav {
    transition: top 0.3s ease-out;
  }

 
  

</style>