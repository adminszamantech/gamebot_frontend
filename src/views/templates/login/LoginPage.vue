<template>
    <LoginForm/>
</template>

<script lang="ts">
import LoginForm from '@/views/components/login/LoginForm.vue';

export default {
    name: "LoginPage", // Renamed to avoid naming conflict
    components: {
        LoginForm,
    },
};
</script>
