<script setup>
    // imports
    import { reactive } from 'vue';
    import { useLoadingStore } from '@/stores/loadingStore';
    import breadcrumb_bg01 from '/assets/img/bg/breadcrumb_bg01.jpg';
    import breadcrumb_img02 from '/assets/img/others/breadcrumb_img02.png';
    import team_bg from '/assets/img/bg/team_bg.jpg';
    import { useAuthStore } from '@/stores/auth';
    import router from '@/router';


    // variables
    const form = reactive({
        name: '',
        phone: '',
        password: '',
    });

    const errors = reactive({
        name: '',
        phone: '',
        password: '',
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

    const userRegister = async () => {
   
        loadingStore.setLoading(true);
        try {
            await authStore.register(form);
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
            if (e.response && e.response.data.errors) {
                errors.name = e.response.data.errors.name?.[0] || '';
                errors.phone = e.response.data.errors.phone?.[0] || '';
                errors.password = e.response.data.errors.password?.[0] || '';
            }else if(e.response.status == 422){
                iziToast.error({
                    title: 'Error',
                    message: e.response.data.message,
                    position: 'topRight',
                });
            } else {
                console.error('An unexpected error occurred:', e);
            }
        } finally{
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
                                <h2 class="title">Registration</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Sign Up</li>
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

        <section class="signup__area team-bg section-pt-120 section-pb-120" :style="{ backgroundImage: `url(${team_bg})` }">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8">
                        <div class="singUp-wrap">
                            <h2 class="title">Create Your Account</h2>
                            <p>Hey there! Ready to join the party? We just need a few details from you to get started. Let's do this!</p>
                           
                            <form @submit.prevent="userRegister" class="account__form">
                                
                                <div class="form-grp">
                                    <label for="name">Name</label>
                                    <input type="text" v-model="form.name" id="name" placeholder="Enter Full Name">
                                    <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
                                </div>
                                <div class="form-grp">
                                    <label for="phone">Phone</label>
                                    <input type="text" v-model="form.phone" id="phone" placeholder="Enter Phone Number">
                                    <span v-if="errors.phone" class="text-danger">{{ errors.phone }}</span>
                                </div>
                                <div class="form-grp">
                                    <label for="password">Password</label>
                                    <input type="password" v-model="form.password" id="password" placeholder="Enter password">
                                    <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
                                </div>
                                <button type="submit" class="btn btn-two arrow-btn">Sign Up</button>
                            </form>
                            <div class="account__switch">
                                <p>Already have an account?<router-link :to="{ name:'Login' }">Login</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>