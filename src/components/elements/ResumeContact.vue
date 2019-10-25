<template>
    <p><i :class="icon"></i><slot></slot></p>
</template>

<script>
export default {
    name: 'ResumeContact',
    props: [ 'icon' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: #161b20;
    font-size: .8em;
    z-index: 2;
    margin: 0;
    padding: 8px 10px 0 0;
}

i {
    border-radius: 50%;
    margin-right: 10px;
    color: white;
    background-color: #025eae;
    width: 20px;
    height: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .7em;
}

</style>
