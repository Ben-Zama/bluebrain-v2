<template>

    <div id="mobileMenu" class="mobileMenu"><hr>
        <div><router-link to="/">Home</router-link></div><hr>
        <div><router-link to="/about">About</router-link></div><hr>
        <div><router-link to="/services">Services</router-link></div><hr>
        <div><router-link to="/contact">Contact</router-link></div><hr>
    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/main.scss';

.mobileMenu {
    position: fixed;
    top: 75px;
    width: 100%;
    height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 20px;
    padding: 0 5%;
    transition: .25s;
    background-color: $background-color;
    z-index: 10;
    a {
        color: $primary-color;
        font-family: $alternate-font;
    }
    hr {
        width: 100%;
        opacity: 0.25;
        background-color: $primary-color;
    }
    &.active {
        height: max-content;
    }
}

</style>