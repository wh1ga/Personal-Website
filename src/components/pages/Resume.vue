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
                        <ResumeContact icon="fas fa-envelope">tim@shilov.dev</ResumeContact>
                        <ResumeContact icon="fas fa-globe">Velikiy Novgorod, Russia (Open for relocation)</ResumeContact>
                    </div>

                </div>
                <p class="about margin-left" v-lang.resume.about></p>
                <div class="timeline">
                    <ResumeHeader icon="fas fa-briefcase">{{ resume.headers.experience }}</ResumeHeader>

                    <div v-for="experience in resume.experience">
                        <ResumeSubheader :dates="experience.dates" bold="true">{{ experience.worktitle }}</ResumeSubheader>
                        <p class="workplace">{{ experience.place }}</p>
                        <ul>
                            <li v-for="text in experience.highlights">{{text}}</li>
                        </ul>
                    </div>

                    <!-- SKILLS -->
                    <ResumeHeader icon="fas fa-puzzle-piece">{{ resume.headers.skills }}</ResumeHeader>
                    <ResumeSubheader v-for="(text, index) in resume.skills" :key="`skill-${index}`">{{text}}</ResumeSubheader>

                    <!-- EDUCATION -->
                    <ResumeHeader icon="fas fa-graduation-cap">{{ resume.headers.education }}</ResumeHeader>
                    <ResumeSubheader :dates="resume.education.dates" bold="true">{{ resume.education.title }}</ResumeSubheader>
                    <p class="workplace">{{ resume.education.place }}</p>
                    <ul>
                        <li v-for="text in resume.education.highlights">{{text}}</li>
                    </ul>

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
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    flex: 1;
    justify-content: space-between;
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
    flex-shrink: 0;
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
