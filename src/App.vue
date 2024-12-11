<script setup>
import { onMounted, onUnmounted, ref } from 'vue'; 
import Header from '@/views/layouts/Header.vue';
import Footer from '@/views/layouts/Footer.vue';
import Spinner from '@/views/components/others/Spinner.vue';

const lastScrollY = ref(0);
const headerVisible = ref(true);
const toggleOffCanvasMenu = () => {
  document.body.classList.toggle('offCanvas__menu-visible');
};
const toggleSearch = () => {
  document.body.classList.toggle('search__active');
};
const tagStickyMenu = () => {
  const header = document.querySelector('.tg-header__area'); 
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  if (scrollY > lastScrollY.value) {
    header.classList.add('tg-sticky-menu');
    headerVisible.value = true;
  } else if (scrollY < lastScrollY.value && scrollY > 100) {
    header.classList.remove('tg-sticky-menu');
    headerVisible.value = false;
  }

  if (scrollY + windowHeight >= documentHeight) {
    header.classList.add('tg-sticky-menu', 'sticky-menu__show');
    headerVisible.value = true;
  }

  lastScrollY.value = scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', tagStickyMenu);
});

onUnmounted(() => {
  window.removeEventListener('scroll', tagStickyMenu);
});
</script>

<template>
  <header>
    <Header :toggleOffCanvasMenu="toggleOffCanvasMenu" :toggleSearch="toggleSearch" />
  </header>
  <main class="main--area">
    <Spinner />
    <router-view />
  </main>
  <footer class="footer-style-one">
    <Footer />
  </footer>
</template>

<style scoped>
/* Add styles here as needed */
</style>
