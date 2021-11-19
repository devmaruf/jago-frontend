<template>
<div class="bg-gray-200 min-h-screen">
  <div class="container">
    <div class="flex gap-x-3 pb-10">
      <!--  left-side-->
      <div class="w-4/6 cart-left mt-3 space-y-3">
<!--        Single package for single or multiple items-->
        <div class="p-3 bg-white preferred-delivery-option text-gray-700 text-md tracking-tighter shadow-daraz-link">
          <!--          packaging info-->
          <div class="flex items-center justify-between text-gray-700 font-medium mb-2">
            <div class=""><h2>Package 1 of 3</h2></div>
            <div class=""><span class="text-gray-400 text-sm mr-2">Shipped by</span><h2 class="inline-block">Khairul Islam Palash</h2></div>
          </div>
          <!--          packaging info-->
          <h4 class="">Delivery Option</h4>
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
                    <p>Home Delivery</p>
                  </div>
                  <div class="estimation-date text-gray-500">
                    <p>Estimated Delivery By 22-28 Nov, 2021</p>
                  </div>
                </div>
              </div>
              <!--             Box details end-->
            </div>
          </div>
          <!--        All single items start-->
          <div class="all-items-in-cart bg-white p-3">
            <div class="selection-items-wrapper space-y-12">
              <!--          single-cart-item-->
              <div class="flex justify-between items-center bg-white mt-5">
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
              <span class="cursor-pointer text-gray-500 hover:text-primary" @click="handleConfirmModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></span>
                  </div>
                </div>
                <div class="quantity text-gray-500"><h3 class="inline-block mr-1">Qty:</h3><span class="text-gray-700">5</span></div>
              </div>
              <!--          single-cart-item end-->
            </div>
          </div>
          <!--        All single items start end-->
          <!--        All single items start-->
          <div class="all-items-in-cart bg-white p-3">
            <div class="selection-items-wrapper space-y-12">
              <!--          single-cart-item-->
              <div class="flex justify-between items-center bg-white mt-5">
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
              <span class="cursor-pointer text-gray-500 hover:text-primary" @click="handleConfirmModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></span>
                  </div>
                </div>
                <div class="quantity text-gray-500"><h3 class="inline-block mr-1">Qty:</h3><span class="text-gray-700">5</span></div>
              </div>
              <!--          single-cart-item end-->
            </div>
          </div>
          <!--        All single items start end-->
        </div>
<!--        Single package for single or multiple items end-->
        <!--        Single package for single or multiple items-->
        <div class="p-3 bg-white preferred-delivery-option text-gray-700 text-md tracking-tighter shadow-daraz-link">
          <!--          packaging info-->
          <div class="flex items-center justify-between text-gray-700 font-medium mb-2">
            <div class=""><h2>Package 2 of 3</h2></div>
            <div class=""><span class="text-gray-400 text-sm mr-2">Shipped by</span><h2 class="inline-block">Emon Khan</h2></div>
          </div>
          <!--          packaging info-->
          <h4 class="">Delivery Option</h4>
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
                    <p>Home Delivery</p>
                  </div>
                  <div class="estimation-date text-gray-500">
                    <p>Estimated Delivery By 22-28 Nov, 2021</p>
                  </div>
                </div>
              </div>
              <!--             Box details end-->
            </div>
          </div>
          <!--        All single items start-->
          <div class="all-items-in-cart bg-white p-3">
            <div class="selection-items-wrapper space-y-12">
              <!--          single-cart-item-->
              <div class="flex justify-between items-center bg-white mt-5">
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
              <span class="cursor-pointer text-gray-500 hover:text-primary" @click="handleConfirmModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></span>
                  </div>
                </div>
                <div class="quantity text-gray-500"><h3 class="inline-block mr-1">Qty:</h3><span class="text-gray-700">5</span></div>
              </div>
              <!--          single-cart-item end-->
            </div>
          </div>
          <!--        All single items start end-->
          <!--        All single items start-->
          <div class="all-items-in-cart bg-white p-3">
            <div class="selection-items-wrapper space-y-12">
              <!--          single-cart-item-->
              <div class="flex justify-between items-center bg-white mt-5">
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
              <span class="cursor-pointer text-gray-500 hover:text-primary" @click="handleConfirmModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></span>
                  </div>
                </div>
                <div class="quantity text-gray-500"><h3 class="inline-block mr-1">Qty:</h3><span class="text-gray-700">5</span></div>
              </div>
              <!--          single-cart-item end-->
            </div>
          </div>
          <!--        All single items start end-->
        </div>
        <!--        Single package for single or multiple items end-->
      </div>
      <!-- left side end-->
      <!--  order summary-->
      <div class="w-2/6 mt-3 cart-right">
        <div class="summary-wrapper p-3 bg-white space-y-4 shadow-daraz-link">
<!--          Proceed to Pay btn-->
          <div class="font-medium text-gray-700 text-center">
            <div class="w-full py-2 items-center justify-center uppercase inline-block bg-primary text-white text-md rounded-sm shadow cursor-pointer opacity-100 hover:opacity-80 transition-opacity">Proceed to Pay</div>
          </div>
<!--          Proceed to Pay btn-->
<!--          shipping & billing title-->
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <div class="summarry-title text-xl text-gray-700 font-semibold"><h2>Shipping & Billing</h2></div>
            </div>
          </div>
<!--          shipping & billing title-->
<!--          All shipping & billing info-->
          <div class="space-y-5 mb-8">
            <!--          Shipping single line with edit-->
            <div class="flex items-start justify-between">
              <div class="wrap-single-line-info">
                <div class="left flex items-center">
                <span class="rating-text-link-color">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
</svg>
                </span>
                  <div class="name text-gray-800 font-medium text-md ml-2">Maruf afridi</div>
                </div>
                <div class="text-gray-800 text-md font-normal ml-6" style="width: 70%"><p>Pania, kaligonj,satkhira, Kaliganj UPO, Satkhira, Khulna</p></div>
              </div>
              <div class="right">
                <div class="edit-btn uppercase rating-text-link-color text-md font-normal cursor-pointer">
                  <h3>edit</h3>
                </div>
              </div>
            </div>
            <!--          Shipping single line with edit-->
            <!--          Shipping single line with edit-->
            <div class="flex items-center justify-between">
              <div class="left">
                <div class="flex items-center">
                  <span class="rating-text-link-color">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
</svg>
                </span>
                  <div class="name text-gray-700 font-normal text-md ml-2 inline-block">Bill to the same address</div>
                </div>
              </div>
              <div class="right">
                <div class="edit-btn uppercase rating-text-link-color text-md font-normal cursor-pointer">
                  <h3>edit</h3>
                </div>
              </div>
            </div>
            <!--          Shipping single line with edit-->
            <!--          Shipping single line with edit-->
            <div class="flex items-center justify-between">
              <div class="left">
                <div class="flex items-center">
                  <span class="rating-text-link-color">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
</svg>
                </span>
                  <div class="name text-gray-700 font-normal text-md ml-2 inline-block">01986674134</div>
                </div>
              </div>
              <div class="right">
                <div class="edit-btn uppercase rating-text-link-color text-md font-normal cursor-pointer">
                  <h3>edit</h3>
                </div>
              </div>
            </div>
            <!--          Shipping single line with edit-->
            <!--          Shipping single line with edit-->
            <div class="flex items-center justify-between">
              <div class="left">
                <div class="flex items-center">
                  <span class="rating-text-link-color">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                </span>
                  <div class="name text-gray-700 font-normal text-md ml-2 inline-block">please input email</div>
                </div>
              </div>
              <div class="right">
                <div class="edit-btn uppercase rating-text-link-color text-md font-normal cursor-pointer">
                  <h3>edit</h3>
                </div>
              </div>
            </div>
            <!--          Shipping single line with edit-->
          </div>
<!--          All shipping & billing info-->
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
          <!--          Proceed to Pay btn-->
           <!--          single-line end-->
          <div class="flex justify-between items-center ">
            <div class="single-line">

            </div>
            <div class="text-lg font-normal text-gray-600">
              <p class="inline-block text-sm">VAT included, where applicable</p>
            </div>
          </div>
          <!--          Proceed to Pay btn-->

          <div class="font-medium text-gray-700 text-center">
            <div class="w-full py-2 items-center justify-center uppercase inline-block bg-primary text-white text-md rounded-sm shadow cursor-pointer opacity-100 hover:opacity-80 transition-opacity">Proceed to Pay</div>
          </div>
          <!--          Proceed to Pay btn-->
        </div>
      </div>
      <!--  order summary end-->
    </div>
  </div>
<!--  modal-confirm-->
  <transition name="expand">
    <div v-if="isShowConfirmModal" class="confirm-modal">
      <div class="backdrop-login bg-black w-full h-full fixed inset-0 opacity-40 transition-opacity"></div>
      <div :class="{'expand-open': isShowConfirmModal}" class="item-delete-confirm fixed px-8 py-10 bg-white">
        <div class="relative cancle-sign">
        <span class="absolute right-0 -top-6 cursor-pointer" @click="CloseConfirmModal">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
        </span>
        </div>
        <p class="text-gray-600 text-md font-medium">Remove from checkout?</p>
        <p class="text-gray-500 text-md">Item(s) will be removed from order</p>
        <div class="btn-confirmation flex items-center gap-x-3 mt-8 justify-end">
          <div class="cancle btn-md bg-green-600 hover:opacity-80">cancle</div>
          <div class="cancle btn-md bg-primary hover:opacity-80">remove</div>
        </div>
      </div>
    </div>
  </transition>
<!--  modal-confirm-->
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
  name: "ShippingDetails",
  components:{
    Login,
  },
  data(){
    return{
      isShowLoginModal: false,
      isShowConfirmModal: false,
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
    handleConfirmModal:function() {
      this.isShowConfirmModal = true;
    },
    CloseConfirmModal:function() {
      this.isShowConfirmModal = false;
    }
  }, //methods
};
</script>

<style scoped>
.item-delete-confirm{
  width: 50%;
  max-width: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

</style>