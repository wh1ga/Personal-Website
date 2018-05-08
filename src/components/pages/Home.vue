'<template>
    <div class="wrapper">
        <button type="button" class="language-button" @click="language = otherLanguage"><i class="fas fa-globe"></i> {{languagesText[otherLanguage]}}</button>
        <Hello />
        <About />
        <Projects />
        <Contacts />
    </div>
</template>

<script>
import Hello from '@/components/pages/sections/Hello'
import About from '@/components/pages/sections/About'
import Contacts from '@/components/pages/sections/Contacts'
import Projects from '@/components/pages/sections/Projects'

export default {
    name: 'Home',
    components: {
        Hello,
        About,
        Contacts,
        Projects
    },
    data() {
        return {
            languagesText: {
                ru: "РУС",
                en: "ENG"
            }
        }
    },
    computed: {
        otherLanguage() {
            return this.language == 'ru' ? 'en' : 'ru';
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
}

section {
    flex: 1;
    padding: 68px 0;
    box-sizing: border-box;
}

.wrapper section:last-child {
    border-bottom: 1px solid transparent;
}

.language-button {
    font-family: inherit;
    position: fixed;
    background: none;
    border: none;
    padding: 10px;
    top: 20px;
    right: 20px;
    color: #2c3e50;
    cursor: pointer;
    z-index: 999;
}

i {
    margin-right: 6px;
}

@media only screen and (max-width: 1000px) {
    section {
        padding: 20px 0;
    }
}

@media only screen and (max-width: 600px) {
    .language-button {
        background-color: white;
        border-radius: 50em;
        box-shadow: 0px 70px 80px -40px rgba(0, 0, 0, 0.4), 0px 5px 20px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 80px 110px -40px rgba(86, 119, 119, 0.68), 0px 5px 20px rgba(0, 0, 0, 0.1);
    }
}

</style>
