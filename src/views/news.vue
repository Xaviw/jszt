<template>
  <div class="header bg-blue">
    <Header />
    <div class="circle"></div>

    <div class="text-white relative" style="margin: 80px 0 0 300px">
      <div class="text-46">{{ $t('header.news') }}</div>
      <div style="margin-top: 20px">{{ $t('news.info') }}</div>
    </div>
  </div>

  <div class="list">
    <p class="text-24">{{ $t('news.title1') }}</p>
    <p>{{ $t('news.content1') }}</p>
    <div class="img-list">
      <img src="../assets/news-1.png" style="width: 100%;" />
      <img src="../assets/news-2.png" style="width: 100%;" />
      <img src="../assets/news-3.png" style="width: 100%;" />
    </div>
    
    <p class="text-24" style="margin-top: 50px;">{{ $t('news.title2') }}</p>
    <p>{{ $t('news.content2') }}</p>
    <img src="../assets/news-4.png" style="width: 100%;height: 400px;" />
    
    <p class="text-24" style="margin-top: 50px;">{{ $t('news.title3') }}</p>
    <p>{{ $t('news.content3') }}</p>
    <img src="../assets/news-5.png" style="width: 100%;height: 400px;" />

    <p class="text-24" style="margin-top: 50px;">{{ $t('news.title4') }}</p>
    <p>{{ $t('news.content4') }}</p>
    <div class="img-list">
      <img src="../assets/news-6.png" style="width: 100%;" />
      <img src="../assets/news-7.png" style="width: 100%;" />
      <img src="../assets/news-8.png" style="width: 100%;" />
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import i18n from '../locales'
</script>

<style scoped lang="less">
.header {
  position: relative;
  padding-bottom: 224px;
  overflow: hidden;
}

.circle {
  position: absolute;
  top: -30%;
  right: -20%;
  width: 50vw;
  max-width: 900px;
  height: 50vw;
  max-height: 900px;
  background-color: #2a35a7;
  border-radius: 50%;
}

.list {
  position: relative;
  max-width: 1800px;
  margin: -60px auto 40px auto;
  padding: 80px;
  border-left: 2px solid;
}

.img-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
}

</style>
