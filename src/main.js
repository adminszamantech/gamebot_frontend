
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from './axios';
import router from './router';
import { Swiper, SwiperSlide } from 'swiper/vue'; 
import 'swiper/swiper-bundle.css'; 
import { useLoadingStore } from '@/stores/loadingStore';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';


window.iziToast = iziToast;

router.beforeEach((to, from, next) => {
  const loadingStore = useLoadingStore();
  loadingStore.setLoading(true);
  next();
});

router.afterEach(() => {
  const loadingStore = useLoadingStore();
  setTimeout(() => {
    loadingStore.setLoading(false); 
  }, 150);
});
  
const app = createApp(App)
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);
app.use(createPinia())
app.use(router);
app.mount('#app')
