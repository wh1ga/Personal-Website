<template>
    <section class="projects">
        <div class="header">
            <Header v-lang.headers.myProjects></Header>
        </div>
        <div class="projects-container">
            <ProjectCard v-for="(project, index) in projects[language]" :key="`project-${index}`" :project="project" />
        </div>

    </section>
</template>

<script>
import Header from '@/components/elements/Header';
import ProjectCard from '@/components/elements/ProjectCard';
export default {
    name: 'Projects',
    data () {
        return {
            projects: {
                en: [
                    {title: 'Randomizer', description: 'Randomizer is an App for social network VK which uses VK API and helps to organize contests in communities.', img: 'randomizer-logo.jpg', link: 'https://vk.com/app4938347'},
                    {title: 'Provizor.me', description: 'Mobile App (iOS and Android) for pharmacists.', img: 'provizor-logo.png', link: 'https://provizor.me'},
                    {title: 'Personal website', description: 'This website is written and designed from scratch by myself. It\'s multilanguage and fully responsive.', img: 'personal-site.png', link: ''}
                ],
                ru: [
                    {title: 'Рандомайзер', description: 'Рандомайзер - это приложение для социальной сети ВКонтакте, использующее VK API, которое помогает проводить розыгрыши призов в сообществах.', img: 'randomizer-logo.jpg', link: 'https://vk.com/app4938347'},
                    {title: 'Provizor.me', description: 'Мобильное приложение (iOS и Android) для провизоров.', img: 'provizor-logo.png', link: 'https://provizor.me'},
                    {title: 'Мой личный сайт', description: 'Сайт, на котором вы сейчас находитесь сделан мной с нуля. Он мультиязычный и полностью адаптивный.', img: 'personal-site.png', link: ''}
                ]
            }

        }
    },
    computed: {
        get() {
            return this.translate('hello');
        }
    },
    components: {
        Header,
        ProjectCard
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects {
    width: 100%;
}

.header {
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
}

.projects-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 1000px) {
    .header {
        width: 80%;
    }

    .projects-container {
        grid-template-columns: 1fr 1fr;
    }

}

@media only screen and (max-width: 600px) {
    .projects-container {
        grid-template-columns: 1fr;
    }
}

</style>
