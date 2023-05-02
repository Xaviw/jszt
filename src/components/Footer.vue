<template>
  <div class="bg-blue">
    <div class="footer-wrapper">
      <div class="flex-col">
        <img src="../assets/logo.png" style="width: 90px" />
        <div style="margin-top: 30px">{{ $t('footer.info') }}</div>
      </div>
      <div class="flex">
        <router-link to="product" class="menu">{{ $t('header.product') }}</router-link>
        <router-link to="news" class="menu">{{ $t('header.news') }}</router-link>
        <router-link to="about-us" class="menu">{{ $t('header.aboutUs') }}</router-link>
        <router-link to="contact-us" class="menu">{{ $t('header.contactUs') }}</router-link>
      </div>
    </div>
  </div>

  <div style="text-align: center; padding: 30px">{{ $t('footer.copyright') }}</div>
</template>

<style scoped lang="less">
.footer-wrapper {
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.menu {
  margin: 0 50px;
  text-decoration: none;
  color: #fff;
  white-space: nowrap;
}
</style>
