<template>
    <div id="app">
        <LanguageButton />
        <router-view/>
    </div>
</template>

<script>
import LanguageButton from '@/components/elements/LanguageButton';
export default {
    name: 'App',
    components: { LanguageButton }
}
</script>

<style>

* {
	box-sizing: border-box;
}

body {
    background-image: url('~@/assets/images/grid.png');
    background-repeat: repeat-y;
    background-position: center;
    background-color: #ecf3f3;

    font-family: Rubik,sans-serif;
    font-size: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {
    color: #2c3e50;
    flex: 1;

}

.white-block {
    background: #fff;
    box-shadow: 0px 70px 80px -40px rgba(0, 0, 0, 0.4), 0px 5px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 80px 110px -40px rgba(86, 119, 119, 0.68), 0px 5px 20px rgba(0, 0, 0, 0.1);
}

h2, h3 {
    font-family: "Rubik", -apple-system, "San Francisco", "Segoe UI", "Helvetica Neue", sans-serif;
}

@media only screen and (max-width: 1000px) {
    body {
        background-image: none;
    }
}

@media print {
    body {
        background: none;
        padding: 0;
        margin: 0;
    }
}

</style>
