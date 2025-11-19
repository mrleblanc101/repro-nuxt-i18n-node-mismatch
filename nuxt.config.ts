
// import ViteSvgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
    ],
    compatibilityDate: '2024-09-19',
    nitro: {
        preset: 'cloudflare_module',
        cloudflare: {
            deployConfig: true,
            nodeCompat: true,
        },
    },
    vite: {
        define: {
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
        },
    },
    i18n: {
        baseUrl: 'https://interfaceqc.com',
        strategy: 'prefix_except_default',
        defaultLocale: 'fr',
        customRoutes: 'meta',
        compilation: {
            strictMessage: false,
        },
        locales: [
            {
                code: 'fr',
                name: 'Français',
                language: 'fr-CA',
            },
            {
                code: 'en',
                name: 'English',
                language: 'en-CA',
                file: 'en.js',
            },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
        },
    },
});
