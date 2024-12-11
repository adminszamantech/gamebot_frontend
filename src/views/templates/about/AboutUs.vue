<template>
    <HeaderContent/>
    <AboutContent/>
</template>

<script lang="ts">
    import HeaderContent from '@/views/components/about/HeaderContent.vue'
    import AboutContent from '@/views/components/about/MainContent.vue'


export default {
    name: "About",
    components: {
        HeaderContent,
        AboutContent,
    }
}
</script>