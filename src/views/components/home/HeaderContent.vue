<script setup>
import slider_bg from '/assets/img/slider/slider_bg.jpg';
import slider_shape01 from '/assets/img/slider/slider_shape01.png';
import slider_shape02 from '/assets/img/slider/slider_shape02.png';
import slider_shape03 from '/assets/img/slider/slider_shape03.png';
import slider_shape04 from '/assets/img/slider/slider_shape04.png';
import brand_logo01 from '/assets/img/brand/brand_logo01.png';
import brand_logo02 from '/assets/img/brand/brand_logo02.png';
import brand_logo03 from '/assets/img/brand/brand_logo03.png';
import slider_img01 from '/assets/img/slider/slider_img01.png';
</script>

<template>
    <section 
        class="slider__area slider__bg" 
        :style="{ backgroundImage: `url(${slider_bg})` }">
        <div class="slider-activee">
            <div class="single-slider">
                <div class="container custom-container">
                    <div class="row justify-content-between">
                        <div class="col-lg-6">
                            <div class="slider__content">
                                <h6 class="sub-title wow fadeInUp" data-wow-delay=".2s">live gaming</h6>
                                <h2 class="title wow fadeInUp" data-wow-delay=".5s">steaming</h2>
                                <p class="wow fadeInUp" data-wow-delay=".8s">video games online</p>
                                <div class="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                                    <a href="contact.html" class="tg-btn-1">
                                        <span>contact us</span>
                                        <svg preserveAspectRatio="none" viewBox="0 0 197 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="cls-1" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M30.976 0.755987L0.75499 30.977L29.717 58.677H165.717L195.938 30.977L165.717 0.755987H30.976Z" stroke="white"
                                                stroke-width="1.5"></path>
                                            <path class="cls-2" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M166.712 2.01899L196.933 30.98L166.712 58.68L188.118 29.719L166.712 2.01899Z" fill="white"></path>
                                            <path class="cls-2" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M30.235 2.01899L0.0139923 30.977L30.235 58.677L8.82899 29.719L30.235 2.01899Z" fill="white"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-5 col-lg-6">
                            <div class="slider__img text-center">
                                <img :src="slider_img01" data-magnetic alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider__shapes">
            <img :src="slider_shape01" alt="shape">
            <img :src="slider_shape02" alt="shape">
            <img :src="slider_shape03" alt="shape">
            <img :src="slider_shape04" alt="shape">
        </div>
        <div class="slider__brand-wrap">
            <div class="container custom-container">
                <ul class="slider__brand-list list-wrap">
                    <li><a href="#"><img :src="brand_logo01" alt="brand"></a></li>
                    <li><a href="#"><img :src="brand_logo02" alt="brand"></a></li>
                    <li><a href="#"><img :src="brand_logo03" alt="brand"></a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
