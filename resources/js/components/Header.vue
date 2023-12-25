<template>
    <header class="header">
        <h1 class="header__title">
            <Link href="/" class="header__title-link">Volunteer</Link>
        </h1>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__list-item">
                    <Link href="/" class="nav__link">Find job</Link>
                </li>
                <li class="nav__list-item" v-if="!user">
                    <Link href="/login" class="nav__link">Sign in</Link>
                </li>
                <li class="nav__list-item" v-if="!user">
                    <Link href="/register" class="nav__link">Sign up</Link>
                </li>
                <UserMenu v-if="user" />
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { usePage } from "@inertiajs/vue3";
import UserMenu from "./UserMenu.vue";

const page = usePage();

const user = page.props?.auth?.user;
</script>

<style lang="scss" scoped>
@import "../../scss/var";
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;

    height: 60px;
    background-color: $mainBorder;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    &__title-link {
        font-size: 35px;
        color: white;
        font-weight: 700;
    }

    .nav {
        &__list {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        &__link {
            color: white;
            border-radius: 20px;
            border: 2px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            padding: 9px 0;
            transition: all 0.3s ease;

            &:hover {
                color: $mainBorder;
                background-color: white;
            }
        }
    }
}
</style>
