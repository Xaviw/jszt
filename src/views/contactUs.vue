<template>
  <div class="header bg-blue">
    <Header />
    <div class="circle"></div>

    <div class="text-white relative" style="margin: 80px 0 0 300px">
      <div class="text-46">{{ $t('header.contactUs') }}</div>
      <div style="margin-top: 20px">{{ $t('contactUs.info') }}</div>
    </div>
  </div>

  <div class="content">
    <div></div>
    <div class="card">
      <p class="text-34" style="text-align: center;">{{ $t('common.company') }}</p>
      <div class="row">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wz"></use>
        </svg>
        <div>{{ $t('contactUs.location') }}</div>
      </div>
      <div class="row">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sj"></use>
        </svg>
        <div>
          <div style="margin-bottom: 16px;">{{ $t('contactUs.mobilePhone') }}</div>
          <div>{{ $t('contactUs.phone') }}</div>
        </div>
      </div>
      <div class="row">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yx"></use>
        </svg>
        <div>
          <div>{{ $t('contactUs.email') }}</div>
        </div>
      </div>
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

.content {
  padding: 40px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  max-width: 1600px;
  margin: 0 auto;
  > div:first-of-type {
    background-image: url('../assets/contact-1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.card {
  padding: 20px 60px;
  border: 1px solid #D4D5DF;
  border-radius: 30px;
  background: #FFFFFF;
}

.row {
  padding: 25px 0;
  border-bottom: 1px solid var(--grey);
  display: flex;
  font-size: 18px;
  svg {
    color: #EDFA5C;
    margin-right: 15px;
  }
}
</style>
