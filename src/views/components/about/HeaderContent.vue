<script setup>
import breadcrumb_bg01 from '/assets/img/bg/breadcrumb_bg01.jpg';
import breadcrumb_img01 from '/assets/img/others/breadcrumb_img01.png';
</script>

<template>
    <section class="breadcrumb-area" :style="{ backgroundImage: `url(${breadcrumb_bg01})` }">
        <div class="container">
            <div class="breadcrumb__wrapper">
                <div class="row">
                    <div class="col-xl-6 col-lg-7">
                        <div class="breadcrumb__content">
                            <h2 class="title">ABOUT US</h2>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">ABOUT US</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
                        <div class="breadcrumb__img">
                            <img :src="breadcrumb_img01" alt="img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
