<template >
  <section ref="projects" class="px-4  xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16  py-8 container mx-auto ">

<!-- PROJECTS CONTAINER -->
<div class="container mx-auto max-w-5xl ">
  
  <!-- DEMO PLAYER-->
  <div class=" mb-10 relative hidden invisible md:block md:visible">
    <img class="select-none" :src="`/images/projects/${featuredProjects[currentPlaying]}.gif`" />

    <!-- button previous -->
    <button @click="handlePlaying('control', false)" class="h-6 w-6 bg-gray-100 dark:bg-dmBlackTint2 p-1 rounded-full rotate-90 absolute left-0 top-1/2 translate-x-[-105%] translate-y-[-50%] group hover:bg-gray-900 dark:hover:bg-dmWhite ease-out duration-300 hover:cursor-pointer hover:translate-x-[-120%]" >
      <svg class="h-full w-full fill-gray-600 dark:fill-dmWhite group-hover:fill-gray-100 dark:group-hover:fill-dmBlackTint1 ease-out duration-300">
          <use
          xlink:href="/icons/sprite.svg#icon-chevron-down"
          ></use>
        </svg>
    </button>

    <!-- button next -->
    <button @click="handlePlaying('control', true)" class="h-6 w-6 bg-gray-100 dark:bg-dmBlackTint2 p-1 rounded-full rotate-[270deg] absolute right-0 top-1/2 translate-x-[105%] translate-y-[-50%] group hover:bg-gray-900 dark:hover:bg-dmWhite ease-out duration-300 hover:cursor-pointer hover:translate-x-[120%]">
      <svg class="h-full w-full fill-gray-600 dark:fill-dmWhite group-hover:fill-gray-100 dark:group-hover:fill-dmBlackTint1 ease-out duration-300">
          <use
          xlink:href="/icons/sprite.svg#icon-chevron-down"
          ></use>
        </svg>
    </button>

  </div>

  <!-- CONTAINER FEATURED PROJECTS -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

    <!-- FEATURED PROJECTS -->
    
    <figure class="flex-1 overflow-hidden relative md:pt-[1.4rem] md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-0 md:before:h-1 md:before:w-full md:before:bg-gray-100 dark:md:before:bg-dmBlackTint2
                   md:after:absolute md:after:top-0 md:after:left-0 md:after:w-full md:after:h-1 md:after:bg-gray-900 dark:md:after:bg-dmWhite  md:after:translate-x-[-100%] "
            :class="(currentPlaying === 0) ? 'md:after:translate-x-[0%] md:after:ease-linear md:after:duration-[20000ms]' : ''">  
      <img @click="handlePlaying('set', 0)" class="hidden select-none invisible md:block md:visible hover:cursor-pointer" src="/images/projects/meatshoppe-min.png" alt="">
      <img class="block visible md:hidden md:invisible" src="/images/projects/meatshoppe.gif" alt="">
      <figcaption class="mt-4">

        <span class="text-sm dark:text-dmBlackTint2">Featured Project</span>
        <h4 class="font-semibold text-lg  text-gray-900 dark:text-dmWhite flex gap-2 items-center">
          
          <span @click="handlePlaying('set', 0)" class="mr-2 hover:cursor-pointer">Meatshoppe</span>
          <BaseIconLink :small="true" icon="link" />
          <BaseIconLink :small="true" icon="github" />

        </h4>

        <p class="container mb-4 mt-2 text-gray-600 dark:text-dmGray">Where quality meets flavor! This showcase project represents the frontend of a sophisticated e-commerce platform dedicated to delivering the finest meats.</p>
        
        <ul class="flex flex-wrap gap-2 ">
          <BaseTag v-for="(tag, index) in tags.meatshoppe" :key="index" :tag-name="tag" />
        </ul>
        
      </figcaption>
    </figure>

    <!-- FEATURED PROJECTS -->
    <figure class="flex-1 overflow-hidden relative md:pt-[1.4rem] md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-0 md:before:h-1 md:before:w-full md:before:bg-gray-100 dark:md:before:bg-dmBlackTint2
                   md:after:absolute md:after:top-0 md:after:left-0 md:after:w-full md:after:h-1 md:after:bg-gray-900 dark:md:after:bg-dmWhite md:after:translate-x-[-100%] "
            :class="(currentPlaying === 1) ? 'md:after:translate-x-[0%] md:after:ease-linear md:after:duration-[20000ms]' : ''">  
      <img @click="handlePlaying('set', 1)" class="hidden select-none invisible md:block md:visible hover:cursor-pointer" src="/images/projects/ecobuilders-min.png" alt="">
      <img class="block visible md:hidden md:invisible" src="/images/projects/ecobuilders.gif" alt="">
      <figcaption class="mt-4">

        <span class="text-sm dark:text-dmBlackTint2">Featured Project</span>
        <h4 class="font-semibold text-lg  text-gray-900 dark:text-dmWhite flex gap-2 items-center">
          
          <span @click="handlePlaying('set', 1)" class="mr-2 hover:cursor-pointer">ECO Builders</span>

          <BaseIconLink :small="true" icon="link" />
          <BaseIconLink :small="true" icon="github" />

        </h4>

        <p class="container mb-4 mt-2 text-gray-600 dark:text-dmGray">Explore the future of sustainable living. featuring a minimalist design approach that elegantly highlights the essence of modern sustainable living.</p>
        
        <ul class="flex flex-wrap gap-2 ">
          <BaseTag v-for="(tag, index) in tags.ecobuilders" :key="index" :tag-name="tag" />
        </ul>
        
      </figcaption>
    </figure>

    <!-- FEATURED PROJECTS -->
    <figure class="flex-1 overflow-hidden relative md:pt-[1.4rem] md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-0 md:before:h-1 md:before:w-full md:before:bg-gray-100 dark:md:before:bg-dmBlackTint2
                   md:after:absolute md:after:top-0 md:after:left-0 md:after:w-full md:after:h-1 md:after:bg-gray-900 dark:md:after:bg-dmWhite md:after:translate-x-[-100%] "
            :class="(currentPlaying === 2) ? 'md:after:translate-x-[0%] md:after:ease-linear md:after:duration-[20000ms]' : ''">   
      <img @click="handlePlaying('set', 2)" class="hidden select-none invisible md:block md:visible hover:cursor-pointer" src="/images/projects/notely-min.png" alt="">
      <img class="block visible md:hidden md:invisible" src="/images/projects/notely.gif" alt="">
      <figcaption class="mt-4">

        <span class="text-sm dark:text-dmBlackTint2">Featured Project</span>
        <h4 class="font-semibold text-lg  text-gray-900 dark:text-dmWhite flex gap-2 items-center">
          
          <span @click="handlePlaying('set', 2)" class="mr-2 hover:cursor-pointer">Notely</span>

          <BaseIconLink :small="true" icon="link" />
          <BaseIconLink :small="true" icon="github" />

        </h4>

        <p class="container mb-4 mt-2 text-gray-600 dark:text-dmGray">A web application that allows you to create and manage notes, It provides a simple and intuitive interface for taking and organizing your thoughts and ideas.</p>
        
        <ul class="flex flex-wrap gap-2 ">
          <BaseTag v-for="(tag, index) in tags.notely" :key="index" :tag-name="tag" />
        </ul>
        
      </figcaption>
    </figure>

  </div>

  <!-- CONTAINER NOTABLE PROJECTS -->
  <div ref="notablePrjCon" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <!-- NOTABLE PROJECTS -->
    <div class="bg-gray-100 dark:bg-dmBlackTint1 px-6 py-4 relative
    border-t-2
    border-white dark:border-dmBlack
    mt-[30px]

    
    before:bg-gray-200
    dark:before:bg-dmBlackTint2
    before:absolute
    before:w-1/4
    before:h-[30px]
    before:top-0
    before:left-0
    before:translate-y-[-100%]
    before:z-[-1]

    after:bg-gray-200
    dark:after:bg-dmBlackTint2
    after:absolute
    after:w-full
    after:h-[30px]
    after:top-0
    after:left-0
    after:translate-y-[-50%]
    after:z-[-100]


    ">
      <span class="text-sm dark:text-dmBlackTint2">Notable Project</span>
      <h4 class="font-semibold text-lg text-gray-900 dark:text-dmWhite flex gap-2 items-center">
        
        <span class="mr-2">Natours</span>

        <BaseIconLink :small="true" icon="link" />
        <BaseIconLink :small="true" icon="github" />

      </h4>
      <p class="container mb-4 mt-2 text-gray-600 dark:text-dmGray">A fictional company that provides adventurous nature tours. The website was built as a practice project to demonstrate Sass skills and responsive web design.</p>
      <ul class="flex flex-wrap">
        <li class="p-0 h-6 pr-4 font-medium">#HTML</li>
        <li class="p-0 h-6 pr-4 font-medium">#Sass</li>
        <li class="p-0 h-6 pr-4 font-medium">#JavaScript</li>
        <li class="p-0 h-6 pr-4 font-medium">#Frontend</li>
      </ul>
    </div>

    <!-- NOTABLE PROJECTS -->
    <div class="bg-gray-100 dark:bg-dmBlackTint1 px-6 py-4 relative
    border-t-2
    border-white dark:border-dmBlack
    mt-[30px]

    
    before:bg-gray-200
    dark:before:bg-dmBlackTint2
    before:absolute
    before:w-1/4
    before:h-[30px]
    before:top-0
    before:left-0
    before:translate-y-[-100%]
    before:z-[-1]

    after:bg-gray-200
    dark:after:bg-dmBlackTint2
    after:absolute
    after:w-full
    after:h-[30px]
    after:top-0
    after:left-0
    after:translate-y-[-50%]
    after:z-[-1]

    ">
      <span class="text-sm dark:text-dmBlackTint2">Notable Project</span>
      <h4 class="font-semibold text-lg text-gray-900 dark:text-dmWhite flex gap-2 items-center">
        
        <span class="mr-2">Omnifood</span>
        <BaseIconLink :small="true" icon="link" />
        <BaseIconLink :small="true" icon="github" />


      </h4>
      <p class="container mb-4 mt-2 text-gray-600 dark:text-dmGray">This project was developed during my Udemy bootcamp to enhance frontend skills and create a modern website with a mobile-responsive design.</p>
      <ul class="flex flex-wrap">
        <li class="p-0 h-6 pr-4 font-medium">#HTML</li>
        <li class="p-0 h-6 pr-4 font-medium">#CSS</li>
        <li class="p-0 h-6 pr-4 font-medium">#JavaScript</li>
        <li class="p-0 h-6 pr-4 font-medium">#Frontend</li>
      </ul>
    </div>

    <!-- NOTABLE PROJECTS -->
    <div class="bg-gray-100 dark:bg-dmBlackTint1 px-6 py-4 relative
    border-t-2
    border-white dark:border-dmBlack
    mt-[30px]

    
    before:bg-gray-200
    dark:before:bg-dmBlackTint2
    before:absolute
    before:w-1/4
    before:h-[30px]
    before:top-0
    before:left-0
    before:translate-y-[-100%]
    before:z-[-1]

    after:bg-gray-200
    dark:after:bg-dmBlackTint2
    after:absolute
    after:w-full
    after:h-[30px]
    after:top-0
    after:left-0
    after:translate-y-[-50%]
    after:z-[-1]

    ">
      <span class="text-sm dark:text-dmBlackTint2">Notable Project</span>
      <h4 class="font-semibold text-lg text-gray-900 dark:text-dmWhite flex gap-2 items-center">
        
        <span class="mr-2">Pauliversonc</span>
        <BaseIconLink :small="true" icon="link" />
        <BaseIconLink :small="true" icon="github" />
 

      </h4>
      <p class="container mt-2 mb-4 text-gray-600 dark:text-dmGray">A Portfolio Website, where each project seamlessly blends innovation and aesthetics to showcase my expertise in creating a captivating digital presence. </p>
      <ul class="flex flex-wrap">
        <li class="p-0 h-6 pr-4 font-medium">#Vue.js</li>
        <li class="p-0 h-6 pr-4 font-medium">#Vite</li>
        <li class="p-0 h-6 pr-4 font-medium">#Tailwind</li>
        <li class="p-0 h-6 pr-4 font-medium">#Frontend</li>
      </ul>
    </div>

  </div>

</div>

</section>
</template>
<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: 'PauliversoncTheProjects',
  created() {
    this.startInterval();
  },

  mounted() {
    this.observeHeading();
    this.animateElement();
  },

  data() {
    return {
    // 0: meatshoppe, 1: ecobuilders, 2: notely;
      featuredProjects: ['meatshoppe', 'ecobuilders', 'notely'],
      currentPlaying: 2,
      
      observer: null,
      headingIntersected: false,

      tags: {
        meatshoppe: [
          'HTML',
          'Sass',
          'JavaScript',
          'Vue.js',
          'Vite',
          'EmailJS',
        ],

        ecobuilders: [
          'HTML',
          'CSS',
          'JavaScript',
          'Hero Icons',
          'Parcel',
          'Minimalist',
        ],

        notely: [
          'HTML',
          'CSS',
          'JavaScript',
          'OOP',
          'Parcel',
          'CoreJS',
        ],
      }


    };
  },  

  methods: {
    // Animation
    animateElement(){
      gsap.registerPlugin(ScrollTrigger);

      const notablePrjCon = this.$refs.notablePrjCon;
      gsap.from(notablePrjCon.children, {
        scrollTrigger: {
          trigger: notablePrjCon,
          start: 'top 70%',
        },
        y: '30%',
        ease: 'back.out(1.7)',
        duration: 1,
        stagger: 0.2,
      });


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
}
</script>
<style >
  
</style>