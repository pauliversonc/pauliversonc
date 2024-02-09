<template>
  <!-- HEADER -->
  <TheHeader ref="theHome" @to-link="toLinkStatus" ></TheHeader>
  <!-- HERO -->
  <TheHero></TheHero>
  <!-- SCROLL BUTTON -->
  <TheScroll @to-intro="toLinkStatus"></TheScroll>
  <!-- BRIEF INTRO -->
  <TheIntro ref="theIntro"></TheIntro>
  <!-- HEADING PER SECTION (ABOUT) -->
  <TheHeading ref="theAbout" heading-name="about"></TheHeading>
  <!-- ABOUT -->
  <TheAbout></TheAbout>
  <!-- HEADING PER SECTION (PROJECTS) -->
  <TheHeading ref="theProject" heading-name="project"></TheHeading>
  <!-- PROJECT -->
  <TheProjects></TheProjects>
  <!-- HEADING PER SECTION (CONTACTS) -->
  <TheHeading ref="theContact" heading-name="contact"></TheHeading>
  <!-- CONTACT -->
  <TheContacts></TheContacts>
  <!-- FOOTER -->
  <TheFooter></TheFooter>
  <!-- HEADING PER SECTION (SALAMAT) -->
  <TheHeading heading-name="footer" :isBottom="true"></TheHeading>

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

  methods: {
    toLinkStatus(section){
      this.$refs[section].scrollTo();
    },

  },



};
</script>