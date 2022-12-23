import { useConfig } from 'nextra-theme-docs';

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */

export default {
  logo: <span>AmirNFT Theme Doc</span>,
  project: {
    link: 'https://github.com/swopno1/theme-doc',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/swopno1/theme-doc/blob/main',
  editLink: {
    text: 'Edit this page on GitHub',
  },
  faviconGlyph: '✦',
  navigation: { next: true, previous: true },
  footer: {
    text: 'AmirNFT Theme Doc',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'bn', text: 'বাংলা' },
  ],
};
