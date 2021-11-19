<template>
  <div id="app" class="font-Raleway">
    <Header></Header>
    <div class="bg-gray-100">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/footer"
export default {
  data(){
    return{

    }
  },
  components:{
    Header,
    Footer,
  }
}
</script>
<style scoped></style>
