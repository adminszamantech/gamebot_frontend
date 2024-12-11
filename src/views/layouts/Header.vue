<script setup>
    import logo from '/assets/img/logo/logo.png';
    defineProps({
        toggleOffCanvasMenu: Function,
        toggleSearch: Function,
    });
</script>

<template>
    <div id="sticky-header" class="tg-header__area transparent-header">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                    <div class="tgmenu__wrap">
                        <nav class="tgmenu__nav">
                            <div class="logo">
                                <router-link to="/"><img :src="logo" alt="Logo"></router-link>
                            </div>
                            <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                <ul class="navigation">
                                    <li class="active">
                                        <router-link to="/">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/about">About</router-link>
                                    </li>
                                    <li class="menu-item-has-children"><a href="javascript:void(0)">TOURNAMENT</a>
                                        <ul class="sub-menu">
                                            <li><a href="tournament.html">TOURNAMENT</a></li>
                                            <li><a href="tournament-details.html">TOURNAMENT Single</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="javascript:void(0)">PAGES</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children"><a href="javascript:void(0)">Gaming Shop</a>
                                                <ul class="sub-menu">
                                                    <li><a href="shop.html">Shop Page</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="services.html">Our Services</a></li>
                                            <li><a href="services-details.html">Services Details</a></li>
                                            <li><a href="team-details.html">Player Details</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="sign-up.html">Sign up</a></li>
                                            <li><a href="reset-password.html">Forgot Password</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="javascript:void(0)">News</a>
                                        <ul class="sub-menu">
                                            <li><a href="blog.html">Our Blog</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                            </div>
                            <div class="tgmenu__action d-none d-md-block">
                                <ul class="list-wrap">
                                    <li class="search" @click="toggleSearch"><a href="javascript:void(0)"><i class="flaticon-search-1"></i></a></li>
                                    <li class="header-btn">
                                        <router-link to="/login" class="tg-border-btn">
                                            <svg preserveAspectRatio="none" viewBox="0 0 157 48" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M131.75 2L155.75 25L131.75 47L148.75 24L131.75 2Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 1L1 24.5111L25 47L8 23.4889L25 1Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.75 1L0.75 25L23.75 47H131.75L155.75 25L131.75 1H24.75Z" stroke="currentColor" stroke-width="1.5"></path>
                                            </svg>
                                            <i class="flaticon-edit"></i>
                                            ~sing in
                                        </router-link>
                                    </li>
                                    <li class="side-toggle-icon" @click="toggleOffCanvasMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile Menu  -->
    <div class="tgmobile__menu">
        <nav class="tgmobile__menu-box">
            <div class="close-btn"><i class="flaticon-swords-in-cross-arrangement"></i></div>
            <div class="nav-logo">
                <a href="index.html"><img :src="logo" alt="Logo"></a>
            </div>
            <div class="tgmobile__search">
                <form action="#">
                    <input type="text" placeholder="Search here...">
                    <button><i class="flaticon-loupe"></i></button>
                </form>
            </div>
            <div class="tgmobile__menu-outer">
                <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
            </div>
            <div class="social-links">
                <ul class="list-wrap">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li>
                        <a href="#">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z"
                                    fill="currentColor" />
                            </svg>
                        </a>
                    </li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="tgmobile__menu-backdrop"></div>
    <!-- End Mobile Menu -->

    <!-- header-search -->
    <div class="search__popup-wrap">
        <div class="search__layer"></div>
        <div class="search__close" @click="toggleSearch">
            <span><i class="flaticon-swords-in-cross-arrangement"></i></span>
        </div>
        <div class="search__wrap text-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="title">... <span>Search Here</span> ...</h2>
                        <div class="search__form">
                            <form action="#">
                                <input type="text" name="search" placeholder="Type keywords here" required>
                                <button class="search-btn"><i class="flaticon-loupe"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- header-search-end -->

    <!-- offCanvas-area -->
    <div class="offCanvas__wrap">
        <div class="offCanvas__body">
            <div class="offCanvas__top">
                <div class="offCanvas__logo logo">
                    <a href="index.html"><img :src="logo" alt="Logo"></a>
                </div>
                <div class="offCanvas__toggle" @click="toggleOffCanvasMenu">
                    <i class="flaticon-swords-in-cross-arrangement"></i>
                </div>
            </div>
            <div class="offCanvas__content">
                <h2 class="title">Best Seller of Month Ideas for <span>NFT Wallet</span></h2>
                <div class="offCanvas__contact">
                    <h4 class="small-title">CONTACT US</h4>
                    <ul class="offCanvas__contact-list list-wrap">
                        <li><a href="tel:93332225557">+9 333 222 5557</a></li>
                        <li><a href="mailto:info@webmail.com">info@webmail.com</a></li>
                        <li>New Central Park W7 Street ,New York</li>
                    </ul>
                </div>
                <div class="offCanvas__newsletter">
                    <h4 class="small-title">Subscribe</h4>
                    <form action="#" class="offCanvas__newsletter-form">
                        <input type="email" placeholder="Get News & Updates">
                        <button type="submit"><i class="flaticon-send"></i></button>
                    </form>
                    <p>Subscribe dolor sitamet, consectetur adiping eli. Duis esollici tudin augue.</p>
                </div>
                <ul class="offCanvas__social list-wrap">
                    <li>
                        <a href="#">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z"
                                    fill="currentColor" />
                            </svg>
                        </a>
                    </li>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                </ul>
            </div>
            <div class="offCanvas__copyright">
                <p>Copyright © 2024 - By <span>MYKD</span></p>
            </div>
        </div>
    </div>
    
    <div class="offCanvas__overlay" @click="toggleOffCanvasMenu"></div>
    <!-- offCanvas-area-end -->
</template>