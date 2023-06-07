<template>
  <div id="app">
    <Header />
    
    <router-view/>
    <Footer />
  </div>
</template>
<script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Vue from 'vue';
  import App from './App.vue';

  Vue.prototype.$url='http://localhost:4201/api'
  Vue.prototype.$token=localStorage.getItem('token');
  
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
