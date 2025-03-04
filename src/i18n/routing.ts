import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['ptbr', 'en'],

    // Used when no locale matches
    defaultLocale: 'ptbr'
});