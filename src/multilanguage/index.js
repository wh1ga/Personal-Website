import Vue from 'vue';
import MultiLanguage from 'vue-multilanguage';
import resume from './resume';

Vue.use(MultiLanguage, {
    default: 'en',
    en: {
        headers: {
            hello: `Hi, I am <strong>Tim Shilov</strong>`,
            welcome: `Welcome to my spot on the web`,
            myProjects: `My projects`,
            social: `Find me elsewhere`
        },
        texts: {
            helloText: `To start with I want to say that I have a very bold goal: I want to be incredibly good at solving problems with technologies (primarily software) and being able to teach others to reach even higher levels.`,
            socialText: `Say hi!`,
            about1: `I'm a software engineer with a strong interest in technology. I like creating <strong>digital products</strong> that make people's lives more enjoyable.`,
            about2: `Ever since I was young I've been messing around with programming languages. My skills vary from developing mobile and desktop apps, creating websites and writing scripts for microcontrollers.`,
            about3: `I'm <strong>more of a developer than a designer</strong>, but I do like to create user interfaces and sometimes surprise myself. In my spare time you'll find me working on side projects, you can find some of them below!`
        },
        highlights: {
            0: 'Full Stack Web developer',
            1: 'Independent developer',
            2: 'I like to solve complex problems',
            3: 'Based in Russia',
            // 4: 'Looking for a job'
        },
        photoSign: `Tim, Jul '17`,
        visitLink: `Visit`,
        resumeLink: `(watch my resume)`,
        resume: resume.en
    },
    ru: {
        headers: {
            hello: `Привет! Я <strong>Тимофей Шилов</strong>`,
            welcome: `Добро пожаловать в мой уголок интернета`,
            myProjects: `Мои проекты`,
            social: `Связаться со мной`
        },
        texts: {
            helloText: `To start with I want to say that I have a very bold goal: I want to be incredibly good at solving problems with technologies (primarily software) and being able to teach others to reach even higher levels.`,
            socialText: `Буду рад знакомству!`,
            about1: `Я программист с огромным интересом к технологиям. Мне нравится создавать <strong>цифровые продукты</strong>, которые делают жизнь людей приятнее.`,
            about2: `С детских лет я возился с различными языками программирования. Мои навыки варьируются от разработки мобильных и настольных приложений до создания сайтов и скриптов для микроконтроллеров.`,
            about3: `Я <strong>больше программист, чем дизайнер</strong>, но я люблю создавать пользовательские интерфейсы и иногда я себя удивляю. В свободное время я работаю над различными проектами. Вы можете найти некоторые из них ниже!`
        },
        highlights: {
            0: 'Full Stack веб-разработчик',
            1: 'Независимый разработчик',
            2: 'Мне нравится решать сложные задачи',
            3: 'Живу в России',
            // 4: 'Ищу работу'
        },
        photoSign: `Тима, Июль 2017`,
        visitLink: `Посетить`,
        resumeLink: `(смотреть моё резюме)`,
        resume: resume.ru
    },
})
