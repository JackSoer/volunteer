<template>
    <Head title="Login" />
    <main class="login">
        <PrimaryForm :title="'Sign up'" :handleSubmit="() => {}">
            <PrimaryInput
                :inputProps="{
                    id: 'username',
                    required: true,
                    autofocus: true,
                }"
                :label="'Username'"
            />
            <PrimaryInput
                :inputProps="{
                    id: 'email',
                    type: 'email',
                    required: true,
                }"
                :label="'Email'"
            />
            <PrimaryInput
                :inputProps="{
                    id: 'password',
                    type: 'password',
                    required: true,
                }"
                :label="'Password'"
            />
            <PrimaryInput
                :inputProps="{
                    id: 'password-confirmation',
                    type: 'password',
                    required: true,
                }"
                :label="'Password Confirmation'"
            />
            <FileInput
                label="Avatar"
                :maxMb="5"
                :fileProps="{ id: 'avatar', name: 'avatar' }"
                :allowedTypes="['jpg', 'jpeg', 'png', 'svg', 'webp']"
                v-model="credentials.avatar"
            />
            <PrimaryButton :class="'login__btn'" :btnProps="{ disabled: false }"
                >Sign up</PrimaryButton
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
import FileInput from "@/components/FileInput.vue";
const page = usePage();

const credentials = useForm({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    avatar: null,
});

let { errors } = defineProps({
    errors: {
        type: Object,
        default: null,
    },
});

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
