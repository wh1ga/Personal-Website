<template>
    <div class="wrapper">
        <div class="page">
            <div class="page-content">
                <div class="margin-left flex-row">
                    <div class="resume-header">
                        <Header class="name" v-lang.resume.name></Header>
                        <p class="worktitle" v-lang.resume.worktitle></p>
                    </div>
                    <div class="contacts">
                        <ResumeContact icon="fas fa-phone">+7 (996) 940-41-45</ResumeContact>
                        <ResumeContact icon="fas fa-envelope">wh1ga123@gmail.com</ResumeContact>
                        <ResumeContact icon="fas fa-globe">https://im-brand.ru</ResumeContact>
                        <ResumeContact icon="fab fa-skype">wh11ga</ResumeContact>
                    </div>

                </div>
                <p class="about margin-left" v-lang.resume.about></p>
                <div class="timeline">
                    <!-- EXPERIENCE, second place -->
                    <ResumeHeader icon="fas fa-briefcase">{{ resume.headers.experience }}</ResumeHeader>
                    <ResumeSubheader :dates="resume.experience2.dates" bold="true">{{ resume.experience2.worktitle }}</ResumeSubheader>
                    <p class="workplace">{{ resume.experience2.place }}</p>
                    <ul>
                        <li v-for="text in resume.experience2.highlights">{{text}}</li>
                    </ul>

                    <!-- EXPERIENCE, first place -->
                    <ResumeSubheader :dates="resume.experience1.dates" bold="true">{{ resume.experience1.worktitle }}</ResumeSubheader>
                    <p class="workplace">{{ resume.experience1.place }}</p>
                    <ul>
                        <li v-for="text in resume.experience1.highlights">{{text}}</li>
                    </ul>

                    <!-- EDUCATION -->
                    <ResumeHeader icon="fas fa-graduation-cap">{{ resume.headers.education }}</ResumeHeader>
                    <ResumeSubheader :dates="resume.education.dates" bold="true">{{ resume.education.title }}</ResumeSubheader>
                    <p class="workplace">{{ resume.education.place }}</p>
                    <ul>
                        <li v-for="text in resume.education.highlights">{{text}}</li>
                    </ul>

                    <!-- SKILLS -->
                    <ResumeHeader icon="fas fa-puzzle-piece">{{ resume.headers.skills }}</ResumeHeader>
                    <ResumeSubheader v-for="(text, index) in resume.skills" :key="`skill-${index}`">{{text}}</ResumeSubheader>

                    <!-- LANGUAGES -->
                    <ResumeHeader icon="fas fa-globe">{{ resume.headers.languages }}</ResumeHeader>
                    <ResumeSubheader v-for="(text, index) in resume.languages" :key="`soft-${index}`">{{text}}</ResumeSubheader>

                    <!-- CERTIFICATIONS -->
                    <ResumeHeader icon="fas fa-certificate">{{ resume.headers.certifications }}</ResumeHeader>
                    <ResumeSubheader v-for="(certificate, index) in resume.certifications" :key="`certificate-${index}`" :dates="certificate.date">{{certificate.title}}</ResumeSubheader>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/elements/Header';
import ResumeHeader from '@/components/elements/ResumeHeader';
import ResumeSubheader from '@/components/elements/ResumeSubheader';
import ResumeContact from '@/components/elements/ResumeContact';
export default {
    name: 'Resume',
    components: {
        Header,
        ResumeHeader,
        ResumeSubheader,
        ResumeContact
    },
    computed: {
        resume() {
            return this.translate('resume');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    font-family: "Roboto", -apple-system, "San Francisco", "Segoe UI", "Helvetica Neue", sans-serif;
    font-size: 12pt;
}

.page {
    position: relative;
    animation: move-in .3s ease-out forwards;
}

.page::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 150px;
    background-color: #025eae;
    z-index: 1;
}

.page-content > * {
    position: relative;
    z-index: 2;
}

.name {
    margin: 0;
}

.contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
}

.about {
    margin-bottom: 20px;
    margin-top: 0;
}

.margin-left {
    margin-left: 165px;
}

.flex-row {
    display: flex;
}

.resume-header {
    flex: 1;
}

.timeline {
    margin-top: 10px;
}

.timeline::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 178px;
    width: 2px;
    background-color: lightgrey;
    z-index: 0;
}

ul {
    margin: 0 0 0 176px;
    font-size: .87em;
}

ul li {
    padding: 3px 0;
}

ul li:last-child {
    margin-bottom: 10px;
}

.workplace {
    margin: 0 0 4px 203px;
    font-size: .8em;
    font-style: italic;
}

@media print {

}
</style>
