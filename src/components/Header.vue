<template>
  <div class="wrapper flex justify-between">
    <img src="../assets/logo.png" alt="logo" class="logo" @click="navToIndex" />

    <div class="flex align-center">
      <router-link to="product" class="menu">{{ $t('header.product') }}</router-link>
      <router-link to="news" class="menu">{{ $t('header.news') }}</router-link>
      <router-link to="about-us" class="menu">{{ $t('header.aboutUs') }}</router-link>
      <router-link to="contact-us" class="menu">{{ $t('header.contactUs') }}</router-link>

      <div class="language">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yy"></use>
        </svg>
        <span style="margin: 0 20px 0 6px">{{ $t('header.language') }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xjt"></use>
        </svg>
        <div class="list">
          <div v-for="(value, key) in languageList" :key="key" @click="toggleLanguage(key)">{{ value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import i18n from '../locales/index'

const languageList = {
  zh: '简体中文',
  en: 'English',
}

function toggleLanguage(key) {
  localStorage.setItem('locale', key)
  i18n.global.locale = key
}

const router = useRouter()
function navToIndex() {
  router.push('/')
}
</script>

<style scoped lang="less">
.wrapper {
  padding: 20px 50px;
  z-index: 9;
  position: relative;
}
.logo {
  width: 5vw;
  max-width: 100px;
  cursor: pointer;
}

.menu {
  margin-right: 5vw;
  color: #fff;
  text-decoration: none;
}

.language {
  margin-left: 5vw;
  padding: 10px 28px;
  border-radius: 30px;
  background-color: #313cb0;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  position: relative;
  &:hover > .list {
    display: block;
  }
  .list {
    display: none;
    position: absolute;
    left: 0;
    top: calc(100% + 2px);
    background-color: #313cb080;
    width: 100%;
    text-align: center;
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
    div {
      padding: 10px 0;
      &:first-of-type {
        border-bottom: 1px solid #fff;
      }
      &:hover {
        background-color: #313cb0;
      }
    }
  }
}
</style>
