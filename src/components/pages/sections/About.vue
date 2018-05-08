<template>
    <section class="about">
        <Header v-lang.headers.welcome></Header>

        <p v-lang.texts.about1></p>
        <p v-lang.texts.about2></p>
        <p v-lang.texts.about3></p>
    </section>
</template>

<script>
import Header from '@/components/elements/Header';
export default {
    name: 'About',
    data () {
        return {

        }
    },
    components: {
        Header
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
    height: 100%;
    max-width: 780px;
}

p {
    color: #36414D;
    font-weight: 300;
    margin-top: 12px;
    margin-bottom: 24px;
    letter-spacing: .1px;
    line-height: 170%;
}

@media only screen and (max-width: 1000px) {
    .about {
        width: 80%;
    }
}

</style>
