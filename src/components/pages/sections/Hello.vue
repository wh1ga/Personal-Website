<template>
    <section class="hello">
        <Polaroid id="photo"/>
        <div class="card white-block">
            <h1 v-lang.headers.hello></h1>
            <ul>
                <li v-for="(highlight, index) of highlights" :key="`hello-${index}`">
                    {{ highlight }}
                    <router-link v-if="index == 4" to="resume" v-lang.resumeLink class="resumeLink">(watch my resume)</router-link>
                </li>

            </ul>
        </div>
    </section>
</template>

<script>
import Polaroid from '@/components/elements/Polaroid';

export default {
    name: 'Hello',
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

#photo {
    transform: rotate(3deg);
    margin-left: -12px;
    flex-shrink: 0;
    transition: transform 0.2s ease-out;
    z-index:2;
    animation: photo-flip-in .2s ease-in-out forwards;
}

.card {
    width: 425px;
    height: 264px;
    display: flex;
    flex-direction: column;
    transform: rotate(-2deg);
    box-sizing: border-box;
    transition: transform .2s ease-out;
    margin-left: -8px;
    animation: card-flip-in .2s ease-in-out forwards;
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

    #photo {
        transform: rotate(0);
        margin: 0 auto 20px auto;
        width: 420px;
    }

    .card {
        z-index: 2;
        transform: rotate(0);
        height: auto;
        padding-bottom: 20px;
        width: 420px;
        margin: 0 auto;
    }

    .resumeLink {
        display: none;
    }
}

@keyframes card-flip-in {
    0% {
        opacity: 0;
        transform: translateY(50px) translateX(-0px) rotate(-5deg);
    }
    100% {
        opacity: 1;
        transform: auto;
    }
}

@keyframes photo-flip-in {
    0% {
        opacity: 0;
        transform: translateY(50px) translateX(0px) rotate(5deg);
    }
    100% {
        opacity: 1;
        transform: auto;
    }
}

</style>
