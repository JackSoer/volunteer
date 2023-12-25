<template>
    <Head title="Login" />
    <main class="login container">
        <PrimaryForm :title="'Sign in'" :handleSubmit="handleSubmit">
            <PrimaryInput
                :inputProps="{
                    id: 'email',
                    type: 'email',
                    required: true,
                }"
                :label="'Email'"
                v-model="credentials.email"
            />
            <PrimaryInput
                :inputProps="{
                    id: 'password',
                    type: 'password',
                    required: true,
                }"
                :label="'Password'"
                v-model="credentials.password"
            />

            <p class="error mt-0 text-center" v-if="errors.email">
                {{ errors.email }}
            </p>

            <PrimaryButton
                :class="'login__btn'"
                :btnProps="{ disabled: credentials.processing }"
                >Sign in</PrimaryButton
            >
        </PrimaryForm>
    </main>
</template>

<script setup>
import PrimaryForm from "../components/UI/PrimaryForm.vue";
import PrimaryInput from "../components/UI/PrimaryInput.vue";
import PrimaryButton from "../components/UI/PrimaryButton.vue";
import { useForm, Head, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";

const page = usePage();

const credentials = useForm({
    email: "",
    password: "",
});

let { errors } = defineProps({
    errors: {
        type: Object,
        default: null,
    },
});

const handleSubmit = async () => {
    try {
        credentials.post("/login");
    } catch (err) {
        console.error(err?.message);
    }
};

onMounted(() => {
    page.props.errors = null;
});
</script>

<style lang="scss" scoped>
.login {
    min-height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    &__btn {
        margin-top: 5px;
    }
}

.error-center {
    text-align: center;
}
</style>
