import gems from './assets/gems.png'
import clubhub from './assets/clubhub.png'
import ukulele from './assets/ukulele.png'
import eyemech from './assets/eyemech.png'
import lifeisgood from './assets/lifeisgood.png'
import automata from './assets/automata.png'
import croptails from './assets/croptails.png'
import portfolio from './assets/portfolio.png'


const projects = [
    {
      title: "Gems",
      page: 'gems',
      category: 'fullstack',
      description:
        "full stack // react.js, node.js, postgresql",
      image:
        gems
    },
    {
      title: "Ukulele",
      page: 'ukulele',
      category: 'hardware',
      description:
        "hardware // c, raspberry pi",
      image:
        ukulele
    },
    {
        title: "Eye Mech",
        page: 'eyemech',
        category: 'hardware',
        description:
          "animatronics // react.js, node.js, postgresql",
        image:
          eyemech
    },
    {
        title: "Croptails",
        page: 'croptails',
        category: 'gamedev',
        description:
          "game dev // 2d godot",
        image:
          croptails
    },
    {
        title: "Life is Good",
        page: 'lifeisgood',
        category: 'gamedev',
        description:
          "game design // figma",
        image:
          lifeisgood
    },
    {
        title: "Portfolio",
        page: 'portfolio',
        category: 'frontend',
        description:
          "frontend // react.js, tailwindcss, vite",
        image:
          portfolio
    },
    {
      title: "ClubHub",
      page: 'clubhub',
      category: 'fullstack',
      description:
        "full stack // react.js, next.js, rust, axum",
      image:
        clubhub
    },
    {
        title: "Automata",
        page: 'automata',
        category: 'design',
        description:
          "mechanism design // foamboard, rubberbands",
        image:
          automata
    },
  ];
  
  export default projects;