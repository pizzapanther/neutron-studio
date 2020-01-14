import Vue from 'vue';

var PROJECTS = [
  {
    title: "CanyonLake.app",
    subtitle: "Your guide to fun in Canyon Lake, Texas",
    icon: "waves",
    url: "https://www.canyonlake.app/",
    desc: "CanyonLake.app collects all the latest lake and river conditions and\
    area events in one place so you can plan your next fun adventure in the\
    Canyon Lake, Texas area."
  },
  {
    title: "FlipRank App",
    subtitle: "Helping you organize your small business.",
    icon: "phone_iphone",
    url: "https://www.fliprankapp.com/",
    desc: "FlipRank helps you organize your rank based small businesses such as \
    Young Living based businesses."
  },
  {
    title: "PodcastBible.app",
    subtitle: "Create a custom Bible Podcast.",
    icon: "surround_sound",
    url: "https://www.podcastbible.app/",
    desc: "The Podcast Bible lets you create a custom reading plan tailored to \
    your needs via a custom podcast feed."
  }
];

var OurProjects = Vue.component('our-projects', {
  template: '#tpl-projects',
  data() {
    return {
      projects: PROJECTS
    };
  }
});

export default OurProjects;
