import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

export default createI18n({
  locale: localStorage.getItem('locale') || navigator.language.slice(0, 2),
  messages: {
    zh,
    en,
  },
})
