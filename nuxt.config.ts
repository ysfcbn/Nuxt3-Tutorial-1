// https://nuxt.com/docs/api/configuration/nuxt-config

import { NuxtConfig } from 'nuxt/schema';
import { env } from 'process';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [{ name: 'description', content: 'Everything about Nuxt 3' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
} as NuxtConfig);
