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
  <TheHeading heading-name="about"></TheHeading>
  <!-- ABOUT -->
  <TheAbout></TheAbout>
  <!-- HEADING PER SECTION (PROJECTS) -->
  <TheHeading heading-name="project"></TheHeading>
  <!-- PROJECT -->
  <TheProjects></TheProjects>
  <!-- HEADING PER SECTION (CONTACTS) -->
  <TheHeading heading-name="contact"></TheHeading>
  <!-- CONTACT -->
  <TheContacts></TheContacts>
  <!-- FOOTER -->
  <TheFooter></TheFooter>
  <!-- HEADING PER SECTION (SALAMAT) -->
  <TheHeading heading-name="footer"></TheHeading>

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
import TheHeading from './components/layout/TheHeading.vue';

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
    TheHeading,
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