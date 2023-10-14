<template>
    <section class="section">
        <h2 class="section__subtitle">{{ title }}</h2>
        <slot />
    </section>
</template>

<script setup>
const { title } = defineProps({
    title: String,
});
</script>

<style lang="scss" scoped>
@import "../../../scss/var";

.section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    position: relative;

    &::after {
        content: "";
        display: block;
        width: 100vw;
        height: 3px;
        background-color: $mainBorder;
        position: absolute;
        bottom: -27px;
    }

    &__subtitle {
        font-size: 35px;
        font-weight: 500;
        color: $mainTextColor;
    }

    &:last-child {
        margin-bottom: 0;

        &::after {
            display: none;
        }
    }
}
</style>
