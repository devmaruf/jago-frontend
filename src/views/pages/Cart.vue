<template>
<div class="bg-gray-200 min-h-screen">
  <div class="container">
    <div class="flex gap-x-3">
      <!--  left-side-->
      <div class="w-4/6 cart-left mt-3 space-y-3">
        <div class="px-3 py-5 bg-white preferred-delivery-option text-gray-700 text-md tracking-tighter shadow-daraz-link">
          <h4 class="">Preferred Delivery Option</h4>
          <div class="shipping-box inline-block mt-4 p-3 cursor-pointer border border-green-500 rounded-md">
           <div class="flex items-start gap-x-4">
             <div class="success-sign rating-text-link-color">
               <div class="span">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                   <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                 </svg>
               </div>
             </div>
<!--             success-sign end-->
             <div class="box-details">
               <div class="text-md">
                   <span class="font-extrabold mr-1">৳</span>300
                 <div class="mode text-gray-500">
                   <p>standard</p>
                 </div>
                 <div class="estimation-date text-gray-500">
                   <p>Estimated Delivery By 22-28 Nov, 2021</p>
                 </div>
               </div>
             </div>
<!--             Box details end-->
           </div>
          </div>
        </div>
<!--        Preferred Delivery Option end-->
        <div class="flex p-3 items-center justify-between bg-white shadow-daraz-link">
          <div class="flex items-center text-sm text-gray-500">
            <input type="checkbox" class="mr-3 text-primary text-md focus:ring-0 cursor-pointer" id="select-all" name="select-all">
            <label class="cursor-pointer" for="select-all">SELECT ALL (10 ITEM(S))</label>
          </div>
          <div class="">
            <div class="flex gap-x-1 items-center uppercase text-gray-400 tracking-tighter cursor-pointer hover:text-primary">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
            </span>
              <p>delete</p>
              <!--            delete icon end-->
            </div>
          </div>
        </div>
<!--        all select checkbox end-->

<!--        All cart items start-->
        <div class="all-items-in-cart bg-white p-3 shadow-daraz-link">
          <div class="divide-y-2">
            <div class="flex items-center text-sm text-gray-500">
              <input type="checkbox" class="mr-3 text-primary text-md focus:ring-0 cursor-pointer" id="select-all-items" name="select-all-items">
              <label class="cursor-pointer text-gray-600 font-semibold" for="select-all-items">HH Fashion <span class="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
              </span></label>
            </div>
            <div class="ml-7 flex items-center justify-between divide-gray-400 mt-3">
              <div class="estimation tracking-tighter text-sm text-gray-500" >
                <p>Spend ৳ 675 more enjoy free shipping for Standard delivery option</p>
              </div>
              <div class="">
                <p class="text-gray-500">Estimate Time <span class="text-gray-600 font-semibold">22 Nov</span></p>
              </div>
            </div>
          </div>
          <div class="selection-items-wrapper space-y-12">
<!--          single-cart-item-->
            <div class="flex justify-between items-center bg-white mt-5">
              <div class="checkbox">
                <input type="checkbox" class="text-primary text-md focus:ring-0 cursor-pointer" name="select-single-item">
              </div>
              <div class="item-details cursor-pointer">
                <div class="flex items-start gap-x-3">
                  <div class="" style="width: 70px; height: auto">
                    <img src="../../assets/product/1.jpg" class="w-full object-cover" alt="">
                  </div>
                  <div class="details">
                    <h3 class="text-gray-700 text-md tracking-tighter mb-1">Winter Cotton Stylish Cap For Men & Women _HH Fashion</h3>
                    <span class="text-sm text-gray-500">No Brand, Color Family:Navy Blue, Size:Int: One size</span>
                  </div>
                </div>
              </div>
              <div class="item-price">
                <!--                  Card price-->
                <div class="text-lg font-normal text-red-500">
                  <span class="text-sm font-extrabold">৳</span>300
                </div>
                <!--                  Card price end-->
                <!--                  card original price-->
                <div class="text-sm text-gray-400">
                  <div class="line-through">
                    <span class="sm font-extrabold">৳</span>300
                  </div>
                  <div class="">-75%</div>
                </div>
                <!--                  card original price end-->
                <div class="sharing flex items-center gap-x-3">
              <span class="cursor-pointer text-gray-500 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>
              </span>
                  <span class="cursor-pointer text-gray-500 hover:text-primary" @click="handleLoginModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              </span>
                </div>
              </div>
              <div class="quantity">
                <div class="quantity-option text-gray-400 flex items-center gap-0">
                <span class="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center cursor-pointer" :class="{'not-allowed': quantity <= 0}" tabindex="0" @click="quantityDecrement">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
                </span>
                  <input type="number" v-model="quantity" id="quantity" name="quantity" class="text-center text-gray-600 border-0 w-12 text-lg font-semibold ring-0 focus:ring-0" />

                  <span class="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center cursor-pointer" tabindex="0" @click="quantityIncrement">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
</svg>
                </span>
                </div>
              </div>
            </div>
<!--          single-cart-item end-->
            <!--          single-cart-item-->
            <div class="flex justify-between items-center bg-white mt-5">
              <div class="checkbox">
                <input type="checkbox" class="text-primary text-md focus:ring-0 cursor-pointer" name="select-single-item">
              </div>
              <div class="item-details cursor-pointer">
                <div class="flex items-start gap-x-3">
                  <div class="" style="width: 70px; height: auto">
                    <img src="../../assets/product/1.jpg" class="w-full object-cover" alt="">
                  </div>
                  <div class="details">
                    <h3 class="text-gray-700 text-md tracking-tighter mb-1">Winter Cotton Stylish Cap For Men & Women _HH Fashion</h3>
                    <span class="text-sm text-gray-500">No Brand, Color Family:Navy Blue, Size:Int: One size</span>
                  </div>
                </div>
              </div>
              <div class="item-price">
                <!--                  Card price-->
                <div class="text-lg font-normal text-red-500">
                  <span class="text-sm font-extrabold">৳</span>300
                </div>
                <!--                  Card price end-->
                <!--                  card original price-->
                <div class="text-sm text-gray-400">
                  <div class="line-through">
                    <span class="sm font-extrabold">৳</span>300
                  </div>
                  <div class="">-75%</div>
                </div>
                <!--                  card original price end-->
                <div class="sharing flex items-center gap-x-3">
              <span class="cursor-pointer text-gray-500 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>
              </span>
                  <span class="cursor-pointer text-gray-500 hover:text-primary" @click="handleLoginModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              </span>
                </div>
              </div>
              <div class="quantity">
                <div class="quantity-option text-gray-400 flex items-center gap-0">
                <span class="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center cursor-pointer" :class="{'not-allowed': quantity <= 0}" tabindex="0" @click="quantityDecrement">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
                </span>
                  <input type="number" v-model="quantity" id="quantity" name="quantity" class="text-center text-gray-600 border-0 w-12 text-lg font-semibold ring-0 focus:ring-0" />

                  <span class="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center cursor-pointer" tabindex="0" @click="quantityIncrement">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
</svg>
                </span>
                </div>
              </div>
            </div>
            <!--          single-cart-item end-->
          </div>
        </div>
<!--        All cart items start end-->
      </div>
      <!-- left side end-->
      <!--  order summary-->
      <div class="w-2/6 mt-3 cart-right">
        <div class="summary-wrapper p-3 bg-white space-y-4 shadow-daraz-link">
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <div class="summarry-title text-xl text-gray-700 font-semibold"><h2>Order Summary</h2></div>
            </div>
          </div>
<!--          single-line-->
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <div class="text-md text-gray-500"><p>Subtotal (11 items)</p></div>
            </div>
            <div class="text-lg font-normal text-gray-700">
              <span class="text-sm font-extrabold mr-1">৳</span>
              <p class="inline-block text-lg">300</p>
            </div>
          </div>
<!--          single-line end-->
          <!--          single-line-->
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <div class="text-md text-gray-500"><p>Shipping Fee</p></div>
            </div>
            <div class="text-lg font-normal text-gray-700">
              <span class="text-sm font-extrabold mr-1">৳</span>
              <p class="inline-block text-lg">300</p>
            </div>
          </div>
          <!--          single-line end-->
          <!--          single-line-->
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <div class="text-md text-gray-500"><p>Shipping Fee Discount</p></div>
            </div>
            <div class="text-lg font-normal text-gray-700">
              <span class="text-sm font-extrabold mr-1">-৳</span>
              <p class="inline-block text-lg">300</p>
            </div>
          </div>
          <!--          single-line end-->
          <!--          single-line-->
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <input type="text" class="focus:ring-0 border border-gray-300 rounded-sm w-full" name="voucher" placeholder="Enter Voucher Code">
            </div>
            <div class="text-lg font-medium text-gray-700">
              <button class="buy-now-btn text-white text-lg rounded-sm shadow py-2 px-12 opacity-100 hover:opacity-80 transition-opacity">Apply</button>
            </div>
          </div>
          <!--          single-line end-->
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <div class="text-md text-gray-500"><p>Total</p></div>
            </div>
            <div class="text-lg font-normal text-primary">
              <span class="text-sm font-extrabold mr-1">৳</span>
              <p class="inline-block text-md">300</p>
            </div>
          </div>
          <div class="text-lg font-medium text-gray-700 text-center">
            <button class="uppercase bg-primary text-white text-lg rounded-sm shadow py-2 px-20 opacity-100 hover:opacity-80 transition-opacity">Proceed to checkout</button>
          </div>
        </div>
      </div>
      <!--  order summary end-->
    </div>
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
</template>

<script>
import Login from "../../components/Login";
export default {
  name: "Cart",
  components:{
    Login,
  },
  data(){
    return{
      isShowLoginModal: false,
      isEyeOn: false,
      isEyeOff: true,
      quantity: 1,
    }
  }, //data end
  methods: {
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

<style scoped>

</style>