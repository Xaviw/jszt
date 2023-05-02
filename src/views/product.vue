<template>
  <div class="header bg-blue">
    <Header />
    <div class="circle"></div>

    <div class="text-white relative" style="margin: 80px 0 0 300px">
      <div class="text-46">{{ $t('header.product') }}</div>
      <div style="margin-top: 20px">{{ $t('product.info') }}</div>
    </div>
  </div>

  <div class="list">
    <div class="img-1"></div>
    <div v-for="(item, index) in list" :key="index" style="margin: 50px 100px">
      <p class="text-24">{{ index + 1 }}.{{ item.title }}</p>
      <p class="text-gray" style="margin-top: 18px; line-height: 1.5">{{ item.content }}</p>
    </div>
  </div>

  <div class="flex items-center bg-blue" style="margin-bottom: 60px; padding: 28px;">
    <div class="flex justify-center flex-1">
      <div class="img-2"></div>
    </div>
    <div class="text-white flex-1 flex-col justify-center">
      <p class="text-46">{{ $t('product.info2') }}</p>
      <p>{{ $t('product.detail2') }}</p>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import i18n from '../locales'

const list = [
  { title: i18n.global.t('product.title1'), content: i18n.global.t('product.content1') },
  { title: i18n.global.t('product.title2'), content: i18n.global.t('product.content2') },
  { title: i18n.global.t('product.title3'), content: i18n.global.t('product.content3') },
  { title: i18n.global.t('product.title4'), content: i18n.global.t('product.content4') },
  { title: i18n.global.t('product.title5'), content: i18n.global.t('product.content5') },
  { title: i18n.global.t('product.title6'), content: i18n.global.t('product.content6') },
  { title: i18n.global.t('product.title7'), content: i18n.global.t('product.content7') },
  { title: i18n.global.t('product.title8'), content: i18n.global.t('product.content8') },
  { title: i18n.global.t('product.title9'), content: i18n.global.t('product.content9') },
  { title: i18n.global.t('product.title10'), content: i18n.global.t('product.content10') },
]
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
  border-left: 2px solid;
}

.img-1 {
  height: 60vh;
  max-height: 500px;
  margin-left: 15px;
  background-image: url('../assets/product-1.png');
  background-position: center 70%;
  background-repeat: no-repeat;
  background-size: cover;
}

.img-2 {
  width: 500px;
  height: 580px;
  border-radius: 0 100px 0 100px;
  background-image: url('../assets/product-2.png');
  background-position: center 70%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
