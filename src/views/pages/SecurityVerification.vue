<template>
<div class="container pb-8">
<div class="security-wrapper">
  <h1 class="text-3xl text-gray-700 py-8">Security Verification</h1>
  <div class="security-text bg-white py-12 text-center">
    <div class="icon text-center">
      <span class="text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 inline-block" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
      </span>
    </div>
    <div class="text-md text-gray-500">
      <p>To protect your account security, we need to verify your identity <br> Please choose a way to verify:</p>
    </div>
   <div class="btn-link mt-5 space-x-4">
     <div class="btn text-center bg-primary py-2 px-8 inline-block cursor-pointer rounded-md">
    <span class="text-white mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
    </span>
       <router-link :to="{ name: 'MobileVerification'}"><p class="inline-block text-white text-md">verify through SMS Code</p></router-link>
     </div>
     <div class="btn text-center bg-primary py-2 px-8 inline-block cursor-pointer rounded-md">
    <span class="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd" />
      </svg>
    </span>
       <router-link :to="{ name: 'EmailVerification'}"><p class="inline-block text-white ml-2 text-md">verify through email</p></router-link>
     </div>
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