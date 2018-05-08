<template>
    <div class="polaroid white-block">
        <div class="face"></div>
        <div class="sign">
            <p v-lang.photoSign></p>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Polaroid',
    data () {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.polaroid {
    background-color: white;
    padding: 25px 25px 0px 25px;
    width: 350px;
    height: 425px;
    display: flex;
    flex-direction: column;
}

.polaroid .sign {
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.polaroid .face {
    background-image: url('~@/assets/images/photo.jpg');
    background-size: cover;
    background-position: center;
    flex: 1;
}

.polaroid p {
    text-align: center;

    font: 400 30px/1 'Caveat', cursive;
    color: #888;
}
</style>
