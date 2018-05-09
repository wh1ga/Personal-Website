<template>
    <article class="white-block">
        <img :src="`/static/img/projects/${project.img}`" :alt="project.title">
        <div class="dim">
        </div>
        <h3 class="title">{{project.title}}</h3>
        <p class="description">{{project.description}}</p>
        <a v-if="project.link && project.link !== ''" :href="project.link" target="_blank"><span v-lang.visitLink></span><span class="arrow">»</span></a>
    </article>

</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['project'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 40px;
    margin: 10px;
    font-size: 16px;
    box-sizing: border-box;

    overflow: hidden;
}

.dim {
    position: absolute;
    background-color: white;
    opacity: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: all .2s ease-out;
}

article:hover .dim {
    opacity: 0.7;
}

img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    max-width: 200px;
    max-height: 200px;
    filter: blur(0);
    transition: filter .2s ease-out;
}

article:hover img {
    filter: blur(5px);
}

.title {
    color: #161b20;
    font-weight: 400;
    font-size: 1.3em;
    position: relative;
    display: inline-block;
    margin: 0 0 12px 0;
    letter-spacing: -1px;
    flex: 0;
    transition: all .2s ease-out;
}

.title, .description {
    opacity: 0;
    transform: translateX(-10px);
}

article:hover .title, article:hover .description, article:hover a {
    opacity: 1;
    transform: translateX(0);
}

.description {
    color: rgba(54,65,77,.9);
    line-height: 170%;
    letter-spacing: .2px;
    font-size: 1em;
    margin: 0 0 12px 0;
    flex: 1;
    transition: all 0.2s ease-out;
}

article:hover .description {
    transform: translateX(0);
}

a {
    padding: 12px 24px;
    border: 2px solid rgba(54,65,77,.7);
    color: rgba(54,65,77,.9);
    transition: all .15s ease-out,border .15s ease-out;
    z-index: 1;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    opacity: 0;
    transform: translateX(10px);
}

a span.arrow {
    position: relative;
    left: 0;
    margin-left: 5px;
    transition: all .15s ease-out,border .15s ease-out;
    font-size: 0.9em;
}

a:hover {
    background-color: #161b20;
    border-color: #161b20;
    color: white;
}

a:hover span.arrow {
    left: 4px;
}

@media only screen and (max-width: 1000px) {
    dim {
        opacity: 0.7;
    }

    article img {
        filter: blur(5px);
    }

    article .title, article .description, article a {
        opacity: 1;
        transform: translateX(0);
    }

}
</style>
