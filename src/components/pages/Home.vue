'<template>
    <div class="wrapper">
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

@media only screen and (max-width: 1000px) {
    section {
        padding: 20px 0;
    }
}

</style>
