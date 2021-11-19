<template>
<div class="container pb-8">
<div class="security-wrapper">
  <h1 class="text-3xl text-gray-700 py-8 capitalize">mobile Verification</h1>
  <div class="security-text bg-white py-12 text-center space-y-8">
    <div class="icon">
       <span class="rating-text-link-color mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
    </span>
      <p class="inline-block">We will send a one time SMS code to your Mobile Number</p>
    </div>
   <div class="mobile-number">
     <input type="number" class="focus:ring-0 border border-gray-300 w-1/2 rounded-sm" placeholder="Enter mobile number">
   </div>
    <div class="code-number relative">
      <input type="number" class="focus:ring-0 border border-gray-300 w-1/2 rounded-sm" placeholder="Enter verification code">
      <div class="cursor-pointer inline-block rating-text-link-color absolute right-56 top-2" onclick="alert('Resend after 60s')">Resend</div>
    </div>
    <div class="btn text-center bg-primary py-2 mt-5 px-8 inline-block cursor-pointer rounded-md">
      <p class="inline-block text-white text-md capitalize">verify Code</p>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "SecurityVerification"
};
</script>

<style scoped>
.security-wrapper{
  width: 70%;
  margin: auto;
}
</style>