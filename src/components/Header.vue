<template>
  <div class="header">
    <div class="bg-white py-3.5" style="background: #fff !important">
      <div class="container head-main flex items-center justify-between">
        <div class="">
          <div class="en-date text-gray-500 text-md"><p>বুধবার, ১৭ নভেম্বর ২০২১</p></div>
          <div class="bn-date text-gray-500 text-md"><p>২ অগ্রহায়ণ ১৪২৮ বঙ্গাব্দ</p></div>
        </div>
        <div class="flex items-center justify-center">
          <router-link :to="{ name: 'Home' }">
            <img src="../assets/logo/logo.png" width="350" alt="">
          </router-link>
        </div>
        <div class="">
          
        </div>
      </div>
      <div class="menu bg-primary h-6 w-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
