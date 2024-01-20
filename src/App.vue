<template>
  <!-- HEADER -->
  <header class="container h-[64px] mx-auto py-2 px-4 xs:px-6 outline flex items-center justify-between relative">
    <!-- ICON -->
    <a href="#" >
      <img
        class="h-10"
        src="/images/logo/icon-transparent.png"
        alt="Paul Iverson Cortez - PIC Logo"
      />
    </a>

    <!-- BUTTON MENU -->
    <div @click="toggleNav" class="relative h-6 w-6 overflow-hidden z-40 hover:cursor-pointer select-none
    lg:hidden
    "  role="button">
      <div class="absolute h-[4px] w-6 bg-black top-0 left-1/2 translate-x-[-50%]">&nbsp;</div>
      <div class="absolute h-[4px] w-6 bg-black inset-y-2/4 left-1/2 translate-y-[-50%] translate-x-[-20%]">&nbsp;</div>
      <div class="absolute h-[4px] w-6 bg-black bottom-0 left-1/2 translate-x-[-50%]">&nbsp;</div>
    </div>

    <!-- NAV LINKS -->
    <!-- Options: (1. top-[-100vh] - this will make the nav links disappear from the viewport (negative height)  -->
    <nav 
    :class="isNavOpen ? 'top-0':'top-[-100vh]'" 
    class="absolute px-4  bg-white z-10 h-screen w-screen left-0 flex flex-col justify-center gap-4 tracking-tighter
    lg:top-0
    lg:h-auto
    lg:w-full
    lg:relative
    lg:flex
    lg:flex-row
    lg:justify-end
    lg:gap-4
    lg:px-0
    

    ">
      <div class="flex gap-4 
                  lg:flex-none lg:gap-0 lg:relative">
        <span class="text-gray-500
                      lg:text-[.5rem] lg:absolute lg:left-0 lg:top-0 lg:translate-y-[-50%]">/01</span>
        <div class="text-gray-900 text-5xl uppercase font-light 
                      lg:text-lg lg:font-medium ">home</div>
      </div>
      <div class="flex gap-4 
                  lg:flex-none lg:gap-0 lg:relative">
        <span class="text-gray-500
                      lg:text-[.5rem] lg:absolute lg:left-0 lg:top-0 lg:translate-y-[-50%]">/02</span>
        <div class="text-gray-900 text-5xl uppercase font-light 
                      lg:text-lg lg:font-medium ">about</div>
      </div>
      <div class="flex gap-4 
                  lg:flex-none lg:gap-0 lg:relative">
        <span class="text-gray-500
                      lg:text-[.5rem] lg:absolute lg:left-0 lg:top-0 lg:translate-y-[-50%]">/03</span>
        <div class="text-gray-900 text-5xl uppercase font-light 
                      lg:text-lg lg:font-medium ">projects</div>
      </div>
      <div class="flex gap-4 
                  lg:flex-none lg:gap-0 lg:relative">
        <span class="text-gray-500
                      lg:text-[.5rem] lg:absolute lg:left-0 lg:top-0 lg:translate-y-[-50%]">/04</span>
        <div class="text-gray-900 text-5xl uppercase font-light 
                      lg:text-lg lg:font-medium ">contact</div>
      </div>
    </nav>
  </header>

  <!-- HERO -->
  <div class="container mx-auto py-4 px-4 xs:px-6 outline h-[75vh] flex items-center">

    <!-- HEADING 1 (default)-->
    <h1 class="text-gray-900 w-full flex flex-col uppercase tracking-[-0.08em] leading-none font-bold
    text-[4.8rem]
    xxs:text-[6.8rem]
    xs:text-[8.8rem]
    ">
        <span>hi</span>
        <span>i am</span>
        <span>paul</span>
    </h1>

  </div>

  <!-- SCROLL BUTTON -->
  <div class="container mx-auto outline px-4 xs:px-6">
    <div class="h-16 inline-block hover:cursor-pointer" role="button" >
      <span class="uppercase text-sm  font-bold text-gray-500">scroll</span>
      
      <div class="relative down-fade">
        <div class="absolute left-1/2 translate-x-[-50%] fill-gray-900 bottom-0 translate-y-[80%]">
          <svg class="h-5 w-5">
            <use
            xlink:href="/icons/sprite.svg#icon-chevron-down"
            ></use>
          </svg>
        </div>

        <div class="absolute left-1/2 translate-x-[-50%] fill-gray-900 bottom-0 translate-y-[130%]">
          <svg class="h-5 w-5">
            <use
            xlink:href="/icons/sprite.svg#icon-chevron-down"
            ></use>
          </svg>
        </div>

        <div class="absolute left-1/2 translate-x-[-50%] fill-gray-900 bottom-0 translate-y-[180%]">
          <svg class="h-5 w-5">
            <use
            xlink:href="/icons/sprite.svg#icon-chevron-down"
            ></use>
          </svg>
        </div>

      </div>
      
    </div>
  </div>

  <!-- BRIEF INTRO -->
  <section class="px-4 xs:px-6 py-8 outline container mx-auto sm:grid sm:grid-cols-2 sm:gap-4">
    <h2 class=" tracking-tighter text-gray-400 container mx-auto
    text-4xl
    xs:text-[2.6rem]
    ">
      I create <span class="text-gray-900">innovative solutions</span> for the evolving <span class="text-gray-900">digital landscape</span>
    </h2>
    <div class="bg-red-400 hidden sm:block"></div>
  </section>

  <!-- HEADING PER SECTION (ABOUT) -->
  <section class="px-4 xs:px-6 text-gray-900 outline container mx-auto">
    <h3 class="leading-none font-medium  flex items-center justify-between
    text-[3.2rem]
    xxs:text-[4.2rem]
    xs:text-[5.5rem]
    ">
      <span class=" ">ABOUT</span>
      <div class="h-4 w-4 xs:h-6 xs:w-6 heading__icon-container ">
        <svg class="h-full w-full ">
          <use xlink:href="/icons/sprite.svg#icon-sun"></use>
        </svg>
      </div>
      <span class="italic">ME</span>
    </h3>
  </section>

  <!-- ABOUT -->
  <section class="outline px-4 xs:px-6  py-8 container mx-auto flex flex-col gap-4">
    
    <div class="flex flex-col gap-4">
      <img class="self-center " src="https://i.pinimg.com/236x/43/ec/fe/43ecfe755d1430ca63ba9e6a974dd983.jpg">
      
      <p class="container">I am a <strong class="text-gray-900 font-medium">passionate web developer</strong> born and raised in the lively city of <strong class="text-gray-900 font-medium">Trece Martires, Cavite.</strong> My journey into the world of web development began under the guidance of exceptional professors back in college. Inspired by their teachings, I've embarked on a path that blends <strong class="text-gray-900 font-medium">creativity and technical prowess</strong> to craft engaging digital experiences.</p>
      <p class="container">I believe in the power of code to transform ideas into captivating online realities. Each line of code represents an opportunity to bring innovation to life and make a <strong class="text-gray-900 font-medium">lasting impact on the digital landscape.</strong> With a commitment to continuous learning and a keen eye for detail, <strong class="font-medium">I strive to create web solutions that not only meet but exceed expectations.</strong></p>
      <p class="container">In the words of <strong class="text-gray-900 font-medium">Steve Jobs, "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."</strong> This philosophy resonates deeply with my approach to web development, driving me to deliver <strong class="text-gray-900 font-medium">excellence in every project.</strong> Join me on this exciting journey, and let's create <strong class="text-gray-900 font-medium">digital wonders together!</strong></p>


      <h5 class=" text-2xl italic font-bold mt-4 text-gray-900">SKILLS</h5>

      <!-- SKILLS ICON -->
      <ul class="flex flex-wrap gap-2">
        
        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">HTML</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-html5"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">CSS</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-css3"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">JavaScript</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-javascript"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">TypeScript</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-typescript"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">Vue.js</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-vue-dot-js"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">PHP</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-php"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">Laravel</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-laravel"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">Python</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-python"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">Bootstrap</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-bootstrap"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">Sass</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-sass"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">TailwindCSS</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-tailwindcss"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">MySQL</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-mysql"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40]  uppercase">PostgreSQL</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-postgresql"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">GitHub</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-github"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">Netlify</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-netlify"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">Photoshop</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-adobephotoshop"
            ></use>
          </svg>
        </li>

        <li class="group h-9 w-9 relative ">
          <span class="absolute top-1 left-[50%] translate-x-[-50%] translate-y-[-110%] text-xs px-1 bg-gray-100 font-bold  pt-[3px] scal text-gray-600 tracking-tighter group-hover:top-[-5%] opacity-0 group-hover:opacity-100 ease-in duration-200 z-[-100] group-hover:z-[40] uppercase">Illustrator</span>
          <svg class="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-110 ease-in duration-200">
            <use
            xlink:href="/icons/sprite.svg#icon-adobeillustrator"
            ></use>
          </svg>
        </li>

        

      </ul>
      
    </div>

    <h5 class="mt-4  text-2xl italic font-bold text-gray-900">EXPERIENCE</h5>
    <!-- TIMELINE -->
    <div class="container pl-8  relative before:content-[''] before:bg-gray-400 before:absolute before:w-0.5 before:h-full before:left-0">

      <!-- CARD CONTAINER -->
      <ul class="space-y-8 " >

        <!-- CARD -->
        <li class="relative before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:bg-gray-900 before:rounded-full before:top-0 before:left-0 before:translate-x-[-2.3rem] ">
          <div class="flex flex-col">
            <span class="leading-5 font-semibold text-lg text-gray-900">Junior Software Developer</span>
            <span class="italic">Cylix Technologies, Inc.</span>
            <ul class="mt-2 space-y-1">

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>In charge of crafting the <strong class="text-gray-900 font-medium">ERP Web system</strong>, a comprehensive tool that <strong class="text-gray-900 font-medium">streamlines various business processes</strong> and is <strong class="text-gray-900 font-medium">widely adopted across the entire company</strong></p>

              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Responsible for ongoing <strong class="text-gray-900 font-medium">maintenance and support</strong> of the <strong class="text-gray-900 font-medium">ERP Web system</strong>, ensuring continuous functionality and efficiency</p>

              </li>

              <li class="flex gap-2">
                <div class="flex ">
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>backend developer for the <strong class="text-gray-900 font-medium">Cylix Portal</strong>, a <strong class="text-gray-900 font-medium">tracking and attendance application</strong> utilized by Cylix employees</p>
              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Entrusted with the regular <strong class="text-gray-900 font-medium">maintenance and upkeep</strong> of the <strong class="text-gray-900 font-medium">Cylix Portal</strong>, ensuring its <strong class="text-gray-900 font-medium">smooth operation</strong> for the <strong class="text-gray-900 font-medium">convenience of users</strong></p>
              </li>

            </ul>
            <ul class="flex flex-wrap gap-2 mt-4">
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">HTML</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">CSS</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">JavaScript</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">PHP</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Laravel</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Vue</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Rest API</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Github</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Adobe Photoshop</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Adobe Illustrator</li>
            </ul>
          </div>
        </li>

        <!-- CARD -->
        <li class="relative before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:bg-gray-900 before:rounded-full before:top-0 before:left-0 before:translate-x-[-2.3rem] ">
          <div class="flex flex-col">
            <span class="leading-5 font-semibold text-lg text-gray-900">IT Staff</span>
            <span class="italic">Shimadzu Philippines Mfg, Inc.</span>
            <ul class="mt-2 space-y-1">

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Implemented regular <strong class="text-gray-900 font-medium">system updates and maintenance</strong> to ensure optimal performance</p>
              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Installed and configured <strong class="text-gray-900 font-medium">hardware and software</strong> components for new and existing systems</p>
              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>I use <strong class="text-gray-900 font-medium">Oracle E-Business Suite (EBS)</strong> for efficient and integrated <strong class="text-gray-900 font-medium">Enterprise Resource Planning (ERP)</strong></p>
              </li>


              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Developed and deployed <strong class="text-gray-900 font-medium">automation workflows</strong> using <strong class="text-gray-900 font-medium">Visual Basic</strong> in <strong class="text-gray-900 font-medium">UiPath</strong> to streamline repetitive tasks, resulting in significant time savings</p>
              </li>

            </ul>

            <ul class="flex flex-wrap gap-2 mt-4">
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Visual Basic</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">RPA</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">UiPath</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Oracle</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Hardware</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Software</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Troubleshooting</li>
              
            </ul>
            
          </div>
        </li>

        <!-- CARD -->
        <li class="relative before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:bg-gray-900 before:rounded-full before:top-0 before:left-0 before:translate-x-[-2.3rem]">
          <div class="flex flex-col">
            <span class="leading-5 font-semibold text-lg text-gray-900">Desktop Support Engineer (Intern)</span>
            <span class="italic">Cypress Manufacturing Ltd.</span>
            <ul class="mt-2 space-y-1">

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Acted as the primary contact for end users, addressing their <strong class="text-gray-900 font-medium">IT-related concerns</strong> promptly and efficiently</p>
              </li>

              <li class="flex gap-2">
                <div>
                  <svg class="h-4 w-4 rotate-[270deg] translate-y-[25%] fill-gray-500">
                    <use xlink:href="/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
                <p>Expertly installed, diagnosed, and repaired various <strong class="text-gray-900 font-medium">hardware components</strong>, including PCs, terminals, printers, and scanners</p>
              </li>


            </ul>
            <ul class="flex flex-wrap gap-2 mt-4">
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Network Support</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Technical Expertise</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Hardware</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Software</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Troubleshooting</li>
            </ul>
          </div>
        </li>


      </ul>
    </div>

    <!-- RESUME LINK -->
    <div class="mt-6 flex justify-center align-center">
      <a href="#" class="hover:pointer flex items-center justify-center gap-2">
        <span class="text-gray-900 font-medium">View My Résumé</span>

        <div class="flex items-center justify-center">
        <svg class="h-4 w-4 fill-gray-900">
          <use xlink:href="/icons/sprite.svg#icon-file-text"></use>
        </svg>
      </div>
      
      </a>

      
    </div>

  </section>

  <!-- HEADING PER SECTION (PROJECTS) -->
  <section class="px-4 xs:px-6 text-gray-900 outline container mx-auto">
    <h3 class="uppercase leading-none font-medium  flex items-center justify-between
    text-[2.4rem]
    xxs:text-[3.1rem]
    xs:text-[4.1rem]
    ">
      <span class=" ">my</span>
      <div class="h-4 w-4 xs:h-6 xs:w-6 heading__icon-container ">
        <svg class="h-full w-full ">
          <use xlink:href="/icons/sprite.svg#icon-sun"></use>
        </svg>
      </div>
      <span class="italic">projects</span>
    </h3>
  </section>

  <!-- PROJECT -->
  <section class="px-4 xs:px-6  py-8 container mx-auto outline">

    <!-- PROJECTS CONTAINER -->
    <div class="container mx-auto">
      
      <!-- CONTAINER FEATURED PROJECTS -->
      <div class="flex flex-col gap-8 mb-20">

        <!-- FEATURED PROJECTS -->
        <figure class="">
          <img src="https://cdn.dribbble.com/users/1106204/screenshots/7063847/web-design-gif--final.gif" alt="">
          <figcaption class="mt-4">

            <span class="text-sm">Featured Project</span>
            <h4 class="font-semibold text-lg  text-gray-900 flex gap-2 items-center">
              
              <span class="mr-2">Meatshoppe</span>

              <a href="#" class="p-1">
                <svg class="h-4 w-4 fill-gray-600">
                  <use xlink:href="/icons/sprite.svg#icon-link"></use>
                </svg>
              </a>

              <a href="#" class="p-1">
                <svg class="h-4 w-4 fill-gray-600">
                  <use xlink:href="/icons/sprite.svg#icon-github"></use>
                </svg>
              </a>

            </h4>

            <p class="container mb-4 mt-2 text-gray-600">Where quality meets flavor! This showcase project represents the frontend of a sophisticated e-commerce platform dedicated to delivering the finest meats.</p>
            
            <ul class="flex flex-wrap gap-2 ">
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">HTML</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Sass</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">JavaScript</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Vue.js</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Vite</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">EmailJS</li>
            </ul>
            
          </figcaption>
        </figure>

        <!-- FEATURED PROJECTS -->
        <figure class="">
          <img src="https://cdn.dribbble.com/users/1106204/screenshots/7063847/web-design-gif--final.gif" alt="">
          <figcaption class="mt-4">

            <span class="text-sm">Featured Project</span>
            <h4 class="font-semibold text-lg  text-gray-900 flex gap-2 items-center">
              
              <span class="mr-2">ECO Builders</span>

              <a href="#" class="p-1">
                <svg class="h-4 w-4 fill-gray-600">
                  <use xlink:href="/icons/sprite.svg#icon-link"></use>
                </svg>
              </a>

              <a href="#" class="p-1">
                <svg class="h-4 w-4 fill-gray-600">
                  <use xlink:href="/icons/sprite.svg#icon-github"></use>
                </svg>
              </a>

            </h4>

            <p class="container mb-4 mt-2 text-gray-600">Explore the future of sustainable living. featuring a minimalist design approach that elegantly highlights the essence of modern sustainable living.</p>
            
            <ul class="flex flex-wrap gap-2 ">
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">HTML</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">CSS</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">JavaScript</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Hero Icons</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Parcel</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Minimalist</li>
            </ul>
            
          </figcaption>
        </figure>

        <!-- FEATURED PROJECTS -->
        <figure class="">
          <img src="https://cdn.dribbble.com/users/1106204/screenshots/7063847/web-design-gif--final.gif" alt="">
          <figcaption class="mt-4">

            <span class="text-sm">Featured Project</span>
            <h4 class="font-semibold text-lg  text-gray-900 flex gap-2 items-center">
              
              <span class="mr-2">Notely</span>

              <a href="#" class="p-1">
                <svg class="h-4 w-4 fill-gray-600">
                  <use xlink:href="/icons/sprite.svg#icon-link"></use>
                </svg>
              </a>

              <a href="#" class="p-1">
                <svg class="h-4 w-4 fill-gray-600">
                  <use xlink:href="/icons/sprite.svg#icon-github"></use>
                </svg>
              </a>

            </h4>

            <p class="container mb-4 mt-2 text-gray-600">A web application that allows you to create and manage notes, It provides a simple and intuitive interface for taking and organizing your thoughts and ideas.</p>
            
            <ul class="flex flex-wrap gap-2 ">
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">HTML</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">CSS</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">JavaScript</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">OOP</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">Parcel</li>
              <li class="bg-gray-100 text-sm font-medium text-gray-600 inline-block px-3 py-0.5">CoreJS</li>
            </ul>
            
          </figcaption>
        </figure>

      </div>



      <!-- CONTAINER NOTABLE PROJECTS -->
      <div class="flex flex-col gap-8">
        <!-- NOTABLE PROJECTS -->
        <div class="bg-gray-100 px-6 py-4 relative
        border-t-2
        border-white
        mt-[30px]

        
        before:bg-gray-200
        before:absolute
        before:w-1/4
        before:h-[30px]
        before:top-0
        before:left-0
        before:translate-y-[-100%]
        before:z-[-1]

        after:bg-gray-200
        after:absolute
        after:w-full
        after:h-[30px]
        after:top-0
        after:left-0
        after:translate-y-[-50%]
        after:z-[-1]

        ">
          <span class="text-sm">Notable Project</span>
          <h4 class="font-semibold text-lg text-gray-900 flex gap-2 items-center">
            
            <span class="mr-2">Natours</span>

            <a href="#" class=" p-1 ">
              <svg class="h-4 w-4 fill-gray-600">
                <use xlink:href="/icons/sprite.svg#icon-link"></use>
              </svg>
            </a>

            <a href="#" class=" p-1 ">
              <svg class="h-4 w-4 fill-gray-600">
                <use xlink:href="/icons/sprite.svg#icon-github"></use>
              </svg>
            </a>

          </h4>
          <p class="container mb-4 mt-2  text-gray-600">A fictional company that provides adventurous nature tours. The website was built as a practice project to demonstrate Sass skills and responsive web design.</p>
          <ul class="flex flex-wrap">
            <li class="p-0 h-6 pr-4 font-medium">#HTML</li>
            <li class="p-0 h-6 pr-4 font-medium">#Sass</li>
            <li class="p-0 h-6 pr-4 font-medium">#JavaScript</li>
            <li class="p-0 h-6 pr-4 font-medium">#Frontend</li>
          </ul>
        </div>

        <!-- NOTABLE PROJECTS -->
        <div class="bg-gray-100 px-6 py-4 relative
        border-t-2
        border-white
        mt-[30px]

        
        before:bg-gray-200
        before:absolute
        before:w-1/4
        before:h-[30px]
        before:top-0
        before:left-0
        before:translate-y-[-100%]
        before:z-[-1]

        after:bg-gray-200
        after:absolute
        after:w-full
        after:h-[30px]
        after:top-0
        after:left-0
        after:translate-y-[-50%]
        after:z-[-1]

        ">
          <span class="text-sm">Notable Project</span>
          <h4 class="font-semibold text-lg text-gray-900 flex gap-2 items-center">
            
            <span class="mr-2">Omnifood</span>

            <a href="#" class=" p-1 ">
              <svg class="h-4 w-4 fill-gray-600">
                <use xlink:href="/icons/sprite.svg#icon-link"></use>
              </svg>
            </a>

            <a href="#" class=" p-1 ">
              <svg class="h-4 w-4 fill-gray-600">
                <use xlink:href="/icons/sprite.svg#icon-github"></use>
              </svg>
            </a>

          </h4>
          <p class="container mb-4 mt-2  text-gray-600">This project was developed during my Udemy bootcamp to enhance frontend skills and create a modern-looking website with a mobile-responsive design.</p>
          <ul class="flex flex-wrap">
            <li class="p-0 h-6 pr-4 font-medium">#HTML</li>
            <li class="p-0 h-6 pr-4 font-medium">#CSS</li>
            <li class="p-0 h-6 pr-4 font-medium">#JavaScript</li>
            <li class="p-0 h-6 pr-4 font-medium">#Frontend</li>
          </ul>
        </div>

        <!-- NOTABLE PROJECTS -->
        <div class="bg-gray-100 px-6 py-4 relative
        border-t-2
        border-white
        mt-[30px]

        
        before:bg-gray-200
        before:absolute
        before:w-1/4
        before:h-[30px]
        before:top-0
        before:left-0
        before:translate-y-[-100%]
        before:z-[-1]

        after:bg-gray-200
        after:absolute
        after:w-full
        after:h-[30px]
        after:top-0
        after:left-0
        after:translate-y-[-50%]
        after:z-[-1]

        ">
          <span class="text-sm">Notable Project</span>
          <h4 class="font-semibold text-lg text-gray-900 flex gap-2 items-center">
            
            <span class="mr-2">Pauliversonc</span>

            <a href="#" class=" p-1 ">
              <svg class="h-4 w-4 fill-gray-600">
                <use xlink:href="/icons/sprite.svg#icon-link"></use>
              </svg>
            </a>

            <a href="#" class=" p-1 ">
              <svg class="h-4 w-4 fill-gray-600">
                <use xlink:href="/icons/sprite.svg#icon-github"></use>
              </svg>
            </a>

          </h4>
          <p class="container mt-2 mb-4 text-gray-600">A Portfolio Website, where each project seamlessly blends innovation and aesthetics to showcase my expertise in creating a captivating digital presence. </p>
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
  <section class="px-4 xs:px-6 text-gray-900 outline container mx-auto">
    <h3 class="uppercase leading-none font-medium  flex items-center justify-between
    text-[2.6rem]
    xxs:text-[3.3rem]
    xs:text-[4.3rem]
    ">
      <span class=" ">contact</span>
      <div class="h-4 w-4 xs:h-6 xs:w-6 heading__icon-container ">
        <svg class="h-full w-full ">
          <use xlink:href="/icons/sprite.svg#icon-sun"></use>
        </svg>
      </div>
      <span class="italic">me</span>
    </h3>
  </section>

  <!-- CONTACT -->
  <section class="px-4 xs:px-6  py-8 container mx-auto outline flex flex-col gap-8">


    <!-- FORM INPUT (LEFT)-->
    <form action="#" class="container grid gap-6">

      <div class="">
        <label class="pb-6 font-medium"  for="name">Name</label>
        <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200" type="text" placeholder="E.g. Paul Iverson" name="name" id="name"   autocomplete="on">
      </div>

      <div class="">
        <label class="pb-6 font-medium" for="email">Email Address</label>
        <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200" type="text" placeholder="E.g. pauliverson@gmail.com" name="email" id="email"  autocomplete="on">
      </div>

      <div class="">
        <label class="pb-6 font-medium" for="contact">Contact Number</label>
        <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200" type="text" placeholder="E.g. 09198765432" name="contact" id="contact">
      </div>

      <div>
        <label class="pb-6 font-medium" for="purpose">Purpose</label>
        <textarea placeholder="Your inquiry here..." class="border-b-2 border-gray-200 w-full focus:outline-none py-1 " name="purpose" id="purpose" rows="2" ></textarea>
      </div>

      <button class=" text-gray-600 bg-gray-100 py-1  font-semibold ">Send</button>


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
        <h5 class=" text-2xl italic font-bold text-gray-900">CONTACTS</h5>

        <!-- link -->
        <a href="#" class="inline-block">
          <div class="flex items-center gap-2">
            <div class="">
              <svg class="h-4 w-4 fill-gray-900">
                <use xlink:href="/icons/sprite.svg#icon-mail"></use>
              </svg>
            </div>
            <span class="text-gray-900 font-medium">pauliversonc@gmail.com</span>
          </div>
        </a>

        <a href="#" class="inline-block">
          <div class="flex items-center gap-2">
            <div class="">
              <svg class="h-4 w-4 fill-gray-900">
                <use xlink:href="/icons/sprite.svg#icon-phone"></use>
              </svg>
            </div>
            <span class="text-gray-900 font-medium">09155436882</span>
          </div>
        </a>

      </div>

      <!-- SOCIALS -->
      <div class="flex flex-col gap-2">
        <h5 class=" text-2xl italic font-bold text-gray-900">SOCIALS</h5>
        <div class="flex items-center gap-4">
          <a href="#" class="">
            <svg class="h-9 w-9 fill-gray-600">
              <use xlink:href="/icons/sprite.svg#icon-facebook"></use>
            </svg>
          </a>

          <a href="#" class="">
            <svg class="h-9 w-9 fill-gray-600">
              <use xlink:href="/icons/sprite.svg#icon-instagram"></use>
            </svg>
          </a>

          <a href="#" class="">
            <svg class="h-9 w-9 fill-gray-600">
              <use xlink:href="/icons/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>

          <a href="#" class="">
            <svg class="h-9 w-9 fill-gray-600">
              <use xlink:href="/icons/sprite.svg#icon-github"></use>
            </svg>
          </a>
        </div>
    

      </div>
      
    </div>
 

  </section>

  <!-- FOOTER -->
  <footer class="px-4 xs:px-6 py-8 container mx-auto outline">

    <!-- logo -->
    <div class="text-center">Paul Iverson Cortez</div>

    <!-- credits -->
    <div class="flex flex-col items-center">
      <span class="font-secondary font-medium">&copy; 2014 &#x2022; Paul Iverson Cortez</span>
      <span class=" text-gray-500 font-medium text-sm">All RIGHTS RESERVED</span>
    </div>

    <!-- THANK YOU -->
  <section class="text-gray-900 outline container mx-auto">
    <h3 class="uppercase leading-none font-medium  flex items-center justify-between
    text-[2.6rem]
    xxs:text-[3.4rem]
    xs:text-[4.4rem]
    ">
      <span class=" ">salamat</span>
      <div class="h-4 w-4 xs:h-6 xs:w-6 heading__icon-container ">
        <svg class="h-full w-full ">
          <use xlink:href="/icons/sprite.svg#icon-sun"></use>
        </svg>
      </div>
      <span class="italic">po</span>
    </h3>
  </section>


  </footer>






</template>

<script>
export default {
  name: "PortfolioApp",
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
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

  .heading__icon {
    transform: translate(2%, -2%);
  }

  .heading__icon-container {
    transform-origin: center;

    /* background-color: gray; */

    display: flex;
    align-items: center;
    justify-content: center;
    animation: rotating 2s linear infinite;
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



 

</style>