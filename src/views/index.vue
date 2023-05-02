<template>
  <div class="page-wrapper">
    <Header />
    <div class="bg"></div>
    <div class="circle"></div>
    <div class="img-1"></div>
    <div class="title">
      <div class="text-98 text-bold">{{ $t('index.title') }}</div>
      <div class="text-34" style="margin-top: 30px">{{ $t('index.subTitle') }}</div>
    </div>
  </div>

  <div class="text-34 info text-blue">
    <div class="info-bg"></div>
    <div class="relative">{{ $t('index.info') }}</div>
  </div>

  <div class="row">
    <div class="col row1-img"></div>
    <div class="col bg-blue">
      <div class="text-34 text-pink">{{ $t('index.detailTitle1') }}</div>
      <div class="text-white" style="margin: 20px 0">{{ $t('index.detail1') }}</div>
      <div class="btn bg-yellow" @click="navToProduct">
        <span style="margin-right: 8px">{{ $t('common.more') }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ysjt"></use>
        </svg>
      </div>
    </div>
    <div class="side text-pink bg-blue" style="border-color: #fff">{{ $t('header.product') }}</div>
  </div>

  <div class="row">
    <div class="col bg-grey">
      <div class="text-34">{{ $t('index.detailTitle2') }}</div>
      <div class="text-gray" style="margin: 20px 0">{{ $t('index.detail2') }}</div>
    </div>
    <div class="col row2-img"></div>
    <div class="side text-blue">{{ $t('header.news') }}</div>
  </div>

  <div class="row">
    <div class="col row3-img"></div>
    <div class="col bg-grey">
      <div class="text-34">{{ $t('index.detailTitle3') }}</div>
      <div class="text-gray" style="margin: 20px 0">{{ $t('index.detail3') }}</div>
    </div>
    <div class="side"></div>
  </div>

  <div class="row">
    <div class="col bg-grey">
      <div class="text-34">{{ $t('index.detailTitle4') }}</div>
      <div class="text-gray" style="margin: 20px 0">{{ $t('index.detail4') }}</div>
    </div>
    <div class="col row4-img"></div>
    <div class="side"></div>
  </div>

  <div class="row">
    <div class="col row5-img"></div>
    <div class="col bg-blue">
      <div class="text-34 text-white">{{ $t('index.detailTitle5') }}</div>
      <div class="text-white" style="margin: 20px 0">{{ $t('index.detail5') }}</div>
    </div>
    <div class="side text-white bg-blue" style="border-color: #fff">{{ $t('header.aboutUs') }}</div>
  </div>

  <div class="row">
    <div class="col bg-grey">
      <div class="text-34 text-pink">{{ $t('index.detailTitle6') }}</div>
      <div class="text-blue" style="margin: 20px 0">{{ $t('index.detail6') }}</div>
    </div>
    <div class="col row6-img"></div>
    <div class="side text-blue">{{ $t('index.expectation') }}</div>
  </div>

  <div class="partner-wrapper">
    <div class="text-46 text-pink">{{ $t('index.partner') }}</div>
    <div class="text-20 text-blue" style="margin: 30px 0 100px 0">{{ $t('index.cooperation') }}</div>
    <div class="grid">
      <div v-for="item of partnerList" :key="item.img">
        <img :src="getUrl(item.img)" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import i18n from '../locales'
import { useRouter } from 'vue-router';

const partnerList = [
  { img: 'partner-1', name: i18n.global.t('index.partner1') },
  { img: 'partner-2', name: i18n.global.t('index.partner2') },
  { img: 'partner-3', name: i18n.global.t('index.partner3') },
  { img: 'partner-4', name: i18n.global.t('index.partner4') },
  { img: 'partner-5', name: i18n.global.t('index.partner5') },
  { img: 'partner-6', name: i18n.global.t('index.partner6') },
  { img: 'partner-7', name: i18n.global.t('index.partner7') },
  { img: 'partner-8', name: i18n.global.t('index.partner8') },
  { img: 'partner-9', name: i18n.global.t('index.partner9') },
  { img: 'partner-10', name: i18n.global.t('index.partner10') },
  { img: 'partner-11', name: i18n.global.t('index.partner11') },
  { img: 'partner-12', name: i18n.global.t('index.partner12') },
]

function getUrl(name) {
  return new URL(`../assets/${name}.png`, import.meta.url).href
}

const router = useRouter()

function navToProduct() {
  router.push('/product')
}
</script>

<style scoped lang="less">
.bg {
  position: absolute;
  top: 0;
  right: calc(5vw + 50px + 178px);
  bottom: 0;
  left: 0;
  border-radius: 0px 0px 40vh 0px;
  background: #313cb0;
}

.circle {
  position: absolute;
  left: -23%;
  bottom: -28%;
  width: 45vw;
  max-width: 100vh;
  height: 45vw;
  max-height: 100vh;
  border-radius: 50%;
  background: #2a35a7;
}

.img-1 {
  width: 43vw;
  max-width: 70vh;
  height: 43vw;
  max-height: 70vh;
  position: absolute;
  right: 64px;
  bottom: 10vh;
  border-radius: 100%;
  background-image: url('../assets/index-1.png');
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-clip: content-box;
  padding: 12px;
  border: 1px solid #4f5bdb;
}

.img-1::before {
  content: '';
  width: 6vw;
  height: 6vw;
  max-width: 128px;
  max-height: 128px;
  border-radius: 100%;
  background-color: #ff94f7;
  position: absolute;
  left: 8%;
  top: 8%;
}

.title {
  position: absolute;
  top: calc(50% - 120px);
  right: calc(50vw + 64px);
  color: var(--yellow);
  text-align: right;
  // letter-spacing: 10px;
}

.info {
  position: relative;
  padding-right: 12vw;
  z-index: 9;
  height: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  line-height: 1.5;
}

.info-bg {
  position: absolute;
  left: 510px;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #f5f6fc;
  &::before {
    content: '';
    width: 800px;
    height: 800px;
    background-color: #f5f6fc;
    border-radius: 50%;
    position: absolute;
    left: -400px;
    bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 60%;
    left: -325px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #737dff;
  }
}

.row {
  display: flex;
  line-height: 1.3;
  .col {
    flex: 1;
    padding: 160px 130px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .side {
    width: 120px;
    border-left: 2px solid;
    writing-mode: vertical-lr;
    padding: 60px 0 0 20px;
  }
}

.row1-img {
  background-image: url('../assets/index-2.png');
}
.row2-img {
  background-image: url('../assets/index-3.png');
}
.row3-img {
  background-image: url('../assets/index-4.png');
}
.row4-img {
  background-image: url('../assets/index-5.png');
}
.row5-img {
  background-image: url('../assets/index-6.png');
}
.row6-img {
  background-image: url('../assets/index-7.png');
}

.partner-wrapper {
  padding: 50px 40px;
  text-align: center;
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: baseline;
    justify-items: center;
    div {
      max-width: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
