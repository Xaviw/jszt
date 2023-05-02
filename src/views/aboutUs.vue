<template>
  <div class="header bg-blue">
    <Header />
    <div class="circle"></div>

    <div class="text-white relative" style="margin: 80px 0 0 300px;">
      <div class="text-46">{{ $t('header.aboutUs') }}</div>
      <div style="margin-top: 20px">{{ $t('aboutUs.info') }}</div>
    </div>
  </div>

  <div class="sec1">
    <div class="flex-1 flex justify-center">
      <div class="img-1"></div>
    </div>
    <div class="flex-col justify-center" style="margin-left: 40px; line-height: 1.5">
      <p class="text-34">{{ $t('aboutUs.title1') }}</p>
      <p>{{ $t('aboutUs.content1') }}</p>
      <p class="text-34">{{ $t('aboutUs.title2') }}</p>
      <p>{{ $t('aboutUs.content2') }}</p>
    </div>
  </div>

  <div class="bg-blue flex items-center" style="padding: 70px 300px">
    <div class="flex-1 flex-col justify-center text-pink">
      <p class="text-34">{{ $t('aboutUs.title3') }}</p>
      <p>{{ $t('aboutUs.content3') }}</p>
      <p class="text-34">{{ $t('aboutUs.title4') }}</p>
      <p>{{ $t('aboutUs.content4') }}</p>
    </div>
    <div class="flex-1 flex justify-center items-center">
      <div class="relative" style="width: 500px">
        <div class="icon">
          <img src="../assets/about-2.png" />
        </div>
        <div class="icon">
          <img src="../assets/about-3.png" />
        </div>
        <div class="icon">
          <img src="../assets/about-4.png" />
        </div>
        <div class="icon">
          <img src="../assets/about-5.png" />
        </div>
        <div class="icon">
          <img src="../assets/about-6.png" />
        </div>
        <div class="icon">
          <img src="../assets/about-7.png" />
        </div>
        <div class="icon">
          <img src="../assets/about-8.png" />
          <div style="margin-top: 4px">{{ $t('common.company') }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-grey" style="padding: 128px;text-align: center;">
    <p class="text-46">{{ $t('aboutUs.title5') }}</p>
    <div class="person-list">
      <div class="person" v-for="(item, index) in personList" :key="index">
        <div :style="{ backgroundColor: item.bgColor, backgroundImage: `url(${getUrl(item.avatar)})` }"></div>
        <p class="text-24">{{ item.name }}</p>
        <span class="text-gray">{{ item.position }}</span>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import i18n from '../locales'

const personList = [
  { name: i18n.global.t('aboutUs.person1'), position: i18n.global.t('aboutUs.position1'), avatar: 'avatar-1', bgColor: '#ed8888' },
  { name: i18n.global.t('aboutUs.person2'), position: i18n.global.t('aboutUs.position2'), avatar: 'avatar-2', bgColor: '#b5e0e8' },
  { name: i18n.global.t('aboutUs.person3'), position: i18n.global.t('aboutUs.position3'), avatar: 'avatar-3', bgColor: '#ffc388' },
  { name: i18n.global.t('aboutUs.person4'), position: i18n.global.t('aboutUs.position4'), avatar: 'avatar-4', bgColor: '#eebcd7' },
]

function getUrl(name) {
  return new URL(`../assets/${name}.png`, import.meta.url).href
}
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

.sec1 {
  position: relative;
  max-width: 1800px;
  margin: -60px auto 0 auto;
  padding: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
}

.img-1 {
  width: 35vw;
  height: 35vw;
  max-width: 700px;
  max-height: 700px;
  border-radius: 50%;
  padding: 20px;
  border: 1px solid var(--gray);
  background-image: url('../assets/about-1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: content-box;
}
.icon {
  padding: 10px;
  border-radius: 20px;
  position: absolute;
  background-color: #fff;
  text-align: center;
  img {
    width: 100%;
  }
  &:nth-of-type(1) {
    width: 60px;
    height: 60px;
    top: 3%;
    left: 57%;
  }
  &:nth-of-type(2) {
    width: 60px;
    height: 60px;
    top: 23%;
    right: -1%;
  }
  &:nth-of-type(3) {
    width: 66px;
    height: 66px;
    bottom: -5%;
    right: -2%;
  }
  &:nth-of-type(4) {
    width: 80px;
    height: 80px;
    bottom: -14%;
    left: 35%;
  }
  &:nth-of-type(5) {
    width: 56px;
    height: 56px;
    bottom: 18%;
    left: 18%;
  }
  &:nth-of-type(6) {
    width: 60px;
    height: 60px;
    left: 30%;
    top: 18%;
  }
  &:nth-of-type(7) {
    width: 100px;
    height: 120px;
    bottom: 24%;
    left: 50%;
  }
}

.person-list {
  display: flex;
  align-items: center;
  justify-content: center;
  .person {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 32px;
    padding: 48px 64px;
    background-color: #fff;
    > div {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 160px;
      height: 168px;
      border-radius: 50%;
    }
  }
}
</style>
