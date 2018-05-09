<template>
    <div>
        <span v-if="dates">{{dates}}</span>
        <h2 :class="{small: !dates, bold: bold}"><slot></slot> <span v-if="description">({{description}})</span></h2>
    </div>
</template>

<script>
export default {
    name: 'ResumeSubheader',
    props: ['dates', 'description', 'bold']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    display: flex;
    align-items: center;
    padding: 4px 0;
    z-index: 1;
    position: relative;
}

div > span {
    width: 150px;
    text-align: right;
    color: white;
    padding-right: 10px;
    padding-bottom: 3px;
    font-size: .7em;
}

h2 {
    display: flex;
    align-items: center;
    color: #161b20;
    font-size: .8em;
    margin: 0 0 0 45px;
    font-weight: normal;

    font-family: "Roboto", "Open Sans", "Segoe UI", sans-serif;
}

h2.small {
    margin-left: 195px;
}

h2.bold {
    font-weight: bold;
}

h2 > span {
    font-weight: normal;
    margin-left: 10px;
}

h2::before {
    content: "";
    position: relative;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #025eae;
    left: -20px;
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
