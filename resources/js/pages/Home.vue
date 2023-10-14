<template>
    <PrimaryLayout>
        <Head title="Home" />
        <main class="home">
            <h1 class="home__title">Welcome to Volunteer</h1>
            <StatsBlock />
            <div class="container">
                <PrimarySection title="Volunteer opportunities">
                    <p class="home__text">
                        Find the perfect volunteer opportunities, learn more
                        about us, or sign in or sign up to get started.
                    </p>
                    <Link class="home__link" href="/"
                        ><PrimaryButton>Find Job</PrimaryButton></Link
                    >
                </PrimarySection>
                <PrimarySection title="Registration">
                    <p class="home__text">
                        Join our community of volunteers by signing up for an
                        account. Registration is quick and easy.
                    </p>
                    <Link class="home__link" href="/register"
                        ><PrimaryButton>Sign Up</PrimaryButton></Link
                    >
                </PrimarySection>
            </div>
        </main>
    </PrimaryLayout>
</template>

<script setup>
import PrimaryLayout from "@/layouts/PrimaryLayout.vue";
import { Link, Head } from "@inertiajs/vue3";
import PrimaryButton from "../components/UI/PrimaryButton.vue";
import PrimarySection from "../components/UI/PrimarySection.vue";
import StatsBlock from "../components/StatsBlock.vue";
</script>

<style lang="scss" scoped>
@import "../../scss/var";
.home {
    width: 100%;
    padding-bottom: 30px;

    &__title {
        font-size: 60px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 30px;
    }

    &__text {
        font-size: 18px;
        text-align: center;
        line-height: 25px;
    }
}
</style>
