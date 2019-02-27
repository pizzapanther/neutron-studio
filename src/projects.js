import Vue from 'vue';

var PROJECTS = [
  {
    title: "Neutron64",
    subtitle: "The honey badger of code editors.",
    icon: "laptop",
    url: "https://www.neutron64.com/",
    desc: "Neutron64 is a web based code editor build as a progressive\
    web app. Neutron is simple yet powerful and supports editing files\
    locally, remotely, and through cloud storage systems like\
    Google Drive. Neutron turns your web browser into a development \
    environment."
  },
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
    title: "Bible Fish",
    subtitle: "The quickest and simplest way to read the Bible on any device.",
    icon: "local_library",
    url: "https://www.bible.fish/",
    desc: "A free Progressive Web App Bible. Bible.Fish is a Bible app that \
    allows quick access to scriptures with just your web browser. You can also \
    use Bible.Fish offline without any internet on Chrome, Firefox, and Opera."
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
