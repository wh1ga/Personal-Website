<template>
    <section class="contacts">
        <Header v-lang.headers.social></Header>
        <p v-lang.texts.socialText></p>
        <div class="contacts-container">
            <a href="https://github.com/wh1ga" target="_blank" class="github-link"><i class="fab fa-github"></i>GitHub</a>
            <a href="https://vk.com/wh1ga" target="_blank" class="vk-link"><i class="fab fa-vk"></i>VK</a>
            <a href="mailto:wh1ga123@gmail.com" target="_blank" class="email-link"><i class="fas fa-at"></i></i>E-mail</a>
        </div>

    </section>
</template>

<script>
import Header from '@/components/elements/Header';
import Polaroid from '@/components/elements/Polaroid';
export default {
    name: 'Contacts',
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
.contacts {
    height: 100%;
    max-width: 780px;
    width: 100%;
}

.contacts-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

a {
    min-width: 100px;
    box-sizing: border-box;
    color: #36414D;
    text-decoration: none;
    font-size: .9em;
    transition: all 0.2s ease-out;
}

a:hover {
    transform: translateX(10px);
}

i {
    margin-right: 10px;
}

.github-link:hover {
    color: #24292e;
}

.vk-link {
    text-align: center;
}

.vk-link:hover {
    color: #4a76a8;
}

.email-link {
    text-align: right;
}

.email-link:hover {
    color: #df4a32;
}

@media only screen and (max-width: 1000px) {
    .contacts {
        width: 80%;
    }
}

@media only screen and (max-width: 500px) {
    .contacts-container {
        flex-direction: column;
    }

    a {
        text-align: center !important;
        padding: 10px;
    }
}

</style>
