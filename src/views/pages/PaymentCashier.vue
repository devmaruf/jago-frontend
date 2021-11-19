<template>
<div class="bg-gray-200 min-h-screen">
  <div class="container">
    <div class="flex gap-x-3">
      <!--  left-side-->
      <div class="w-4/6 cart-left mt-3 space-y-3">
        <h2 class="text-2xl font-medium text-gray-600">Select Payment Method</h2>
        <div class="px-3 py-5 bg-white preferred-delivery-option text-gray-700 text-md tracking-tighter">
          <div class="payment-option flex items-center gap-x-5">
<!--            single payment start-->
            <div class="payment-wrapper cursor-pointer text-center hover:shadow-daraz-link p-3 transition">
                <span>
                  <img src="../../assets/payment/credit.png" width="50" height="40" class="object-cover ml-auto mr-auto" alt="">
                </span>
              <div class="title capitalize text-sm font-medium text-gray-600">
                <h2>Credit/Debit Card</h2>
              </div>
            </div>
<!--            single payment start end-->
            <!--            single payment start-->
            <div class="payment-wrapper cursor-pointer text-center hover:shadow-daraz-link p-3 transition">
                <span>
                  <img src="../../assets/payment/installment.png" width="50" height="40" class="object-cover ml-auto mr-auto" alt="">
                </span>
              <div class="title capitalize text-sm font-medium text-gray-600">
                <h2>Installment</h2>
              </div>
            </div>
<!--            single payment start end-->
            <!--            single payment start-->
            <div class="payment-wrapper cursor-pointer text-center hover:shadow-daraz-link p-3 transition">
                <span>
                  <img src="../../assets/payment/dbbl.png" width="50" height="40" class="object-cover ml-auto mr-auto" alt="">
                </span>
              <div class="title text-sm font-medium text-gray-600">
                <h2>DBBL Nexus Card</h2>
              </div>
            </div>
            <!--            single payment start end-->
            <!--            single payment start-->
            <div class="payment-wrapper cursor-pointer text-center hover:shadow-daraz-link p-3 transition">
                <span>
                  <img src="../../assets/payment/rocket.png" width="50" height="40" class="object-cover ml-auto mr-auto" alt="">
                </span>
              <div class="title capitalize text-sm font-medium text-gray-600">
                <h2>Rocket</h2>
              </div>
            </div>
            <!--            single payment start end-->
            <!--            single payment start-->
            <div class="payment-wrapper cursor-pointer text-center hover:shadow-daraz-link p-3 transition">
                <span>
                  <img src="../../assets/payment/bkash.png" width="50" height="40" class="object-cover ml-auto mr-auto" alt="">
                </span>
              <div class="title capitalize text-sm font-medium text-gray-600">
                <h2>Save bKash Account</h2>
              </div>
            </div>
            <!--            single payment start end-->
            <!--            single payment start-->
            <div class="payment-wrapper cursor-pointer text-center hover:shadow-daraz-link p-3 transition">
                <span>
                  <img src="../../assets/payment/cashOn.png" width="50" height="40" class="object-cover ml-auto mr-auto" alt="">
                </span>
              <div class="title capitalize text-sm font-medium text-gray-600">
                <h2>Cash On Delivery</h2>
              </div>
            </div>
            <!--            single payment start end-->

          </div>
        </div>
      </div>
      <!-- left side end-->
      <!--  order summary-->
      <div class="w-2/6 mt-14 cart-right">
        <div class="summary-wrapper p-3 bg-white space-y-4">
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <div class="summarry-title text-xl text-gray-700 font-semibold"><h2>Order Summary</h2></div>
            </div>
          </div>
          <!--          single-line-->
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <div class="text-sm text-gray-600"><p>Subtotal (9 Items and shipping fee included)</p></div>
            </div>
            <div class="text-lg font-normal text-gray-700">
              <span class="text-sm font-extrabold mr-1">৳</span>
              <p class="inline-block text-lg">300</p>
            </div>
          </div>
          <!--          single-line end-->
          <!--          single-line end-->
          <div class="flex justify-between items-center ">
            <div class="single-line">
              <div class="text-md font-medium text-gray-600"><p>Total Amount</p></div>
            </div>
            <div class="font-medium text-primary">
              <span class="text-2xl font-extrabold mr-1">৳</span>
              <p class="inline-block text-2xl">300</p>
            </div>
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
  name: "PaymentCashier",
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