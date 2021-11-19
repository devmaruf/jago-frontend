<template>
  <!--  Container-->
  <div class="container">
    <div class="bg-gray-100 py-4">
      <!--    Breadcrumbs start-->
      <div class="breadcrumbs bg-pink-200 mb-8 py-2 px-1">
        <ul class="flex items-center capitalize text-md rating-text-link-color font-normal gap-x-1 tracking-tighter">
          <li>fashion <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg></span>
          </li>
          <li>Girl <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg></span>
          </li>
          <li>clothing <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg></span>
          </li>
          <li>tops <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg></span>
          </li>
          <li class="text-gray-500">T-shirt Korean style stripe rabbit super cute loom RA Marduk wiggle mosquito net mini clear put all Ages</li>
        </ul>
      </div>
      <!--    Breadcrumbs end-->
      <div class="main-wrapper bg-white flex">
        <!--      Product details left side start-->
        <div class="w-9/12 left-side bg-white p-2 flex">
          <!--        image side start-->
          <div class="w-2/6 image-gallery">
            <img src="../../assets/productDetails/product-1.jpg" alt="">
            <!--          image-thumb-slider start-->
            <div class="image-slider flex items-center text-gray-500 mt-7 relative">
          <span class=""><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg>
          </span>
              <!--            single image start-->
              <div class="all-images flex items-center gap-x-2">
                <div class="single-image cursor-pointer rounded-md image-thumb-area overflow-hidden" :class="{'focus:border border-2 border-primary':isSelectedThumb}" @click="updateImageThumb('1')" tabindex="0">
                  <a href="" class=""><img src="../../assets/productDetails/product-1.jpg" class="w-full h-auto object-cover" alt="" @click="$event.preventDefault()"></a>
                </div>
                <div class="single-image cursor-pointer rounded-md image-thumb-area overflow-hidden" :class="{'focus:border border-2 border-primary':isSelectedThumb}" @click="updateImageThumb('2')" tabindex="0">
                  <a href="" class=""><img src="../../assets/productDetails/product-2.jpg" class="w-full h-auto object-cover" alt="" @click="$event.preventDefault()"></a>
                </div>
              </div>
              <!--            single image end-->
              <span class="absolute right-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>
          </span>
            </div>
            <!--          image-thumb-slider end-->
          </div>
          <!--        image side end-->
          <!--        product main details start-->
          <div class="w-4/6 product-details px-6 space-y-5">
            <div class="text-2xl font-normal text-left tracking-tighter">
              <h2>T-shirt Korean style stripe rabbit super cute loom RA Marduk wiggle mosquito net mini clear put all Ages
              </h2>
            </div>
            <!--          product title end-->
            <div class="rating-share flex items-center justify-between">
              <div class="rating">
                <div class="flex items-center text-gray-400 gap-x-2 text-sm">
                  <div class="all-rate flex items-center gap-0 text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <div class="flex items-center gap-x-1 capitalize text-sm rating-text-link-color tracking-tighter">
                    <p><router-link class="hover:underline" to="">72 ratings</router-link></p>
                    <span class="text-gray-500">|</span>
                    <p>
                      <router-link class="hover:underline" to="">45 Answered and questions</router-link>
                    </p>
                  </div>
                </div>
              </div>
              <div class="sharing flex items-center gap-x-3">
              <span class="cursor-pointer text-gray-500 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>
              </span>
                <span class="cursor-pointer text-gray-500 hover:text-primary" @click="handleLoginModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              </span>
              </div>
            </div>
            <!--          rating and sharing end-->
            <!--          Brand link start-->
            <div class="Branding-options">
              <div class="flex items-center text-gray-500 gap-x-2 text-sm">
                <p class="text-md">Brand:</p>
                <div class="flex items-center gap-x-1 capitalize text-sm rating-text-link-color tracking-tighter">
                  <p><router-link class="hover:underline" to="">No brand</router-link></p>
                  <span class="text-gray-500">|</span>
                  <p>
                    <router-link class="hover:underline" to="">more girls from no brand</router-link>
                  </p>
                </div>
              </div>
            </div>
            <!--          Brand link end-->
            <div class="campaign-banner w-full">
              <img src="../../assets/productDetails/bkash.png" class="w-full object-cover" alt="">
            </div>
            <!--          Campaign banner end-->
            <!--  pricing start-->
            <div class="pricing-wrapper">
              <div class="text-3xl text-primary">
                <span class="font-extrabold mr-2">৳</span>300
              </div>
              <!-- Card price end-->
              <!--  card original price-->
              <div class="text-sm text-gray-400 flex items-center gap-x-2">
                <div class="line-through">
                  <span class="sm font-extrabold">৳</span>875
                </div>
                <div class="">-75%</div>
              </div>
            </div>
            <!--  card original price end-->
            <!--          promotion start-->
            <div class="promotion-wrapper flex gap-x-12">
              <div class="capitalize text-lg text-gray-500 tracking-tighter"><p>promotions</p></div>
              <div class="promotion-options promotion-tag-item has-arrow bg-primary rounded px-2 py-1 relative">
                <p class="text-white">Spend ৳ 1,200 get ৳ 50 off</p>
              </div>
            </div>
            <!--          promotion end-->
            <!--          Color family option start-->
            <div class="color-family flex gap-x-10">
              <div class="capitalize text-lg text-gray-500 tracking-tighter"><p>Color family</p></div>
              <div class="image-color-family">
                <div class="capitalize text-md text-gray-600 tracking-tighter"><p>white</p></div>
                <div class="image-slider flex items-center text-gray-500">
                  <!--            single image start-->
                  <div class="all-images flex items-center gap-x-2">
                    <div class="single-image cursor-pointer rounded-md image-thumb-area-sm overflow-hidden" :class="{'focus:border border-2 border-primary':isSelectedThumb}" @click="updateImageThumb('1')" tabindex="0">
                      <a href="" class=""><img src="../../assets/productDetails/product-1.jpg" class="w-full h-auto object-cover" alt="" @click="$event.preventDefault()"></a>
                    </div>
                    <div class="single-image cursor-pointer rounded-md image-thumb-area-sm overflow-hidden" :class="{'focus:border border-2 border-primary':isSelectedThumb}" @click="updateImageThumb('2')" tabindex="0">
                      <a href="" class=""><img src="../../assets/productDetails/product-2.jpg" class="w-full h-auto object-cover" alt="" @click="$event.preventDefault()"></a>
                    </div>
                  </div>
                  <!--            single image end-->
                </div>
              </div>
            </div>
            <!--          Color family option end-->
<!--            size filter-->
            <div class="size-filter flex gap-x-24">
              <div class="capitalize text-lg text-gray-500 tracking-tighter"><p>size</p></div>
              <div class="size-filter-option flex items-center gap-x-2">
<!--               single size item-->
                <input type="radio" id="size-xs" name="size" class="hidden" />
                <label for="size-xs" class="uppercase w-10 h-10 outline-none cursor-pointer rounded-sm border border-dotted border-gray-500 flex items-center justify-center">Xs</label>
<!--               single size item end-->
                <!--               single size item-->
                <input type="radio" id="size-s"  name="size" class="hidden" />
                <label for="size-s" class="uppercase w-10 h-10 outline-none cursor-pointer rounded-sm border border-dotted border-gray-500 flex items-center justify-center">s</label>
                <!--               single size item end-->
                <!--               single size item-->
                <input type="radio" id="size-m"  name="size" class="hidden" />
                <label for="size-m" class="uppercase w-10 h-10 outline-none cursor-pointer rounded-sm border border-dotted border-gray-500 flex items-center justify-center">m</label>
                <!--               single size item end-->
                <!--               single size item-->
                <input type="radio" id="size-l"  name="size" class="hidden" />
                <label for="size-l" class="uppercase w-10 h-10 outline-none cursor-pointer rounded-sm border border-dotted border-gray-500 flex items-center justify-center">l</label>
                <!--               single size item end-->
                <!--               single size item-->
                <input type="radio" id="size-xl" name="size" class="hidden" />
                <label for="size-xl" class="uppercase w-10 h-10 outline-none cursor-pointer rounded-sm border border-dotted border-gray-500 flex items-center justify-center">xl</label>
                <!--               single size item end-->
              </div>
            </div>
<!--            size filter end-->
            <!--            quantity-->
            <div class="quantity flex gap-x-16">
              <div class="capitalize text-lg text-gray-500 tracking-tighter"><p>quantity</p></div>
              <div class="quantity-option text-gray-400 flex items-center gap-0">
                <span class="w-8 h-6 bg-gray-200 rounded-sm flex items-center justify-center cursor-pointer" :class="{'not-allowed': quantity <= 0}" tabindex="0" @click="quantityDecrement">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
                </span>
                <input type="number" v-model="quantity" id="quantity" name="quantity" class="text-center text-gray-600 border-0 w-12 text-lg font-semibold ring-0 focus:ring-0" />

                <span class="w-8 h-6 bg-gray-200 rounded-sm flex items-center justify-center cursor-pointer" tabindex="0" @click="quantityIncrement">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
</svg>
                </span>
              </div>
            </div>
            <!--            quantity end-->
<!--            buy and ad to cart btn-->
           <div class="flex gap-x-32">
             <div class=""></div>
             <div class="flex items-center gap-x-2">
               <button class="buy-now-btn text-white text-lg rounded-sm shadow py-3 px-14 opacity-100 hover:opacity-80 transition-opacity">Buy Now</button>
               <button class="bg-primary text-white text-lg rounded-sm shadow py-3 px-14 opacity-100 hover:opacity-80 transition-opacity">Add to Cart</button>
             </div>
           </div>
<!--            buy and ad to cart btn start-->
          </div>
          <!--        product details end-->
        </div>
        <!--      Product details left side end-->
        <!--      Product details right side start-->
        <div class="w-3/12 right-side bg-gray-50 px-2 space-y-4">
          <div class="address-delivery space-y-4">
            <div class="px-2 flex items-center justify-between text-gray-500 tracking-tighter font-semibold">
              <div class=""><p>Delivery Options</p></div>
              <span class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </span>
            </div>
            <!--          Delivery option title end-->
            <!--            single option start-->
            <div class="px-2 flex items-center justify-between text-gray-500">
              <div class="flex items-start gap-x-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
              </span>
                <div class="text-gray-700"><p class="-mt-1 tracking-tighter text-md leading-normal font-normal">pania, kaliganj,<br>satkhira, khulna</p></div>
              </div>
              <button class="rating-text-link-color uppercase">change</button>
            </div>
            <!--            single option end-->
            <!--            single option start-->
            <div class="px-2 flex items-center justify-between text-gray-500">
              <div class="flex items-start gap-x-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
              </span>
                <div class="capitalize text-gray-700">
                  <p class="tracking-tighter text-md leading-none font-normal">home delivery</p>
                  <span class="text-gray-400">2 - 4 days</span>
                </div>
              </div>
              <div class="text-md font-semibold text-gray-700"><span class="text-xl font-medium">৳</span>35</div>
            </div>
            <!--            single option end-->
            <!--            single option start-->
            <div class="px-2 flex items-center justify-between text-gray-500">
              <div class="flex items-start gap-x-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
              </span>
                <div class="capitalize text-gray-700">
                  <p class="tracking-tighter text-md leading-none font-normal">Cash on Delivery Available</p>
                </div>
              </div>
            </div>
            <!--            single option end-->
            <!--          address change end-->
          </div>
<!--          address delivery end-->
          <div class="bg-white w-full h-2"></div>
          <div class="return-warranty space-y-4">
            <div class="flex items-start px-2 justify-between text-gray-500 tracking-tighter font-semibold">
              <div class=""><p>Return & Warranty</p></div>
              <span class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </span>
            </div>
            <!--          Delivery option title end-->
            <!--            single option start-->
              <div class="flex items-start px-2 gap-x-2 text-gray-500">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
              </span>
                <div class="capitalize text-gray-600">
                  <p class="tracking-tighter text-md leading-none font-normal">7 Day Return</p>
                  <span class="text-gray-400">Change of mind available</span>
                </div>
              </div>
            <!--            single option start-->
            <div class="flex items-start px-2 justify-between text-gray-500">
              <div class="flex items-start gap-x-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
              </span>
                <div class="capitalize text-gray-600">
                  <p class="tracking-tighter text-md leading-none font-normal">Warranty not available</p>
                </div>
              </div>
            </div>
            <!--            single option end-->
          </div>
<!--          Return and Warranty end-->
          <div class="bg-white w-full h-2"></div>
          <div class="shop-option space-y-4">
            <div class="flex items-start px-2 justify-between text-gray-500 tracking-tighter font-semibold">
              <div class=""><p>Sold by</p></div>
            </div>
            <!--          Delivery option title end-->
            <!--            single option start-->
            <div class="flex items-start px-2 justify-between text-gray-500">
                  <div class="text-gray-700"><p class="-mt-1 tracking-tighter text-md leading-normal font-normal">akashshop 1599037225</p></div>
              <div class="flex items-center gap-x-1 rating-text-link-color">
                <span class="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
</svg>
              </span>
                <button class="capitalize font-semibold tracking-tighter">Chat now</button>
              </div>
            </div>
            <!--            single option start-->
              <div class="px-2 flex items-start gap-x-2 text-gray-600">
                <div class="tracking-tighter">
                  <p>positive seller rating</p>
                <span class="font-semibold text-3xl text-gray-700">99%</span>
                </div>
                <div class="tracking-tighter">
                  <p>Ship on Time</p>
                  <span class="font-semibold text-3xl text-gray-700">98%</span>
                </div>
                <div class="tracking-tighter">
                  <p>Chat Response Rate</p>
                  <span class="font-semibold text-3xl text-gray-700">100%</span>
                </div>
              </div>
            <div class="uppercase rating-text-link-color font-semibold hover:underline text-center tracking-tighter">
              <router-link to="">GO TO STORE</router-link>
            </div>
            <!--            single option end-->
          </div>
        </div>
        <!--      Product details right side end-->
      </div>
<!--      product details start-->
      <div class="flex my-8">
        <div class="w-4/5 left px-4">
          <div class="highlight-description">
            <div class="product-title text-gray-700">
              <h2 class="text-xl font-semibold text-gray-700 tracking-tighter">T-shirt Korean style stripe rabbit super cute loom RA Marduk wiggle mosquito net mini clear put all Ages</h2>
            </div>
            <div class="highlight-details my-3">
              <p>A T-shirt is a style of men and women fabric shirt, named after the T shape of the body and sleeves. It is normally associated with short sleeves, a round neckline, known as a crew neck, with no collar. T-shirts are generally made of a light, inexpensive fabric, and are easy to clean.</p>
            </div>
          </div>
          <div class="people-viewed">
            <div class="flash-sale mb-10">
              <!--    section title-->
              <div class="section-title my-5">
                <h2 class="text-gray-700 text-xl font-semibold">People Who Viewed This Item Also Viewed</h2>
              </div>
              <!--    section title end-->
              <!--         product grid start-->
              <div class="grid grid-cols-5 gap-x-2">
                <!--           single product start-->
                <div
                  class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
                >
                  <img
                    src="../../assets/product/1.jpg"
                    class="w-full cursor-pointer"
                    alt=""
                  />
                  <div class="product-details px-2 mt-3 pb-3">
                    <div class="min-h-36 product-title cursor-pointer mb-2">
                      <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                    </div>
                    <!--                  Card price-->
                    <div class="text-lg font-bold text-red-500">
                      <span class="text-sm font-extrabold">৳</span>300
                    </div>
                    <!--                  Card price end-->
                    <!--                  card original price-->
                    <div class="text-sm text-gray-400 flex items-center gap-x-2">
                      <div class="line-through">
                        <span class="sm font-extrabold">৳</span>300
                      </div>
                      <div class="">-75%</div>
                    </div>
                    <!--                  card original price end-->
                    <!--                  star rating-->
                    <div class="flex items-center text-gray-400 text-sm">
                      <div class="flex items-center text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                      <span>(9)</span>
                    </div>
                    <!--                  star rating end-->
                  </div>
                  <!--                product details end-->
                </div>
                <div
                  class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
                >
                  <img
                    src="../../assets/product/2.jpg"
                    class="w-full cursor-pointer"
                    alt=""
                  />
                  <div class="product-details px-2 mt-3 pb-3">
                    <div class="min-h-36 product-title cursor-pointer mb-2">
                      <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                    </div>
                    <!--                  Card price-->
                    <div class="text-lg font-bold text-red-500">
                      <span class="text-sm font-extrabold">৳</span>300
                    </div>
                    <!--                  Card price end-->
                    <!--                  card original price-->
                    <div class="text-sm text-gray-400 flex items-center gap-x-2">
                      <div class="line-through">
                        <span class="sm font-extrabold">৳</span>300
                      </div>
                      <div class="">-75%</div>
                    </div>
                    <!--                  card original price end-->
                    <!--                  star rating-->
                    <div class="flex items-center text-gray-400 text-sm">
                      <div class="flex items-center text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                      <span>(9)</span>
                    </div>
                    <!--                  star rating end-->
                  </div>
                  <!--                product details end-->
                </div>
                <div
                  class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
                >
                  <img
                    src="../../assets/product/3.jpg"
                    class="w-full cursor-pointer"
                    alt=""
                  />
                  <div class="product-details px-2 mt-3 pb-3">
                    <div class="min-h-36 product-title cursor-pointer mb-2">
                      <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                    </div>
                    <!--                  Card price-->
                    <div class="text-lg font-bold text-red-500">
                      <span class="text-sm font-extrabold">৳</span>300
                    </div>
                    <!--                  Card price end-->
                    <!--                  card original price-->
                    <div class="text-sm text-gray-400 flex items-center gap-x-2">
                      <div class="line-through">
                        <span class="sm font-extrabold">৳</span>300
                      </div>
                      <div class="">-75%</div>
                    </div>
                    <!--                  card original price end-->
                    <!--                  star rating-->
                    <div class="flex items-center text-gray-400 text-sm">
                      <div class="flex items-center text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                      <span>(9)</span>
                    </div>
                    <!--                  star rating end-->
                  </div>
                  <!--                product details end-->
                </div>
                <div
                  class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
                >
                  <img
                    src="../../assets/product/4.jpg"
                    class="w-full cursor-pointer"
                    alt=""
                  />
                  <div class="product-details px-2 mt-3 pb-3">
                    <div class="min-h-36 product-title cursor-pointer mb-2">
                      <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                    </div>
                    <!--                  Card price-->
                    <div class="text-lg font-bold text-red-500">
                      <span class="text-sm font-extrabold">৳</span>300
                    </div>
                    <!--                  Card price end-->
                    <!--                  card original price-->
                    <div class="text-sm text-gray-400 flex items-center gap-x-2">
                      <div class="line-through">
                        <span class="sm font-extrabold">৳</span>300
                      </div>
                      <div class="">-75%</div>
                    </div>
                    <!--                  card original price end-->
                    <!--                  star rating-->
                    <div class="flex items-center text-gray-400 text-sm">
                      <div class="flex items-center text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                      <span>(9)</span>
                    </div>
                    <!--                  star rating end-->
                  </div>
                  <!--                product details end-->
                </div>
                <div
                  class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
                >
                  <img
                    src="../../assets/product/5.jpg"
                    class="w-full cursor-pointer"
                    alt=""
                  />
                  <div class="product-details px-2 mt-3 pb-3">
                    <div class="min-h-36 product-title cursor-pointer mb-2">
                      <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                    </div>
                    <!--                  Card price-->
                    <div class="text-lg font-bold text-red-500">
                      <span class="text-sm font-extrabold">৳</span>300
                    </div>
                    <!--                  Card price end-->
                    <!--                  card original price-->
                    <div class="text-sm text-gray-400 flex items-center gap-x-2">
                      <div class="line-through">
                        <span class="sm font-extrabold">৳</span>300
                      </div>
                      <div class="">-75%</div>
                    </div>
                    <!--                  card original price end-->
                    <!--                  star rating-->
                    <div class="flex items-center text-gray-400 text-sm">
                      <div class="flex items-center text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                      <span>(9)</span>
                    </div>
                    <!--                  star rating end-->
                  </div>
                  <!--                product details end-->
                </div>
                <!--           single product end-->
              </div>
              <!--         product grid end-->
            </div>
          </div>
        </div>
        <div class="w-1/5 px-2 right">
          <div class="title">
            <h2 class="text-xl font-semibold text-gray-700 tracking-tighter capitalize">From the same store</h2>
          </div>
          <div class="store-single-product-view my-5 space-y-2">
            <div
              class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
            >
              <img
                src="../../assets/product/1.jpg"
                class="w-full cursor-pointer"
                alt=""
              />
              <div class="product-details px-2 mt-3 pb-3">
                <div class="min-h-36 product-title cursor-pointer mb-2">
                  <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                </div>
                <!--                  Card price-->
                <div class="text-lg font-bold text-red-500">
                  <span class="text-sm font-extrabold">৳</span>300
                </div>
                <!--                  Card price end-->
                <!--                  card original price-->
                <div class="text-sm text-gray-400 flex items-center gap-x-2">
                  <div class="line-through">
                    <span class="sm font-extrabold">৳</span>300
                  </div>
                  <div class="">-75%</div>
                </div>
                <!--                  card original price end-->
                <!--                  star rating-->
                <div class="flex items-center text-gray-400 text-sm">
                  <div class="flex items-center text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <span>(9)</span>
                </div>
                <!--                  star rating end-->
              </div>
              <!--                product details end-->
            </div>
            <div
              class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
            >
              <img
                src="../../assets/product/2.jpg"
                class="w-full cursor-pointer"
                alt=""
              />
              <div class="product-details px-2 mt-3 pb-3">
                <div class="min-h-36 product-title cursor-pointer mb-2">
                  <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                </div>
                <!--                  Card price-->
                <div class="text-lg font-bold text-red-500">
                  <span class="text-sm font-extrabold">৳</span>300
                </div>
                <!--                  Card price end-->
                <!--                  card original price-->
                <div class="text-sm text-gray-400 flex items-center gap-x-2">
                  <div class="line-through">
                    <span class="sm font-extrabold">৳</span>300
                  </div>
                  <div class="">-75%</div>
                </div>
                <!--                  card original price end-->
                <!--                  star rating-->
                <div class="flex items-center text-gray-400 text-sm">
                  <div class="flex items-center text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <span>(9)</span>
                </div>
                <!--                  star rating end-->
              </div>
              <!--                product details end-->
            </div>
            <div
              class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
            >
              <img
                src="../../assets/product/3.jpg"
                class="w-full cursor-pointer"
                alt=""
              />
              <div class="product-details px-2 mt-3 pb-3">
                <div class="min-h-36 product-title cursor-pointer mb-2">
                  <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                </div>
                <!--                  Card price-->
                <div class="text-lg font-bold text-red-500">
                  <span class="text-sm font-extrabold">৳</span>300
                </div>
                <!--                  Card price end-->
                <!--                  card original price-->
                <div class="text-sm text-gray-400 flex items-center gap-x-2">
                  <div class="line-through">
                    <span class="sm font-extrabold">৳</span>300
                  </div>
                  <div class="">-75%</div>
                </div>
                <!--                  card original price end-->
                <!--                  star rating-->
                <div class="flex items-center text-gray-400 text-sm">
                  <div class="flex items-center text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <span>(9)</span>
                </div>
                <!--                  star rating end-->
              </div>
              <!--                product details end-->
            </div>
            <div
              class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
            >
              <img
                src="../../assets/product/4.jpg"
                class="w-full cursor-pointer"
                alt=""
              />
              <div class="product-details px-2 mt-3 pb-3">
                <div class="min-h-36 product-title cursor-pointer mb-2">
                  <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                </div>
                <!--                  Card price-->
                <div class="text-lg font-bold text-red-500">
                  <span class="text-sm font-extrabold">৳</span>300
                </div>
                <!--                  Card price end-->
                <!--                  card original price-->
                <div class="text-sm text-gray-400 flex items-center gap-x-2">
                  <div class="line-through">
                    <span class="sm font-extrabold">৳</span>300
                  </div>
                  <div class="">-75%</div>
                </div>
                <!--                  card original price end-->
                <!--                  star rating-->
                <div class="flex items-center text-gray-400 text-sm">
                  <div class="flex items-center text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <span>(9)</span>
                </div>
                <!--                  star rating end-->
              </div>
              <!--                product details end-->
            </div>
            <div
              class="
              bg-white
              shadow
              cursor-pointer
              overflow-hidden
              hover:shadow-daraz-link
              transition
            "
            >
              <img
                src="../../assets/product/5.jpg"
                class="w-full cursor-pointer"
                alt=""
              />
              <div class="product-details px-2 mt-3 pb-3">
                <div class="min-h-36 product-title cursor-pointer mb-2">
                  <p>HBQ I7S TWS Double Dual Wireless 4.1 Bluetooth...</p>
                </div>
                <!--                  Card price-->
                <div class="text-lg font-bold text-red-500">
                  <span class="text-sm font-extrabold">৳</span>300
                </div>
                <!--                  Card price end-->
                <!--                  card original price-->
                <div class="text-sm text-gray-400 flex items-center gap-x-2">
                  <div class="line-through">
                    <span class="sm font-extrabold">৳</span>300
                  </div>
                  <div class="">-75%</div>
                </div>
                <!--                  card original price end-->
                <!--                  star rating-->
                <div class="flex items-center text-gray-400 text-sm">
                  <div class="flex items-center text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <span>(9)</span>
                </div>
                <!--                  star rating end-->
              </div>
              <!--                product details end-->
            </div>
          </div>
        </div>
      </div>
<!--      product details end-->
    </div>
    <Login
      :isShowingLogin="isShowLoginModal"
      :isEyeOn="isEyeOn"
      :isEyeOff="isEyeOff"
      @closeLoginModal="closeLoginModal"
      @UpdateEyeOff="UpdateEyeOff"
      @UpdateEyeOn="UpdateEyeOn">
    </Login>
    </div>
  <!--  Container end-->
</template>

<script>
import Login from "../../components/Login";
export default {
  name: "ProductDetails",
  components: {
    Login,
  },
  data() {
    return {
      isShowLoginModal: false,
      isEyeOn: false,
      isEyeOff: true,
      quantity: 1,
      isSelectedThumb: false,
    }
  }, //data
  methods: {
    updateImageThumb: function () {
      this.isSelectedThumb = true;
    },
    quantityDecrement: function () {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    quantityIncrement: function () {
      this.quantity++;
    },
    handleLoginModal: function () {
      this.isShowLoginModal = true;
    },
    closeLoginModal:function() {
      this.isShowLoginModal = false;
    },
    UpdateEyeOff:function() {
      this.isEyeOn = true
      this.isEyeOff = false
    },
    UpdateEyeOn:function() {
      this.isEyeOff = true
      this.isEyeOn = false
    },
  }, //methods
};
</script>

<style scoped></style>
