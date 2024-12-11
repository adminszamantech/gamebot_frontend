<script setup>
    import breadcrumb_bg01 from '/assets/img/bg/breadcrumb_bg01.jpg';
    import breadcrumb_img02 from '/assets/img/others/breadcrumb_img02.png';
    import team_bg from '/assets/img/bg/team_bg.jpg';
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

        <section class="signup__area team-bg section-pt-120 section-pb-120" :style="{ backgroundImage: `url(${team_bg})` }">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8">
                        <div class="singUp-wrap">
                            <h2 class="title">Create Your Account</h2>
                            <p>Hey there! Ready to join the party? We just need a few details from you to get started. Let's do this!</p>
                            <div class="account__social">
                                <a href="#" class="account__social-btn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.16 12.1932C20.16 11.5905 20.1059 11.011 20.0055 10.4546H12V13.7425H16.5746C16.3775 14.8051 15.7786 15.7053 14.8784 16.308V18.4407H17.6255C19.2327 16.961 20.16 14.7819 20.16 12.1932Z" fill="#4285F4" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 20.5C14.2952 20.5 16.2193 19.7389 17.6257 18.4407L14.8786 16.3079C14.1175 16.8179 13.1439 17.1193 12.0002 17.1193C9.78635 17.1193 7.91248 15.6241 7.24407 13.615H4.4043V15.8173C5.80294 18.5952 8.67749 20.5 12.0002 20.5Z" fill="#34A853" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.24387 13.6151C7.07387 13.1051 6.97728 12.5604 6.97728 12.0001C6.97728 11.4399 7.07387 10.8951 7.24387 10.3851V8.18286H4.40409C3.82841 9.33036 3.5 10.6285 3.5 12.0001C3.5 13.3717 3.82841 14.6699 4.40409 15.8174L7.24387 13.6151Z" fill="#FBBC05" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 6.88069C13.2482 6.88069 14.3686 7.30955 15.2495 8.15183L17.6875 5.71387C16.2155 4.34227 14.2914 3.5 12.0002 3.5C8.67748 3.5 5.80294 5.40478 4.4043 8.18273L7.24407 10.385C7.91248 8.37592 9.78635 6.88069 12.0002 6.88069Z" fill="#EA4335" />
                                    </svg>
                                    Continue with google
                                </a>
                            </div>
                            <div class="account__divider">
                                <span>OR</span>
                            </div>
                            <form action="#" class="account__form">
                                <div class="row gutter-20">
                                    <div class="col-md-6">
                                        <div class="form-grp">
                                            <label for="fast-name">First Name</label>
                                            <input type="text" id="fast-name" placeholder="First Name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-grp">
                                            <label for="last-name">Last name</label>
                                            <input type="text" id="last-name" placeholder="Last name">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-grp">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" placeholder="email">
                                </div>
                                <div class="form-grp">
                                    <label for="password">Password</label>
                                    <input type="password" id="password" placeholder="password">
                                </div>
                                <div class="form-grp">
                                    <label for="confirm-password">Confirm Password</label>
                                    <input type="password" id="confirm-password" placeholder="Confirm Password">
                                </div>
                                <button type="submit" class="btn btn-two arrow-btn">Sign Up</button>
                            </form>
                            <div class="account__switch">
                                <p>Already have an account?<a href="login.html">Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>