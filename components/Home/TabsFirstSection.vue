<template>
    <div class="container">
      <div class="tab">
        <div class="d-flex">
          <h3 class="tab__title">Headphones</h3>
          <ul class="tab__ctrl">
            <li class="tab__item">
              <a class="tab__link" @click.prevent="setActive('tab-1')" :class="{ active: isActive('tab-1') }" href="#tab-1">Top 20</a>
            </li>
            <li class="tab__item">
              <a class="tab__link" @click.prevent="setActive('tab-2')" :class="{ active: isActive('tab-2') }" href="#tab-2">Accessories</a>
            </li>
            <li class="tab__item">
              <a class="tab__link" @click.prevent="setActive('tab-3')" :class="{ active: isActive('tab-3') }" href="#tab-3">All in One</a>
            </li>
          </ul>
        </div>
        <div class="content">
          <nuxt-link to="/" class="d-block link">
            <img class="img-fluid" src="../../assets/img/200X276/img1.jpg" alt="Image Description">
          </nuxt-link>
          <div class="tab-content">
            <div class="tab-pane fade" :class="{ 'active show': isActive('tab-1') }" id="tab-1">
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" :class="{ 'active show': isActive('tab-2') }" id="tab-2">
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $385,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" :class="{ 'active show': isActive('tab-3') }" id="tab-3">
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $985,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="product-item__inner">
                  <div class="product-item__body">
                    <div class="text">
                      <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
                    <h5 class="product-item__title">
                      <a href="../shop/single-product-fullwidth.html"
                      >Wireless Audio System
                        Multiroom 360 degree Full base audio</a></h5>
                    <div class="text">
                      <a href="../shop/single-product-fullwidth.html" class="d-block">
                        <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
                    </div>
                    <div class="product-get">
                      <div class="prodcut-price">
                        $685,00
                      </div>
                      <div class="prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" class="btn-add">
                          <i class="ec ec-add-to-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top">
                    <a href="../shop/compare.html" class="font-size-13">
                      <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                    <a href="../shop/wishlist.html" class="font-size-13">
                      <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabsFirst",
      data() {
          return {
            activeItem: 'tab-1'
          }
      },
      methods: {
        isActive (tabItem) {
          return this.activeItem === tabItem
        },
        setActive (tabItem) {
          this.activeItem = tabItem
        }
      }
    }
</script>

<style lang="sass" scoped>
  .d-flex
    border-bottom: 1px solid #dddddd
    margin-bottom: 15px
    justify-content: space-between
    +md(flex-direction, column)

  .tab

    &__title
      font-size: 22px
      position: relative
      padding-bottom: 0.5rem
      margin-right: 2rem

      &:after
        content: ' '
        height: 2px
        width: 100%
        max-width: 150px
        display: block
        background-color: #fed700
        position: absolute
        bottom: -1px
        left: 0

    &__ctrl
      display: flex
      +md(margin, 15px 5px)
      +md(width, 100%)

    &__item
      margin-right: .4rem
      margin-left: .4rem

    &__link
      font-size: 0.938rem
      color: #7b8186
      border: 2px solid transparent
      padding: 2px 20px
      +md(font-size, 0.8rem)
      +md(padding, 2px 8px)

    &__link.active
        background-color: transparent
        border-color: #fed700
        color: #333e48
        border-radius: 50rem

  .content
    +row-flex

    .link
      +col
      +size(2)
      +md(display, none)

    .tab-content
      +col
      +size(10)
      +size-md(12)
      overflow-x: auto

  .tab-pane
    display: none

  .show
    display: flex
    +md(justify-content, space-around)
    +md(flex-wrap, wrap)

  .product-item
    +size-md(4)
    max-width: 200px
    transition: all .2s ease
    +md(flex-grow, 1)
    +sm(width, 50%)
    +sm(max-width, initial)

    &:hover
      transition: all .2s ease
      transform: scale(1.01)
      box-shadow: 0 0 10px rgba(75, 54, 124, .5)

      .product-item__footer
        opacity: 1

    &__inner
      border-right: 1px solid #e7eaf3

    &__body
      padding: 16px 24px

    .text
      margin-bottom: 10px

      &__cat
        font-size: 0.74987rem

    &__title
      font-size: 0.875rem
      line-height: 1.125rem
      margin-bottom: 10px
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
      overflow: hidden

      a
        color: #0062bd
        font-weight: 700

    .product-get
      display: flex
      align-items: baseline
      justify-content: space-between

    .prodcut-price
      font-size: 1.25038rem
      +md(font-size, 1rem)

    .btn-add
      width: 2.188rem
      height: 2.188rem
      background-color: #e6e6e6
      color: #fff
      display: flex
      align-items: center
      justify-content: center
      border-radius: 6.1875rem
      transition: all 0.2s ease-in-out
      +sm(width, 1.6rem)
      +sm(height, 1.6rem)

      &:hover
        background-color: #fed700
        transform: translateY(-2px)
        transition: all 0.2s ease-in-out

      i
        font-size: 1.25rem
        color: #fff
        +sm(font-size, 1rem)

    .product-item__footer
      margin-top: 5px
      padding-left: 24px
      padding-right: 24px
      padding-bottom: 8px
      opacity: 0
      transition: all 0.4s ease-in-out

      .border-top
        border-top: 1px solid #e7eaf3
        padding-top: .5rem
        display: flex
        align-items: center
        justify-content: space-between
        font-size: 13px

        i
          font-size: 0.8rem
</style>
