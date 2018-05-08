<template>
    <section class="hello">
        <Polaroid class="photo"/>
        <div class="card white-block">
            <h1 v-lang.headers.hello></h1>
            <ul>
                <li v-for="highlight of highlights">{{ highlight }}</li>
            </ul>
            <!-- <p v-lang.texts.helloText></p> -->
        </div>
    </section>
</template>

<script>
import Polaroid from '@/components/elements/Polaroid';

export default {
    name: 'Hello',
    data () {
        return {
            /*highlights: [
                'Full-stack Web developer',
                'Software developer',
                'Based in Russia',
                'Currently unemployed'
            ]*/
        }
    },
    computed: {
        highlights() {
            return this.translate('highlights');
        }
    },
    components: {
        Polaroid
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
}

.photo {
    transform: rotate(3deg);
    margin-left: -20px;
    flex-shrink: 0;
    transition: transform 0.2s ease-out;
    z-index:2;
}

.card {
    width: 425px;
    height: 264px;
    display: flex;
    flex-direction: column;
    transform: rotate(-2deg);
    box-sizing: border-box;
    transition: transform 0.2s ease-out;
    margin-left: -8px;
}

h1 {
    font-weight: 300;
    margin: 20px 0 30px 20px;
}

p {
    line-height: 1.4em;
}

ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0;
    padding: 0;
    text-align: left;
    list-style: none;
}

li {
    font-size: .9em;
    margin-bottom: 8px;
}

li::before {
    content: "";
    background: #000;
    padding: 0 20px;
    margin-right: 8px;
}

@media only screen and (max-width: 1000px) {
    .hello {
        display: block;
        min-height: auto;
    }

    .photo {
        transform: rotate(0);
        margin: 0 auto 20px auto;
    }
    .card {
        z-index: 2;
        transform: rotate(0);
        height: auto;
        padding-bottom: 20px;
        width: 400px;
        margin: 0 auto;
    }
}
</style>
