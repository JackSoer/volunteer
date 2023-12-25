<template>
    <Head title="Register" />
    <main class="login container">
        <PrimaryForm :title="'Sign up'" :handleSubmit="handleSubmit">
            <PrimaryInput
                :inputProps="{
                    id: 'username',
                    required: true,
                    autofocus: true,
                }"
                :label="'Username'"
                v-model="credentials.username"
                :handleBlur="v$.username.$touch"
                :errors="v$.username?.$errors"
            />
            <PrimaryInput
                :inputProps="{
                    id: 'email',
                    type: 'email',
                    required: true,
                }"
                :label="'Email'"
                v-model="credentials.email"
                :handleBlur="v$.email.$touch"
                :errors="v$.email?.$errors"
                :serverErrors="
                    sended && !credentials.processing ? [errors?.email] : []
                "
            />
            <PrimaryInput
                :inputProps="{
                    id: 'password',
                    type: 'password',
                    required: true,
                }"
                :label="'Password'"
                v-model="credentials.password"
                :errors="v$.password?.$errors"
                :handleBlur="v$.password.$touch"
            />
            <PrimaryInput
                :inputProps="{
                    id: 'password-confirmation',
                    type: 'password',
                    required: true,
                }"
                :label="'Password Confirmation'"
                v-model="credentials.passwordConfirmation"
                :errors="
                    !isValidPasswordConfirmation &&
                    credentials.passwordConfirmation
                        ? [
                              {
                                  $message:
                                      'Password confirmation must match the password.',
                              },
                          ]
                        : []
                "
            />
            <FileInput
                label="Avatar"
                :maxMb="5"
                :fileProps="{ id: 'avatar', name: 'avatar', accept: 'image/*' }"
                :allowedTypes="['jpg', 'jpeg', 'png', 'svg', 'webp']"
                v-model="credentials.avatar"
                @errors="handleAvatarErrors"
            />
            <PrimaryButton
                :class="'login__btn'"
                :btnProps="{ disabled: credentials.processing }"
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
import { computed, onMounted, reactive, ref, watch } from "vue";
import FileInput from "@/components/FileInput.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, maxLength, minLength } from "@vuelidate/validators";

const page = usePage();

const credentials = useForm({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    avatar: null,
});

const rules = {
    username: { required, maxLength: maxLength(50), minLength: minLength(2) },
    email: { required, email },
    password: { required, maxLength: maxLength(25), minLength: minLength(2) },
    passwordConfirmation: {},
    avatar: {},
};

const v$ = useVuelidate(rules, credentials);

let { errors } = defineProps({
    errors: {
        type: Object,
        default: null,
    },
});

let avatarErrors = reactive([]);
const sended = ref(false);

const isValidPasswordConfirmation = computed(
    () => credentials.password === credentials.passwordConfirmation
);

const handleAvatarErrors = (errors) => {
    avatarErrors = errors;
};

const handleSubmit = async () => {
    const isFormCorrect = await v$.value.$validate();

    if (
        isFormCorrect &&
        !avatarErrors.length &&
        isValidPasswordConfirmation.value
    ) {
        try {
            credentials.post("/register");
        } catch (err) {
            console.error(err?.message);
        } finally {
            sended.value = true;
        }
    }
};

watch(
    () => credentials.email,
    () => {
        sended.value = false;
    }
);

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
