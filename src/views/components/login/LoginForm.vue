<script setup>
    // import
    import { reactive } from 'vue';
    import { useLoadingStore } from '@/stores/loadingStore';
    import breadcrumb_bg01 from '/assets/img/bg/breadcrumb_bg01.jpg';
    import breadcrumb_img02 from '/assets/img/others/breadcrumb_img02.png';
    import team_bg from '/assets/img/bg/team_bg.jpg';
    import { useAuthStore } from '@/stores/auth';
    import router from '@/router';

    // variables
    const form = reactive({
        phone: '',
        password: ''
    });

    const errors = reactive({
        phone: '',
        password: ''
    });

    const loadingStore = useLoadingStore();
    const authStore = useAuthStore();

    // methods
    const resetForm = () => {
        form.name = '',
        form.phone = '',
        form.password = '',
        errors.name = '',
        errors.phone = '',
        errors.password = ''
    }
    const userLogin = async () => {
        loadingStore.setLoading(true);
        try {
            await authStore.login(form);
            if(authStore.isLoggedIn){
                resetForm(); 
                iziToast.success({
                    title: 'Success',
                    message: authStore.message,
                    position: 'topRight',
                });
                router.push({ name: 'Home' });
            }
        } catch (e) {
            if(e.response && e.response.data.errors){
                errors.phone = e.response.data.errors.phone?.[0] || '';
                errors.password = e.response.data.errors.password?.[0] || '';
            }else if(e.response.status == 401){
                iziToast.error({
                    title: 'Error',
                    message: e.response.data.message,
                    position: 'topRight',
                });
            }else{
                console.error('An unexpected error occurred:', e);
            }
        } finally {
            loadingStore.setLoading(false);
        }
    }
</script>

<template>
        <section class="breadcrumb-area" :style="{ backgroundImage: `url(${breadcrumb_bg01})` }">
            <div class="container">
                <div class="breadcrumb__wrapper">
                    <div class="row">
                        <div class="col-xl-6 col-lg-7">
                            <div class="breadcrumb__content">
                                <h2 class="title">Login</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Sign In</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
                            <div class="breadcrumb__img">
                                <img :src="breadcrumb_img02" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb-area-end -->

        <!-- signup-area -->
        <section class="signup__area team-bg section-pt-120 section-pb-120" :style="{ backgroundImage: `url(${team_bg})` }">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8">
                        <div class="singUp-wrap">
                            <h2 class="title">Welcome back!</h2>
                            <p>Hey there! Ready to log in? Just enter your username and password below and you'll be back in action in no time. Let's go!</p>
                            
                            <form @submit.prevent="userLogin" class="account__form">
                                <div class="form-grp">
                                    <label for="phone">Phone</label>
                                    <input id="phone" type="text" v-model="form.phone" placeholder="Enter Phone Number">
                                    <span v-if="errors.phone" class="text-danger">{{ errors.phone }}</span>
                                </div>
                                <div class="form-grp">
                                    <label for="password">Password</label>
                                    <input id="password" type="password" v-model="form.password" placeholder="Enter Password">
                                    <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
                                </div>
                                <div class="account__check">
                                    <div class="account__check-forgot">
                                        <a href="reset-password.html">Forgot Password?</a>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-two arrow-btn">Login</button>
                            </form>
                      
                            
                          
                            <div class="account__switch">
                                <p>Don't have an account? <router-link to="/sign-up">Sign Up</router-link></p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

