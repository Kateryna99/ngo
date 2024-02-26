<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__wrapper">
        <div class="header__container">
          <div class="header__content">
            <div class="logo">
              <h3 class="logo__item">largerthan<span>i</span></h3>
            </div>
            <div class="nav nav-menu" :class="{'nav-menu--active':showMenu}">
              <ul class="nav-menu__list">
                <router-link to="/" class="nav__link">
                  <li class="nav__item">{{ $t('navMenu.home') }}</li>
                </router-link>
                <router-link to="/about" class="nav__link">
                  <li class="nav__item">{{ $t('navMenu.about') }}</li>
                </router-link>
                <router-link to="/what-we-do" class="nav__link">
                  <li class="nav__item">{{ $t('navMenu.whatWeDo') }}</li>
                </router-link>
                <router-link to="/media" class="nav__link">
                  <li class="nav__item">{{ $t('navMenu.media') }}</li>
                </router-link>
                <router-link to="/contacts" class="nav__link">
                  <li class="nav__item">{{ $t('navMenu.contact') }}</li>
                </router-link>
              </ul>
            </div>
            <div class="header__block">
              <div class="language">
                <div class="language__wrapper">
                  <div class="language__block">
                    <p class="language__subtitle section__subtitle">{{getCurrentLanguageText}}</p>
                  </div>
                  <div class="language__img" @click="changeLanguage">
                    <img :src="getCurrentLanguageFlag" alt="">
                  </div>
                </div>
              </div>
              <router-link to="/donation">
                <button class="button button--navbar">{{ $t('buttons.donate') }}</button>
              </router-link>
              <div class="burger" :class="{'burger--active':showMenu}" @click="menuAction">
                <div class="burger__wrapper">
                  <div class="burger__item"></div>
                  <div class="burger__item"></div>
                  <div class="burger__item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="page">
      <slot></slot>
    </main>
    <div class="footer footer">
      <div class="footer__wrapper">
        <div class="footer__container">
          <div class="footer__content">
            <div class="footer__block logo">
              <h3 class="logo__item logo__item--white">largerthan<span>i</span></h3>
            </div>
            <div class="nav nav-footer">
              <div class="nav-footer__wrapper">
                <ul class="nav-footer__list">
                  <li class="nav-footer__title">{{ $t('navMenu.home') }}</li>
                  <router-link to="/about" class="nav__link">
                    <li class="nav__item">{{ $t('navMenu.about') }}</li>
                  </router-link>
                  <router-link to="/" class="nav__link">
                    <li class="nav__item">{{ $t('footer.team') }}</li>
                  </router-link>
                  <router-link to="/what-we-do" class="nav__link">
                    <li class="nav__item">{{ $t('navMenu.whatWeDo') }}</li>
                  </router-link>
                  <router-link to="/contacts" class="nav__link">
                    <li class="nav__item">{{ $t('navMenu.contact') }}</li>
                  </router-link>
                </ul>
                <ul class="nav-footer__list">
                  <router-link to="/" class="nav__link">
                    <li class="nav-footer__title">{{ $t('footer.more') }}</li>
                  </router-link>
                  <router-link to="/" class="nav__link">
                    <li class="nav__item">{{ $t('footer.projects') }}</li>
                  </router-link>
                  <router-link to="/" class="nav__link">
                    <li class="nav__item">{{ $t('footer.events') }}</li>
                  </router-link>
                  <router-link to="/donation" class="nav__link">
                    <li class="nav__item">{{ $t('footer.donate') }}</li>
                  </router-link>
                  <router-link to="/media" class="nav__link">
                    <li class="nav__item">{{ $t('footer.blog') }}</li>
                  </router-link>
                </ul>
                <ul class="nav-footer__list">
                  <li class="nav-footer__title">{{ $t('footer.connect') }}</li>
                  <li class="nav__item">Facebook</li>
                  <li class="nav__item">Instagram</li>
                  <li class="nav__item">Twitter</li>
                  <li class="nav__item">Linkdin</li>
                </ul>
              </div>
            </div>
            <form class="footer__block footer-form">
              <div class="footer-form__wrapper">
                <div class="footer-form__block">
                  <h2 class="footer-form__title">{{ $t('footer.subscribeToGetLatestNews') }}</h2>
                </div>
                <div class="footer-form__block">
                  <div class="footer-form__item">
                    <input type="email" :placeholder="$t('placeholder.yourEmail')" class="footer-form__input">
                  </div>
                  <div class="footer-form__item">
                    <button class="button button--secondary">{{ $t('buttons.subscribe') }}</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    getCurrentLanguage() {
      return this.$i18n.locale
    },
    getCurrentLanguageFlag() {
      return this.getCurrentLanguage === 'en'
          ? require('@/assets/img/home/british_flag.svg.png')
          : require('@/assets/img/home/ukrainian_flag.png');
    },
    getCurrentLanguageText() {
      return this.getCurrentLanguage === 'en' ? 'EN' : 'UA';
    }
  },
  methods: {
    menuAction() {
      this.showMenu = !this.showMenu
    },
    closeMenuOnClick(event) {
      if (event.target.classList.contains('nav-menu')) {
        this.showMenu = false
      }
    },
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ua' : 'en';

      if (localStorage.getItem('currentLang') !== this.$i18n.locale) {
        localStorage.setItem('currentLang', this.$i18n.locale);
      }
    },
  },
  created() {
    document.addEventListener('click', this.closeMenuOnClick)

    if(localStorage.getItem('currentLang')){
      this.$i18n.locale = localStorage.getItem('currentLang');
    }
  }
}
</script>

<style scoped>

</style>