<template>
<div class="container pb-8">
<div class="security-wrapper">
  <h1 class="text-3xl text-gray-700 py-8 capitalize">email Verification</h1>
  <div class="security-text bg-white py-12 text-center space-y-8">
    <div class="icon">
       <span class="rating-text-link-color mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 inline-block" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd" />
</svg>
    </span>
      <p class="inline-block">We will send a one time verification code to your email Address</p>
    </div>
   <div class="email-number">
     <input type="number" class="focus:ring-0 border border-gray-300 w-1/2 rounded-sm" placeholder="Enter email address">
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