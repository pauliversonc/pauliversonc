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
  <section class="px-4  xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16  py-8 container mx-auto ">

    <!-- PROJECTS CONTAINER -->
    <div class="container mx-auto max-w-5xl ">
      
      <!-- DEMO PLAYER-->
      <div class=" mb-10 relative hidden invisible md:block md:visible">
        <img class="select-none" :src="`../public/images/projects/${featuredProjects[currentPlaying]}.gif`" />

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
          <img @click="handlePlaying('set', 0)" class="hidden select-none invisible md:block md:visible hover:cursor-pointer" src="../public/images/projects/meatshoppe-min.png" alt="">
          <img class="block visible md:hidden md:invisible" src="../public/images/projects/meatshoppe.gif" alt="">
          <figcaption class="mt-4">

            <span class="text-sm dark:text-dmBlackTint2">Featured Project</span>
            <h4 class="font-semibold text-lg  text-gray-900 dark:text-dmWhite flex gap-2 items-center">
              
              <span @click="handlePlaying('set', 0)" class="mr-2 hover:cursor-pointer">Meatshoppe</span>

              <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                  <use xlink:href="/icons/sprite.svg#icon-link"></use>
                </svg>
              </a>

              <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                  <use xlink:href="/icons/sprite.svg#icon-github"></use>
                </svg>
              </a>

            </h4>

            <p class="container mb-4 mt-2 text-gray-600 dark:text-dmGray">Where quality meets flavor! This showcase project represents the frontend of a sophisticated e-commerce platform dedicated to delivering the finest meats.</p>
            
            <ul class="flex flex-wrap gap-2 ">
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">HTML</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">Sass</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">JavaScript</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">Vue.js</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">Vite</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">EmailJS</li>
            </ul>
            
          </figcaption>
        </figure>

        <!-- FEATURED PROJECTS -->
        <figure class="flex-1 overflow-hidden relative md:pt-[1.4rem] md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-0 md:before:h-1 md:before:w-full md:before:bg-gray-100 dark:md:before:bg-dmBlackTint2
                       md:after:absolute md:after:top-0 md:after:left-0 md:after:w-full md:after:h-1 md:after:bg-gray-900 dark:md:after:bg-dmWhite md:after:translate-x-[-100%] "
                :class="(currentPlaying === 1) ? 'md:after:translate-x-[0%] md:after:ease-linear md:after:duration-[20000ms]' : ''">  
          <img @click="handlePlaying('set', 1)" class="hidden select-none invisible md:block md:visible hover:cursor-pointer" src="../public/images/projects/ecobuilders-min.png" alt="">
          <img class="block visible md:hidden md:invisible" src="../public/images/projects/ecobuilders.gif" alt="">
          <figcaption class="mt-4">

            <span class="text-sm dark:text-dmBlackTint2">Featured Project</span>
            <h4 class="font-semibold text-lg  text-gray-900 dark:text-dmWhite flex gap-2 items-center">
              
              <span @click="handlePlaying('set', 1)" class="mr-2 hover:cursor-pointer">ECO Builders</span>

              <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                  <use xlink:href="/icons/sprite.svg#icon-link"></use>
                </svg>
              </a>

              <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                  <use xlink:href="/icons/sprite.svg#icon-github"></use>
                </svg>
              </a>

            </h4>

            <p class="container mb-4 mt-2 text-gray-600 dark:text-dmGray">Explore the future of sustainable living. featuring a minimalist design approach that elegantly highlights the essence of modern sustainable living.</p>
            
            <ul class="flex flex-wrap gap-2 ">
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">HTML</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">CSS</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">JavaScript</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">Hero Icons</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">Parcel</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">Minimalist</li>
            </ul>
            
          </figcaption>
        </figure>

        <!-- FEATURED PROJECTS -->
        <figure class="flex-1 overflow-hidden relative md:pt-[1.4rem] md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-0 md:before:h-1 md:before:w-full md:before:bg-gray-100 dark:md:before:bg-dmBlackTint2
                       md:after:absolute md:after:top-0 md:after:left-0 md:after:w-full md:after:h-1 md:after:bg-gray-900 dark:md:after:bg-dmWhite md:after:translate-x-[-100%] "
                :class="(currentPlaying === 2) ? 'md:after:translate-x-[0%] md:after:ease-linear md:after:duration-[20000ms]' : ''">   
          <img @click="handlePlaying('set', 2)" class="hidden select-none invisible md:block md:visible hover:cursor-pointer" src="../public/images/projects/notely-min.png" alt="">
          <img class="block visible md:hidden md:invisible" src="../public/images/projects/notely.gif" alt="">
          <figcaption class="mt-4">

            <span class="text-sm dark:text-dmBlackTint2">Featured Project</span>
            <h4 class="font-semibold text-lg  text-gray-900 dark:text-dmWhite flex gap-2 items-center">
              
              <span @click="handlePlaying('set', 2)" class="mr-2 hover:cursor-pointer">Notely</span>

              <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                  <use xlink:href="/icons/sprite.svg#icon-link"></use>
                </svg>
              </a>

              <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                  <use xlink:href="/icons/sprite.svg#icon-github"></use>
                </svg>
              </a>

            </h4>

            <p class="container mb-4 mt-2 text-gray-600 dark:text-dmGray">A web application that allows you to create and manage notes, It provides a simple and intuitive interface for taking and organizing your thoughts and ideas.</p>
            
            <ul class="flex flex-wrap gap-2 ">
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">HTML</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">CSS</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">JavaScript</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">OOP</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">Parcel</li>
              <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">CoreJS</li>
            </ul>
            
          </figcaption>
        </figure>

      </div>

      <!-- CONTAINER NOTABLE PROJECTS -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                <use xlink:href="/icons/sprite.svg#icon-link"></use>
              </svg>
            </a>

            <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                <use xlink:href="/icons/sprite.svg#icon-github"></use>
              </svg>
            </a>

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

            <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                <use xlink:href="/icons/sprite.svg#icon-link"></use>
              </svg>
            </a>

            <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                <use xlink:href="/icons/sprite.svg#icon-github"></use>
              </svg>
            </a>

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

            <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                <use xlink:href="/icons/sprite.svg#icon-link"></use>
              </svg>
            </a>

            <a href="#" class="p-1 icon-link group">
                <svg class="h-4 w-4 fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
                <use xlink:href="/icons/sprite.svg#icon-github"></use>
              </svg>
            </a>

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

export default {
  name: "PauliversoncApp",
  components: {
    TheHeader,
    TheHero,
    TheScroll,
    TheIntro,
    TheAbout,
  },
  
  created() {
    this.startInterval();
  },

  mounted() {
    this.observeHeading();
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
      isNavOpen: false,

      observer: null,
      headingIntersected: false,

   
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