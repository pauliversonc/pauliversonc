<template >
  <section class=" px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16  py-8 container mx-auto flex flex-col gap-4">
    
    <!-- ABOUT CONTENT WRAPPER -->
    <div class="flex flex-col gap-4 lg:flex-none lg:grid lg:grid-cols-2 " >

      <!-- PICTURE CONTAINER -->
      <div class="flex justify-center items-center ">
        <!-- PICTURE -->
        <img class="self-center h-[16rem] grayscale" src="/images/portrait/pauliversonc.jpg">
      </div>
      
      <!-- PARAGRAPH CONTAINER -->
      <div class="space-y-4 lg:row-span-2 ">
        <!-- PARAGRAPH -->
        <p class="">I am a <strong class="text-gray-900 font-medium dark:text-dmWhite">passionate web developer</strong> born and raised in the lively city of <strong class="text-gray-900 font-medium dark:text-dmWhite">Trece Martires, Cavite.</strong> My journey into the world of web development began under the guidance of exceptional professors back in college. Inspired by their teachings, I've embarked on a path that blends <strong class="text-gray-900 font-medium dark:text-dmWhite">creativity and technical prowess</strong> to craft engaging digital experiences.</p>
        <p class="">I believe in the power of code to transform ideas into captivating online realities. Each line of code represents an opportunity to bring innovation to life and make a <strong class="text-gray-900 font-medium dark:text-dmWhite">lasting impact on the digital landscape.</strong> With a commitment to continuous learning and a keen eye for detail, <strong class="font-medium dark:text-dmWhite">I strive to create web solutions that not only meet but exceed expectations.</strong></p>
        <p class="">In the words of <strong class="text-gray-900 font-medium dark:text-dmWhite">Steve Jobs, "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."</strong> This philosophy resonates deeply with my approach to web development, driving me to deliver <strong class="text-gray-900 font-medium dark:text-dmWhite">excellence in every project.</strong> Join me on this exciting journey, and let's create <strong class="text-gray-900 font-medium dark:text-dmWhite">digital wonders together!</strong></p>
      </div>

      <!-- SKILLS CONTAINERS -->
      <div class="space-y-4 ">
        <!-- HEADING -->
        <BaseHeadingFive title="skills" :margin-custom="true" :margin-top-custom="true" />
        
        <!-- SKILLS ICON -->
        <ul class="flex flex-wrap gap-2">
          
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
    <div class="container pl-8 lg:pl-0  relative before:content-[''] before:bg-gray-400 dark:before:bg-dmGray before:absolute before:w-0.5 before:h-full before:left-0 lg:before:left-[50%]
    
    ">

      <!-- CARD CONTAINER -->
      <ul class="space-y-8 timeline-container xp-card-con lg:w-[50%]" >

        <!-- CARD L (TEXT-BOX) -->
        <li class="relative before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:bg-gray-900 dark:before:bg-dmWhite before:rounded-full before:top-0 before:left-0 lg:before:left-full before:translate-x-[-2.3rem] lg:pr-[2rem] lg:before:translate-x-[-45%]">
          

          <div class="flex flex-col">
            <!-- 320 DEFAULT -->
            <span class="absolute top-1/2  rotate-[270deg] translate-x-[-68%] font-medium bg-white dark:bg-dmBlack z-40 
            lg:right-0 lg:translate-x-[115%] lg:translate-y-[-25%] lg:rotate-0 lg:top-0
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
          <div class="flex flex-col">
            <span class="absolute top-1/2  rotate-[270deg] translate-x-[-68%] font-medium bg-white dark:bg-dmBlack z-40 
            lg:left-0 lg:translate-x-[-115%] lg:translate-y-[-25%] lg:rotate-0 lg:top-0
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
          <div class="flex flex-col">
            <span class="absolute top-1/2  rotate-[270deg] translate-x-[-68%] font-medium bg-white dark:bg-dmBlack z-40 
            lg:right-0 lg:translate-x-[115%] lg:translate-y-[-25%] lg:rotate-0 lg:top-0
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
      <a href="#" class="hover:pointer flex items-center justify-center gap-2 relative
        before:ease-out 
        before:duration-300
        before:content-['']
        before:absolute
        before:h-0.5
        before:w-0
        before:bg-gray-900
        before:bottom-0
        before:left-0
        hover:before:w-full
        dark:before:bg-dmWhite
        group
      ">
        <span class="text-gray-900 font-medium dark:text-dmGray dark:group-hover:text-dmWhite dark:ease-out dark:duration-300">View My Résumé</span>
        
        <div class="flex items-center justify-center">
        <svg class="h-4 w-4 fill-gray-900 dark:fill-dmGray dark:group-hover:fill-dmWhite dark:ease-out dark:duration-300">
          <use xlink:href="/icons/sprite.svg#icon-file-text"></use>
        </svg>
      </div>
      
      </a>

      
    </div>

  </section>
</template>
<script>
export default {
  name: 'PauliversoncTheAbout',
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