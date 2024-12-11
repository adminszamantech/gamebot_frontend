<script setup>
    import logo from '/assets/img/logo/logo.png';
    import icon01 from '/assets/img/icons/social_icon01.png';
    import icon02 from '/assets/img/icons/social_icon02.png';
    import icon03 from '/assets/img/icons/social_icon03.png';
    import icon04 from '/assets/img/icons/social_icon04.png';
    import payment from '/assets/img/others/payment_card.png';
</script>

<template>
    <div class="footer__top-wrap">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-7">
                    <div class="footer-widget">
                        <div class="footer-logo logo">
                            <a href="index.html"><img :src="logo" alt="Logo"></a>
                        </div>
                        <div class="footer-text">
                            <p class="desc">Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur</p>
                            <p class="social-title">Active <span>With Us <i class="fas fa-angle-double-right"></i></span></p>
                            <div class="footer-social">
                                <a href="#"><img :src="icon01" alt="iocn"></a>
                                <a href="#"><img :src="icon02" alt="iocn"></a>
                                <a href="#"><img :src="icon03" alt="iocn"></a>
                                <a href="#"><img :src="icon04" alt="iocn"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-5 col-sm-6">
                    <div class="footer-widget widget_nav_menu">
                        <h4 class="fw-title">quick link</h4>
                        <ul class="list-wrap menu">
                            <li><a href="#">Gaming</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">All NFTs</a></li>
                            <li><a href="#">Social Network</a></li>
                            <li><a href="#">Domain Names</a></li>
                            <li><a href="#">Collectibles</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-5 col-sm-6">
                    <div class="footer-widget widget_nav_menu">
                        <h4 class="fw-title">Supports</h4>
                        <ul class="list-wrap menu">
                            <li><a href="#">Setting & Privacy</a></li>
                            <li><a href="#">Help & Support</a></li>
                            <li><a href="#">Live Auctions</a></li>
                            <li><a href="#">Item Details</a></li>
                            <li><a href="#">24/7 Supports</a></li>
                            <li><a href="#">Our News</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-7">
                    <div class="footer-widget">
                        <h4 class="fw-title">Newsletter</h4>
                        <div class="footer-newsletter">
                            <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>
                            <form action="#" class="footer-newsletter-form">
                                <input type="email" placeholder="Your email address">
                                <button type="submit"><i class="flaticon-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright__wrap">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-7">
                    <div class="copyright__text">
                        <p>Copyright © 2024 - All Rights Reserved By <span>Mykd</span></p>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="copyright__card text-center text-md-end">
                        <img :src="payment" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>