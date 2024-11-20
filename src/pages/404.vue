<template>

    <div class="error">
        <div class="image">
            <img src="../assets/404.gif">
        </div>
        <div class="text">
            <p>Page not found</p>
        </div>
        <div class="cta">
            <button @mouseover="isHovered = true" @mouseleave="isHovered = false">
                <p>Back to Homepage</p>
                <i :class="isHovered ? 'bi bi-arrow-right-circle-fill' : 'bi bi-arrow-right-circle'"></i>
            </button>
        </div>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            isHovered: false,
        }
    }
}
</script>

<style lang="scss">
@import '../assets/main.scss';

.error {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 50px 0;
    .image {
        width: 100%;
        padding: 0 5%;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .text {
        display: flex;
        justify-content: center;
        p {
            font-family: $alternate-font;
            font-size: 20px;
            color: $primary-color;
        }

    }
    .cta {
        display: flex;
        justify-content: center;
        button {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid $accent-color;
            border-radius: 5px;
            color: $accent-color;
            padding: 7.5px 20px;
            font-family: $alternate-font;
            transition: .25s;
            &:hover {
                background-color: $accent-color;
                color: $white-text-color;
            }
        }
    }
}

@include md {
    .error {
        .image {
            height: 500px;
        }
    }
}

</style>