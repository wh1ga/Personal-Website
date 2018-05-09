<template>
    <h2><i :class="icon"></i><slot></slot></h2>
</template>

<script>
export default {
    name: 'ResumeHeader',
    props: [ 'icon' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    position: relative;
    display: flex;
    align-items: center;
    color: #025eae;
    font-size: 1em;
    margin: 5px 0 5px 165px;
    z-index: 2;
    letter-spacing: 1px;
}

i {
    border-radius: 50%;
    margin-right: 10px;
    color: white;
    background-color: #025eae;
    width: 28px;
    height: 28px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .8em;
}
</style>
