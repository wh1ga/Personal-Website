<template>
    <h2><slot></slot></h2>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    font-family: Overpass,sans-serif;
    color: #161b20;
    margin: 0 0 24px;
    font-size: 1.2em;
    text-align: left;
}

h2::after {
    content: "";
    display: block;
    height: 2px;
    width: 60px;
    background-color: #36414D;
    position: relative;
    top: 8px;
}
</style>
