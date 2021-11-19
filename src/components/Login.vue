<template>
  <div v-if="isShowingLogin" class="">
    <div class="backdrop-login bg-black w-full h-full fixed inset-0 opacity-30 transition-opacity"></div>
    <div :class="{'expand-open':isShowingLogin}" class="modal custom-modal text-gray-600 bg-white py-10 px-12">
      <div class="modal-header space-y-3 relative">
        <span @click="closeLogin" class="absolute -right-5 -top-8 text-3xl cursor-pointer">&times;</span>
        <h2 class="text-2xl font-semibold">Welcome! Please Login to continue.</h2>
        <p class="rating-text-link-color">new member? <a class="underline" href="">Register here</a></p>
      </div>
      <div class="modal-body mt-4">
        <form class="space-y-3" action="">
              <div class="">
                <label class="block" for="email">Phone Number or Email <span class="text-red-600">*</span></label>
                <input class="w-full outline-none focus:ring-0 bg-gray-200 border rounded-sm" style="border-color: #dddddd" type="text" id="email">
              </div>
              <div class="">
                <label class="block" for="password">Password<span class="text-red-600">*</span></label>
                <div class="relative password">
                <input class="w-full outline-none focus:ring-0 bg-gray-200 border rounded-sm " style="border-color: #dddddd" :type="isEyeOff ? 'password' :'text' " id="password">
                <span v-if="isEyeOff" class="eyeOff absolute text-gray-500 cursor-pointer" @click="UpdateEyeOff">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
</svg>
                </span>
                <span v-if="isEyeOn" class="eyeOn absolute text-gray-500 cursor-pointer" @click="UpdateEyeOn">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
                </span>
                </div> <!--                password-->
              </div>
          <div class="text-center">
            <button class="buy-now-btn text-white text-lg rounded-sm shadow py-2 px-20 opacity-100 hover:opacity-80 transition-opacity">Login</button>
          </div>
        </form>
      </div>
      <div class="modal-footer">

      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Login",
  props:{
    isShowingLogin:{
      type: Boolean,
    },
    isEyeOn:{
      type: Boolean,
      default: false,
    },
    isEyeOff: {
      type: Boolean,
      default: true,
    },
    
  }, //props
  computed:{

  }, //computed property
  data(){
  return{
    isShowingModal: false,
    type: 'text',
  }
  }, //data
  methods: {
    closeLogin: function () {
      this.$emit("closeLoginModal", this.isShowingLogin);
    },
    UpdateEyeOff:function() {
      this.$emit("UpdateEyeOff", this.isEyeOff);
    },
    UpdateEyeOn:function() {
      this.$emit("UpdateEyeOn", this.isEyeOn);
    },
  }, //methods
}
</script>

<style scoped>

</style>