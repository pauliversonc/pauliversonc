<template >
  <section class=" px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16  py-8 container mx-auto flex flex-col gap-4">
    
    <!-- ABOUT CONTENT WRAPPER -->
    <div class="flex flex-col gap-4 lg:flex-none lg:grid lg:grid-cols-2 " >

      <!-- PICTURE CONTAINER -->
      <div ref="imageCon" class="flex justify-center items-center ">
        <!-- PICTURE -->
        <img class="self-center h-[16rem] grayscale" src="/images/portrait/pauliversonc.jpg">
      </div>
      
      <!-- PARAGRAPH CONTAINER -->
      <div ref="paragraph" class="space-y-4 lg:row-span-2 ">
        <!-- PARAGRAPH -->
        <p class="">I am a <span ref="highlight1" class="ease-out duration-300">passionate web developer</span> born and raised in the lively city of <span ref="highlight2" class="ease-out duration-300">Trece Martires, Cavite.</span> My journey into the world of web development began under the guidance of exceptional professors back in college. Inspired by their teachings, I've embarked on a path that blends <span ref="highlight3" class="ease-out duration-300">creativity and technical prowess</span> to craft engaging digital experiences.</p>
        <p class="">I believe in the power of code to transform ideas into captivating online realities. Each line of code represents an opportunity to bring innovation to life and make a <span ref="highlight4" class="ease-out duration-300">lasting impact on the digital landscape.</span> With a commitment to continuous learning and a keen eye for detail, <span ref="highlight5" class="ease-out duration-300">I strive to create web solutions that not only meet but exceed expectations.</span></p>
        <p class="">In the words of <span ref="highlight6" class="ease-out duration-300">Steve Jobs, "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."</span> This philosophy resonates deeply with my approach to web development, driving me to deliver <span ref="highlight7" class="ease-out duration-300">excellence in every project.</span> Join me on this exciting journey, and <span ref="highlight8" class="ease-out duration-300">let's create digital wonders together!</span></p>
      </div>

      <!-- SKILLS CONTAINERS -->
      <div class="space-y-4 ">
        <!-- HEADING -->
        <BaseHeadingFive title="skills" :margin-custom="true" :margin-top-custom="true" />
        
        <!-- SKILLS ICON -->
        <ul ref="skills" class="flex flex-wrap gap-2">
          
          <li v-for="skill in skills" :key="skill.name" class="group h-9 w-9 relative ">
            <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 dark:bg-dmBlackTint1 font-bold  py-[3px] scal text-gray-600 dark:text-dmGray tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">{{ skill.name }}</span>
            <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
              <use
              :xlink:href="`/icons/sprite.svg#icon-${skill.icon}`"
              ></use>
            </svg>
          </li>

        </ul>

      </div>


      
    </div>



    <BaseHeadingFive title="experience" :margin-top-custom="true" />
    <!-- TIMELINE -->
    <div ref="timeline" class="overflow-y-clip container pl-8 lg:pl-0  relative before:content-[''] before:bg-gray-400 dark:before:bg-dmGray before:absolute before:w-0.5 before:h-full before:left-0 lg:before:left-[50%]">
      <span ref="progressBar" style="height: 0;" class="absolute top-0 select-none w-0.5 bg-gray-900 dark:bg-dmWhite left-0 lg:left-[50%]">&nbsp;</span>

      <!-- CARD CONTAINER -->
      <ul class="space-y-8 timeline-container xp-card-con lg:w-[50%]" >

        <!-- CARD L (TEXT-BOX) -->
        <li class="relative before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:bg-gray-900 dark:before:bg-dmWhite before:rounded-full before:top-0 before:left-0 lg:before:left-full before:translate-x-[-2.3rem] lg:pr-[2rem] lg:before:translate-x-[-45%]">
          

          <div ref="card1" class="flex flex-col">
            <!-- 320 DEFAULT -->

            <!-- old: lg:translate-x-[115%] -->
            <!-- need to have when gsap is added: lg:translate-x-[125%] -->
            <span ref="history1" class="ease-out duration-300 absolute top-1/2  rotate-[270deg] translate-x-[-68%] font-medium bg-white dark:bg-dmBlack z-40 
            lg:right-0 lg:translate-x-[135%] lg:translate-y-[-25%] lg:rotate-0 lg:top-0
            ">February 2021 - Present</span>
            <span class="leading-5 font-semibold text-lg text-gray-900 dark:text-dmWhite">Junior Software Developer</span>
            <span class="italic">Cylix Technologies, Inc.</span>
            <ul class="mt-2 space-y-1">

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>In charge of crafting the <strong class="text-gray-900 dark:text-dmWhite font-medium">ERP Web system</strong>, a comprehensive tool that <strong class="text-gray-900 dark:text-dmWhite font-medium">streamlines various business processes</strong> and is <strong class="text-gray-900 dark:text-dmWhite font-medium">widely adopted across the entire company</strong></p>

              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Responsible for ongoing <strong class="text-gray-900 dark:text-dmWhite font-medium">maintenance and support</strong> of the <strong class="text-gray-900 dark:text-dmWhite font-medium">ERP Web system</strong>, ensuring continuous functionality and efficiency</p>

              </li>

              <li class="flex gap-2">
                <div class="flex ">
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>backend developer for the <strong class="text-gray-900 dark:text-dmWhite font-medium">Cylix Portal</strong>, a <strong class="text-gray-900 dark:text-dmWhite font-medium">tracking and attendance application</strong> utilized by Cylix employees</p>
              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Entrusted with the regular <strong class="text-gray-900 dark:text-dmWhite font-medium">maintenance and upkeep</strong> of the <strong class="text-gray-900 dark:text-dmWhite font-medium">Cylix Portal</strong>, ensuring its <strong class="text-gray-900 dark:text-dmWhite font-medium">smooth operation</strong> for the <strong class="text-gray-900 dark:text-dmWhite font-medium">convenience of users</strong></p>
              </li>

            </ul>
            <ul class="flex flex-wrap gap-2 mt-4">
              <BaseTag v-for="(tag1, index) in tags1" :key="index" :tag-name="tag1" />
            </ul>
          </div>
        </li>

        <!-- CARD R -->
        <li class="relative before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:bg-gray-900 dark:before:bg-dmWhite before:rounded-full before:top-0 before:left-0 before:translate-x-[-2.3rem] lg:left-full lg:pl-[2rem] lg:before:translate-x-[-45%]">
          <div ref="card2" class="flex flex-col">
            <span ref="history2" class="ease-out duration-300 absolute top-1/2  rotate-[270deg] translate-x-[-68%] font-medium bg-white dark:bg-dmBlack z-40 
            lg:left-0 lg:translate-x-[-135%] lg:translate-y-[-25%] lg:rotate-0 lg:top-0
            ">October 2019 - June 2020</span>
            <span class="leading-5 font-semibold text-lg text-gray-900 dark:text-dmWhite">IT Staff</span>
            <span class="italic">Shimadzu Philippines Mfg, Inc.</span>
            <ul class="mt-2 space-y-1">

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Implemented regular <strong class="text-gray-900 dark:text-dmWhite font-medium">system updates and maintenance</strong> to ensure optimal performance</p>
              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Installed and configured <strong class="text-gray-900 dark:text-dmWhite font-medium">hardware and software</strong> components for new and existing systems</p>
              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>I use <strong class="text-gray-900 dark:text-dmWhite font-medium">Oracle E-Business Suite (EBS)</strong> for efficient and integrated <strong class="text-gray-900 dark:text-dmWhite font-medium">Enterprise Resource Planning (ERP)</strong></p>
              </li>


              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Developed and deployed <strong class="text-gray-900 dark:text-dmWhite font-medium">automation workflows</strong> using <strong class="text-gray-900 dark:text-dmWhite font-medium">Visual Basic</strong> in <strong class="text-gray-900 dark:text-dmWhite font-medium">UiPath</strong> to streamline repetitive tasks, resulting in significant time savings</p>
              </li>

            </ul>

            <ul class="flex flex-wrap gap-2 mt-4">
              <BaseTag v-for="(tag2, index) in tags2" :key="index" :tag-name="tag2" />
            </ul>
            
          </div>
        </li>

        <!-- CARD L -->
        <li class="relative before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:bg-gray-900 dark:before:bg-dmWhite before:rounded-full before:top-0 before:left-0 lg:before:left-full before:translate-x-[-2.3rem] lg:pr-[2rem] lg:before:translate-x-[-45%]">
          <div ref="card3" class="flex flex-col">
            <span ref="history3" class="ease-out duration-300 absolute top-1/2  rotate-[270deg] translate-x-[-68%] font-medium bg-white dark:bg-dmBlack z-40 
            lg:right-0 lg:translate-x-[135%] lg:translate-y-[-25%] lg:rotate-0 lg:top-0
            ">May 2018 - August 2018</span>
            <span class="leading-5 font-semibold text-lg text-gray-900 dark:text-dmWhite">Desktop Support Engineer (Intern)</span>
            <span class="italic">Cypress Manufacturing Ltd.</span>
            <ul class="mt-2 space-y-1">

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Acted as the primary contact for end users, addressing their <strong class="text-gray-900 dark:text-dmWhite font-medium">IT-related concerns</strong> promptly and efficiently</p>
              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Expertly installed, diagnosed, and repaired various <strong class="text-gray-900 dark:text-dmWhite font-medium">hardware components</strong>, including PCs, terminals, telephones, printers, and scanners</p>
              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500 dark:fill-dmGray">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p><strong class="text-gray-900 dark:text-dmWhite font-medium">Coordinated and maintained</strong> meeting rooms to ensure seamless and efficient communication during team collaborations.</p>
              </li>


            </ul>
            <ul class="flex flex-wrap gap-2 mt-4">
              <BaseTag v-for="(tag3, index) in tags3" :key="index" :tag-name="tag3" />
            </ul>
          </div>
        </li>


      </ul>
    </div>

    <!-- RESUME LINK -->
    <div class="mt-6 flex justify-center align-center">
      <BaseLink text="View My Résumé" icon="file-text" :icon-right="true" />
    </div>

  </section>
</template>
<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: 'PauliversoncTheAbout',
  mounted() {
    this.animateElement();
  },
  methods: {
    animateElement(){
      gsap.registerPlugin(ScrollTrigger);

      const highlight1 = this.$refs.highlight1;
      const highlight2 = this.$refs.highlight2;
      const highlight3 = this.$refs.highlight3;
      const highlight4 = this.$refs.highlight4;
      const highlight5 = this.$refs.highlight5;
      const highlight6 = this.$refs.highlight6;
      const highlight7 = this.$refs.highlight7;
      const highlight8 = this.$refs.highlight8;


      this.applyAnimation(highlight1);
      this.applyAnimation(highlight2);
      this.applyAnimation(highlight3);
      this.applyAnimation(highlight4);
      this.applyAnimation(highlight5);
      this.applyAnimation(highlight6);
      this.applyAnimation(highlight7);
      this.applyAnimation(highlight8);

      const paragraph = this.$refs.paragraph;
      const imageCon = this.$refs.imageCon;

      this.applyAnimation3(paragraph);
      this.applyAnimation2(imageCon);

      const skills = this.$refs.skills;
      this.applyAnimation2(skills);


      const timeline = this.$refs.timeline;
      const progressBar = this.$refs.progressBar;

      gsap.from(progressBar, {
        scrollTrigger: {
          trigger: timeline,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          onUpdate: self => {
            const progress = (self.progress * 110).toFixed(2);
            gsap.to(progressBar, { height: progress + '%' });
          }
        },
      });


      const card1 = this.$refs.card1;
      const card2 = this.$refs.card2;
      const card3 = this.$refs.card3;
      this.applyAnimation4(card1, true)
      this.applyAnimation4(card2, false)
      this.applyAnimation4(card3, true)


      const history1 = this.$refs.history1;
      const history2 = this.$refs.history2;
      const history3 = this.$refs.history3;

      this.applyAnimation5(history1)
      this.applyAnimation5(history2)
      this.applyAnimation5(history3)

    },

    // scroll trigger add color highlight start and end 
    applyAnimation5(el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: 'center center',
          onEnter: () => {
            el.classList.add('text-gray-900'); // Add class on enter
            el.classList.add('dark:text-dmWhite'); // Add class on enter
          },
          onLeaveBack: () => {
            el.classList.remove('text-gray-900'); // Add class on enter
            el.classList.remove('dark:text-dmWhite'); // Add class on enter
          },
        },
      });
    },

    // fadein On scroll
    applyAnimation4(el, pos){
      const isPosL = (pos) ? '-100%' : '100%';

      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'start 70%',
          ease: "back.out(1.7)",
          
        },
        x: isPosL,
        duration: .4,
        opacity: 0,
      });
    },

    // element showing without ease
    applyAnimation3(el){
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'start 60%',
          ease: "back.out(1.7)",
        },
        y: '20%',
        opacity: 0,
      });
    },

    // element showing with ease
    applyAnimation2(el){
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'start 70%',
        },
        duration: .8,
        ease: 'power1.inOut',
        y: '20%',
        opacity: 0,
      });
    },

    // add color highlight
    applyAnimation(el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'start center',
          onEnter: () => {
            el.classList.add('text-gray-900'); // Add class on enter
            el.classList.add('font-medium'); // Add class on enter
            el.classList.add('dark:text-dmWhite'); // Add class on enter
          },
        },
      });
    },
  },

  data(){
    return {
     skills: [
        {'name': 'HTML' , 'icon':'html5'},
        {'name': 'css' , 'icon':'css3'},
        {'name': 'JavaScript' , 'icon':'javascript'},
        {'name': 'TypeScript' , 'icon':'typescript'},
        {'name': 'vue.js' , 'icon':'vue-dot-js'},
        {'name': 'php' , 'icon':'php'},
        {'name': 'Laravel' , 'icon':'laravel'},
        {'name': 'Python' , 'icon':'python'},
        {'name': 'Bootstrap' , 'icon':'bootstrap'},
        {'name': 'Sass' , 'icon':'sass'},
        {'name': 'TailwindCSS' , 'icon':'tailwindcss'},
        {'name': 'MySQL' , 'icon':'mysql'},
        {'name': 'PostgreSQL' , 'icon':'postgresql'},
        {'name': 'GitHub' , 'icon':'github'},
        {'name': 'Netlify' , 'icon':'netlify'},
        {'name': 'Photoshop' , 'icon':'adobephotoshop'},
        {'name': 'Illustrator' , 'icon':'adobeillustrator'}
      ],

      tags1: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'Laravel',
        'Vue',
        'Rest API',
        'Github',
        'Adobe Photoshop',
        'Adobe Illustrator',
      ],

      tags2: [
        'Visual Basic',
        'RPA',
        'UiPath',
        'Oracle',
        'Hardware',
        'Software',
        'Troubleshooting',
      ],

      tags3: [
        'Network Support',
        'Technical Expertise',
        'Hardware',
        'Software',
        'Troubleshooting',
      ],
    };
  },
}
</script>
<style scoped>
  
</style>