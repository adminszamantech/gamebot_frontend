
<template>
    <HeaderContent/>
    <ItemArea/>
    <TopRateGame/>
    <JoinDiscord/>
</template>

<script lang="ts">
    import HeaderContent from '@/views/components/home/HeaderContent.vue'
    import ItemArea from '@/views/components/home/ItemArea.vue'
    import TopRateGame from '@/views/components/home/TopRateGame.vue'
    import JoinDiscord from '@/views/components/home/JoinDiscord.vue'

export default {
    name: "Home",
    components: {
        HeaderContent,
        ItemArea,
        TopRateGame,
        JoinDiscord,
    }
}
</script>