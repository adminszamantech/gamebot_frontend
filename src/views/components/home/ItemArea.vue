<script setup>
    import nft_img01 from '/assets/img/nft/nft_img01.jpg';
    import nft_avatar from '/assets/img/nft/nft_avatar.png';
    import nft_img02 from '/assets/img/nft/nft_img02.jpg';
    import nft_img03 from '/assets/img/nft/nft_img03.jpg';
</script>

<template>
    <section class="nft-item__area">
        <div class="container custom-container">
            <div class="row justify-content-center">
                <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                    <div class="nft-item__box">
                        <div class="nft-item__thumb">
                            <a href="shop-details.html"><img :src="nft_img01" alt="img"></a>
                        </div>
                        <div class="nft-item__content">
                            <h4 class="title"><a href="shop-details.html">wolf gaming art</a></h4>
                            <div class="nft-item__avatar">
                                <div class="avatar-img">
                                    <a href="shop-details.html"><img :src="nft_avatar" alt="img"></a>
                                </div>
                                <div class="avatar-name">
                                    <h5 class="name"><a href="shop-details.html">Alax Max</a></h5>
                                    <span class="designation">Creator</span>
                                </div>
                            </div>
                            <div class="nft-item__bid">
                                <div class="nft-item__price">
                                    <p>1.002 <span class="currency">Eth</span></p>
                                    <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                    <div class="nft-item__box">
                        <div class="nft-item__thumb">
                            <a href="shop-details.html"><img :src="nft_img02" alt="img"></a>
                        </div>
                        <div class="nft-item__content">
                            <h4 class="title"><a href="shop-details.html">Forest Princess</a></h4>
                            <div class="nft-item__avatar">
                                <div class="avatar-img">
                                    <a href="shop-details.html"><img :src="nft_avatar" alt="img"></a>
                                </div>
                                <div class="avatar-name">
                                    <h5 class="name"><a href="shop-details.html">Alax Max</a></h5>
                                    <span class="designation">Creator</span>
                                </div>
                            </div>
                            <div class="nft-item__bid">
                                <div class="nft-item__price">
                                    <p>1.053 <span class="currency">Eth</span></p>
                                    <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                    <div class="nft-item__box">
                        <div class="nft-item__thumb">
                            <a href="shop-details.html"><img :src="nft_img03" alt="img"></a>
                        </div>
                        <div class="nft-item__content">
                            <h4 class="title"><a href="shop-details.html">girl firefly art</a></h4>
                            <div class="nft-item__avatar">
                                <div class="avatar-img">
                                    <a href="shop-details.html"><img :src="nft_avatar" alt="img"></a>
                                </div>
                                <div class="avatar-name">
                                    <h5 class="name"><a href="shop-details.html">Alax Max</a></h5>
                                    <span class="designation">Creator</span>
                                </div>
                            </div>
                            <div class="nft-item__bid">
                                <div class="nft-item__price">
                                    <p>1.024 <span class="currency">Eth</span></p>
                                    <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>