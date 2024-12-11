<script setup>
    import area_bg01 from '/assets/img/bg/area_bg01.jpg';
    import about_tab01 from '/assets/img/others/about_tab01.png';
    import about_tab02 from '/assets/img/others/about_tab02.png';
    import about_tab03 from '/assets/img/others/about_tab03.png';
    import about_tab04 from '/assets/img/others/about_tab04.png';
    import about_tab05 from '/assets/img/others/about_tab05.png';
    import about_tab06 from '/assets/img/others/about_tab06.png';
    import about_img01 from '/assets/img/others/about_img01.jpg';
    import about_img02 from '/assets/img/others/about_img02.jpg';
    import about_img03 from '/assets/img/others/about_img03.jpg';
    import about_img04 from '/assets/img/others/about_img04.jpg';
    import about_img05 from '/assets/img/others/about_img05.jpg';
    import about_img06 from '/assets/img/others/about_img06.jpg';
    import gallery01 from '/assets/img/gallery/gallery01.jpg';
    import gallery02 from '/assets/img/gallery/gallery02.jpg';
    import gallery03 from '/assets/img/gallery/gallery03.jpg';
    import gallery04 from '/assets/img/gallery/gallery04.jpg';
    import gallery05 from '/assets/img/gallery/gallery05.jpg';

    import features_icon01 from '/assets/img/icons/features_icon01.png';
    import features_icon02 from '/assets/img/icons/features_icon02.png';
    import features_icon03 from '/assets/img/icons/features_icon03.png';

    import { ref } from 'vue';

// Swiper options
const swiperOptions = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: false,
  pagination: { clickable: true },
  scrollbar: { draggable: true },

};

// Reactive properties for modal functionality
const isModalOpen = ref(false);
const currentImage = ref('');

// Open modal with the selected image
const openModal = (image) => {
  currentImage.value = image;
  isModalOpen.value = true;
};

// Close modal
const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="area-background" :style="{ backgroundImage: `url(${area_bg01})` }">
    <section class="about__area section-pt-130 section-pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-10">
                    <div class="section__title text-center mb-60">
                        <span class="sub-title tg__animate-text">know about us</span>
                        <h3 class="title">top rated steamers</h3>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="about__tab-wrap">
                        <div class="about__buttons">
                            <a href="shop.html" class="tg-btn-2">
                                buy Hero
                                <svg preserveAspectRatio="none" viewBox="0 0 167 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M166 1H1V52H166V1Z" stroke-width="2"></path>
                                    <path d="M166 22L161 27L166 33" stroke-width="2"></path>
                                    <path d="M166 14L154 28L166 40" stroke-width="2"></path>
                                    <path d="M8 1V21" stroke-width="2"></path>
                                    <path d="M159 1V22" stroke-width="2"></path>
                                    <path d="M159 33V52" stroke-width="2"></path>
                                    <path d="M8 34V52" stroke-width="2"></path>
                                    <path d="M1 22L8 27L1 33" stroke-width="2"></path>
                                    <path d="M1 14L15 28L1 40" stroke-width="2"></path>
                                </svg>
                            </a>
                            <a href="shop.html" class="tg-btn-2 -secondary">
                                buy nfts
                                <svg preserveAspectRatio="none" viewBox="0 0 167 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M166 1H1V52H166V1Z" stroke-width="2"></path>
                                    <path d="M166 22L161 27L166 33" stroke-width="2"></path>
                                    <path d="M166 14L154 28L166 40" stroke-width="2"></path>
                                    <path d="M8 1V21" stroke-width="2"></path>
                                    <path d="M159 1V22" stroke-width="2"></path>
                                    <path d="M159 33V52" stroke-width="2"></path>
                                    <path d="M8 34V52" stroke-width="2"></path>
                                    <path d="M1 22L8 27L1 33" stroke-width="2"></path>
                                    <path d="M1 14L15 28L1 40" stroke-width="2"></path>
                                </svg>
                            </a>
                        </div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="about01-tab" data-bs-toggle="tab" data-bs-target="#about01" type="button" role="tab" aria-controls="about01" aria-selected="true"><span class="img-shape"></span><img :src="about_tab01" alt="img"></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="about02-tab" data-bs-toggle="tab" data-bs-target="#about02" type="button" role="tab" aria-controls="about02" aria-selected="false"><span class="img-shape"></span><img :src="about_tab02" alt="img"></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="about03-tab" data-bs-toggle="tab" data-bs-target="#about03" type="button" role="tab" aria-controls="about03" aria-selected="false"><span class="img-shape"></span><img :src="about_tab03" alt="img"></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="about04-tab" data-bs-toggle="tab" data-bs-target="#about04" type="button" role="tab" aria-controls="about04" aria-selected="false"><span class="img-shape"></span><img :src="about_tab04" alt="img"></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="about05-tab" data-bs-toggle="tab" data-bs-target="#about05" type="button" role="tab" aria-controls="about05" aria-selected="false"><span class="img-shape"></span><img :src="about_tab05" alt="img"></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="about06-tab" data-bs-toggle="tab" data-bs-target="#about06" type="button" role="tab" aria-controls="about06" aria-selected="false"><span class="img-shape"></span><img :src="about_tab06" alt="img"></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane show active" id="about01" role="tabpanel" aria-labelledby="about01-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-10">
                            <div class="about__img">
                                <img :src="about_img01" alt="img">
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-10">
                            <div class="about__flex-wrap">
                                <div class="about__content-wrap">
                                    <div class="about__content">
                                        <h4 class="title">human game</h4>
                                        <span class="rate">rate 50%</span>
                                        <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                    </div>
                                    <div class="about__content-list">
                                        <ul class="list-wrap">
                                            <li><img :src="features_icon01" alt="img"> Chichi Dragon Ball</li>
                                            <li><img :src="features_icon02" alt="img"> Space Babe Night</li>
                                            <li><img :src="features_icon03" alt="img"> Dragon Ball</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="about__btn-wrap">
                                    <ul class="list-wrap">
                                        <li><a href="shop-details.html">Dragon Ball</a></li>
                                        <li><a href="shop.html">nft market</a></li>
                                        <li><a href="contact-2.html">support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="about02" role="tabpanel" aria-labelledby="about02-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-10">
                            <div class="about__img">
                                <img :src="about_img02" alt="img">
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-10">
                            <div class="about__flex-wrap">
                                <div class="about__content-wrap">
                                    <div class="about__content">
                                        <h4 class="title">Axie Infinity</h4>
                                        <span class="rate">rate 60%</span>
                                        <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                    </div>
                                    <div class="about__content-list">
                                        <ul class="list-wrap">
                                            <li><img :src="features_icon01" alt="img"> Chichi Dragon Ball</li>
                                            <li><img :src="features_icon02" alt="img"> Space Babe Night</li>
                                            <li><img :src="features_icon03" alt="img"> Dragon Ball</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="about__btn-wrap">
                                    <ul class="list-wrap">
                                        <li><a href="shop-details.html">Dragon Ball</a></li>
                                        <li><a href="shop.html">nft market</a></li>
                                        <li><a href="contact-2.html">support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="about03" role="tabpanel" aria-labelledby="about03-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-10">
                            <div class="about__img">
                                <img :src="about_img03" alt="img">
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-10">
                            <div class="about__flex-wrap">
                                <div class="about__content-wrap">
                                    <div class="about__content">
                                        <h4 class="title">The Walking Dead</h4>
                                        <span class="rate">rate 75%</span>
                                        <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                    </div>
                                    <div class="about__content-list">
                                        <ul class="list-wrap">
                                            <li><img :src="features_icon01" alt="img"> Chichi Dragon Ball</li>
                                            <li><img :src="features_icon02" alt="img"> Space Babe Night</li>
                                            <li><img :src="features_icon03" alt="img"> Dragon Ball</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="about__btn-wrap">
                                    <ul class="list-wrap">
                                        <li><a href="shop-details.html">Dragon Ball</a></li>
                                        <li><a href="shop.html">nft market</a></li>
                                        <li><a href="contact-2.html">support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="about04" role="tabpanel" aria-labelledby="about04-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-10">
                            <div class="about__img">
                                <img :src="about_img04" alt="img">
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-10">
                            <div class="about__flex-wrap">
                                <div class="about__content-wrap">
                                    <div class="about__content">
                                        <h4 class="title">The Dogami</h4>
                                        <span class="rate">rate 65%</span>
                                        <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                    </div>
                                    <div class="about__content-list">
                                        <ul class="list-wrap">
                                            <li><img :src="features_icon01" alt="img"> Chichi Dragon Ball</li>
                                            <li><img :src="features_icon02" alt="img"> Space Babe Night</li>
                                            <li><img :src="features_icon03" alt="img"> Dragon Ball</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="about__btn-wrap">
                                    <ul class="list-wrap">
                                        <li><a href="shop-details.html">Dragon Ball</a></li>
                                        <li><a href="shop.html">nft market</a></li>
                                        <li><a href="contact-2.html">support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="about05" role="tabpanel" aria-labelledby="about05-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-10">
                            <div class="about__img">
                                <img :src="about_img05" alt="img">
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-10">
                            <div class="about__flex-wrap">
                                <div class="about__content-wrap">
                                    <div class="about__content">
                                        <h4 class="title">The Sandbox</h4>
                                        <span class="rate">rate 75%</span>
                                        <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                    </div>
                                    <div class="about__content-list">
                                        <ul class="list-wrap">
                                            <li><img :src="features_icon01" alt="img"> Chichi Dragon Ball</li>
                                            <li><img :src="features_icon02" alt="img"> Space Babe Night</li>
                                            <li><img :src="features_icon03" alt="img"> Dragon Ball</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="about__btn-wrap">
                                    <ul class="list-wrap">
                                        <li><a href="shop-details.html">Dragon Ball</a></li>
                                        <li><a href="shop.html">nft market</a></li>
                                        <li><a href="contact-2.html">support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="about06" role="tabpanel" aria-labelledby="about06-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-10">
                            <div class="about__img">
                                <img :src="about_img06" alt="img">
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-10">
                            <div class="about__flex-wrap">
                                <div class="about__content-wrap">
                                    <div class="about__content">
                                        <h4 class="title">Pegaxy Horses</h4>
                                        <span class="rate">rate 85%</span>
                                        <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                    </div>
                                    <div class="about__content-list">
                                        <ul class="list-wrap">
                                            <li><img :src="features_icon01" alt="img"> Chichi Dragon Ball</li>
                                            <li><img :src="features_icon02" alt="img"> Space Babe Night</li>
                                            <li><img :src="features_icon03" alt="img"> Dragon Ball</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="about__btn-wrap">
                                    <ul class="list-wrap">
                                        <li><a href="shop-details.html">Dragon Ball</a></li>
                                        <li><a href="shop.html">nft market</a></li>
                                        <li><a href="contact-2.html">support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section class="gallery__area fix section-pb-130">
      <div class="gallery__slider">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-9 col-lg-10 col-md-11">
              <Swiper class="swiper-container gallery-active" v-bind="swiperOptions">
                <SwiperSlide>
                  <div class="gallery__item">
                    <div class="gallery__thumb">
                      <img
                        :src="gallery05"
                        alt="Dota 2 Tournament"
                        @click="openModal(gallery05)"
                        class="gallery-image"
                        data-cursor="-theme" data-cursor-text="View <br> Image"
                      />
                    </div>
                    <div class="gallery__content">
                      <h3 class="title">Dota 2 Tournament</h3>
                      <span class="rate">rate 85%</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="gallery__item">
                    <div class="gallery__thumb" >
                      <img
                        :src="gallery01"
                        alt="PUBG Tournament"
                        @click="openModal(gallery01)"
                        class="gallery-image"
                        data-cursor="-theme" data-cursor-text="View <br> Image"
                        
                      />
                    </div>
                    <div class="gallery__content">
                      <h3 class="title">PUBG Tournament</h3>
                      <span class="rate">rate 50%</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="gallery__item">
                    <div class="gallery__thumb">
                      <img
                        :src="gallery02"
                        alt="Assassin's Creed"
                        @click="openModal(gallery02)"
                        class="gallery-image"
                        data-cursor="-theme" data-cursor-text="View <br> Image"
                      />
                    </div>
                    <div class="gallery__content">
                      <h3 class="title">Assassin's Creed</h3>
                      <span class="rate">rate 65%</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="gallery__item">
                    <div class="gallery__thumb">
                      <img
                        :src="gallery03"
                        alt="World of Warcraft"
                        @click="openModal(gallery03)"
                        class="gallery-image"
                        data-cursor="-theme" data-cursor-text="View <br> Image"
                      />
                    </div>
                    <div class="gallery__content">
                      <h3 class="title">World of Warcraft</h3>
                      <span class="rate">rate 60%</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="gallery__item">
                    <div class="gallery__thumb">
                      <img
                        :src="gallery04"
                        alt="The Chant s.2"
                        @click="openModal(gallery04)"
                        class="gallery-image"
                        data-cursor="-theme" data-cursor-text="View <br> Image"
                      />
                    </div>
                    <div class="gallery__content">
                      <h3 class="title">The Chant s.2</h3>
                      <span class="rate">rate 70%</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="gallery__item">
                    <div class="gallery__thumb">
                      <img
                        :src="gallery05"
                        alt="Dota 2 Tournament"
                        @click="openModal(gallery05)"
                        class="gallery-image"
                        data-cursor="-theme" data-cursor-text="View <br> Image"
                      />
                    </div>
                    <div class="gallery__content">
                      <h3 class="title">Dota 2 Tournament</h3>
                      <span class="rate">rate 85%</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for image preview -->
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-close" @click="closeModal">
            <span><i class="flaticon-swords-in-cross-arrangement"></i></span>
        </div>
        <img :src="currentImage" alt="Preview" class="modal-image" />
      </div>
    </div>
  </div>
</template>

<style>
.modal-close {
    position: absolute;
    top: 2%;
    right: 1%;
    font-size: 30px;
    cursor: pointer;
    color: var(--tg-theme-gray);
    background: #1f2935;
    border-radius: 50%;
    padding: 10px;
}

.modal-close:hover {
    background: var(--tg-theme-primary); 
    color: var(--tg-common-color-black);
}


.area-background {
  background-size: cover;
  background-position: center;
}
.gallery-image {
  cursor: pointer;
  transition: transform 0.3s;
}
.gallery-image:hover {
  transform: scale(1.05);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}
.modal-image {
  width: 100%;
  height: auto;
}
.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}
</style>
