<template>
<div class="font-siliguri">
  <div class="bg-gray-300">
    <div class="container footer py-6">
      <div class="flex items-center justify-between">
        <div class="logo-footer">
          <router-link to=""><img src="../assets/logo/logo.png" alt=""></router-link>
        </div>
        <div class="download-icon">
          <div class="flex items-center gap-x-3">
            <div class="android"><a href=""><img src="../assets/download/android.png" alt="" class="w-full object-cover"></a></div>
            <div class="apple"><a href=""><img src="../assets/download/apple.png" alt="" class="w-full object-cover"></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-footer bg-white">
    <div class="container footer">
      <div class="top text-sm text-gray-500 py-4">
        <p>Jagonews24.com is one of the popular Bangla news portal. It has begun with commitment of fearless, investigative, informative and independent journalism. This online portal has started to provide real time news updates with maximum use of modern technology from May 10th 2014. Latest & breaking news of home and abroad, entertainment, lifestyle, special reports, politics, economics, culture, education, information technology, health, sports, columns and features are included in it. A genius team of Jago News has been built with a group of country's energetic young journalists. We are trying to build a bridge with Bengali's around the world and adding a new dimension to online news portal. The home of materialistic news.</p>
      </div>
      <div class="bottom flex justify-between py-4">
        <div class="left-info text-sm text-gray-500">
          <p>ভারপ্রাপ্ত সম্পাদক: জিয়াউল হক</p>
          <p>© ২০২১ সর্বস্বত্ব সংরক্ষিত | জাগোনিউজ২৪.কম, একেসি প্রাইভেট লিমিটেডের একটি প্রতিষ্ঠান</p>
          <p> আজহার কমফোর্ট কমপ্লেক্স (৫ম তলা), গ-১৩০/এ প্রগতি সরণি, মধ্যবাড্ডা, ঢাকা-১২১২</p>
          <p> ৮৮ ০২ ২২২২৬২৬৮৯ ,  ৮৮ ০২ ৯৮৪২১৭৬  info@jagonews24.com</p>
        </div>
        <div class="right-link flex items-center gap-x-3">
          <router-link to=""><div class="border border-gray-600 text-center py-1 px-3 text-sm rounded-sm bg-white text-gray-600 hover:bg-gray-700 hover:text-white transition-all">আমাদের কথা</div></router-link>
          <router-link to=""><div class="border border-gray-600 text-center py-1 px-3 text-sm rounded-sm bg-white text-gray-600 hover:bg-gray-700 hover:text-white transition-all">যোগাযোগ</div></router-link>
          <router-link to=""><div class="border border-gray-600 text-center py-1 px-3 text-sm rounded-sm bg-white text-gray-600 hover:bg-gray-700 hover:text-white transition-all">প্রাইভেসি পলিসি</div></router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "footerComponent"
};
</script>

<style scoped>
.android{
  min-width: 200px !important;
  min-height: 60px !important;
  max-width: 200px !important;
  max-height: 60px !important;
  overflow: hidden;
}
.apple{
  min-width: 200px !important;
  min-height: 60px !important;
  max-width: 200px !important;
  max-height: 60px !important;
  overflow: hidden;
}
.logo-footer{
  min-width: 255px !important;
  min-height: 60px !important;
  max-width: 255px !important;
  max-height: 60px !important;
  overflow: hidden;
}
</style>