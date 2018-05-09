<template>
    <button type="button" class="language-button" @click="language = otherLanguage"><i class="fas fa-globe"></i> {{languagesText[otherLanguage]}}</button>
</template>

<script>
export default {
    name: 'LanguageButton',
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
    background-color: white;
    border-radius: 50em;
    box-shadow: 0px 70px 80px -40px rgba(0, 0, 0, 0.4), 0px 5px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 80px 110px -40px rgba(86, 119, 119, 0.68), 0px 5px 20px rgba(0, 0, 0, 0.1);
    transition: all .2s ease-out;

}

.language-button:hover {
    top: 17px;
    box-shadow: 0px 70px 80px -40px rgba(0, 0, 0, 0.4), 0px 5px 40px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 80px 110px -40px rgba(86, 119, 119, 0.68), 0px 5px 20px rgba(0, 0, 0, 0.1);
}

i {
    margin-right: 6px;
}

.language-button:focus {outline:0;}

@media only screen and (max-width: 600px) {
    .language-button {
    }
}

@media print {
    .language-button {
        display: none;
    }
}
</style>
