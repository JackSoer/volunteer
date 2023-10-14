<template>
    <div class="stats-block-item">
        <img class="stats-block-item__img" v-bind="imgProps" />
        <p class="stats-block-item__count">{{ count }}</p>
        <h3 class="stats-block-item__text">{{ title }}</h3>
    </div>
</template>

<script setup>
const { imgProps, count, title } = defineProps({
    imgProps: Object,
    count: Number,
    title: String,
});
</script>

<style lang="scss" scoped>
.stats-block-item {
    height: 100%;
    width: 50%;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__img {
        max-width: 100%;
        max-height: 100%;
        margin-bottom: 40px;
    }

    &__count,
    &__text {
        font-size: 43px;
        font-weight: 700;
        color: white;
    }

    &__count {
        margin-bottom: 10px;
    }
}
</style>
