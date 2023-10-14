<template>
    <div class="stats-block">
        <StatsBlockItem
            :imgProps="{
                src: '/images/unv_voluteeers.png',
                alt: 'Volunteers count',
            }"
            :count="10"
            title="Volunteers"
        />
        <StatsBlockItem
            :imgProps="{
                src: '/images/unv_programme.png',
                alt: 'Volunteer jobs count',
            }"
            :count="10"
            title="Volunteer jobs"
        />
    </div>
</template>

<script setup>
import StatsBlockItem from "./StatsBlockItem.vue";
</script>

<style lang="scss" scoped>
@import "../../scss/var";
.stats-block {
    width: 100%;
    background-color: $mainBorder;
    margin-bottom: 20px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
